---
type: distillate
source-type: document
representation: "[[00_representation/documents/most-architecture]]"
topics: ["[[Gestaltung]]"]
status: grounded
checked:
  validation: 2026-08-08
created: 2026-08-08
updated: 2026-08-08
---

# Distillate: Architektur der Prototypen

Das Architekturdokument beschreibt Seitenlandkarte, Farbwelten, Zeichentechniken und Datenherkunft der Prototypen und benennt die bekannte technische Schuld.

## Core statements

- Alle Prototypseiten liegen in `prototype/`, laufen über einen lokalen Webserver und sind je eine selbstständige HTML-Datei ohne Build und ohne Framework. [[00_representation/documents/most-architecture#^p01]] ^s1
- Die Seitenlandkarte umfasst acht Seiten über drei Projekte und zwei visuelle Welten. [[00_representation/documents/most-architecture#^t02]] ^s2
- Es existieren genau zwei Farbwelten, Nacht und Tag (Helio), beide Single-Theme mit explizit gesetzten Farben. [[00_representation/documents/most-architecture#^p03]] ^s3
- Alles Bildliche wird per Canvas gemalt, im Helio ausschließlich als horizontale Bänder mit Wellenstörung. [[00_representation/documents/most-architecture#^p04]] ^s4
- Der Zufall stammt immer aus einem Seeded-LCG mit `seed = seed * 16807 % 2147483647`, nie aus Math.random, wodurch Darstellungen reproduzierbar sind. [[00_representation/documents/most-architecture#^p05]] ^s5
- Das Korn liegt als eigene Canvas-Ebene über allem, teure Ebenen werden einmal offscreen gemalt und pro Frame nur kopiert. [[00_representation/documents/most-architecture#^p07]] ^s6
- Hitboxen sind statisch positionierte DOM-Buttons über der Zeichnung, die Zeichnung animiert unabhängig davon. [[00_representation/documents/most-architecture#^p08]] ^s7
- Die dargestellten Daten stammen aus den Playwright-Spec-Dateien der MHDBDB und aus dem knowledge-Ordner von Promptotyping und sind als Objekt im jeweiligen HTML eingebettet. [[00_representation/documents/most-architecture#^p09]] ^s8
- Als bekannte Schuld ist vermerkt, dass die Datensätze pro Seite dupliziert statt zentral gepflegt sind. [[00_representation/documents/most-architecture#^p10]] ^s9

## Terms

- **Gestalt**: eine konkrete visuelle Ausprägung des generalisierten UI für ein Projekt. [[00_representation/documents/most-architecture#^t02]]

## Open questions

- Das Dokument sagt nicht, wie die eingebetteten Datensätze bei Änderung der Quellen nachgezogen werden.

## Related

- [[10_distillates/documents/most-specification]]
- [[10_distillates/documents/most-design]]
