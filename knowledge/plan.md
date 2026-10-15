---
title: Vorwärtsrichtung
status: complete
updated: 2026-10-15
---

# Plan, vorwärts lesen

Am 15.10.2026 als eigenständiges Vorhaben abgeschlossen. Die vorhandenen Prototypen, Daten und Quellen bleiben erhalten. Die Einordnung bei Second Brain steht im lokalen Repository pruefansicht in `knowledge/research.md`, Abschnitt Retained design case most.

Der frühere Ausbauauftrag ist aufgehoben. Die nachstehenden Punkte bewahren den Versuchsstand vom 08.08.2026. Persona-Sessions, Kontrast- und Viewportprüfungen sowie ein Metaprompt wurden durch diesen Abschluss nicht nachgeholt. Daraus entsteht kein weiterer Auftrag. Die Hypothese einer allgemein besseren Benutzbarkeit unter hoher kognitiver Last bleibt unbestätigt.

Am Abschluss waren Code, Daten, Skripte und Teile des Projektwissens bereits uncommittet. Die Konsolidierung erhält diese lokalen Änderungen und verändert keine Prototypdatei. Die berichteten früheren Browser- und Testbefunde wurden nicht wiederholt.

## Nicht ausgeführte Punkte des Versuchs

1. **Persona-Sessions dokumentieren.** Nach jeder Simulationssession ein `session-<persona>.md` in diesem Ordner mit Beobachtungen und abgeleiteten UI-Anforderungen; die Methode steht in [projekt.md](projekt.md). Bisher existiert keine einzige Session-Datei, damit fehlt dem Projekt die empirische Rückkopplung, auf der seine ganze Begründung ruht.
2. **Kontrast prüfen.** Off-White auf Sattrot über alle Tagseiten gegen WCAG-Werte messen, besonders an den Stellen mit reduzierter Deckkraft, und das Ergebnis als Regel in [design.md](design.md) eintragen.
3. **Schmale Viewports real testen.** Die rechnerisch abgesicherten Mobil-Layouts an echten Fenstergrößen prüfen, sobald die Browsersteuerung Resizes zulässt.
4. **Metaprompt formulieren.** Die Linsenwahl-Regel aus [projekt.md](projekt.md) als wiederverwendbaren Metaprompt fassen, der aus einem Projektkontext Zielgruppe und Gestalt ableitet; das ist der Beitrag des Projekts zur Promptotyping-Methode.

## Im früheren Journal berichtete Ergebnisse

* **Helio als Leitästhetik durchgezogen.** Alle drei Projekte haben ihre Tagseite, die Überseite führt in den Tag, `himmel.html` ist gelöscht, die Nachtgestalten bleiben als Alternativen erreichbar. Die gemeinsame Ästhetik liegt in `prototype/helio.css` und `prototype/helio.js`.
* **Echter Testlauf in beiden Welten.** Der Erfüllungsstand aus dem Playwright-Lauf wird in der Helio-Gestalt als Kantenqualität der Störung gezeigt und im Nachtgarten `mhdbdb-tests.html` ebenfalls. Auffrischen nach [architecture.md](architecture.md), Abschnitt Datenquellen.
* **Gemeinsame Datenquelle.** Die Datensätze liegen als JSON unter `prototype/daten/` und werden zur Laufzeit geladen; die duplizierte Pflege in den Seiten ist beendet. Dokumentdaten entstehen per Ingest aus den echten Wissensordnern.
