---
title: Projektgedächtnis
status: active
updated: 2026-11-10
---

# Journal, rückwärts lesen

## Open

Nothing open.

## 2026-11-14, handoff.md in dieses Journal aufgelöst

Der Operator hat am 2026-11-14 entschieden, dass ein Promptotyping-Repository kein `knowledge/handoff.md` mehr führt, das Journal beginnt mit `## Open`. Die Handoff-Datei enthielt keinen offenen Punkt, übernommen wurde nichts. Ihr Hinweis zum Wiedereinstieg (most ist seit dem 15.10.2026 abgeschlossen, Arbeit beginnt nur mit einem neuen Auftrag, Einstieg ist dann `INDEX.md`) steht schon in `INDEX.md` und `plan.md`. Die Datei ist entfernt, `INDEX.md` führt sie nicht mehr.

## 2026-11-10, Repository-Pflege

Die am 15.10.2026 erhaltenen uncommitteten Änderungen an Prototypen, Daten und Wissensdokumenten sind seit dem 31.10.2026 mit `5a320d4` gesichert und liegen auf `origin/master`. Die README sagt das jetzt so. Die Grounded-Vault-Instanz unter `grounded-vault/` folgt der globalen Regeländerung vom 10.11.2026 und schließt Grokipedia nicht mehr als Quelle aus, ihre Validator-Tests bestehen. `handoff.md` hält den Wiedereinstieg für das abgeschlossene Vorhaben.

## 2026-10-15, Abschluss und Einordnung in Second Brain

Auf Auftrag des Human User wurde der eigenständige Arbeitsstrang beendet. Projektcharta, Spezifikation, Plan und Journal wurden mit der bestehenden Forschungsoberfläche und dem aktuellen Oberflächenmaßstab im Vault verglichen. Second Brain übernimmt in `pruefansicht/knowledge/research.md` die begrenzte Entwicklungserfahrung zum geführten Einstieg, zur Trennung von Daten und visueller Linse und zur sichtbaren Kennzeichnung fehlender Nachweise. Diese Punkte bleiben Gestaltungsansätze beziehungsweise berichtete Beobachtungen.

Die Prototypen, ihr Datenmaterial und das ursprüngliche Versuchsdesign bleiben hier. Bestehende uncommittete Änderungen an Code, Daten und Skripten wurden erhalten. Die im früheren Journal genannten Test- und Browserläufe wurden nicht erneut ausgeführt. Die Verallgemeinerung von hoher kognitiver Last auf alle Nutzenden ist nicht belegt, neue Persona-Simulationen und weitere Varianten wurden nicht beauftragt. Der aktuelle [Plan](plan.md) hebt den bisherigen Ausbauauftrag auf.

## 2026-08-08, dritte Session: Konsolidierung durch Agenten

**Richtung.** Die Entscheidung der zweiten Session wurde durchgezogen. Helio ist die Leitästhetik, die Überseite und alle Standardpfade liegen im Tag, die Nachtgestalten bleiben als alternatives Gewand erreichbar. `himmel.html` ist aus dem Prototyp gelöscht; die nullte Zoomstufe als eigene Seite ist damit Geschichte.

**Engine-Extraktion.** Die drei Tagseiten hatten Farben, Bandzeichner, Kornlogik und Seeded-LCG je für sich. Das liegt jetzt in `prototype/helio.css` (Tokens in `:root`, gemeinsame Komponenten) und `prototype/helio.js` (Canvas-Vermessung, LCG, Schlüssel-Signatur, Kornkacheln, Band, Wellen, Grund, Laden und Statuslogik des Testlaufs). Seitenspezifisches bleibt in der Seite.

**Datenextraktion.** Die eingebetteten Datensätze sind aus den Seiten heraus nach `prototype/daten/` gewandert und werden per fetch geladen. Die Promptotyping-Daten hat `scripts/promptotyping-ingest.mjs` dabei aus dem echten Wissensordner des Repos neu erzeugt, mit `CLAUDE.md` als Regel-Dokument. Der Ingest erfindet nichts, ein Feld ohne Quelle bleibt leer. Damit ist die alte Schuld der pro Seite duplizierten Daten getilgt.

**helio-most.** most bekam seine eigene Tagseite, gespeist aus dem eigenen knowledge-Ordner über denselben Ingest-Weg. Das Projekt zeigt seinen eigenen Wissensstand mit dem Werkzeug, das es baut.

**Nachtgarten-Anbindung.** `mhdbdb-tests.html` liest jetzt ebenfalls die gemeinsame Datenquelle und zeigt den Erfüllungsstand des echten Laufs, damit die Alternative nicht hinter dem Standardpfad zurückbleibt.

**Konvention.** Die Regel "eine selbstständige HTML-Datei ohne externe Ressourcen" ist in der CLAUDE.md im Repo-Root ersetzt worden. Geteilte lokale Geschwisterdateien sind erlaubt und erwünscht, externe Ressourcen bleiben verboten, Daten kommen aus `prototype/daten/*.json` statt als eingebettete Kopie. Der Prototyp braucht deshalb zwingend den lokalen Webserver, weil Module und fetch über `file://` nicht laufen.

## 2026-08-08, zweite Session: Helio als Leitästhetik, echter Testlauf

**Richtungsentscheidung.** Das Team hat `himmel.html` verworfen ("das braucht wirklich niemand") und Helio zur Leitästhetik erklärt; `helio-mhdbdb.html` ist die Referenz-Gestalt, die ausgearbeitet wird. Festgehalten in design.md und plan.md; die Überseite führt nicht mehr in den Himmel, bei Promptotyping ist die Helio-Scheibe der Standardpfad geworden.

**Echter Testlauf als Datenquelle (Plan-Punkt 1).** Die vollständige Playwright-Suite der MHDBDB lief lokal; das Ergebnis war real rot, gefallen sind ausschließlich die beiden Paritäts-Specs `position-parity` und `normalization-parity` (Python gegen JavaScript), alle übrigen 29 Spec-Dateien grün. `scripts/testlauf-ingest.mjs` aggregiert den JSON-Report pro Spec-Datei nach `prototype/daten/testlauf.json`. `helio-mhdbdb.html` lädt die Datei per fetch; ohne Datei behauptet die Seite weiterhin nichts. Codierung im Band, ein gefallener Test reißt sein Band am Ort seiner Störung, flaky kerbt, komplett übersprungen wird durchscheinend; sobald Laufdaten da sind, darf der dekorative Sinus-Pinch Bänder nur noch ausdünnen, nie mehr trennen, damit der Riss eindeutig Fehler bedeutet. Status steht zusätzlich als Text in Untertitel, Zeilen, Kategorien und Fokus (nie Bedeutung über Form allein). Browser-verifiziert über alle drei Ansichten.

## 2026-08-08, Gründungssession

Alles Folgende entstand in einer einzigen Session des Teams (zwei Personen, selbst im Zielzustand) mit dem Assistenten. Reihenfolge rückwärts.

**Grounded Vault.** Instanziierung des Templates DigitalHumanitiesCraft/grounded-vault als `grounded-vault/` im Repo. Der gesamte Wissensstand liegt dort provenance-vollständig, acht Quellrepräsentationen mit Block-Ankern, fünf CSL-Referenzen, dreizehn Distillate, sechzehn Claims (alle grounded) unter drei Topics, drei Report-Kapitel mit siebzehn geankerten Fußnoten und sechs Posits. Validator und Tests fehlerfrei, vom Orchestrator nachgeprüft. Zitat-Check ergab, dass per Fetch gelieferte Zitate auf Zeichenebene unzuverlässig sind; drei Zitate wurden auf die verifizierte Spanne gekürzt. Machine Review steht aus, nichts trägt einen Status über grounded.

**Vault-Ausbau.** Der knowledge-Ordner wurde zum vollständigen Promptotyping-Vault ausgebaut (INDEX, specification, architecture, journal, plan, CLAUDE.md im Root), nachdem der most-Himmelskörper seine eigenen Geisterdokumente angezeigt hatte.

**Textstraffung Helio-Scheibe.** Die Fokusansicht der Promptotyping-Scheibe stapelte fünf Textblöcke; reduziert auf Wort, einen Satz, Kennzahlen, Diagnose, ergänzt um eine formale Miniatur der Scheibe mit leuchtendem Band. Regel daraus in die Spezifikation übernommen, höchstens ein Untertitel pro Ansicht.

**Überforderungs-Refactor.** Das Team meldete Überforderung durch acht gleichrangige Seiten. Die Überseite wurde zum geführten Weg (ein Standardpfad pro Projekt, Alternativen eingeklappt), jede Seite bekam einen festen Rückweg links oben. Befund festgehalten, das Projekt hatte gegen sein eigenes Prinzip 1 verstoßen, eine Idee pro Screen.

**Himmel und Planet.** Schichtenmodell in planet.md hergeleitet (Begründungsmaßstab, geteilte Eigenschaft mit dem planetaren Gegenstück; Kategorien aus der Konventions-Klassifikation deklarativ, prozessual, handlungsanweisend). Zwei Opus-Agenten bauten himmel.html (drei Körper aus echten Daten) und promptotyping-planet.html (begehbarer Querschnitt). Der Ring bleibt gestrichelt, kein Testlauf, keine behauptete Gesundheit.

**Zielgruppen.** Team bestätigte die Helio-Ästhetik als Treffer der Vorgabe (BWL-Klarheit mal künstlerische Körperbildsprache) und benannte Entrepreneurs und kritische Feministinnen als Hauptzielgruppen; in projekt.md festgehalten.

**Helio-Ausbau.** Aus zwei Screenshots eines Band-Artworks wurde die Helio-Ästhetik als design.md destilliert (zweifarbig, Bänder plus Störung, Korn, 900er-Grotesk). Drei Umsetzungen, Überseite, helio-mhdbdb.html (Kategorien als Sonnenbänder, Testanzahl in Höhe und Dichte), helio-promptotyping.html (Dokumente als Scheibenbänder, Bandstärke nach Umfang, Geister als offene Stellen, Regeln als Schnitt). Commit a0b66c8, davor e9d56b5.

**Werkstrecke und Nachtgarten-Refactoring.** Ein Agent baute die wörtliche DH-Linse (Daten fließen durch Dokumente zu Artefakten, Regeln als Schleuse, Lücken versickern), ein zweiter setzte die sechs Punkte der Browser-Selbstinspektion im Nachtgarten um (statische 44px-Hitboxen, gestreute Konstellation, Schichtung, Kontrast, klickbare Punkte, Gartenbalance).

**Metaphern-Linsen.** Diskussion, dass der Blutkreislauf Biologen dient, Informatiker aber Netzwerke, Informationswissenschaftler Ströme und DH-Leute Workflows denken; die DH-Linse ist wörtlich Promptotyping. Linsenwahl als Metaprompt-Entscheidung in projekt.md festgeschrieben.

**Nachtgarten und Organismus.** Erste Gestalten, MHDBDB-Tests als Blutbild-Garten (Commit 545f230 fixte das fehlende charset-Meta, das lokal Mojibake erzeugte), Promptotyping-Wissensbasis als Körper mit Organen, Zeitader, Nervenfäden und Geisterorganen; Überseite zuerst projektorientiert restrukturiert (Commit 4614a1b).

**Grounding.** Die erste Persona-Simulation wurde vom Team verworfen (zu flüssig, Interviewhaltung, Comedy-Tropen). Recherche und grounding-kommunikation.md mit acht Simulationsregeln auf empirischer Basis.

**Gründung.** Idee, ein Wissens-UI, das auch sehr bekifft funktioniert und deshalb für alle (Extremnutzer-Argument). Sieben Designprinzipien, sechs Personas über kognitive Zustandsachsen, Notation 🌿 für die Persona, [**] für die nüchterne Führung.
