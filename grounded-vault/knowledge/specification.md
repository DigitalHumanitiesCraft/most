---
title: Specification
project:
  name: "most"
  repository: "Documents/GitHub/most, local, no remote yet"
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
profile:
  name: Grounded Vault
  url: https://github.com/DigitalHumanitiesCraft/grounded-vault
status: draft
language: en
created: "2026-08-08"
updated: "2026-08-08"
expected-warnings: []
related: [index, schema, operations]
---

# Specification

Purpose, parameters and settled decisions of this vault instance. The invariant architecture (layer model, anchor mechanics, check contracts, status progression) lives in [[knowledge/schema]] and [[knowledge/operations]]; this document holds what this project decided.

## Purpose

This vault holds the knowledge state of the project *most*, a research project on a knowledge-transfer user interface that stays usable under strong cannabis impairment, on the working hypothesis that an interface holding that state holds the ordinary states of tiredness, distraction and stress as well. It produces a report titled *Stand des Projekts most* for the project team and for readers who have to judge what the project actually knows. The evidence obligation is asymmetric by design: the cognitive findings the project rests on come from published literature and must be quotable, while the design and method rules are project decisions whose grounding is the project's own documentation, not external evidence. The vault makes that difference readable at every single statement.

## Parameters

| Parameter | Value |
|---|---|
| Topic | A knowledge-transfer UI that works under strong cannabis impairment, and the generalized UI model derived from it |
| Topic backbone | Kognition, Gestaltung, Methode |
| Active source types | document, publication |
| Deliverable genre | report, *Stand des Projekts most* |
| Chapter register | see [[knowledge/state]] |
| Working language of content | German for deliverable, claims, distillates and glossary; `knowledge/` and `CLAUDE.md` stay English |
| Verification role | Projektteam most (project team, Digital Humanities Craft) |
| Validation mechanism | `tools/validate.py` |
| Machine review mechanism | reviewer model from a different family than the producing agent; not yet run |
| Quotation check mechanism | `tools/quote-check.py`, run at intake and recorded as `checked.quote` |

The source type `data` is inactive. The project's prototypes embed their datasets in the HTML pages themselves, and no dataset has yet been lifted into a citable file; when the shared JSON source planned in the project's own plan exists, `data` becomes active and the type needs no schema change.

## Style sheet

The deliverable is German prose with English technical terms. No dash or colon as a connector, for emphasis, or before a summary; a colon only before a quotation, a code block, or a list set on its own lines. No sharpening by appended negation in the pattern "X, not Y". No triadic figures as a stylistic device, no closing aphorism, no balanced both-sides closer. Claims and distillates use the same register in condensed form.

Every load-bearing sentence carries a footnote. A footnote is either `Grounded in [[claim]]` or `Posit: <rationale>. Offene Belegfrage: <question>`; a single footnote never mixes the two, because the validator counts by the leading keyword. Personal names of third parties do not appear in produced prose; roles and institutions take their place. Bibliographic author fields in `references/` are the one exception, and only for peer-reviewed publications, where omitting authorship would break the citation; the reasoning is in [[knowledge/journal]].

Tertiary sources may define a term and never carry an empirical claim on their own.

## Settled decisions

- 2026-08-08: Vault instantiated from the Grounded Vault template.
- 2026-08-08: Topic backbone set to Kognition, Gestaltung, Methode, mirroring the three chapters of the report.
- 2026-08-08: Source types `document` and `publication` activated, `data` deferred until a citable dataset exists.
- 2026-08-08: The eight knowledge documents of the most repository enter as document representations; the five empirical sources they cite enter as publication references without archived full text.
- 2026-08-08: Machine review will use a reviewer model from a different family than the producing agent. It has not been run, so no document in this vault stands above `grounded`.
- 2026-08-08: The intake quotation check is mechanized as `tools/quote-check.py` and re-runnable, because publication full texts are not in the vault.
- 2026-08-08: Two of the five publication sources are not peer reviewed and one is tertiary. They stay in the vault because the project document cites them, and no claim rests on them alone.
