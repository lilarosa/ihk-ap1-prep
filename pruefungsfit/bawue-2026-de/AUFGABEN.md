# AP1 Baden-Württemberg - Prüfungsfit auf Deutsch

## 64 Aufgaben ohne Lösungen

Eigene Trainingsaufgaben, keine offiziellen Prüfungsaufgaben und keine Vorhersage. Stand: 16.10.2026. Quellen und Abgrenzung: [QUELLEN.md](QUELLEN.md).

Je Aufgabe: 8 interne Trainingspunkte, vier Bewertungsanker mit je 2 Punkten. P1 = Kernübung aus verfügbaren Landesunterlagen; P2 = zusätzliche Vertiefung. Kein kompletter 90-Minuten-Satz.

## Programmierung, Algorithmen und Tests

### 01.01 Lineare Suche mit Rückgabewert (P1, 8 Punkte)

Entwickeln Sie die Funktion enthaelt(seriennummern, gesucht). Das Array enthält Zeichenketten. Die Funktion gibt genau dann true zurück, wenn gesucht exakt einem Eintrag entspricht. Für ein leeres Array ist false zurückzugeben. Verwenden Sie detaillierten Pseudocode oder eine im Unterricht gelernte Sprache. Die Daten sind nicht null.

**Ihre Lösung:**

____________________________________________________________

### 01.02 Durchschnitt: drei typische Fehler (P1, 8 Punkte)

Die Methode soll den exakten Durchschnitt als Gleitkommazahl liefern. Ein leeres Array soll 0.0 ergeben. Finden und erklären Sie drei Fehler und schreiben Sie die korrigierte Methode.
```java
static double mittelwert(int[] daten) {
    int summe = 0;
    for (int i = 0; i <= daten.length; i++) {
        summe = daten[i];
    }
    return summe / daten.length;
}
```
Zusätzlich: Welchen korrekten Wert erwarten Sie für [3, 6, 8, 9]?

**Ihre Lösung:**

____________________________________________________________

### 01.03 Schreibtischtest (P1, 8 Punkte)

Führen Sie den folgenden Code von Hand aus. Arrayindizes beginnen bei 0. Notieren Sie nach jeder Runde i, werte[i], summe und anzahl sowie die Endausgabe.
```text
werte = [7, 14, 20, 5]
summe = 0
anzahl = 0
FÜR i = 0 BIS 3 EINSCHLIESSLICH
    WENN werte[i] >= 10
        summe = summe + werte[i]
        anzahl = anzahl + 1
AUSGABE summe, anzahl
```

**Ihre Lösung:**

____________________________________________________________

### 01.04 CSV: fehlenden Preis erkennen (P1, 8 Punkte)

Jede Zeile hat exakt vier Felder: position_id;artikel_id;menge;preis. Es gibt keine Kopfzeile und keine Trennzeichen innerhalb von Feldinhalten. Leere Felder müssen beim Aufteilen erhalten bleiben. Leerzeichen am Feldrand werden entfernt. Fehlend bedeutet: Preis ist leer oder exakt NULL. Alle Zeilen sind strukturell gültig.
```text
P1;A17;2;49.90
P2;A18;1;NULL
P3;A17;3;
P4;A19;1;0
```
Schreiben Sie fehltPreis(zeilen, artikelId). Die Funktion soll true liefern, sobald eine passende Artikel-ID einen fehlenden Preis hat, sonst false. Nennen Sie die Ergebnisse für A17, A18 und A19.

**Ihre Lösung:**

____________________________________________________________

### 01.05 Loginlogik ohne vorzeitige Fehlerrückgabe (P1, 8 Punkte)

Ein Array enthält Benutzerobjekte mit name und aktiv. Entwickeln Sie darfAnmelden(benutzer, name): true genau dann, wenn ein Benutzer mit exakt diesem Namen gefunden wird und aktiv=true ist. Benutzernamen sind eindeutig. Leeres Array: false. Schreiben Sie Pseudocode und erläutern Sie, warum eine Rückgabe false beim ersten fremden Namen falsch wäre. Eine Passwortprüfung ist nicht Teil dieser vereinfachten Aufgabe.

**Ihre Lösung:**

____________________________________________________________

### 01.06 Älteste Dateien mit minimaler Löschanzahl (P1, 8 Punkte)

Eine Liste ist bereits nach Aufnahmezeit aufsteigend sortiert: älteste Datei zuerst. Gesamtgröße: 1000 MB, Dateigrößen: [120, 180, 250, 450] MB. Es gilt dezimale Rechnung. Ziel: verbleibende Größe strikt kleiner als 700 MB. Sie dürfen jeweils nur die älteste verbleibende Datei löschen. Alle Größen sind positiv.
a) Welche Dateien werden gelöscht, wie viel bleibt?
b) Schreiben Sie einen Algorithmus für diese Regel. Verfügbare Funktionen: gesamtgroesse(), istLeer(), aeltesteDatei(), groesse(datei), loeschen(datei).

**Ihre Lösung:**

____________________________________________________________

### 01.07 Tarif in ein Struktogramm übersetzen (P1, 8 Punkte)

Ein Vor-Ort-Service ist für Entfernungen von 0 bis einschließlich 40 km möglich. Außerhalb dieses Bereichs wird -1 zurückgegeben. Grundpreis: 20 EUR bis einschließlich 10 km, darüber 35 EUR. Hinzu kommen bei gültigen Eingaben 0.60 EUR je Kilometer.
Erstellen Sie ein Struktogramm oder detaillierten Pseudocode für preis(km). Bestimmen Sie die Ergebnisse für 10, 11 und 41 km.

**Ihre Lösung:**

____________________________________________________________

### 01.08 Grenzwerttest und Fehlerarten (P1, 8 Punkte)

Verwenden Sie die Funktion aus 01.07. Geben Sie für die Eingaben -1, 0, 10, 11, 40 und 41 die erwarteten Ergebnisse an. Ordnen Sie außerdem zu: fehlende schließende Klammer; Zugriff auf Index array.length; falscher Vergleich km < 10 statt km <= 10. Unterscheiden Sie Syntax-, Laufzeit- und logischen Fehler.

**Ihre Lösung:**

____________________________________________________________

## Datenmodellierung und SQL

### 02.01 CSV in ein relationales Modell überführen (P1, 8 Punkte)

Gegeben ist eine flache Datei mit position_id, bestellung_id, bestelldatum, artikel_id, artikelname, hersteller_id, herstellername, menge und einzelpreis. Jede Position gehört zu genau einer Bestellung und genau einem Artikel. Eine Bestellung hat mehrere Positionen. Ein Artikel gehört zu einem Hersteller. Der Einzelpreis ist der historische Verkaufspreis dieser Position und kann je Bestellung abweichen.
Entwerfen Sie vier Tabellen mit Attributen, Primär- und Fremdschlüsseln. Begründen Sie den Speicherort des Einzelpreises.

**Ihre Lösung:**

____________________________________________________________

### 02.02 Schlüssel, Kardinalität und doppelter Wert (P1, 8 Punkte)

Es gelten Mitarbeiter(m_id PK, name) und Geraet(g_id PK, bezeichnung, m_id FK NOT NULL). Ein Mitarbeiter kann mehrere Geräte oder keines besitzen; ein Gerät gehört genau einer Person. Die Kennung g_id=17 ist bereits vorhanden.
a) Erklären Sie Primär- und Fremdschlüssel und die Beziehung.
b) Warum scheitert ein zweites INSERT mit g_id=17? Nennen Sie eine fachlich passende Korrektur.

**Ihre Lösung:**

____________________________________________________________

### 02.03 SELECT, LIKE und Sortierung (P1, 8 Punkte)

Verwenden Sie Kunde(k_id, name, email, ort_id). Schreiben Sie zwei Abfragen:
a) k_id, name und email aller Kunden, deren name mit B beginnt, nach k_id aufsteigend.
b) Nur name aller Kunden aus ort_id=4, alphabetisch absteigend.
Alle Namen sind nicht NULL. Groß-/Kleinschreibung und Sortierreihenfolge folgen der Datenbankkonfiguration.

**Ihre Lösung:**

____________________________________________________________

### 02.04 COUNT und fehlende E-Mail (P1, 8 Punkte)

In Kunde stehen vier Datensätze: (1,'Berg','a@beispiel.test',4), (2,'Blau',NULL,4), (3,'Cem','',7), (4,'Dora','d@beispiel.test',4). Spaltenfolge wie in 02.03.
a) Zählen Sie alle Kunden mit SQL.
b) Listen Sie Kunden ohne E-Mail auf; in dieser Aufgabe gelten NULL und leerer Text beide als fehlend.
c) Welchen Wert liefern COUNT(*) und COUNT(email)?

**Ihre Lösung:**

____________________________________________________________

### 02.05 Bildverwaltung mit fünf SQL-Anweisungen (P1, 8 Punkte)

Tabelle Bild(dateiname PK, bytes, aufgenommen_am INTEGER). Zeitstempel sind ganze Sekunden; dateiname ist eindeutig.
Schreiben Sie jeweils eine unabhängige SQL-Anweisung: Datei probe.png aus der Tabelle entfernen; Gesamtgröße ermitteln; Anzahl ermitteln; alle Bilder mit neuestem zuerst auflisten; Datei neu.png mit 64000 Byte und Zeitstempel 1800000123 ergänzen. Die Tabelle ist für die Summenfrage nicht leer. Erklären Sie, ob ein DELETE hier automatisch die Bilddatei auf dem Datenträger löscht.

**Ihre Lösung:**

____________________________________________________________

### 02.06 JOIN und eindeutiges UPDATE (P2, 8 Punkte)

Es gelten Mitarbeiter(m_id PK, name, abteilung) und Geraet(g_id PK, bezeichnung, m_id FK). Schreiben Sie:
a) Gerätebezeichnung und Mitarbeitername für Geräte der Abteilung Support mit JOIN.
b) Ändern Sie ausschließlich bei Gerät 71 die Bezeichnung auf Notebook mobil.
c) Erklären Sie die Folge, wenn bei b) WHERE entfällt.

**Ihre Lösung:**

____________________________________________________________

### 02.07 Gruppierung als Aufbauübung (P2, 8 Punkte)

Aufbauübung: Ticket(t_id PK, g_id FK, status, minuten). Ermitteln Sie je g_id die Anzahl geschlossener Tickets und deren gesamte Bearbeitungszeit. Es sollen nur Geräte mit mindestens zwei geschlossenen Tickets erscheinen. Verwenden Sie GROUP BY und HAVING. Nicht als belegte Häufigkeit in den BaWü-Kernprüfungen werten.

**Ihre Lösung:**

____________________________________________________________

### 02.08 JSON, XML, CSV und n:m-Beziehung (P1, 8 Punkte)

a) Stellen Sie Gerät mit g_id=71, bezeichnung=Notebook und ram_gb=16 als gültiges JSON dar.
b) Nennen Sie je ein Merkmal von CSV und XML.
c) Ein Mitarbeiter kann viele Projekte bearbeiten, ein Projekt viele Mitarbeiter. Entwerfen Sie die zusätzliche Zuordnungstabelle mit Schlüsseln. Jeder Mitarbeiter soll je Projekt nur einmal zugeordnet werden.

**Ihre Lösung:**

____________________________________________________________

## Netzwerkkonfiguration und Diagnose

### 03.01 Vollständige IPv4-Konfiguration (P1, 8 Punkte)

Ein LAN verwendet 192.168.40.0/24. Router: 192.168.40.1, DNS: 192.168.40.53. Die Adresse 192.168.40.80 ist garantiert frei und für den neuen Client reserviert. Geben Sie IP-Adresse, Subnetzmaske, Standardgateway und DNS-Server an und erläutern Sie die Aufgaben der letzten beiden Werte.

**Ihre Lösung:**

____________________________________________________________

### 03.02 Subnetz berechnen (P2, 8 Punkte)

Für 192.168.50.150/26 sind Subnetzmaske, Netzadresse, Broadcastadresse, nutzbarer Hostbereich und Anzahl nutzbarer Hostadressen zu bestimmen. Gehen Sie von einem gewöhnlichen IPv4-Broadcast-Subnetz aus. Geben Sie den Rechenweg an.

**Ihre Lösung:**

____________________________________________________________

### 03.03 DNS oder Gateway? (P1, 8 Punkte)

a) Ein Client erreicht einen bekannten externen Testserver über seine IP, aber nicht über dessen korrekten Hostnamen. Nennen Sie eine naheliegende Ursache, ein Prüfwerkzeug und eine Maßnahme.
b) Ein anderer Client erreicht lokale Geräte, aber keine externen IP-Adressen. Als Gateway ist fälschlich seine eigene Client-IP eingetragen. Erklären und beheben Sie diesen Fehler.

**Ihre Lösung:**

____________________________________________________________

### 03.04 MAC und IP auf dem Weg zum Internet (P1, 8 Punkte)

Ein PC sendet ein IPv4-Paket zu einem Webserver außerhalb seines Subnetzes. Betrachten Sie den Ethernet-Frame auf dem ersten LAN-Abschnitt zwischen PC und Default-Router, vor NAT. Unterscheiden Sie Quell-MAC, Ziel-MAC, Quell-IP und Ziel-IP. Erklären Sie, ob als Ziel-MAC die MAC des Webservers oder des lokalen Routers verwendet wird.

**Ihre Lösung:**

____________________________________________________________

### 03.05 IPv6: Typ, Kurzform und Konfiguration (P1, 8 Punkte)

a) Kürzen Sie 2001:0db8:0042:0007:0000:0000:0000:0080.
b) Ordnen Sie fe80::a und 2001:db8:42:7::80 den Adressarten zu. Der Bereich 2001:db8::/32 ist hier ausdrücklich ein Dokumentationsbereich und wird nicht im öffentlichen Internet geroutet.
c) Im Beispiel-LAN 2001:db8:42:7::/64 sind ::80 für den Client und ::1 für den Router reserviert; DNS ist 2001:db8:42:7::53. Geben Sie die vollständige Beispielkonfiguration an.

**Ihre Lösung:**

____________________________________________________________

### 03.06 Dual Stack und WLAN-Segmentierung (P1, 8 Punkte)

Erläutern Sie Dual Stack und Tunneling. Begründen Sie anschließend zwei Vorteile eines eigenen Gast-WLAN-Subnetzes. Nennen Sie zusätzlich die technische Maßnahme, ohne die ein eigenes Subnetz allein noch keine wirksame Zugriffssperre garantiert.

**Ihre Lösung:**

____________________________________________________________

### 03.07 WLAN-Leistung und Frequenzwahl (P1, 8 Punkte)

Ein Access Point wirbt mit einer Bruttodatenrate. Im Alltag wird nur ungefähr die Hälfte gemessen. Erläutern Sie zwei mögliche Gründe. Vergleichen Sie 2.4 und 5 GHz bezüglich Reichweite und Störanfälligkeit. Begründen Sie eine Auswahl für einen dicht belegten Besprechungsraum mit ausreichender AP-Abdeckung. Wi-Fi 6 entspricht hier IEEE 802.11ax; die Bezeichnung allein garantiert keine konkrete Nutzdatenrate.

**Ihre Lösung:**

____________________________________________________________

### 03.08 Strukturierte Diagnose und Netzpläne (P1, 8 Punkte)

Ein Arbeitsplatz ist nicht erreichbar. Nennen Sie vier Diagnoseebenen mit je einer konkreten Prüfung: physischer Link, IP-Konfiguration, Routing, Namensauflösung. Erklären Sie danach den Unterschied zwischen logischem und physischem Netzwerkplan. Formulieren Sie keine Diagnose nur aus einem einzelnen fehlgeschlagenen Ping.

**Ihre Lösung:**

____________________________________________________________

## Schutzbedarf, Datenschutz und Wiederherstellung

### 04.01 CIA mit Folgen im konkreten Betrieb (P1, 8 Punkte)

Ein Systemhaus verwaltet Gehaltsdaten, Kundenaufträge und tägliche Lieferpläne. Erläutern Sie Vertraulichkeit, Integrität und Verfügbarkeit jeweils mit einem passenden Schaden und einer wirksamen Maßnahme. Antworten Sie in ganzen Sätzen.

**Ihre Lösung:**

____________________________________________________________

### 04.02 Schutzbedarf und Maximumprinzip (P1, 8 Punkte)

Ein Server betreibt zwei Anwendungen. Für Vertraulichkeit ist Anwendung A normal und B hoch eingestuft. Für Integrität sind beide hoch, für Verfügbarkeit A sehr hoch und B normal. Bestimmen Sie den vererbten Schutzbedarf je Grundwert nach dem Maximumprinzip und erläutern Sie, warum nicht einfach ein Mittelwert gebildet wird. Es gibt keine besonderen Verteilungs- oder Kumulationseffekte.

**Ihre Lösung:**

____________________________________________________________

### 04.03 Ransomware beurteilen (P1, 8 Punkte)

Ein Erpressungstrojaner verschlüsselt den Dateiserver. Zusätzlich droht der Angreifer mit Veröffentlichung kopierter Daten. Bewerten Sie die Folgen für alle drei Schutzziele. Beschreiben Sie zwei sinnvolle erste Schritte, ohne Beweismittel unnötig zu zerstören.

**Ihre Lösung:**

____________________________________________________________

### 04.04 Backup, RAID, RTO und RPO (P1, 8 Punkte)

Beurteilen Sie die Aussage: Ein gespiegeltes Laufwerk ersetzt eine Datensicherung. Entwerfen Sie anschließend ein knappes 3-2-1-Konzept und erläutern Sie RTO und RPO. Die Firma toleriert höchstens zwei Stunden Datenverlust und vier Stunden bis zur Wiederaufnahme.

**Ihre Lösung:**

____________________________________________________________

### 04.05 Firewall und minimale Rechte (P1, 8 Punkte)

Eine Filiale hat Internetzugang, Gäste-WLAN und interne Buchhaltungsgeräte. Erläutern Sie drei passende Schutzmaßnahmen: Firewallregel, rollenbasierte Berechtigungen und Mehrfaktor-Authentifizierung. Beschreiben Sie jeweils die begrenzte Gefahr. Begründen Sie, warum eine Firewall allein kein vollständiges Sicherheitskonzept ist.

**Ihre Lösung:**

____________________________________________________________

### 04.06 Personenbezogene Daten und sichere Altgeräte (P1, 8 Punkte)

Ordnen Sie Mitarbeitergeburtsdatum, veröffentlichte Kantinenpreise und unveröffentlichte Produktkonstruktion begründet ein: personenbezogen, öffentliche nicht personenbezogene Information oder Geschäftsgeheimnis unter den entsprechenden Schutzvoraussetzungen. Nennen Sie außerdem drei Schritte vor der Weitergabe eines gebrauchten Firmenlaptops.

**Ihre Lösung:**

____________________________________________________________

### 04.07 Videoüberwachung im Fallbeispiel (P1, 8 Punkte)

Ein Laden möchte dauerhaft den gesamten angrenzenden Gehweg filmen und Aufnahmen unbegrenzt aufbewahren. Erläutern Sie vier Gesichtspunkte für die datenschutzgerechte Prüfung und nennen Sie eine unmittelbar geeignete Anpassung. Ein Hinweisschild allein soll als angebliche Erlaubnis bewertet werden.

**Ihre Lösung:**

____________________________________________________________

### 04.08 Verschlüsselung, Hash und SQL-Injection (P2, 8 Punkte)

Unterscheiden Sie reversible Verschlüsselung und kryptografisches Hashing. Erklären Sie, wie Passwörter geeignet gespeichert werden, und nennen Sie eine wirksame technische Maßnahme gegen SQL-Injection. Begründen Sie, warum bloßes Sperren einzelner Sonderzeichen nicht genügt.

**Ihre Lösung:**

____________________________________________________________

## Rechnen, Hardware und Verfügbarkeit

### 05.01 SLA-Verfügbarkeit prüfen (P1, 8 Punkte)

Ein Vertrag fordert 99.8 Prozent Verfügbarkeit im Kalenderjahr. Rechnen Sie mit 365 Tagen und ohne ausgeschlossene Wartungsfenster. Ausfälle dauern insgesamt 20 Stunden. Ermitteln Sie die maximal zulässige Ausfallzeit in Stunden und beurteilen Sie den Vertrag. Zusätzlich gilt je Störung eine Entstörzeit von höchstens 6 Stunden; ein einzelner Ausfall dauert 7 Stunden. Bewerten Sie dieses Kriterium gesondert.

**Ihre Lösung:**

____________________________________________________________

### 05.02 RAID-Kapazität und Ausfalltoleranz (P1, 8 Punkte)

Ein System hat acht gleiche Festplatten zu je 12 TB, keine Hot-Spare. Berechnen Sie nutzbare Kapazität für RAID 5 und RAID 10 ohne Formatierungs- und Verwaltungsverluste. Erläutern Sie anschließend die mögliche Ausfalltoleranz beider Varianten. Für RAID 10 werden vier gespiegelte Paare gestriped.

**Ihre Lösung:**

____________________________________________________________

### 05.03 Energiekosten berechnen (P1, 8 Punkte)

Zwölf Arbeitsplätze verbrauchen je 90 W und laufen an 210 Tagen jeweils 8 Stunden. Ein Server verbraucht 180 W und läuft 365 Tage rund um die Uhr. Strompreis: 0.32 EUR/kWh. Alle Werte sind konstante Wirkleistungen. Berechnen Sie Arbeitsplatzkosten, Serverkosten und Gesamtkosten pro Jahr. Runden Sie erst die Geldbeträge auf Cent.

**Ihre Lösung:**

____________________________________________________________

### 05.04 PoE und Stromstärke (P1, 8 Punkte)

Ein Access Point benötigt am Gerät 21 W bei 48 V. Ein angebotener PoE-Port liefert laut Datenblatt höchstens 12.95 W am Endgerät, ein PoE+-Port 25.5 W. Wählen Sie den geeigneten Port und berechnen Sie die Stromstärke in mA. Zehn APs sollen gleichzeitig versorgt werden: Welche weitere Angabe des Switches ist zu prüfen?

**Ihre Lösung:**

____________________________________________________________

### 05.05 Video-Datenrate und Kompression (P2, 8 Punkte)

Eine Kamera liefert 1280*720 Pixel, 24 Bit je Pixel, 25 Bilder pro Sekunde. Die komprimierten Daten betragen 20 Prozent der Rohdaten. Berechnen Sie Rohdatenrate und komprimierte Datenrate in Mbit/s, ohne Protokolloverhead. Verwenden Sie dezimale Mbit/s. Erläutern Sie den Unterschied zwischen auf 20 Prozent und um 20 Prozent komprimiert.

**Ihre Lösung:**

____________________________________________________________

### 05.06 Speicher aus Bitrate berechnen (P2, 8 Punkte)

Sechs Kameras liefern jeweils konstant 8 Mbit/s. Gespeichert wird 48 Stunden ohne zusätzlichen Overhead. Berechnen Sie den Speicher in dezimalen GB und in GiB. 1 GB=10^9 Byte, 1 GiB=2^30 Byte. Runden Sie GiB auf zwei Nachkommastellen. Nennen Sie den zusätzlichen Planungsbedarf bei realem Betrieb.

**Ihre Lösung:**

____________________________________________________________

### 05.07 Schnittstellen und kompatible Hardware (P2, 8 Punkte)

Ein Notebook soll über eine Dockingstation gleichzeitig zwei Monitore mit je 2560*1440 Pixel und 60 Hz, Netzwerk und Strom erhalten. Es besitzt eine USB-C-Buchse. Begründen Sie, warum die Steckerform allein die Eignung nicht belegt. Nennen Sie vier konkret zu prüfende Eigenschaften von Notebook, Dock und Kabel.

**Ihre Lösung:**

____________________________________________________________

### 05.08 Verfügbarkeit über RAID hinaus (P1, 8 Punkte)

Ein Betrieb hat bereits RAID und tägliche Sicherungen, darf aber bei Stromausfall oder defektem Netzteil nicht sofort stillstehen. Erläutern Sie vier zusätzliche Maßnahmen mit jeweiliger Wirkung. Begrenzen Sie die Wirkung einer USV ausdrücklich.

**Ihre Lösung:**

____________________________________________________________

## Beschaffung, Angebote und kaufmännisches Rechnen

### 06.01 Anforderungen messbar formulieren (P1, 8 Punkte)

Eine Beratung beschäftigt 15 mobile Mitarbeitende. Sie teilen sich 8 Schreibtische. Jede Person benötigt ein eigenes Notebook; jeder Schreibtisch zwei Monitore und eine Dockingstation. Daten liegen überwiegend auf dem Server. Videokonferenzen und mobiles Arbeiten gehören zum Alltag. Ermitteln Sie die Stückzahlen und formulieren Sie vier messbare Muss-Kriterien sowie ein Kann-Kriterium. Kennzeichnen Sie eigene technische Annahmen.

**Ihre Lösung:**

____________________________________________________________

### 06.02 Nutzwertanalyse mit Muss-Prüfung (P1, 8 Punkte)

Beide Geräte erfüllen alle Muss-Kriterien. Gewichte: Leistung 50 Prozent, Service 30 Prozent, Energie 20 Prozent. Einheitliche Skala: 1 schlecht, 5 gut. A erhält 4/3/5, B erhält 3/5/3. Berechnen Sie den Nutzwert und begründen Sie die Auswahl. Erläutern Sie, was gilt, wenn der rechnerische Sieger eine zwingende Muss-Anforderung doch nicht erfüllt.

**Ihre Lösung:**

____________________________________________________________

### 06.03 Quantitativer Angebotsvergleich (P1, 8 Punkte)

Für zehn identische Geräte gilt netto: Anbieter A, Listenpreis je Gerät 800 EUR, Rabatt 10 Prozent, Skonto 2 Prozent nach Rabatt, Bezugskosten insgesamt 50 EUR. Anbieter B, Listenpreis je Gerät 760 EUR, Rabatt 5 Prozent, kein Skonto, Bezugskosten insgesamt 0 EUR. Skonto kann sicher genutzt werden. Berechnen Sie die Bezugspreise und begründen Sie die rein quantitative Auswahl.

**Ihre Lösung:**

____________________________________________________________

### 06.04 Vorwärtskalkulation (P1, 8 Punkte)

Listeneinkaufspreis netto 500.00 EUR. Liefererrabatt 10 Prozent; Liefererskonto 2 Prozent; Bezugskosten 15.00 EUR; Handlungskosten 20 Prozent vom Bezugspreis; Gewinn 10 Prozent von Selbstkosten. Kundenrabatt und Kundenskonto gibt es nicht. Berechnen Sie bis zum Barverkaufspreis und ergänzen Sie 19 Prozent Umsatzsteuer. Runden Sie jeden Geldzwischenschritt auf Cent.

**Ihre Lösung:**

____________________________________________________________

### 06.05 Rückwärtskalkulation (P1, 8 Punkte)

Barverkaufspreis netto 924.00 EUR. Gewinn 10 Prozent auf Selbstkosten, Handlungskosten 20 Prozent auf Bezugspreis, Bezugskosten 20.00 EUR, Liefererskonto 2 Prozent und Liefererrabatt 10 Prozent. Ermitteln Sie den Listeneinkaufspreis. Kundenrabatt und Kundenskonto entfallen. Rechnen Sie rückwärts und runden Sie jeden Geldzwischenschritt auf Cent.

**Ihre Lösung:**

____________________________________________________________

### 06.06 Qualitative Auswahl und Bezugsquellen (P1, 8 Punkte)

Nennen Sie je zwei interne und externe Bezugsquellen für Lieferanteninformationen. Ein Anbieter ist 4 Prozent teurer, liefert aber rechtzeitig und bietet nachweislich besseren Vor-Ort-Service. Erläutern Sie zwei szenariobezogene Gründe, ihn trotzdem auszuwählen.

**Ihre Lösung:**

____________________________________________________________

### 06.07 Wareneingang nachvollziehbar prüfen (P1, 8 Punkte)

Bestellt sind 18 Notebooks Modell N mit je 16 GB RAM. Geliefert werden 17 Kartons; ein Karton ist sichtbar eingedrückt. Beschreiben Sie vier konkrete Prüfschritte einschließlich Dokumentation und Reaktion auf Abweichungen. Ein optisch unbeschädigter Karton soll nicht automatisch als korrekte Lieferung gelten.

**Ihre Lösung:**

____________________________________________________________

### 06.08 Angebot, Rabatt, Skonto und Liefertermin (P1, 8 Punkte)

Erklären Sie Rabatt und Skonto. Nennen Sie vier konkrete Angaben, die ein prüfbares Angebot enthalten sollte. Ein vertraglich fest vereinbarter Liefertermin ist überschritten und der Projektstart gefährdet. Beschreiben Sie zwei sinnvolle organisatorische Reaktionen und eine mögliche wirtschaftliche Folge. Eine abschließende rechtliche Verzugsprüfung ist nicht verlangt.

**Ihre Lösung:**

____________________________________________________________

## Service, Organisation, Projekt und UML

### 07.01 Incident, Service Request, Event und Priorität (P1, 8 Punkte)

Ordnen Sie zu und begründen Sie: a) Monitoring meldet eine relevante Überschreitung des Speicher-Schwellwerts ohne bisherige Nutzerstörung; b) ein Mitarbeiter bestellt einen zusätzlichen Standardmonitor; c) alle 25 Mitarbeitenden können auf die Auftragsdatenbank nicht mehr zugreifen. Erläutern Sie anschließend, wie Auswirkung und Dringlichkeit die Ticketpriorität bestimmen.

**Ihre Lösung:**

____________________________________________________________

### 07.02 SLA, Abnahme und Testprotokoll (P1, 8 Punkte)

Nennen Sie vier eindeutig prüfbare SLA-Inhalte. Unterscheiden Sie Reaktionszeit und Wiederherstellungs-/Entstörzeit. Nennen Sie außerdem vier Angaben im Test- und Abnahmeprotokoll eines neu eingerichteten Arbeitsplatzes.

**Ihre Lösung:**

____________________________________________________________

### 07.03 Organisation und Stellenarten (P1, 8 Punkte)

Die Geschäftsführung führt drei Abteilungsleitungen. Jede ausführende Person ist genau einer Leitung unterstellt. Ein Datenschutzberater berät die Geschäftsführung ohne Weisungsrecht gegenüber den Abteilungen.
a) Benennen und skizzieren Sie die Organisationsform.
b) Erläutern Sie Instanz, Ausführungsstelle und Stabsstelle.
c) Nennen Sie einen Vorteil und einen Nachteil dieser Struktur.

**Ihre Lösung:**

____________________________________________________________

### 07.04 e.K. und GmbH sachlich vergleichen (P1, 8 Punkte)

Ein Einzelkaufmann möchte das Unternehmen mit weiteren Beteiligten ausbauen. Vergleichen Sie e.K. und reguläre GmbH nach Haftung, gesetzlichem Mindestkapital, Unternehmensführung und Handelsregister. Formulieren Sie eine begründete Empfehlung unter der Annahme, dass Risikobegrenzung und Beteiligung weiterer Gesellschafter besonders wichtig sind. Nicht mit der UG verwechseln.

**Ihre Lösung:**

____________________________________________________________

### 07.05 Rollout, Change und Ergonomie (P1, 8 Punkte)

Ein Unternehmen führt ein neues Arbeitsplatzsystem für 40 Personen ein. Vergleichen Sie Sofortumstellung und Parallelbetrieb. Nennen Sie zwei Maßnahmen zur Akzeptanzförderung und zwei konkrete ergonomische Einstellungen. Begründen Sie eine Einführung mit Pilotgruppe bei zeitkritischen Prozessen.

**Ihre Lösung:**

____________________________________________________________

### 07.06 Netzplan: rechnen statt Begriffe aufsagen (P2, 8 Punkte)

Projektvorgänge in Tagen: A=2 ohne Vorgänger, B=4 nach A, C=3 nach A, D=2 nach B und C. Projektstart ist Zeitpunkt 0. Bestimmen Sie für jeden Vorgang FAZ, FEZ, SAZ, SEZ und Gesamtpuffer. Geben Sie Projektdauer und kritischen Pfad an. Es gibt keine Ressourcenbeschränkungen.

**Ihre Lösung:**

____________________________________________________________

### 07.07 PDCA, SMART und TCO (P2, 8 Punkte)

Für neue Notebooks sollen Störungen reduziert und Beschaffungskosten bewertet werden.
a) Formulieren Sie ein messbares termingebundenes Ziel statt weniger Störungen.
b) Wenden Sie die vier PDCA-Schritte auf dieses Ziel an.
c) Nennen Sie vier TCO-Kostenarten außer dem Kaufpreis und eine nachhaltige Beschaffungsentscheidung.

**Ihre Lösung:**

____________________________________________________________

### 07.08 OOP und UML-Klasse (P2, 8 Punkte)

Modellieren Sie eine UML-Klasse Geraet mit privaten Attributen seriennummer:String und aktiv:boolean sowie öffentlicher Methode aktiviere():void. Unterscheiden Sie Klasse und Objekt. Erläutern Sie Kapselung und nennen Sie einen konkreten Vorteil gegenüber frei veränderbaren globalen Daten.

**Ihre Lösung:**

____________________________________________________________

## Ergänzungen aus bundesweiten Prüfungen und Unterricht

### 08.01 OSI, DHCP, ARP und APIPA (P2, 8 Punkte)

Ordnen Sie Ethernet-Signal, Ethernet-MAC, IPv4 und TCP den OSI-Schichten 1 bis 4 zu. Erläutern Sie danach DHCP und ARP. Ein Windows-Client erhält bei aktivierter automatischer IPv4-Konfiguration nur eine Adresse aus 169.254.0.0/16: Welche naheliegende Hypothese prüfen Sie? Eine einzelne Adresse beweist die Ursache nicht.

**Ihre Lösung:**

____________________________________________________________

### 08.02 CPU, RAM, SSD und sicherer Einbau (P2, 8 Punkte)

Unterscheiden Sie CPU, Cache und RAM. Erläutern Sie, warum ein logischer Thread kein zusätzlicher physischer Kern ist. Bewerten Sie die Aussage: Jede M.2-SSD ist schneller als jede SATA-SSD. Nennen Sie zwei Sicherheitsmaßnahmen vor dem Einbau und den richtigen Bezugspunkt für die Dual-Channel-Slotwahl.

**Ihre Lösung:**

____________________________________________________________

### 08.03 Cloud, On-Premises und Virtualisierung (P2, 8 Punkte)

Eine kleine Firma erwägt eine cloudbasierte Arbeitsplatzverwaltung statt eines eigenen Verwaltungsservers. Erläutern Sie je zwei mögliche Vor- und Nachteile. Unterscheiden Sie IaaS und SaaS. Erklären Sie außerdem, was ein Hypervisor tut und warum zwei virtuelle Maschinen auf einem einzelnen Host noch keine Host-Ausfallredundanz bilden.

**Ihre Lösung:**

____________________________________________________________

### 08.04 VPN und digitales Zertifikat (P2, 8 Punkte)

Ein Mitarbeiter greift aus dem Homeoffice auf interne Systeme zu. Erläutern Sie zwei Sicherheitsfunktionen eines geeignet konfigurierten VPN. Beschreiben Sie den Zweck eines digitalen Zertifikats und nennen Sie zwei Prüfungen beim Zertifikatsgebrauch. Begründen Sie, warum ein VPN einen bereits kompromittierten Client nicht automatisch sicher macht.

**Ihre Lösung:**

____________________________________________________________

### 08.05 Kauf, Leasing und Amortisation (P2, 8 Punkte)

Ein Gerät kostet beim Kauf netto 1800 EUR. Leasing kostet 58 EUR monatlich über 36 Monate, ohne Sonderzahlung, Zusatzkosten oder Eigentumsübergang. Vergleichen Sie die Zahlungen ohne Zins-/Steuereffekte und Restwertansatz; erklären Sie Besitz und Eigentum beim Leasing. Separat: Ein energieeffizienteres Gerät kostet 240 EUR mehr und spart 8 EUR monatlich. Wann amortisiert sich der Mehrpreis in dieser vereinfachten Rechnung?

**Ihre Lösung:**

____________________________________________________________

### 08.06 Lastenheft, Pflichtenheft und Projektbeteiligte (P2, 8 Punkte)

Ein Auftrag lautet: Ein neues Ticketsystem soll innerhalb von drei Monaten den Support verbessern. Unterscheiden Sie Lastenheft und Pflichtenheft. Formulieren Sie zwei konkret prüfbare Anforderungen. Nennen Sie drei Stakeholder mit je einem typischen Interesse. Unterscheiden Sie abschließend Gantt-Diagramm und Netzplan.

**Ihre Lösung:**

____________________________________________________________

### 08.07 Kodierung, Bilddaten und Übertragungsdauer (P2, 8 Punkte)

a) Unterscheiden Sie Textkodierung und Dateiformat. Warum sind UTF-8-Texte nicht grundsätzlich ein Byte je Zeichen groß?
b) Ein unkomprimiertes Bild hat 1000*800 Pixel mit 24 Bit je Pixel, ohne Header. Berechnen Sie die Größe in Byte und die Zahl möglicher RGB-Farben.
c) Eine Datei mit 120 MiB wird mit konstant nutzbaren 40 Mbit/s übertragen. Berechnen Sie die ideale Zeit ohne weiteren Overhead. 1 MiB=2^20 Byte, 1 Mbit=10^6 Bit.

**Ihre Lösung:**

____________________________________________________________

### 08.08 Härtung und datensparsame Protokollierung (P2, 8 Punkte)

Ein neu installierter Firmenclient verwendet ein Standardkennwort, unnötige Dienste und tägliche Administratorkonten. Erklären Sie Härtung und nennen Sie drei passende Änderungen. Beschreiben Sie Nutzen und Datenschutzgrenzen von Sicherheitsprotokollen. Nennen Sie zuletzt einen Grund, vertrauliche Kundendaten nicht ungeprüft in einen öffentlichen KI-Dienst einzugeben.

**Ihre Lösung:**

____________________________________________________________
