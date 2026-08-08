---
title: Vorwärtsrichtung
status: active
updated: 2026-08-08
---

# Plan, vorwärts lesen

Reihenfolge nach Abhängigkeit, nicht nach Termin.

1. **Erfüllungsstand in die übrigen Gestalten.** `helio-mhdbdb.html` liest den echten Lauf (erledigt, siehe journal.md); der Nachtgarten `mhdbdb-tests.html` zeigt ihn noch nicht. Auffrischen des Standes: Suite in `mhdbdb-tei-only` laufen lassen, dann `node scripts/testlauf-ingest.mjs`.
2. **Gemeinsame Datenquelle.** ROOMS und SPECIMENS aus den HTML-Seiten in eine geteilte JSON-Datei ziehen, die Seiten lesen sie ein; beendet die duplizierte Pflege (Schuld aus architecture.md).
3. **Persona-Sessions dokumentieren.** Nach jeder Simulationssession ein `session-<persona>.md` mit Beobachtungen und abgeleiteten UI-Anforderungen; Methode steht in projekt.md, bisher existiert keine einzige Session-Datei.
4. **Kontrast prüfen.** Off-White auf Sattrot gegen WCAG-Werte verifizieren; die Large-Text-Strategie aus helio-mhdbdb.html gegebenenfalls auf alle Helio-Seiten übertragen und in design.md als Regel eintragen.
5. **Alles nach Helio.** Team-Entscheidung 2026-08-08, Helio ist die Leitästhetik, `helio-mhdbdb.html` die Referenz-Gestalt. `himmel.html` ist verworfen und wird nicht weiterentwickelt; die Nachtgestalten bleiben als Alternativen erreichbar, neue Arbeit fließt in die Tagseiten. Offene Folge, eine Helio-Gestalt für most, sobald der Vault gewachsen ist.
6. **Metaprompt formulieren.** Die Linsenwahl-Regel aus projekt.md als wiederverwendbaren Metaprompt fassen, der aus einem Projektkontext Zielgruppe und Gestalt ableitet; das ist der Beitrag des Projekts zur Promptotyping-Methode.
7. **Schmale Viewports real testen.** Die rechnerisch abgesicherten Mobil-Layouts an echten Fenstergrößen prüfen, sobald die Browsersteuerung Resizes zulässt.
