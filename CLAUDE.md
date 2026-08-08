# most, Regeln für Agenten

Projektkontext, Ziele und Personas stehen in `knowledge/projekt.md`; der Wegweiser durch den Vault ist `knowledge/INDEX.md`. Vor Gestaltungsarbeit `knowledge/design.md` lesen, vor neuen Gestalten `knowledge/specification.md`.

## Verbindlich für jede Prototyp-Seite

* `<meta charset="utf-8">` und viewport-Meta in den ersten Zeilen; eine selbstständige HTML-Datei ohne externe Ressourcen.
* Klickziele mindestens 44 mal 44 Pixel und statisch; Animation bewegt nur die Zeichnung.
* Escape geht eine Ebene zurück, links oben steht der Rückweg zur Übersicht, Buttons tragen aria-labels.
* `prefers-reduced-motion` friert alles ein, das Standbild ist vollwertig.
* Zufall nur aus dem Seeded-LCG (`seed = seed * 16807 % 2147483647`), nie Math.random.
* UI-Texte deutsch, Code-Kommentare englisch; pro Ansicht höchstens ein Untertitel.
* Keine Ansicht behauptet einen Zustand ohne Datenquelle.

## Arbeitsweise

* Kein Artifact-Publishing; alles läuft lokal über den Webserver auf Port 8642 im prototype-Ordner.
* Zwei visuelle Welten, Nacht und Helio (Tag); Farbwerte und Regeln in `knowledge/architecture.md` und `knowledge/design.md`. Keine dritte Farbwelt ohne Eintrag in design.md.
* In der Kommunikation mit dem Team markiert 🌿 die simulierte Persona und [**] die nüchterne Führung durch das Projekt.
