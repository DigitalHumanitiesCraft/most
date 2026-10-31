---
title: Spezifikation des generalisierten UI
status: active
updated: 2026-08-08
---

# Specification, was das UI leisten muss

Ableitung aus den Designprinzipien in [projekt.md](projekt.md), formuliert als prüfbare Anforderungen. Jede neue Gestalt wird gegen diese Liste abgenommen.

## Das generalisierte Modell

Jede Gestalt zeigt vier Invarianten.

1. **Einheiten**, die Wissensstücke, jedes antippbar, jedes mit genau einem Wort und einem Satz erklärbar.
2. **Fluss**, die Zeit oder der Prozess, sichtbar als Richtung (Journal rückwärts, Plan vorwärts, Daten zu Artefakten).
3. **Regeln**, das Steuernde, visuell als das eine Element, das durch alles andere hindurchwirkt.
4. **Lücken**, das Fehlende, immer sichtbar; ein Geisterdokument wird nie stillschweigend weggelassen.

Die Rolle der nullten Zoomstufe trägt die Überseite. Eine eigene Himmelsansicht über allen Projekten ist verworfen; das Schichtenmodell in [planet.md](planet.md) gilt weiter für die Repräsentation eines einzelnen Projekts als Himmelskörper.

## Interaktionsschema

Drei Ebenen, in jeder Gestalt gleich, Übersicht, Kategorie beziehungsweise Schicht, Fokus. Der Fokus zeigt ein Wort radikal groß, einen Satz, die Kennzahlen in Mono und bei Lücken oder fälligen Eingriffen eine Diagnose.

## Akzeptanzkriterien pro Seite

* `<meta charset="utf-8">` und viewport-Meta im Kopf, gültige HTML-Struktur mit `<html lang="de">` zuerst.
* Keine externe Ressource, kein CDN, keine Fremdschrift, kein Build. Geteilte lokale Geschwisterdateien sind erwünscht, `prototype/helio.css` und `prototype/helio.js` für die Tagseiten; Seitenspezifisches bleibt in der Seite.
* Daten kommen aus `prototype/daten/*.json` zur Laufzeit, nie als eingebettete Kopie. Fehlt eine Datei, zeigt die Seite den betroffenen Zustand nicht an.
* Alle Klickziele mindestens 44 mal 44 Pixel und statisch; Animation bewegt die Zeichnung, nie die Hitbox.
* Escape geht immer genau eine Ebene zurück; Pfeiltasten wechseln zwischen Geschwistern; alle Buttons tragen aria-labels.
* Links oben ein fester Rückweg zur Übersicht.
* `prefers-reduced-motion` friert jede Bewegung ein, das Standbild ist vollwertig.
* Kein horizontales Scrollen der Seite.
* Aller Zufall aus dem deterministischen Seeded-LCG, damit jede Darstellung reproduzierbar ist.
* UI-Texte deutsch, Code-Kommentare englisch.

## Anforderungen an Text

Pro Ansicht höchstens ein Untertitel. Fokusansichten tragen einen Satz und die Kennzahlen; erklärende Prosa gehört in den Vault. Formal-visuelle Kommunikation (Miniaturen, Legenden, Diagramme) hat Vorrang vor zusätzlichem Text.

## Führung

Die Überseite ist ein geführter Weg mit einem Standardpfad pro Projekt; alternative Gestalten liegen eingeklappt dahinter. Begründung im Journal, die flache Liste aller Gestalten hat die Zielnutzer nachweislich überfordert.

## Ehrlichkeit

Keine Ansicht behauptet einen Zustand ohne Datenquelle. Für die MHDBDB liegt ein echter Playwright-Lauf vor, sein Ergebnis wird in der Tag- und in der Nachtgestalt gezeigt. Wo kein Lauf eingelesen ist, bleibt der Ring der Prüfungen gestrichelt. Ein Status wird immer auch als Text ausgegeben; Bedeutung liegt nie allein in der Form.
