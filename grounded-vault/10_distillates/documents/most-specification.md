---
type: distillate
source-type: document
representation: "[[00_representation/documents/most-specification]]"
topics: ["[[Gestaltung]]"]
status: grounded
checked:
  validation: 2026-08-08
created: 2026-08-08
updated: 2026-08-08
---

# Distillate: Spezifikation des generalisierten UI

Die Spezifikation übersetzt die Designprinzipien in prüfbare Anforderungen und ist die Abnahmeliste für jede neue Gestalt.

## Core statements

- Jede neue Gestalt wird gegen die Anforderungsliste der Spezifikation abgenommen. [[00_representation/documents/most-specification#^p01]] ^s1
- Jede Gestalt zeigt vier Invarianten. [[00_representation/documents/most-specification#^p02]] ^s2
- Die erste Invariante sind Einheiten, antippbare Wissensstücke, jedes mit einem Wort und einem Satz erklärbar. [[00_representation/documents/most-specification#^p03]] ^s3
- Die zweite Invariante ist der Fluss, die Zeit oder der Prozess als sichtbare Richtung. [[00_representation/documents/most-specification#^p04]] ^s4
- Die dritte Invariante sind Regeln, das Steuernde als das eine Element, das durch alles andere hindurchwirkt. [[00_representation/documents/most-specification#^p05]] ^s5
- Die vierte Invariante sind Lücken, das Fehlende bleibt immer sichtbar und ein Geisterdokument wird nie stillschweigend weggelassen. [[00_representation/documents/most-specification#^p06]] ^s6
- Über den Invarianten steht die nullte Zoomstufe, der Himmel. [[00_representation/documents/most-specification#^p07]] ^s7
- Das Interaktionsschema hat in jeder Gestalt dieselben drei Ebenen, Übersicht, Kategorie und Fokus. [[00_representation/documents/most-specification#^p08]] ^s8
- Jede Seite ist eine einzige selbstständige HTML-Datei ohne externe Ressourcen mit charset- und viewport-Meta in den ersten Zeilen. [[00_representation/documents/most-specification#^p09]] ^s9
- Alle Klickziele messen mindestens 44 mal 44 Pixel und sind statisch; die Animation bewegt die Zeichnung, nie die Hitbox. [[00_representation/documents/most-specification#^p10]] ^s10
- Escape geht immer genau eine Ebene zurück, Pfeiltasten wechseln zwischen Geschwistern, alle Buttons tragen aria-labels. [[00_representation/documents/most-specification#^p11]] ^s11
- `prefers-reduced-motion` friert jede Bewegung ein und das Standbild ist vollwertig. [[00_representation/documents/most-specification#^p13]] ^s12
- Aller Zufall stammt aus dem deterministischen Seeded-LCG, damit jede Darstellung reproduzierbar ist. [[00_representation/documents/most-specification#^p15]] ^s13
- Pro Ansicht ist höchstens ein Untertitel erlaubt, erklärende Prosa gehört in den Vault. [[00_representation/documents/most-specification#^p17]] ^s14
- Die Überseite ist ein geführter Weg mit einem Standardpfad pro Projekt, alternative Gestalten liegen eingeklappt dahinter. [[00_representation/documents/most-specification#^p18]] ^s15
- Begründet wird die Führung damit, dass die flache Liste aller Gestalten die Zielnutzer nachweislich überfordert hat. [[00_representation/documents/most-specification#^p18]] ^s16
- Keine Ansicht behauptet einen Zustand ohne Datenquelle, und der Ring der Prüfungen bleibt gestrichelt, solange kein echter Testlauf eingelesen ist. [[00_representation/documents/most-specification#^p19]] ^s17

## Terms

- **Invarianten**: die vier immer gezeigten Dinge, Einheiten, Fluss, Regeln, Lücken. [[00_representation/documents/most-specification#^p02]]
- **Geisterdokument**: ein Dokument, dessen Trigger erfüllt ist, das aber fehlt. [[00_representation/documents/most-specification#^p06]]

## Open questions

- Die Spezifikation nennt kein Verfahren, mit dem die Erfüllung der Akzeptanzkriterien pro Seite protokolliert wird.
- Der Dichteregler aus der Charta taucht in den Akzeptanzkriterien nicht auf.

## Related

- [[10_distillates/documents/most-projekt]]
- [[10_distillates/documents/most-architecture]]
