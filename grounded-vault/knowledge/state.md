---
title: State
project:
  name: "most"
  repository: "Documents/GitHub/most, local, no remote yet"
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: draft
language: en
created: "2026-08-08"
updated: "2026-08-08"
related: [operations, journal]
---

# State

Everything volatile in one place, so the rule documents stay stable. Update rows here as work proceeds; never record processing state anywhere else. This document is also the inventory register the validator checks against.

## Source inventory

One row per source. Processing status: `new` → `ingested` → `distilled`.

| Source | Type | Channel | Representation | Distillate | Status |
|---|---|---|---|---|---|
| Projektcharta most | document | handover | [[00_representation/documents/most-projekt]] | [[10_distillates/documents/most-projekt]] | distilled |
| Spezifikation des generalisierten UI | document | handover | [[00_representation/documents/most-specification]] | [[10_distillates/documents/most-specification]] | distilled |
| Architektur der Prototypen | document | handover | [[00_representation/documents/most-architecture]] | [[10_distillates/documents/most-architecture]] | distilled |
| Design, Ästhetik Helio | document | handover | [[00_representation/documents/most-design]] | [[10_distillates/documents/most-design]] | distilled |
| Planet, Schichtenmodell | document | handover | [[00_representation/documents/most-planet]] | [[10_distillates/documents/most-planet]] | distilled |
| Grounding der Persona-Simulation | document | handover | [[00_representation/documents/most-grounding-kommunikation]] | [[10_distillates/documents/most-grounding-kommunikation]] | distilled |
| Projektgedächtnis most | document | handover | [[00_representation/documents/most-journal]] | [[10_distillates/documents/most-journal]] | distilled |
| Vorwärtsrichtung most | document | handover | [[00_representation/documents/most-plan]] | [[10_distillates/documents/most-plan]] | distilled |
| Cannabis and Cognitive Functioning (2021) | publication | import | CSL `bourque2021cannabis` in `references/` | [[10_distillates/publications/bourque-2021-cognition]] | distilled |
| Acute and Long-Term Effects on Executive Cognitive Functions (2011) | publication | import | CSL `crean2011executive` in `references/` | [[10_distillates/publications/crean-2011-executive]] | distilled |
| Tangential speech (encyclopedia entry) | publication | import | CSL `wikipedia-tangential-speech` in `references/` | [[10_distillates/publications/wikipedia-tangential-speech]] | distilled |
| Does Cannabis Affect Speech? (blog) | publication | import | CSL `veriheal2026speech` in `references/` | [[10_distillates/publications/veriheal-2026-speech]] | distilled |
| The Phenomenon of "Stoned Speech" (essay) | publication | import | CSL `medium2021stonedspeech` in `references/` | [[10_distillates/publications/medium-2021-stoned-speech]] | distilled |

The `_sources/` folder holds no originals. Every document source is a Markdown file of the most repository, copied verbatim into its representation; the publication sources are web-accessible and archived only as bibliographic records.

## Chapter register

One row per chapter of the deliverable. Writing status mirrors the chapter's frontmatter.

| Chapter | File | Status | Notes |
|---|---|---|---|
| Der kognitive Boden | [[30_deliverable/01-kognition]] | grounded | Topic Kognition; two posits on effect duration and on the graded evidence level |
| Das generalisierte Modell und die Helio-Ästhetik | [[30_deliverable/02-gestaltung]] | grounded | Topic Gestaltung; two posits on the status of the overload finding and on the honesty rule |
| Verfahren, Linsen und Persona-Simulation | [[30_deliverable/03-methode]] | grounded | Topic Methode; two posits on the justification standard and on the missing session documents |

## Claim register

Sixteen claims across the three topic maps, all at `grounded`. Machine review has not run, so none of them can rise to `validated`.

## Open work

- Run the machine review against a reviewer model from a different family, pair by pair, and record the verdicts.
- Add the first persona session document as a source once it exists; the method calls for one per session and none has been written.
- Activate the source type `data` when the shared JSON dataset planned by the project exists, and lift the prototype datasets into it.
- Re-run `tools/quote-check.py` before any claim resting on a publication is put up for verification; two of the five cited pages are volatile web publications.
