# Projekt most

## Idee

Ein User Interface zur Wissensvermittlung, das auch für stark cannabis-beeinträchtigte Nutzer funktioniert. Arbeitshypothese des Teams, ein UI, das unter diesen Bedingungen funktioniert, funktioniert für alle, weil der Zustand die Alltagszustände Müdigkeit, Ablenkung und Stress in verschärfter Form abbildet (Extremnutzer-Argument, verwandt mit dem Curb-Cut-Effekt). Einschränkung, die These gilt für die Untergrenze der kognitiven Last; Dichte für konzentrierte Nutzer wird über progressive Tiefe erhalten.

## Designprinzipien (Stand Ideation)

1. Eine Idee pro Screen, jede Ansicht in sich verständlich.
2. Das UI hält den Zustand, nie der Kopf des Nutzers.
3. Fadenverlust kostet nichts, Wiedereinstieg an jeder Stelle.
4. Kurze Einheiten mit sofortiger Belohnung, Tiefe optional.
5. Assoziative Navigation nach Neugier, Atome vernetzt.
6. Ruhige, große, klare Gestaltung, ein visueller Anker pro Screen.
7. Einstellbarer oder adaptiver Dichteregler als zentrale Architekturentscheidung.

## Personas

Definiert über kognitive Zustandsachsen (Energie, Aufmerksamkeitsspanne, Arbeitsgedächtnis, Assoziationsneigung, Zeitwahrnehmung, Anspannung), Substanzbegriffe dienen nur als Etiketten.

1. Sativa "Die Assoziative", aktiviert, sprunghaft, neugierig.
2. Indica "Die Versunkene", sediert, langsam, verweilend.
3. Edible "Die Überraschte", Zustand ändert sich während der Nutzung.
4. Microdose "Die Fast-Nüchterne", fast volle Kapazität, will Tempo.
5. CBD "Die Entspannt-Klare", Kontrollgruppe gegen Überanpassung.
6. Anspannung "Die Vorsichtige", überfordert, braucht Vorhersehbarkeit.

## Metaphern-Linsen

Die Visualisierung trennt Struktur von Oberfläche. Die Struktur ist invariant, Wissenseinheiten, ein zeitlicher Fluss, steuernde Regeln, sichtbare Lücken. Die Metapher ist eine austauschbare Linse darüber, Körper (Organ, Ader, Nerv, Geisterorgan) für biologisch Denkende, Netzwerk (Server, API, Route, fehlender Endpoint) für Informatiker, Informationsströme und Kontexte für Informationswissenschaft, Workflow von Forschungsdaten zu Forschungsartefakten für Digital Humanities. Die DH-Linse ist dabei keine Metapher, sondern wörtlich Promptotyping. Die Linsenwahl gehört als Zielgruppen-Entscheidung in den Metaprompt und wird aus dem Kontext des jeweiligen Projekts abgeleitet; Default ist die Linse mit der geringsten metaphorischen Distanz zum Vokabular des Projekts selbst.

## Methode

Persona-Simulationssessions. Der Assistent spielt im Chat die jeweilige Persona und führt ein Gespräch mit dem (selbst beeinträchtigten) Team, stellt sich vor und stellt Fragen. Nach jeder Session entsteht ein sachliches Sessiondokument `session-<persona>.md` in diesem Ordner mit Beobachtungen und abgeleiteten UI-Anforderungen. Das Team ist während der Sessions selbst im Zielzustand, die Gespräche sind damit zugleich informelle Nutzertests.
