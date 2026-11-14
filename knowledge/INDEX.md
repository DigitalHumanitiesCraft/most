---
title: Wegweiser durch den knowledge-Ordner
status: complete
updated: 2026-10-15
---

# INDEX, Wegweiser

most ist seit dem 15.10.2026 als eigenständiges Vorhaben abgeschlossen. Second Brain übernimmt die begrenzten Gestaltungsansätze und berichteten Entwicklungsbeobachtungen. Der knowledge-Ordner bewahrt den Ausgangsversuch und seine Quellen, Prototypen bleiben lokal erhalten. Jedes Dokument beantwortet genau eine Frage; wer etwas sucht, geht über diese Tabelle.

| Dokument | Frage | Konventionsname |
|---|---|---|
| [projekt.md](projekt.md) | Was ist dieses Projekt, für wen, mit welchem Ziel? | project.md |
| [specification.md](specification.md) | Was soll das UI leisten, woran wird das geprüft? | specification.md |
| [architecture.md](architecture.md) | Wie sind die Prototypen technisch gebaut? | architecture.md |
| [design.md](design.md) | Welche Ästhetik gilt, mit welchen Regeln? | design.md |
| [planet.md](planet.md) | Wie wird ein Projekt als Himmelskörper repräsentiert? | Fachdokument |
| [grounding-kommunikation.md](grounding-kommunikation.md) | Worauf stützt sich die Persona-Simulation empirisch? | Fachdokument |
| [journal.md](journal.md) | Was ist offen, und wie sind wir hierhin gekommen? | journal.md, rückwärts lesen |
| [plan.md](plan.md) | Was wurde abgeschlossen und was bleibt ungetestetes Ausgangsmaterial? | plan.md |

Die Verhaltensregeln für Agenten stehen in der [CLAUDE.md](../CLAUDE.md) im Repo-Root, der Einstieg für Außenstehende in der [README.md](../README.md).

## Lese-Heuristik

* Der Output wirkt am Projektziel vorbei, projekt.md lesen.
* Eine Seite verletzt ein Prinzip oder Akzeptanzkriterium, specification.md lesen.
* Eine technische Annahme über die Prototypen ist unklar, architecture.md lesen.
* Eine Gestaltungsentscheidung steht an, design.md lesen; bei Himmelskörpern zusätzlich planet.md.
* Eine Persona spricht unglaubwürdig, grounding-kommunikation.md lesen.
* Eine frühere Entscheidung ist nicht nachvollziehbar, journal.md rückwärts lesen.
* Der nächste Schritt ist unklar, plan.md lesen.

## Begriffe

* **Gestalt**, eine konkrete visuelle Ausprägung des generalisierten UI für ein Projekt (Nachtgarten, Organismus, Werkstrecke, Helio, Planet).
* **Linse**, die Metapher einer Gestalt; austauschbar über der invarianten Struktur, gewählt nach geringster metaphorischer Distanz zum Vokabular des Projekts.
* **Invarianten**, die vier immer gezeigten Dinge, Einheiten, Fluss, Regeln, Lücken.
* **Nullte Zoomstufe**, die Ansicht vor aller Interaktion; diese Rolle trägt die geführte Überseite. Die frühere Himmelsansicht über allen Projekten ist verworfen und gelöscht.
* **Geisterdokument**, ein Dokument, dessen Trigger erfüllt ist, das aber fehlt; wird immer sichtbar gemacht.
* **Dichteregler**, die zentrale Architekturentscheidung, Informationsdichte einstellbar oder adaptiv zu halten.
