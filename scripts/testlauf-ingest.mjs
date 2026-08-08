// Aggregate a Playwright JSON report into prototype/daten/testlauf.json.
// Usage: node scripts/testlauf-ingest.mjs [path/to/report.json]
// Default report path is the sibling repo's suite output.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPORT = resolve(
  process.argv[2] ??
  resolve(HERE, '../../mhdbdb-tei-only/testing/test-results/report.json')
);
const ZIEL = resolve(HERE, '../prototype/daten/testlauf.json');

const report = JSON.parse(readFileSync(REPORT, 'utf8'));

// Per spec-file basename (without .spec.js): counts by Playwright outcome.
// "expected" = passed, "unexpected" = failed, "flaky" = passed only on retry.
const specs = {};
function zaehlen(suite, datei) {
  const file = suite.file ?? datei;
  for (const spec of suite.specs ?? []) {
    const key = basename(file).replace(/\.spec\.js$/, '');
    const s = (specs[key] ??= { gesamt: 0, bestanden: 0, gefallen: 0, flaky: 0, uebersprungen: 0 });
    for (const test of spec.tests ?? []) {
      s.gesamt++;
      if (test.status === 'expected') s.bestanden++;
      else if (test.status === 'unexpected') s.gefallen++;
      else if (test.status === 'flaky') s.flaky++;
      else s.uebersprungen++;
    }
  }
  for (const sub of suite.suites ?? []) zaehlen(sub, file);
}
for (const suite of report.suites ?? []) zaehlen(suite);

const st = report.stats ?? {};
const daten = {
  lauf: {
    start: st.startTime ?? null,
    dauerSek: st.duration ? Math.round(st.duration / 1000) : null,
    gesamt: (st.expected ?? 0) + (st.unexpected ?? 0) + (st.flaky ?? 0) + (st.skipped ?? 0),
    bestanden: st.expected ?? 0,
    gefallen: st.unexpected ?? 0,
    flaky: st.flaky ?? 0,
    uebersprungen: st.skipped ?? 0,
  },
  specs,
};

mkdirSync(dirname(ZIEL), { recursive: true });
writeFileSync(ZIEL, JSON.stringify(daten, null, 2) + '\n', 'utf8');
console.log(`geschrieben: ${ZIEL}`);
console.log(`Specs: ${Object.keys(specs).length}, Tests: ${daten.lauf.gesamt}, gefallen: ${daten.lauf.gefallen}, flaky: ${daten.lauf.flaky}`);
