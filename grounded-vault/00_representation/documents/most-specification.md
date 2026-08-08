---
type: representation
source-type: document
source: "[[_sources/specification.md]]"
converter: "none, Markdown source copied verbatim"
channel: handover
metadata:
  title: "Spezifikation des generalisierten UI"
  creator: "Projektteam most"
  date: "2026-08-08"
  format: md
  identifier: "most/knowledge/specification.md"
  license: "CC-BY-4.0"
  confidential: false
created: 2026-08-08
updated: 2026-08-08
---

# Specification, was das UI leisten muss

Ableitung aus den Designprinzipien in [projekt.md](projekt.md), formuliert als prüfbare Anforderungen. Jede neue Gestalt wird gegen diese Liste abgenommen. ^p01

## Das generalisierte Modell

Jede Gestalt zeigt vier Invarianten. ^p02

1. **Einheiten**, die Wissensstücke, jedes antippbar, jedes mit genau einem Wort und einem Satz erklärbar. ^p03
2. **Fluss**, die Zeit oder der Prozess, sichtbar als Richtung (Journal rückwärts, Plan vorwärts, Daten zu Artefakten). ^p04
3. **Regeln**, das Steuernde, visuell als das eine Element, das durch alles andere hindurchwirkt. ^p05
4. **Lücken**, das Fehlende, immer sichtbar; ein Geisterdokument wird nie stillschweigend weggelassen. ^p06

Darüber die nullte Zoomstufe, der Himmel; das Schichtenmodell dafür steht in [planet.md](planet.md). ^p07

## Interaktionsschema

Drei Ebenen, in jeder Gestalt gleich: Übersicht, Kategorie beziehungsweise Schicht, Fokus. Der Fokus zeigt ein Wort radikal groß, einen Satz, die Kennzahlen in Mono und bei Lücken oder fälligen Eingriffen eine Diagnose. ^p08

## Akzeptanzkriterien pro Seite

* `<meta charset="utf-8">` und viewport-Meta in den ersten Zeilen; eine einzige selbstständige HTML-Datei ohne externe Ressourcen. ^p09
* Alle Klickziele mindestens 44 mal 44 Pixel und statisch; Animation bewegt die Zeichnung, nie die Hitbox. ^p10
* Escape geht immer genau eine Ebene zurück; Pfeiltasten wechseln zwischen Geschwistern; alle Buttons tragen aria-labels. ^p11
* Links oben ein fester Rückweg zur Übersicht. ^p12
* `prefers-reduced-motion` friert jede Bewegung ein, das Standbild ist vollwertig. ^p13
* Kein horizontales Scrollen der Seite. ^p14
* Aller Zufall aus dem deterministischen Seeded-LCG, damit jede Darstellung reproduzierbar ist. ^p15
* UI-Texte deutsch, Code-Kommentare englisch. ^p16

## Anforderungen an Text

Pro Ansicht höchstens ein Untertitel. Fokusansichten tragen einen Satz und die Kennzahlen; erklärende Prosa gehört in den Vault. Formal-visuelle Kommunikation (Miniaturen, Legenden, Diagramme) hat Vorrang vor zusätzlichem Text. ^p17

## Führung

Die Überseite ist ein geführter Weg mit einem Standardpfad pro Projekt; alternative Gestalten liegen eingeklappt dahinter. Begründung im Journal, die flache Liste aller Gestalten hat die Zielnutzer nachweislich überfordert. ^p18

## Ehrlichkeit

Keine Ansicht behauptet einen Zustand ohne Datenquelle. Der Ring der Prüfungen bleibt gestrichelt, solange kein echter Testlauf eingelesen wird. ^p19
