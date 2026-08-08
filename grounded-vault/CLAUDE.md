# most — Agent Action Layer

This vault is a Grounded Vault instance. Every substantive statement you produce here must carry a grounding anchor; the rules live in `knowledge/`, and this file only routes you there. Do not duplicate rules here.

## Session start

Read in this order: `knowledge/index.md` (terminology), `knowledge/state.md` (where work stands), then the document your task routes to below.

## Task routing

| Task | Read first | Chain |
|---|---|---|
| Add a source | `knowledge/operations.md` § Acquire, Ingest | acquire → ingest |
| Distill a source | `knowledge/schema.md` § Distillate, `operations.md` § Distill | three-stage chain |
| Build or revise claims | `schema.md` § Claim, `operations.md` § Build claims | claims |
| Write a chapter | `schema.md` § Chapter, `operations.md` § Write chapters | chapters |
| Answer a question | `operations.md` § Query | query |
| Check the vault | `operations.md` § Check | validate → review |

## Hard rules

- Anchors are minted only at their own layer; never invent a block or statement ID that does not exist.
- A status is set only after its check ran; record the date in `checked`. Never set `verified`; that is the human verification role's alone.
- Own conclusions become posits in the deliverable, never claims.
- Run `python tools/validate.py .` before reporting any production task as done. Zero errors alone is not the criterion; a warning marked `*` is undeclared and is a finding, not background noise.
- Volatile state goes to `knowledge/state.md`, decisions to `knowledge/journal.md` (append-only).
- Working language of content: German for the deliverable, claims, distillates and glossary. This action layer and `knowledge/` stay English.

## Harness block (exchangeable)

<!-- This block is specific to Claude Code and may be replaced for another harness. -->

- Commit at milestones with concise English imperative messages; stage explicit paths.
- This vault lives as a subfolder of the most repository and carries no git history of its own; commit it with the project.
- Never edit anything under `00_representation/`; a representation is immutable once its block IDs exist. A revised source enters as a new file with a date-suffixed slug.
- Record `checked.quote` only after `python tools/quote-check.py` has actually passed for the affected reference.
- Keep `examples/`; `tests/test_validate.py` runs against those fixtures.
- Third-party personal names stay out of produced prose; use role and institution. Bibliographic author fields in `references/` are the declared exception, see `knowledge/specification.md`.
- Grokipedia is never used as a source, in any context.
