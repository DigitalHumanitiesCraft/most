---
title: Journal
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
related: [specification, state]
---

# Journal

Chronological decision history of the vault, append-only, newest entry last. Content documents carry only current state; the reasoning that led there lives here. An entry records a decision, a rejected alternative with the reason, or a calibration result of a check mechanism.

## Entry format

```markdown
## <date> — <one-line subject>

<What was decided or found, why, and what it replaces. Link the affected
documents. Two to ten sentences.>
```

## 2026-08-08 — Vault instantiated

Instantiated from the Grounded Vault template (https://github.com/DigitalHumanitiesCraft/grounded-vault) as a subfolder of the most repository, with the template's own git history removed so the vault versions with its project. Parameters recorded in [[knowledge/specification]]. The topic backbone Kognition, Gestaltung, Methode was chosen to be identical with the chapter register, because the project's knowledge divides along exactly those three lines and a fourth axis would have produced topic maps with one claim each.

## 2026-08-08 — Source types document and publication, data deferred

The project's own datasets (test inventories, document metrics) live embedded inside the prototype HTML pages and are duplicated across them, which the project itself records as technical debt. A representation of the `data` type needs a citable file, and lifting the embedded objects into one would change the project rather than describe it. `data` therefore stays inactive until the shared JSON source the project has planned exists. Rejected alternative: extracting the data ourselves, which would have made the vault the author of a source instead of its recorder.

## 2026-08-08 — Publications enter without archived full text

The five empirical sources cited by the project's grounding document are web publications. Following the schema, a publication has no representation and the CSL JSON record in `references/` is its root, so no full text was archived. The consequence is that validation cannot check quotations, which is exactly why the schema records the intake-time check as `checked.quote`.

## 2026-08-08 — The quotation check was mechanized rather than asserted

Recording `checked.quote` without a check that actually ran would have been the first dishonest field in the vault. `tools/quote-check.py` fetches each cited page and asserts that every quotation used in `10_distillates/publications/` occurs in it verbatim, after tag stripping and whitespace and quote-glyph normalization. The first run failed on three of thirteen quotations, in each case because the quoted sentence was cut differently from the source: an inline citation marker inside the sentence, a link splitting a clause, a trailing period belonging to the citation rather than the sentence. The quotations were shortened to the verified span and the run passed with thirteen of thirteen found. This is also a calibration result: a quotation delivered by a summarizing fetch is not reliable at character level, and only the deterministic re-check makes it so.

## 2026-08-08 — Bibliographic authorship of peer-reviewed sources kept

The project rule is to keep third-party personal names out of produced documents and to name roles and institutions instead. A CSL record without an author field is not a citation, and the provenance chain would end in an unidentifiable source, so author fields were kept for the two peer-reviewed journal articles. For the encyclopedia entry a corporate author was used, and for the two non-scholarly web texts the byline was dropped in favour of the publishing outlet, which costs nothing bibliographically. No personal name appears in any prose document of this vault. The operator can overrule this in either direction; the affected file is `references/most-grounding.csl.json`.

## 2026-08-08 — Evidence levels kept separate rather than merged

The project's grounding document lists five sources of very unequal weight in one flat list. In the vault the two peer-reviewed reviews carry the memory and duration claims, the encyclopedia entry carries only a terminological definition, and the two non-scholarly texts appear solely as corroborating anchors alongside a stronger source. No claim rests on a non-peer-reviewed source alone. Where the deliverable states this graded evidence level, it does so as a posit, because it is this vault's assessment rather than a statement of the sources.

## 2026-08-08 — No document stands above grounded

Validation ran clean and is recorded per document as `checked.validation`. Machine review has not been run, and the status discipline requires both before `validated`, so every distillate, claim and chapter stays at `grounded`. Nothing in this vault is `verified`; that status is the verification role's alone.
