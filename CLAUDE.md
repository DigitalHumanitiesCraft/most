# most, Regeln für Agenten

Projektkontext, Ziele und Personas stehen in `knowledge/projekt.md`; der Wegweiser durch den Vault ist `knowledge/INDEX.md`. Vor Gestaltungsarbeit `knowledge/design.md` lesen, vor neuen Gestalten `knowledge/specification.md`.

## Leitästhetik

Helio (Tag) ist die Leitästhetik des Projekts (Team-Entscheidung 2026-08-08); `helio-mhdbdb.html` ist die Referenz-Gestalt. Die Nachtwelt bleibt als alternatives Gewand erreichbar, neue Arbeit fließt in die Tagseiten. Farbwerte und Regeln in `knowledge/design.md` und `knowledge/architecture.md`; keine dritte Farbwelt ohne Eintrag in design.md.

## Verbindlich für jede Prototyp-Seite

* `<meta charset="utf-8">` und viewport-Meta im Kopf, gültige HTML-Struktur (`<html lang="de">` zuerst).
* Geteilte lokale Ressourcen sind erlaubt und erwünscht, `prototype/helio.css`, `prototype/helio.js` und die Datendateien unter `prototype/daten/`; externe Ressourcen (CDN, Fonts, fremde Server) bleiben verboten. Seitenspezifisches CSS/JS bleibt in der Seite.
* Daten kommen aus `prototype/daten/*.json`, nie als eingebettete Kopie in der Seite. Die JSON-Dateien werden von Skripten in `scripts/` aus den echten Quellen erzeugt (Playwright-Report, knowledge-Ordner der Projekte).
* Klickziele mindestens 44 mal 44 Pixel und statisch; Animation bewegt nur die Zeichnung.
* Escape geht eine Ebene zurück, links oben steht der Rückweg zur Übersicht, Buttons tragen aria-labels.
* `prefers-reduced-motion` friert alles ein, das Standbild ist vollwertig.
* Zufall nur aus dem Seeded-LCG (`seed = seed * 16807 % 2147483647`), nie Math.random.
* UI-Texte deutsch, Code-Kommentare englisch; pro Ansicht höchstens ein Untertitel.
* Keine Ansicht behauptet einen Zustand ohne Datenquelle.

## Arbeitsweise

* Kein Artifact-Publishing; alles läuft lokal über den Webserver auf Port 8642 im prototype-Ordner (Entwicklung auch über Live Server 5500).
* In der Kommunikation mit dem Team markiert 🌿 die simulierte Persona und [**] die nüchterne Führung durch das Projekt.
