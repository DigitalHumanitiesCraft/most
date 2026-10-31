// Read a project's knowledge folder into a JSON file under prototype/daten/.
// Usage: node scripts/promptotyping-ingest.mjs [projektordner] [zieldatei] [rollendatei]
// Defaults keep the original call working:
//   node scripts/promptotyping-ingest.mjs            -> ../Promptotyping -> daten/promptotyping.json
//   node scripts/promptotyping-ingest.mjs . prototype/daten/most.json
// Per document: file name, line count, title, status and a first-paragraph excerpt.
// Nothing is invented here; a field the source does not carry stays null.
//
// A role file (scripts/rollen/<ziel>.json) may add the editorial layer the night
// views draw with: which role a document plays, its question, its position in a
// given view. Facts stay on the side of the folder: line counts and status are
// read fresh, and a role whose file does not exist becomes a ghost.
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(process.argv[2] ?? resolve(HERE, '../../Promptotyping'));
const WISSEN = join(REPO, 'knowledge');
const REGELN = join(REPO, 'CLAUDE.md');
const ZIEL = resolve(process.argv[3] ?? resolve(HERE, '../prototype/daten/promptotyping.json'));
const ROLLEN = resolve(process.argv[4] ?? join(HERE, 'rollen', basename(ZIEL)));

// Flat top-level keys of a leading YAML front matter block. Nested keys are
// skipped: only title and status are read, and both are scalars.
function frontmatter(zeilen) {
  if (zeilen[0] !== '---') return { fm: {}, ab: 0 };
  const ende = zeilen.indexOf('---', 1);
  if (ende < 0) return { fm: {}, ab: 0 };
  const fm = {};
  for (const z of zeilen.slice(1, ende)) {
    const m = /^([A-Za-z][\w-]*):\s*(.*)$/.exec(z);
    if (m && m[2] !== '') fm[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }
  return { fm, ab: ende + 1 };
}

function ersteUeberschrift(zeilen, ab) {
  for (let i = ab; i < zeilen.length; i++) {
    const m = /^#\s+(.+)$/.exec(zeilen[i]);
    if (m) return m[1].trim();
  }
  return null;
}

// First prose line after the front matter, stripped of inline markup and cut
// at a sentence boundary so the focus view gets a readable sentence.
function auszug(zeilen, ab) {
  let code = false;
  for (let i = ab; i < zeilen.length; i++) {
    const z = zeilen[i].trim();
    if (z.startsWith('```')) { code = !code; continue; }
    if (code || !z) continue;
    if (/^[#>|\-*+]|^\d+\./.test(z)) continue;
    const rein = z
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\[\[([^\]|]+)(\|[^\]]+)?\]\]/g, '$1')
      .replace(/`([^`]*)`/g, '$1')
      .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
      .replace(/\[\^[^\]]*\]/g, '')
      .trim();
    if (rein.length < 30) continue;
    const punkt = rein.indexOf('. ');
    return punkt > 40 ? rein.slice(0, punkt + 1) : rein.slice(0, 240).trim();
  }
  return null;
}

function lesen(pfad, datei, art) {
  const text = readFileSync(pfad, 'utf8');
  const zeilen = text.split(/\r?\n/);
  if (zeilen.at(-1) === '') zeilen.pop(); // trailing newline is not a line
  const { fm, ab } = frontmatter(zeilen);
  return {
    datei,
    stamm: datei.replace(/\.md$/, ''),
    titel: fm.title ?? ersteUeberschrift(zeilen, ab) ?? datei,
    zeilen: zeilen.length,
    status: fm.status ?? null,
    auszug: auszug(zeilen, ab),
    art,
  };
}

const dokumente = readdirSync(WISSEN)
  .filter(n => n.endsWith('.md'))
  .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase(), 'en'))
  .map(n => lesen(join(WISSEN, n), n, 'wissen'));

// The rule document lives in the repo root and governs everything built from
// the knowledge base; in the drawing it is the cut through all bands.
if (existsSync(REGELN)) dokumente.push(lesen(REGELN, 'CLAUDE.md', 'regel'));

const nachDatei = new Map(dokumente.map(d => [d.datei, d]));

// A role bundles one or more documents under one word. Present files carry the
// numbers, a role without any present file is a ghost: the view may show that a
// document is missing, never that it exists.
function rolleFuellen(r) {
  const gewuenscht = r.dateien ?? [r.datei];
  const da = gewuenscht.map(n => nachDatei.get(n)).filter(Boolean);
  const geist = da.length === 0;
  const zeilen = geist ? null : da.reduce((s, d) => s + d.zeilen, 0);
  const anzeige = geist
    ? gewuenscht[0] + ' fehlt'
    : da[0].datei + (da.length > 1 ? ' +' + (da.length - 1) : '');
  return {
    ...r,
    dateien: gewuenscht,
    datei: anzeige,
    stamm: (geist ? gewuenscht[0] : da[0].datei).replace(/\.md$/, ''),
    zeilen,
    status: geist ? 'geist' : da[0].status,
    titel: geist ? null : da[0].titel,
    geist,
    teile: da.length,
  };
}

const daten = { quelle: basename(REPO) + '/knowledge', dokumente };

if (existsSync(ROLLEN)) {
  const seite = JSON.parse(readFileSync(ROLLEN, 'utf8'));
  daten.projekt = seite.projekt ?? basename(REPO);
  daten.rollen = (seite.rollen ?? []).map(rolleFuellen);
  if (seite.stationen) daten.stationen = seite.stationen;
}

mkdirSync(dirname(ZIEL), { recursive: true });
writeFileSync(ZIEL, JSON.stringify(daten, null, 2) + '\n', 'utf8');
console.log(`geschrieben: ${ZIEL}`);
console.log(`Dokumente: ${dokumente.length}, Zeilen gesamt: ${dokumente.reduce((s, d) => s + d.zeilen, 0)}`);
if (daten.rollen) {
  const geister = daten.rollen.filter(r => r.geist).map(r => r.datei);
  console.log(`Rollen: ${daten.rollen.length}${geister.length ? ', Geister: ' + geister.join(', ') : ', keine Geister'}`);
  const ungenutzt = dokumente
    .filter(d => !daten.rollen.some(r => r.dateien.includes(d.datei)))
    .map(d => d.datei);
  if (ungenutzt.length) console.log(`von keiner Rolle abgedeckt: ${ungenutzt.join(', ')}`);
}
const ohneStatus = dokumente.filter(d => !d.status).map(d => d.datei);
if (ohneStatus.length) console.log(`ohne status im Frontmatter: ${ohneStatus.join(', ')}`);
