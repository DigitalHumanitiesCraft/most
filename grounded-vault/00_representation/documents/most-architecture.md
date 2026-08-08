---
type: representation
source-type: document
source: "[[_sources/architecture.md]]"
converter: "none, Markdown source copied verbatim"
channel: handover
metadata:
  title: "Architektur der Prototypen"
  creator: "Projektteam most"
  date: "2026-08-08"
  format: md
  identifier: "most/knowledge/architecture.md"
  license: "CC-BY-4.0"
  confidential: false
created: 2026-08-08
updated: 2026-08-08
---

# Architecture, wie die Prototypen gebaut sind

## Seitenlandkarte

Alle Seiten liegen in `prototype/` und laufen über einen lokalen Webserver (`python -m http.server 8642` im prototype-Ordner). Kein Build, kein Framework, jede Seite eine selbstständige HTML-Datei. ^p01

| Seite | Projekt | Gestalt | Welt |
|---|---|---|---|
| `index.html` | alle | geführte Überseite | Tag (Helio) |
| `himmel.html` | alle | nullte Zoomstufe, drei Himmelskörper | Nacht |
| `helio-mhdbdb.html` | MHDBDB | Prüfungen als Sonnenbänder | Tag |
| `mhdbdb-tests.html` | MHDBDB | Nachtgarten, Tests als Lichter | Nacht |
| `promptotyping-planet.html` | Promptotyping | Planet mit sieben Schichten | Nacht |
| `helio-promptotyping.html` | Promptotyping | Dokumente als Sonnenscheibe | Tag |
| `promptotyping-workflow.html` | Promptotyping | Werkstrecke, Daten zu Artefakten | Nacht |
| `promptotyping-organismus.html` | Promptotyping, most | Körper mit Organen | Nacht |

^t02

## Zwei Welten

Nacht, Grund `#150d11`, Pergament `#efe9d6`, Rubrum `#d4705b`, Amber `#e8b34c`, Moos `#8fb083`, Georgia-Serif als Display. Tag (Helio), streng zweifarbig nach [design.md](design.md), Sattrot und Off-White `#efeae2`, system-ui in Gewicht 900 als Display. Beide Welten sind Single-Theme, alle Farben explizit. ^p03

## Techniken

* Alles Bildliche wird per Canvas gemalt, organische Formen über sinusförmig gestörte Radien und radiale Gradienten; im Helio ausschließlich horizontale Bänder mit Wellenstörung. ^p04
* Zufall kommt immer aus einem Seeded-LCG (`seed = seed * 16807 % 2147483647`), nie aus Math.random; Darstellungen sind dadurch reproduzierbar. ^p05
* Der Siebdruck-Effekt im Helio nutzt `globalCompositeOperation` (`xor` für Beschriftung, die sich aus Bändern ausstanzt, `destination-out` für Schnitte und Löcher). ^p06
* Korn liegt als eigene Canvas-Ebene über allem und würfelt bei niedriger Rate neu; teure Ebenen werden einmal offscreen gemalt und pro Frame nur kopiert. ^p07
* Hitboxen sind DOM-Buttons über der Zeichnung, statisch positioniert; die Zeichnung animiert unabhängig davon. ^p08

## Datenquellen

Die MHDBDB-Daten (ROOMS, sechs Kategorien, 31 Tests mit Wort, Satz, Spec-Datei, Prozessschritten) stammen aus den Playwright-Spec-Dateien von `mhdbdb-tei-only/testing/tests/`. Die Promptotyping-Daten (SPECIMENS, Dokumente mit Wort, Frage, Satz, Kennzahlen, Diagnose) stammen aus `Promptotyping/knowledge/`. Beide sind als Objekt im jeweiligen HTML eingebettet. ^p09

Bekannte Schuld, die Datensätze sind pro Seite dupliziert statt zentral gepflegt; bei Änderungen müssen alle betroffenen Seiten nachgezogen werden. Eine gemeinsame JSON-Quelle ist im [plan.md](plan.md) vermerkt. ^p10
