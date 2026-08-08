---
title: Architektur der Prototypen
status: active
updated: 2026-08-08
---

# Architecture, wie die Prototypen gebaut sind

## Seitenlandkarte

Alle Seiten liegen in `prototype/` und laufen über einen lokalen Webserver (`python -m http.server 8642` im prototype-Ordner). Kein Build, kein Framework, jede Seite eine selbstständige HTML-Datei.

| Seite | Projekt | Gestalt | Welt |
|---|---|---|---|
| `index.html` | alle | geführte Überseite | Tag (Helio) |
| `himmel.html` | alle | nullte Zoomstufe, verworfen 2026-08-08, nicht mehr verlinkt | Nacht |
| `helio-mhdbdb.html` | MHDBDB | Prüfungen als Sonnenbänder | Tag |
| `mhdbdb-tests.html` | MHDBDB | Nachtgarten, Tests als Lichter | Nacht |
| `promptotyping-planet.html` | Promptotyping | Planet mit sieben Schichten | Nacht |
| `helio-promptotyping.html` | Promptotyping | Dokumente als Sonnenscheibe | Tag |
| `promptotyping-workflow.html` | Promptotyping | Werkstrecke, Daten zu Artefakten | Nacht |
| `promptotyping-organismus.html` | Promptotyping, most | Körper mit Organen | Nacht |

## Zwei Welten

Nacht, Grund `#150d11`, Pergament `#efe9d6`, Rubrum `#d4705b`, Amber `#e8b34c`, Moos `#8fb083`, Georgia-Serif als Display. Tag (Helio), streng zweifarbig nach [design.md](design.md), Sattrot und Off-White `#efeae2`, system-ui in Gewicht 900 als Display. Beide Welten sind Single-Theme, alle Farben explizit.

## Techniken

* Alles Bildliche wird per Canvas gemalt, organische Formen über sinusförmig gestörte Radien und radiale Gradienten; im Helio ausschließlich horizontale Bänder mit Wellenstörung.
* Zufall kommt immer aus einem Seeded-LCG (`seed = seed * 16807 % 2147483647`), nie aus Math.random; Darstellungen sind dadurch reproduzierbar.
* Der Siebdruck-Effekt im Helio nutzt `globalCompositeOperation` (`xor` für Beschriftung, die sich aus Bändern ausstanzt, `destination-out` für Schnitte und Löcher).
* Korn liegt als eigene Canvas-Ebene über allem und würfelt bei niedriger Rate neu; teure Ebenen werden einmal offscreen gemalt und pro Frame nur kopiert.
* Hitboxen sind DOM-Buttons über der Zeichnung, statisch positioniert; die Zeichnung animiert unabhängig davon.

## Datenquellen

Die MHDBDB-Daten (ROOMS, sechs Kategorien, 31 Tests mit Wort, Satz, Spec-Datei, Prozessschritten) stammen aus den Playwright-Spec-Dateien von `mhdbdb-tei-only/testing/tests/`. Die Promptotyping-Daten (SPECIMENS, Dokumente mit Wort, Frage, Satz, Kennzahlen, Diagnose) stammen aus `Promptotyping/knowledge/`. Beide sind als Objekt im jeweiligen HTML eingebettet.

Der Erfüllungsstand kommt aus einem echten Playwright-Lauf: `scripts/testlauf-ingest.mjs` aggregiert dessen JSON-Report pro Spec-Datei nach `prototype/daten/testlauf.json`, und `helio-mhdbdb.html` lädt diese Datei zur Laufzeit per fetch. Fehlt die Datei, behauptet die Seite keinen Zustand. Im Band codiert, Riss am Ort der Störung heißt gefallen, Kerbe heißt flaky, Durchscheinen heißt übersprungen; mit Laufdaten dünnt der dekorative Pinch Bänder nur aus und trennt nie.

Bekannte Schuld, die Datensätze sind pro Seite dupliziert statt zentral gepflegt; bei Änderungen müssen alle betroffenen Seiten nachgezogen werden. Eine gemeinsame JSON-Quelle ist im [plan.md](plan.md) vermerkt.
