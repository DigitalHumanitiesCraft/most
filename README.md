# most

The standalone experiment was closed on 15 October 2026. Its limited design findings were integrated into Second Brain. This repository retains the original prototypes and inquiry, including existing local uncommitted work. The earlier backlog creates no ongoing assignment; see [knowledge/plan.md](knowledge/plan.md). No general usability benefit has been demonstrated.

A Promptotyping experiment. `most` builds a knowledge interface that stays usable under heavy cognitive load, on the working hypothesis that an interface which holds up in that state holds up for everyone, because the state exaggerates the ordinary conditions of tiredness, distraction and stress.

The same generalized model drives every view. Each one shows four invariants, the knowledge units, the flow through them, the rules that govern them, and the gaps where something is missing. On top of that model sits an exchangeable metaphor, the lens. Three projects are rendered through it, the Middle High German Dictionary Database (MHDBDB), the Promptotyping knowledge base, and most itself.

## Two visual worlds

**Helio** is the leading aesthetic. Two inks only, a saturated red ground and a warm off-white, everything drawn as horizontal bands whose disturbances carry the data, the whole surface covered in coarse grain. `prototype/helio-mhdbdb.html` is the reference shape.

**Night** is the alternative skin, a dark garden and organism world kept reachable behind each project on the overview page.

## Running it

Static files, no build step, no framework, no external resources. A local web server is required because the pages are ES modules and fetch their data at runtime.

```
cd prototype
python -m http.server 8642
```

Then open `http://localhost:8642/`. The overview page offers one default path per project, with the alternative shapes folded in behind it.

## Data

No view claims a state it has no source for. All data lives in `prototype/daten/` as JSON and is generated from real sources by the scripts in `scripts/`.

* `testlauf-ingest.mjs` aggregates a Playwright JSON report from the MHDBDB test suite per spec file. The Helio and night shapes of MHDBDB read it and show which checks failed.
* `promptotyping-ingest.mjs` reads a Promptotyping knowledge folder and records file, title, size, status and an excerpt per document, plus the repository's rule document. It invents nothing; a field the source does not carry stays empty.

Both scripts take the source path as an argument. If a data file is absent, the pages degrade silently and assert nothing.

## Knowledge base

`knowledge/` is the project's Promptotyping vault and the place to start before changing anything. `knowledge/INDEX.md` is the map, `knowledge/projekt.md` states the goal and the personas, `knowledge/architecture.md` describes how the prototypes are built, `knowledge/design.md` holds the Helio design system, and `knowledge/journal.md` records how the project got here. The vault is written in German. Agent rules for this repository are in `CLAUDE.md`.
