---
type: claim
topics: ["[[Gestaltung]]"]
status: grounded
checked:
  validation: 2026-08-08
grounding:
  - "[[10_distillates/documents/most-specification#^s10]]"
  - "[[10_distillates/documents/most-architecture#^s7]]"
contested-with: []
created: 2026-08-08
updated: 2026-08-08
---

# Klickziele messen mindestens 44 mal 44 Pixel und sind statisch, während nur die Zeichnung animiert

## Statement

Die Trennung von Hitbox und Zeichnung ist als Akzeptanzkriterium gesetzt und technisch durch statisch positionierte DOM-Buttons über der animierten Canvas-Fläche umgesetzt. Sie verbindet die Mindestgröße mit der Forderung nach Vorhersehbarkeit, denn ein Ziel, das sich bewegt, verlangt Nachführung, die der Zielzustand nicht leistet.

## Support

- [[10_distillates/documents/most-specification#^s10]] — setzt Mindestgröße und Unbeweglichkeit der Klickziele als Kriterium.
- [[10_distillates/documents/most-architecture#^s7]] — belegt die technische Umsetzung über statische DOM-Buttons.

## Related

- [[20_claims/seeded-lcg-reproduzierbarkeit]]
