---
title: Architektur der Prototypen
status: active
updated: 2026-08-08
---

# Architecture, wie die Prototypen gebaut sind

## Seitenlandkarte

Alle Seiten liegen in `prototype/` und laufen über einen lokalen statischen Webserver (`python -m http.server 8642` im prototype-Ordner). Kein Build, kein Framework. Der Server ist Pflicht, weil die Seiten ES-Module importieren und ihre Daten per fetch holen; ein Doppelklick auf die Datei genügt nicht.

| Seite | Projekt | Gestalt | Welt |
|---|---|---|---|
| `index.html` | alle | geführte Überseite, ein Standardpfad pro Projekt | Tag (Helio) |
| `helio-mhdbdb.html` | MHDBDB | Prüfungen als Sonnenbänder, Referenz-Gestalt | Tag |
| `helio-promptotyping.html` | Promptotyping | Dokumente als Sonnenscheibe | Tag |
| `helio-most.html` | most | der eigene Wissensstand als Sonnenbänder | Tag |
| `mhdbdb-tests.html` | MHDBDB | Nachtgarten, Tests als Lichter, mit Erfüllungsstand | Nacht |
| `promptotyping-planet.html` | Promptotyping | Planet mit sieben Schichten | Nacht |
| `promptotyping-workflow.html` | Promptotyping | Werkstrecke, Daten zu Artefakten | Nacht |
| `promptotyping-organismus.html` | Promptotyping, most | Körper mit Organen | Nacht |

Die Tagseiten tragen den Standardpfad, die Nachtseiten hängen als Alternativen eingeklappt hinter dem jeweiligen Projekt. `himmel.html` ist gelöscht, die nullte Zoomstufe als eigene Seite ist verworfen.

## Geteilte Ressourcen

Die Helio-Seiten teilen sich zwei lokale Geschwisterdateien. Externe Ressourcen bleiben verboten, geteilte lokale sind erwünscht.

* `prototype/helio.css` hält die Design-Tokens in `:root` (`--grund-oben`, `--grund-unten`, `--grund`, `--tinte`) und die gemeinsamen Komponenten, Canvas-Schichtung von Motiv und Korn, Display- und Fließtext-Klassen, Reihen als statische Hitboxen, Rückweg und Zurück-Taste. Rohe Hexwerte stehen nur im Token-Block, alles andere greift über `var()` zu.
* `prototype/helio.js` ist die Zeichen- und Datenschicht als ES-Modul. Es exportiert den Seeded-LCG mit Saat-Setzer, eine stabile Schlüssel-Signatur (Position, Amplitude, Breite, Phase einer Störung aus einem String), die Canvas-Vermessung bei gedeckelter Device-Pixel-Ratio, die vorgerenderten Kornkacheln mit niedriger Wechselrate, die Grundfläche mit Rot-Verlauf, den Bandzeichner und die Wellenfunktion, dazu das Laden der Daten und die Statuslogik des Testlaufs.
* Seitenspezifisches CSS und JavaScript bleibt in der jeweiligen Seite.

Die Nachtseiten sind weiterhin je eine eigenständige Seite mit eigenem Stil; sie beziehen ihre Daten aus denselben JSON-Dateien.

## Zwei Welten

Nacht, Grund `#150d11`, Pergament `#efe9d6`, Rubrum `#d4705b`, Amber `#e8b34c`, Moos `#8fb083`, Georgia-Serif als Display. Tag (Helio), streng zweifarbig nach [design.md](design.md), Sattrot und Off-White `#efeae2`, system-ui in Gewicht 900 als Display. Beide Welten sind Single-Theme, alle Farben explizit. Helio ist die Leitästhetik, die Nachtwelt bleibt als alternatives Gewand erreichbar.

## Techniken

* Alles Bildliche wird per Canvas gemalt, organische Formen über sinusförmig gestörte Radien und radiale Gradienten; im Helio ausschließlich horizontale Bänder mit Wellenstörung.
* Zufall kommt immer aus einem Seeded-LCG (`seed = seed * 16807 % 2147483647`), nie aus Math.random; Darstellungen sind dadurch reproduzierbar.
* Der Siebdruck-Effekt im Helio nutzt `globalCompositeOperation` (`xor` für Beschriftung, die sich aus Bändern ausstanzt, `destination-out` für Schnitte und Löcher).
* Korn liegt als eigene Canvas-Ebene über allem und wechselt bei niedriger Rate die vorgerenderte Kachel; teure Ebenen werden einmal offscreen gemalt und pro Frame nur kopiert.
* Hitboxen sind DOM-Buttons über der Zeichnung, statisch positioniert; die Zeichnung animiert unabhängig davon.

## Datenquellen

Die Daten liegen in `prototype/daten/` und werden zur Laufzeit per fetch geladen. Keine Seite hält eine eingebettete Kopie. Fehlt eine Datei, behauptet die Seite keinen Zustand, das Laden fällt still auf `null` zurück.

| Datei | Inhalt | Herkunft |
|---|---|---|
| `mhdbdb.json` | sechs Kategorien mit ihren Prüfungen, je Prüfung Wort, Satz und Spec-Datei | den Playwright-Spec-Dateien aus `mhdbdb-tei-only/testing/tests/` entnommen |
| `promptotyping.json` | die Wissenseinheiten des Promptotyping-Repos, je Einheit Datei, Titel, Umfang, Status und ein Auszug; `CLAUDE.md` als Regel-Dokument | `scripts/promptotyping-ingest.mjs` aus dem echten Wissensordner |
| `most.json` | derselbe Dokumentschnitt für den knowledge-Ordner dieses Repos | Ingest aus dem eigenen Wissensordner |
| `testlauf.json` | Kennzahlen des Laufs und Zählwerte je Spec-Datei | `scripts/testlauf-ingest.mjs` aus dem Playwright-JSON-Report |

Die Ingest-Skripte erfinden nichts. Ein Feld, das die Quelle nicht trägt, bleibt leer; das gilt für Status und Auszug der Wissensdokumente ebenso wie für Startzeit und Dauer eines Laufs.

### Auffrischen

Der Erfüllungsstand wird aufgefrischt, indem die Playwright-Suite im MHDBDB-Repo läuft und danach das Testlauf-Ingest den erzeugten JSON-Report aggregiert. Der Dokumentstand wird aufgefrischt, indem das Promptotyping-Ingest über den jeweiligen Wissensordner läuft, für Promptotyping und für most. Beide Skripte nehmen den Quellpfad als Argument und fallen sonst auf den Nachbarpfad im GitHub-Ordner zurück. Der letzte eingelesene Lauf ist real rot, gefallen sind ausschließlich die beiden Paritäts-Specs `position-parity` und `normalization-parity`.

### Erfüllungsstand im Band

Der Zustand einer Prüfung sitzt in der Kantenqualität ihrer Störung. Ein harter, gerader Schnitt mit senkrechten Kanten durch die Schwellung heißt gefallen. Ein flacher Schnitt, bei dem ein dünner Steg stehen bleibt, heißt flaky. Durchscheinen heißt übersprungen. Der dekorative Sinus-Pinch schnürt weiterhin organisch rund zu, er trägt keine Bedeutung. Der Status steht zusätzlich immer als Text in Untertitel, Reihen, Kategorien und Fokus; Bedeutung liegt nie allein in der Form.
