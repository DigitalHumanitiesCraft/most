/* Helio, shared drawing and data layer of the day pages.
   Two inks only: red ground, warm off-white. The engine draws nothing but
   horizontal bands; meaning sits in how a band is disturbed or broken. */

export const TINTE = '239,234,226';
const GRUND_OBEN = '#d81e12';
const GRUND_UNTEN = '#e8402a';

/* frozen frame for reduced motion, a fully valid still */
export const ZEIT_FEST = 41000;
export const stillGestellt = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- randomness ---------- */
/* Seeded LCG, no Math.random anywhere: the print stays identical on every load. */
let saat = 20260808;
export function saatSetzen(s) { saat = s; }
export function rnd() { saat = (saat * 16807) % 2147483647; return saat / 2147483647; }

/* Stable per-key signature: position, amplitude and frequency of a disturbance
   come from a string key, so an item always sits in the same place in its band. */
export function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  return h;
}
export function sig(f) {
  const h = hash(f);
  return {
    pos: .22 + ((h & 255) / 255) * .62,
    amp: .45 + (((h >> 8) & 255) / 255) * .55,
    br: .045 + (((h >> 16) & 255) / 255) * .06,
    ph: ((h >> 24) & 255) / 255 * 6.283,
  };
}

/* ---------- canvas plumbing ---------- */
/* paare: [[canvas, context], ...] sized to the viewport at capped DPR. */
export function messen(paare) {
  const DPR = Math.min(devicePixelRatio || 1, 2);
  const W = innerWidth, H = innerHeight;
  for (const [c, g] of paare) {
    c.width = Math.round(W * DPR); c.height = Math.round(H * DPR);
    g.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  return { W, H, DPR };
}

/* Grain tiles: monochrome speckle of the off-white, pre-rendered once and
   cycled at a low rate so the surface lives without anything moving. */
const KACHELN = [];
let kornIdx = 0;
export function kornBauen() {
  KACHELN.length = 0;
  for (let k = 0; k < 4; k++) {
    const t = document.createElement('canvas');
    t.width = t.height = 168;
    const g = t.getContext('2d');
    const img = g.createImageData(168, 168);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const v = rnd();
      d[i] = 239; d[i + 1] = 234; d[i + 2] = 226;
      d[i + 3] = v > .52 ? Math.round(Math.pow((v - .52) / .48, 1.6) * 128) : 0;
    }
    g.putImageData(img, 0, 0);
    KACHELN.push(g.createPattern(t, 'repeat'));
  }
}
export function kornWeiter() { kornIdx = (kornIdx + 1) % KACHELN.length; }
export function kornFuellen(kg, W, H) {
  kg.clearRect(0, 0, W, H);
  kg.fillStyle = KACHELN[kornIdx];
  kg.fillRect(0, 0, W, H);
}

/* ---------- band drawing ---------- */
/* One band, sampled across x. Where the disturbance pinches the band shut,
   the run breaks: the interruption is the carrier of meaning, not decoration. */
export function band(g, y, dicke, cfg) {
  const [x0, x1] = cfg.spanne(y);
  if (x1 - x0 < 3) return;
  const schritt = 5;
  let ot = [], ob = [];
  const fertig = () => {
    if (ot.length > 1) {
      g.beginPath();
      g.moveTo(ot[0][0], ot[0][1]);
      for (let i = 1; i < ot.length; i++) g.lineTo(ot[i][0], ot[i][1]);
      for (let i = ob.length - 1; i >= 0; i--) g.lineTo(ob[i][0], ob[i][1]);
      g.closePath();
      g.fill();
    }
    ot = []; ob = [];
  };
  g.fillStyle = 'rgba(' + TINTE + ',' + cfg.alpha + ')';
  for (let x = x0; x <= x1 + schritt; x += schritt) {
    const xx = Math.min(x, x1);
    const o = cfg.welle(xx, y);
    const s = cfg.stoer(xx, y);
    const t = y - dicke / 2 + o - s, b = y + dicke / 2 + o + s;
    if (b - t > 1.4) { ot.push([xx, t]); ob.push([xx, b]); } else fertig();
  }
  fertig();
}

/* two superimposed sines: the slow travel of the bands */
export function wellen(t, k, amp, sp) {
  return (x, y) => amp * Math.sin(x * k + t * sp + y * .006)
                 + amp * .42 * Math.sin(x * k * 2.6 - t * sp * .7 + y * .011);
}

export function grund(g, W, H) {
  const lg = g.createLinearGradient(0, 0, 0, H);
  lg.addColorStop(0, GRUND_OBEN);
  lg.addColorStop(1, GRUND_UNTEN);
  g.fillStyle = lg;
  g.fillRect(0, 0, W, H);
}

/* ---------- data ---------- */
/* Silent fallback: without a file no view claims any state. */
export async function datenLaden(pfad) {
  try {
    const r = await fetch(pfad);
    return r.ok ? await r.json() : null;
  } catch {
    return null;
  }
}

/* daten/testlauf.json is written by scripts/testlauf-ingest.mjs from the
   Playwright JSON report. With it, a failed spec tears its band at the very
   spot of its swell, a flaky one gets a notch. Two inks stay two inks: the
   break carries the meaning. */
let LAUF = null;
export async function laufLaden(pfad = 'daten/testlauf.json') {
  LAUF = await datenLaden(pfad);
  return LAUF;
}
export function lauf() { return LAUF ? LAUF.lauf : null; }
export function stand(f) { return LAUF ? (LAUF.specs[f] || null) : null; }

/* cut depth in band thicknesses: > .5 severs (failed), .35 leaves a thin
   sharp-edged sliver (flaky), 0 keeps the band whole */
export function riss(st) { return st ? (st.gefallen ? 2.6 : st.flaky ? .35 : 0) : 0; }

export function standWort(st) {
  if (!st) return '';
  if (st.gefallen) return st.gefallen + ' von ' + st.gesamt + ' gefallen';
  if (st.flaky) return 'bestanden, ' + st.flaky + ' erst im zweiten Versuch';
  if (st.uebersprungen === st.gesamt) return 'übersprungen';
  return st.gesamt === 1 ? 'bestanden' : 'alle ' + st.gesamt + ' bestanden';
}

export function laufDatum() {
  return LAUF && LAUF.lauf.start
    ? new Date(LAUF.lauf.start).toLocaleDateString('de-AT', { day: 'numeric', month: 'long' })
    : '';
}
