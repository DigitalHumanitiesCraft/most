---
type: representation
source-type: document
source: "[[_sources/planet.md]]"
converter: "none, Markdown source copied verbatim"
channel: handover
metadata:
  title: "Planet, Schichtenmodell der Projektrepräsentation"
  creator: "Projektteam most"
  date: "2026-08-08"
  format: md
  identifier: "most/knowledge/planet.md"
  license: "CC-BY-4.0"
  confidential: false
created: 2026-08-08
updated: 2026-08-08
---

# Planet, ein Himmelskörper pro Projekt

Die nullte Zoomstufe des generalisierten UI (siehe [projekt.md](projekt.md)). Vor den drei interaktiven Ebenen Übersicht, Kategorie und Fokus steht eine Ansicht, die keine Interaktion verlangt, ein Himmelskörper, dessen Erscheinung der aggregierte Zustand des Projekts ist. Aus der Distanz beantwortet er drei Fragen, fehlt etwas (Silhouette), lebt es (Wetter), hält es (Ring). ^p01

## Begründungsmaßstab

Jede Schicht muss eine Eigenschaft mit ihrem planetaren Gegenstück teilen. Die Kategorien folgen der Klassifikation der Promptotyping-Konvention (deklarativ, prozessual, handlungsanweisend); sie werden auf die Physik abgebildet und nicht erfunden. Die Zuordnung ist vollständig, jedes Dokument findet genau eine Schicht. ^p02

## Die Schichten, von innen nach außen

1. **Kern, die Forschungsfrage** (`project.md`). Schwerezentrum, um das sich alles sammelt; klein, dicht, nahezu unveränderlich. Ohne Warum kein Kern. ^p03
2. **Mantel, das deklarative Wissen** (`specification.md`, `architecture.md`, `design.md`, `data.md`). Trägt die Masse, Zeilen sind das Gewicht; sedimentiert, nach Entstehungszeit geschichtet, langsam. ^p04
3. **Kruste, die Artefakte** (Prototyp, Paper, Website, `report.md`). Die einzige Schicht, die Außenstehende berühren; auskristallisiertes Inneres. ^p05
4. **Atmosphäre, das prozessuale Wissen** (`journal.md` rückwärts, `plan.md` vorwärts). Die volatile Schicht mit Wetter; `updated` und `status` sind Wetterdaten. Aktivität ist von außen zuerst sichtbar. ^p06
5. **Magnetfeld, die Regeln** (`CLAUDE.md`, Agenten-Anweisungen). Unstofflich, nur an der Wirkung sichtbar; krümmt jede Bahn durch das Projekt. Darstellung als Feldlinien. ^p07
6. **Ring, die Prüfungen.** Umkreisen den Körper, gehören nicht zu seiner Masse; geschlossener heller Ring heißt, alle Prüfungen bestehen. Ein echter Erfüllungsstand braucht einen echten Testlauf (Playwright-Report); ohne Lauf zeigt der Ring nur Existenz, nie behauptete Gesundheit. ^p08
7. **Löcher und Narben, quer durch alle Schichten.** Geisterdokumente sind fehlende Schichtstellen, der Blick geht auf die darunterliegende durch; Schnitte (fällige Eingriffe aus der Lese-Heuristik) sind Krater auf der Kruste. Keine eigene Schicht, sondern Eigenschaft der Schichten, entsprechend der Invariante Lücken. ^p09

## Körpertypen

Der Typ folgt dem Verhältnis der Schichten. Promptotyping ist ein Planet mit vollem Schichtaufbau. Die MHDBDB besteht im hiesigen Datenbestand fast nur aus Prüfungen und ist darum eine Sonne, der Ring wird zur Korona. most ist ein Protoplanet, überwiegend Geisterstaub um einen frischen Kern. ^p10

## Bewusst weggelassen

Monde (Nachbarrepos, abhängige Projekte) bleiben draußen, solange keine belastbare Datenquelle existiert; ohne Daten wären sie Dekoration. ^p11
