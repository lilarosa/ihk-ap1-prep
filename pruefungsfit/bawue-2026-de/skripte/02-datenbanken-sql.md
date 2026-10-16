# Datenmodellierung und SQL

Mündliche Kurzfragen mit Musterantworten. Die vollständigen schriftlichen Aufgaben stehen im Aufgabenheft. Nach der Frage folgen im Audio vier Sekunden Denkpause.

## 02.01 CSV in ein relationales Modell überführen

Frage: Wie zerlegen Sie wiederholte Bestell-, Artikel- und Herstellerdaten in Tabellen?

Musterantwort: Ich lege Hersteller, Artikel, Bestellung und Position getrennt an. Die Position verweist auf Bestellung und Artikel; der Artikel verweist auf den Hersteller. Jede Tabelle hat einen eindeutigen Primärschlüssel. Der bei einem Verkauf tatsächlich vereinbarte Preis bleibt in der Position. So verändert ein späterer Artikelpreis nicht die historische Rechnung.

## 02.02 Schlüssel, Kardinalität und doppelter Wert

Frage: Was unterscheidet Primärschlüssel und Fremdschlüssel, und warum scheitert eine doppelte Gerätekennung?

Musterantwort: Der Primärschlüssel identifiziert einen Datensatz eindeutig und darf nicht fehlen. Der Fremdschlüssel verweist auf einen vorhandenen Datensatz einer referenzierten Tabelle. Eine Person kann viele Geräte haben, jedes Gerät gehört hier genau einer Person. Eine bereits vorhandene Primärschlüsselkennung darf nicht erneut eingefügt werden. Ein neues Gerät braucht eine freie Kennung; Änderungen am bestehenden Gerät erfolgen mit Update.

## 02.03 SELECT, LIKE und Sortierung

Frage: Wie suchen und sortieren Sie Kunden nach Namensanfang und Ort?

Musterantwort: Select legt die auszugebenden Spalten fest, From die Tabelle und Where die Zeilenbedingung. Für Namen mit Anfangsbuchstaben B verwende ich Like mit B und anschließendem Prozentzeichen. Das Prozentzeichen steht für beliebig viele weitere Zeichen. Order by bestimmt die Sortierung: Asc ist aufsteigend, Desc absteigend.

## 02.04 COUNT und fehlende E-Mail

Frage: Was ist der Unterschied zwischen null, leerem Text und der Zählung aller Zeilen?

Musterantwort: In SQL bezeichnet null einen fehlenden beziehungsweise unbekannten Wert. Ich prüfe ihn mit Is null. Leerer Text ist ein eigener vorhandener Wert und wird mit zwei einfachen Anführungszeichen verglichen. Count Stern zählt alle vier Datensätze, Count der E-Mail-Spalte nur die drei Werte ohne SQL-null. Wenn beide Arten als fehlend gelten, verbinde ich die Prüfungen mit Oder.

## 02.05 Bildverwaltung mit fünf SQL-Anweisungen

Frage: Welche SQL-Bausteine brauchen Sie für eine einfache Bildverwaltung?

Musterantwort: Delete mit einer eindeutigen Where-Bedingung entfernt den Datenbankeintrag. Sum summiert die Größen. Count Stern zählt die Bilder. Absteigendes Sortieren nach dem Zeitstempel zeigt die neuesten Bilder zuerst. Insert fügt einen Datensatz hinzu. Wichtig ist die Trennung: Das Löschen eines Metadatensatzes entfernt nicht automatisch die Bilddatei auf dem Datenträger.

## 02.06 JOIN und eindeutiges UPDATE

Frage: Wie verbinden Sie Gerät und Mitarbeiter, und wie begrenzen Sie eine Änderung auf ein Gerät?

Musterantwort: Ich verbinde den Fremdschlüssel im Gerät mit dem Primärschlüssel im Mitarbeiter. Danach filtere ich die gewünschte Abteilung. Für eine einzelne Geräteänderung nutze ich Update mit der eindeutigen Gerätekennung in der Where-Bedingung. Fehlt diese Bedingung, betrifft die Änderung alle Zeilen der Tabelle.

## 02.07 Gruppierung als Aufbauübung

Frage: Worin unterscheiden sich Where und Having bei einer Ticketstatistik?

Musterantwort: Where wählt zunächst die einzelnen geschlossenen Tickets aus. Group by fasst sie nach Gerätekennung zusammen. Count zählt, Sum addiert die Minuten. Having prüft anschließend die fertigen Gruppen, etwa mindestens zwei geschlossene Tickets. Das ist eine Aufbauübung, keine Behauptung über die Häufigkeit dieser Syntax in den alten Landesprüfungen.

## 02.08 JSON, XML, CSV und n:m-Beziehung

Frage: Wie unterscheiden sich Datenformate und wie bilden Sie viele Mitarbeiter in vielen Projekten ab?

Musterantwort: JSON verwendet Schlüssel und Werte, Text steht in doppelten Anführungszeichen. CSV ist ein tabellarisches Austauschformat mit vereinbartem Trennzeichen. XML verwendet strukturierende Elemente und Attribute. Eine Viele-zu-viele-Beziehung braucht eine Zuordnungstabelle. Sie enthält beide Fremdschlüssel; ihre Kombination kann der Primärschlüssel sein, damit jede Zuordnung nur einmal vorkommt.
