---
title: Design, Ästhetik Helio
status: draft
updated: 2026-08-08
---

# Design, User-Interface-Ästhetik "Helio"

Team-Entscheidung 2026-08-08, Helio ist die Leitästhetik des Projekts. `helio-mhdbdb.html` ist die Referenz-Gestalt, an der sich alle weiteren Ansichten ausrichten; sie wird ausgearbeitet und verbessert. Die Himmels-Übersicht (`himmel.html`, Nachtwelt) ist als eigenständige Gestalt verworfen ("das braucht niemand") und aus dem Prototyp gelöscht.

Stand der Umsetzung. Jedes der drei Projekte hat seine Helio-Gestalt, MHDBDB als Sonnenbänder der Prüfungen, Promptotyping als Sonnenscheibe der Dokumente, most als Bänder des eigenen Wissensstandes. Die Überseite liegt ebenfalls im Tag. Farbwerte und gemeinsame Komponenten stehen als Tokens in `prototype/helio.css`, die Bänder-, Korn- und Zufallslogik in `prototype/helio.js`; neue Tagseiten bauen darauf auf, statt die Ästhetik nachzubilden. Die Nachtgestalten bleiben als alternatives Gewand erreichbar.

Ausgearbeitet aus dem Artwork der Band The Helio Sequence (Spotify-Künstlerseite, Screenshots vom 2026-08-08). Das Dokument destilliert die Ästhetik in ein anwendbares Designsystem und hält fest, wie sie zu den Designprinzipien von most passt. Es beschreibt eine zweite Gestalt neben dem Nachtgarten-Thema; beide sind Linsen im Sinne von [projekt.md](projekt.md), Abschnitt Metaphern-Linsen.

## Das Motiv

Ein einziges großes Motiv trägt das gesamte Bild, eine weiße Sonnenscheibe über einem Horizont, aufgebaut aus horizontalen Bändern. Wolken- und Wellenformen schneiden in die Bänder hinein und unterbrechen sie. Unter dem Horizont spiegelt sich die Scheibe als Wasserfläche in weiteren, dichter liegenden Bändern. Alles liegt auf einem satten roten Grund und ist von grober Körnung überzogen, die Anmutung ist Risographie oder Siebdruck, zwei Farben, kein Verlaufsreichtum.

Übertragen als Regel, ein Screen hat genau ein Motiv, und das Motiv ist aus einem einzigen konstruktiven Prinzip gebaut (hier horizontale Bänder plus Störung durch Wellenformen). Das deckt sich direkt mit Designprinzip 6 von most, ein visueller Anker pro Screen.

## Farbsystem

Streng zweifarbig plus Grund, jede weitere Farbe ist ein Bruch der Ästhetik.

* Grund `#d81e12` bis `#e8402a`, ein vertikaler, kaum wahrnehmbarer Rot-Verlauf; alternativ eine einzige Fläche `#dd2c1b`.
* Motiv und Typografie `#efeae2`, ein warmes Off-White, nie reines Weiß.
* Zwischenwerte entstehen ausschließlich durch Transparenz oder Körnung des Off-Whites über dem Rot, nie durch eigene Mischtöne.
* Dunkler Akzent nur als Umgebung außerhalb des Bildes (das UI-Chrom im Screenshot ist nahezu schwarz, `#121212`); innerhalb der Fläche gibt es kein Schwarz.

Invertierbare Variante, dieselbe Logik funktioniert mit vertauschten Rollen, Off-White-Grund und rotes Motiv. Für most bleibt die rote Grundfassung der Default, weil sie die höhere Signalwirkung hat.

## Formsprache

1. Horizontale Bänder als einziges Konstruktionsmittel. Kreis, Horizont und Spiegelung entstehen alle aus Streifen unterschiedlicher Höhe und Dichte, keine Outline-Formen, keine Icons.
2. Störung als Information. Wellen- und Wolkenformen, die Bänder unterbrechen, sind der Ort, an dem Bedeutung sitzt; in einer Datenanwendung kann die Störung Datenwerte tragen (Amplitude, Position, Häufigkeit).
3. Verdichtung als Tiefe. Unter dem Horizont liegen die Bänder enger, das erzeugt Raum ohne Perspektive. Dichte der Bänder ist damit ein zweiter Datenkanal.
4. Anschnitt statt Rahmung. Motiv und Schrift laufen über die Bildkante hinaus; nichts ist zentriert eingepasst, die Fläche wirkt wie ein Ausschnitt aus etwas Größerem.

## Körnung

Die gesamte Fläche trägt monochromes Korn, deutlich sichtbar, nicht subtil. Technisch als Canvas-Noise über dem fertigen Bild (deterministisch per Seeded-LCG, wie in den bestehenden Prototypen) oder als SVG-`feTurbulence`-Filter. Das Korn bindet Grund, Motiv und Typografie zu einer Druckfläche zusammen und nimmt harten Kanten die digitale Kälte.

## Typografie

* Eine sehr fette, enge Grotesk, Gewicht 800 bis 900, als einzige Display-Stimme; im Web ohne externe Ressourcen näherungsweise `system-ui` mit `font-weight: 900` und leicht negativem `letter-spacing`.
* Die Schrift ist Teil des Motivs, sie überlagert es in derselben Off-White-Farbe und trägt dasselbe Korn, sie liegt nicht auf einer eigenen Ebene mit Schutzraum.
* Skalierung radikal, die Wortmarke füllt die volle Breite und darf unten oder seitlich angeschnitten sein.
* Fließtext und Metadaten dagegen klein, ruhig, in derselben Farbe mit reduzierter Deckkraft; der Kontrast zwischen radikalem Display und stillem Text ist der typografische Kern.

## Bewegung

Sparsam und aus dem Motiv abgeleitet, die Wellenformen dürfen sehr langsam durch die Bänder wandern, das Korn darf leben (Frame-weises Neuwürfeln bei niedriger Rate). Keine Bewegung der Typografie, kein Parallax. `prefers-reduced-motion` friert alles ein, das Standbild muss vollwertig sein.

## Passung zu most

Die Ästhetik erfüllt die most-Prinzipien auf eigene Weise. Ein Motiv pro Screen ist konstitutiv, die Zweifarbigkeit senkt visuelle Last, die Bänderlogik erlaubt Daten ohne Beschriftungsdichte, und die radikale Display-Typografie liefert das eine Wort pro Einheit, das die Fokusansichten ohnehin verlangen. Gegenüber dem Nachtgarten ist Helio die Tagseite, laut, heiß und flächig, wo der Nachtgarten leise, kühl und tief ist. Als Linse eignet sich Helio für Projekte, deren Vokabular von Signal, Frequenz, Welle oder Serie spricht, etwa Audio-, Zeitreihen- oder Korpusfrequenz-Daten.

## Offen

Barrierefreiheit prüfen. Off-White auf Sattrot hat begrenzten Kontrast. `helio.css` hält kleinen Text deshalb fett und oberhalb der Large-Text-Schwelle, damit das Verhältnis von 3:1 greift; gemessen ist das noch nicht. Zu verifizieren sind die tatsächlichen Kontrastwerte über alle Tagseiten, insbesondere die Stellen mit reduzierter Deckkraft. Was die Messung ergibt, wird hier als verbindliche Regel eingetragen.
