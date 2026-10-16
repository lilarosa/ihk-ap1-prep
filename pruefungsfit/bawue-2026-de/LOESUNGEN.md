# AP1 Baden-Württemberg - Prüfungsfit auf Deutsch

## Musterlösungen und Bewertungsanker

Eigene Trainingsaufgaben, keine offiziellen Prüfungsaufgaben und keine Vorhersage. Stand: 16.10.2026. Quellen und Abgrenzung: [QUELLEN.md](QUELLEN.md).

Je Aufgabe: 8 interne Trainingspunkte, vier Bewertungsanker mit je 2 Punkten. P1 = Kernübung aus verfügbaren Landesunterlagen; P2 = zusätzliche Vertiefung. Kein kompletter 90-Minuten-Satz.

## Programmierung, Algorithmen und Tests

### 01.01 Lineare Suche mit Rückgabewert (P1, 8 Punkte)

```text
FUNKTION enthaelt(seriennummern, gesucht)
    FÜR JEDE nummer IN seriennummern
        WENN nummer = gesucht DANN
            RÜCKGABE true
        ENDE WENN
    ENDE FÜR
    RÜCKGABE false
ENDE FUNKTION
```
Die Rückgabe false steht nach der Schleife. Innerhalb der Schleife würde sie die Suche nach dem ersten nicht passenden Eintrag abbrechen.

**Bewertungsanker, jeweils 2 Punkte:**

- alle Elemente erreichbar
- exakter Vergleich
- true beim Treffer
- false erst nach der Schleife, auch für leeres Array

### 01.02 Durchschnitt: drei typische Fehler (P1, 8 Punkte)

```java
static double mittelwert(int[] daten) {
    if (daten.length == 0) return 0.0;
    int summe = 0;
    for (int i = 0; i < daten.length; i++) {
        summe += daten[i];
    }
    return (double) summe / daten.length;
}
```
Fehler: <= führt zum ungültigen Index daten.length; die Zuweisung überschreibt statt zu addieren; zwei Integer werden ganzzahlig dividiert. Die Leereingabe wird vor der Division behandelt. Für die Testdaten: 26 / 4 = 6.5. Annahme: Die Summe passt in int.

**Bewertungsanker, jeweils 2 Punkte:**

- Indexgrenze erklären und korrigieren
- Akkumulation erklären und korrigieren
- Gleitkommadivision erklären und korrigieren
- Leereingabe und Ergebnis 6.5

### 01.03 Schreibtischtest (P1, 8 Punkte)

|i|werte[i]|summe nach der Runde|anzahl nach der Runde|
|---|---|---|---|
|0|7|0|0|
|1|14|14|1|
|2|20|34|2|
|3|5|34|2|

Endausgabe: 34 und 2. Es werden nur Werte von mindestens 10 berücksichtigt.

**Bewertungsanker, jeweils 2 Punkte:**

- Runde 0 korrekt
- Runde 1 korrekt
- Runden 2 und 3 korrekt
- Endausgabe mit Erklärung

### 01.04 CSV: fehlenden Preis erkennen (P1, 8 Punkte)

```text
FUNKTION fehltPreis(zeilen, artikelId)
    FÜR JEDE zeile IN zeilen
        felder = SPLIT_MIT_LEERFELDERN(zeile, ";")
        id = TRIM(felder[1])
        preis = TRIM(felder[3])
        WENN id = artikelId UND (preis = "" ODER preis = "NULL")
            RÜCKGABE true
    RÜCKGABE false
```
Ergebnisse: A17 true, A18 true, A19 false. 0 ist ein vorhandener Preis. In Java erhält split(";", -1) leere Endfelder. Ein Produktionsimport benötigt weitere Format- und Plausibilitätsprüfungen.

**Bewertungsanker, jeweils 2 Punkte:**

- Split mit erhaltenen Leerfeldern und richtigen Indizes
- Artikelvergleich mit geklammerter Preisbedingung
- Rückgaben an richtiger Stelle
- drei Ergebnisse; null nicht mit Zahl 0 verwechseln

### 01.05 Loginlogik ohne vorzeitige Fehlerrückgabe (P1, 8 Punkte)

```text
FUNKTION darfAnmelden(benutzer, name)
    FÜR JEDE person IN benutzer
        WENN person.name = name
            RÜCKGABE person.aktiv
    RÜCKGABE false
```
Ein fremder Name sagt nichts darüber aus, ob der gesuchte Benutzer später im Array vorkommt. Die Suche muss weiterlaufen. Die Aufgabe prüft nur die Freigabelogik, nicht sichere Authentifizierung.

**Bewertungsanker, jeweils 2 Punkte:**

- alle Benutzer erreichbar
- Name exakt vergleichen
- Aktivstatus des Treffers zurückgeben
- false nach der Suche und Fehlerbegründung

### 01.06 Älteste Dateien mit minimaler Löschanzahl (P1, 8 Punkte)

Die ersten beiden Dateien reichen nicht: 1000 - 120 - 180 = 700 MB ist noch nicht strikt kleiner als 700. Daher werden auch 250 MB gelöscht; 450 MB bleiben.
```text
gesamt = gesamtgroesse()
SOLANGE gesamt >= 700 UND NICHT istLeer()
    datei = aeltesteDatei()
    bytes = groesse(datei)
    loeschen(datei)
    gesamt = gesamt - bytes
```
Die Größenvariable und der Grenzwert verwenden dieselbe Einheit. Erst nach erfolgreichem Löschen wird subtrahiert. Weil die Löschreihenfolge vorgegeben ist, wird beim ersten zulässigen Rest gestoppt.

**Bewertungsanker, jeweils 2 Punkte:**

- drei älteste Dateien und 450 MB
- Schleifenbedingung >= und Leerprüfung
- jeweils älteste Datei löschen
- Größe aktualisieren und Einheiten beachten

### 01.07 Tarif in ein Struktogramm übersetzen (P1, 8 Punkte)

```text
FUNKTION preis(km)
    WENN km < 0 ODER km > 40
        RÜCKGABE -1
    WENN km <= 10
        basis = 20
    SONST
        basis = 35
    RÜCKGABE basis + 0.60 * km
```
Ergebnisse: 10 km = 26.00 EUR; 11 km = 41.60 EUR; 41 km = -1. Im Struktogramm folgen auf die Gültigkeitsprüfung die Tarifverzweigung und die Berechnung.

**Bewertungsanker, jeweils 2 Punkte:**

- Gültigkeitsprüfung mit ODER
- korrekte Tarifgrenze einschließlich 10
- Zusatzpreis addieren und zurückgeben
- drei Ergebnisse korrekt

### 01.08 Grenzwerttest und Fehlerarten (P1, 8 Punkte)

Erwartungen: -1 -> -1; 0 -> 20.00; 10 -> 26.00; 11 -> 41.60; 40 -> 59.00; 41 -> -1. Die Paare -1/0, 10/11 und 40/41 prüfen Bereichs- und Tarifgrenzen.
Fehlende Klammer: Syntaxfehler. Zugriff auf array.length als Index: Laufzeitfehler bei Ausführung, z. B. ArrayIndexOutOfBoundsException in Java. Falscher Vergleich: logischer Fehler, weil genau 10 km falsch eingestuft werden.

**Bewertungsanker, jeweils 2 Punkte:**

- untere Bereichsgrenze -1 und 0
- Tarifgrenze 10 und 11
- obere Bereichsgrenze 40 und 41
- drei Fehlerarten korrekt zuordnen

## Datenmodellierung und SQL

### 02.01 CSV in ein relationales Modell überführen (P1, 8 Punkte)

Hersteller(hersteller_id PK, herstellername).
Artikel(artikel_id PK, artikelname, hersteller_id FK -> Hersteller).
Bestellung(bestellung_id PK, bestelldatum).
Position(position_id PK, bestellung_id FK -> Bestellung, artikel_id FK -> Artikel, menge, einzelpreis).
Hersteller 1:n Artikel; Bestellung 1:n Position; Artikel 1:n Position. Der historische Einzelpreis gehört zur Position, da spätere Artikelpreisänderungen frühere Verkäufe nicht verändern dürfen. Für Geld eignet sich DECIMAL(10,2).

**Bewertungsanker, jeweils 2 Punkte:**

- Hersteller und Artikel korrekt getrennt
- Bestellung und Position korrekt getrennt
- PK und drei FK mit Zielen
- historischen Preis an der Position begründen

### 02.02 Schlüssel, Kardinalität und doppelter Wert (P1, 8 Punkte)

Der Primärschlüssel identifiziert jeden Datensatz eindeutig und ist nicht NULL. Der Fremdschlüssel m_id verweist auf Mitarbeiter.m_id und sichert referenzielle Integrität. Mitarbeiter zu Geraet ist 1:n; pro Mitarbeiter sind 0 bis n Geräte möglich, pro Gerät genau ein Mitarbeiter. Ein erneutes INSERT mit g_id=17 verletzt die Primärschlüsseleindeutigkeit. Für ein neues Gerät wird eine freie Kennung verwendet; soll das vorhandene Gerät geändert werden, ist ein gezieltes UPDATE passend.

**Bewertungsanker, jeweils 2 Punkte:**

- PK: eindeutig und nicht NULL
- FK: Ziel und referenzielle Integrität
- Beziehung mit Optionalität
- Duplikat erklären und passende Korrektur

### 02.03 SELECT, LIKE und Sortierung (P1, 8 Punkte)

```sql
SELECT k_id, name, email
FROM Kunde
WHERE name LIKE 'B%'
ORDER BY k_id ASC;

SELECT name
FROM Kunde
WHERE ort_id = 4
ORDER BY name DESC;
```

**Bewertungsanker, jeweils 2 Punkte:**

- erste Feldauswahl und Tabelle
- LIKE mit korrektem Präfixmuster
- zweite Feldauswahl und Ortsfilter
- beide Sortierrichtungen

### 02.04 COUNT und fehlende E-Mail (P1, 8 Punkte)

```sql
SELECT COUNT(*) AS anzahl FROM Kunde;
SELECT k_id, name FROM Kunde
WHERE email IS NULL OR email = '';
```
COUNT(*) ergibt 4. COUNT(email) ergibt 3: SQL-NULL wird nicht gezählt, der leere Text ist ein vorhandener Nicht-NULL-Wert. Die zweite Abfrage liefert 2 und 3. SQL verwendet für die NULL-Prüfung IS NULL statt = NULL.

**Bewertungsanker, jeweils 2 Punkte:**

- COUNT(*) für alle Zeilen
- IS NULL korrekt
- leerer Text mit ODER berücksichtigt
- COUNT-Ergebnisse 4/3 und Erklärung

### 02.05 Bildverwaltung mit fünf SQL-Anweisungen (P1, 8 Punkte)

```sql
DELETE FROM Bild WHERE dateiname = 'probe.png';
SELECT SUM(bytes) AS gesamtbytes FROM Bild;
SELECT COUNT(*) AS anzahl FROM Bild;
SELECT * FROM Bild ORDER BY aufgenommen_am DESC;
INSERT INTO Bild (dateiname, bytes, aufgenommen_am)
VALUES ('neu.png', 64000, 1800000123);
```
DELETE entfernt nur den Datenbankeintrag. Eine Datei wird nur gelöscht, wenn zusätzliche Anwendungslogik dies ausdrücklich veranlasst.

**Bewertungsanker, jeweils 2 Punkte:**

- gezieltes DELETE und Grenze Dateisystem
- SUM und COUNT
- Sortierung nach Zeit absteigend
- INSERT mit expliziten Spalten und richtigen Werten

### 02.06 JOIN und eindeutiges UPDATE (P2, 8 Punkte)

```sql
SELECT g.bezeichnung, m.name
FROM Geraet AS g
JOIN Mitarbeiter AS m ON g.m_id = m.m_id
WHERE m.abteilung = 'Support';

UPDATE Geraet
SET bezeichnung = 'Notebook mobil'
WHERE g_id = 71;
```
Ohne WHERE würde das UPDATE alle Geräte umbenennen. Vor einer Änderung kann dieselbe WHERE-Bedingung mit SELECT geprüft werden.

**Bewertungsanker, jeweils 2 Punkte:**

- JOIN mit passender Schlüsselbedingung
- Spaltenauswahl und Abteilungsfilter
- gezieltes UPDATE
- Folge des fehlenden WHERE erläutern

### 02.07 Gruppierung als Aufbauübung (P2, 8 Punkte)

```sql
SELECT g_id, COUNT(*) AS anzahl, SUM(minuten) AS gesamt_min
FROM Ticket
WHERE status = 'geschlossen'
GROUP BY g_id
HAVING COUNT(*) >= 2;
```
WHERE filtert vor der Gruppierung einzelne Zeilen. HAVING filtert die gebildeten Gruppen anhand der Aggregation.

**Bewertungsanker, jeweils 2 Punkte:**

- Statusfilter vor Gruppierung
- GROUP BY g_id
- COUNT und SUM
- HAVING mit >= 2 und Erklärung

### 02.08 JSON, XML, CSV und n:m-Beziehung (P1, 8 Punkte)

```json
{"g_id": 71, "bezeichnung": "Notebook", "ram_gb": 16}
```
CSV speichert typischerweise tabellarische Datensätze mit vereinbartem Trennzeichen; komplexe Inhalte erfordern geeignete Maskierung. XML strukturiert Daten durch Elemente und Attribute und kann hierarchische Inhalte abbilden. Die n:m-Beziehung wird durch Mitarbeit(m_id FK -> Mitarbeiter, p_id FK -> Projekt, PRIMARY KEY(m_id,p_id)) umgesetzt. Der zusammengesetzte Schlüssel verhindert doppelte Zuordnungen.

**Bewertungsanker, jeweils 2 Punkte:**

- gültiges JSON mit Datentypen
- CSV und XML sinnvoll unterscheiden
- Zuordnungstabelle mit beiden FK
- zusammengesetzter PK verhindert Duplikate

## Netzwerkkonfiguration und Diagnose

### 03.01 Vollständige IPv4-Konfiguration (P1, 8 Punkte)

IP 192.168.40.80; Maske 255.255.255.0; Gateway 192.168.40.1; DNS 192.168.40.53. Das Gateway leitet Pakete in andere Netze weiter. DNS löst Namen in passende Ressourceninformationen wie IP-Adressen auf. Die Clientadresse liegt im richtigen Subnetz und ist nicht Netz- oder Broadcastadresse.

**Bewertungsanker, jeweils 2 Punkte:**

- IP und Maske
- Gatewaywert und Funktion
- DNS-Wert und Funktion
- Subnetzzugehörigkeit und keine Sonderadresse

### 03.02 Subnetz berechnen (P2, 8 Punkte)

Maske 255.255.255.192. Hostbits: 32-26=6. Blockgröße: 256-192=64. 150 liegt im Block 128 bis 191. Netzadresse 192.168.50.128; Broadcast 192.168.50.191. Hosts 192.168.50.129 bis 192.168.50.190. Nutzbare Hosts: 2^6-2=62.

**Bewertungsanker, jeweils 2 Punkte:**

- Maske und Hostbits
- Blockgröße und Netzadresse
- Broadcast und Hostbereich
- Hostanzahl mit Rechnung

### 03.03 DNS oder Gateway? (P1, 8 Punkte)

a) Naheliegend ist ein DNS-Problem, etwa ein falscher DNS-Server. Mit nslookup oder dig die Auflösung und den konfigurierten DNS prüfen; korrekten erreichbaren DNS konfigurieren beziehungsweise den DNS-Dienst reparieren. Danach erneut testen. Ein fehlgeschlagener Namenszugriff allein beweist DNS noch nicht; hier ist es die naheliegende Diagnose.
b) Die eigene IP ist kein Router für fremde Netze. Das gültige Routerinterface im lokalen Subnetz als Gateway eintragen und den externen Zugriff erneut prüfen.

**Bewertungsanker, jeweils 2 Punkte:**

- DNS-Ursache als Hypothese
- Werkzeug und gezielte Maßnahme
- Gatewayfehler technisch erklären
- korrektes Gateway und erneuter Test

### 03.04 MAC und IP auf dem Weg zum Internet (P1, 8 Punkte)

Quell-MAC: lokale Netzwerkkarte des PCs. Ziel-MAC: LAN-Interface des nächsten Routers. Quell-IP: PC-IP. Ziel-IP: IP des entfernten Webservers. Ethernet adressiert den nächsten lokalen Hop; die IP-Zieladresse bezeichnet das entfernte Ziel. Ein Switch ist nicht automatisch der MAC-Empfänger jedes transportierten Frames. NAT kann später die Quell-IP verändern.

**Bewertungsanker, jeweils 2 Punkte:**

- Quell-MAC und Quell-IP
- Ziel-MAC Router
- Ziel-IP Webserver
- lokaler Hop versus entferntes Ziel erklären

### 03.05 IPv6: Typ, Kurzform und Konfiguration (P1, 8 Punkte)

a) 2001:db8:42:7::80.
b) fe80::a ist Link-Local und nur auf dem lokalen Link nutzbar. Die zweite Adresse hat die Form einer Global-Unicast-Adresse, liegt hier aber im reservierten Dokumentationspräfix. Sie ist nicht real öffentlich routbar.
c) Client 2001:db8:42:7::80/64; Gateway 2001:db8:42:7::1; DNS 2001:db8:42:7::53. Gateway- und DNS-Adressen werden als Adresswerte angegeben; die Präfixlänge gehört zur Client-Interfacekonfiguration.

**Bewertungsanker, jeweils 2 Punkte:**

- korrekte einmalige Nullkompression
- Link-Local erklären
- Dokumentationspräfix korrekt einordnen
- Client mit /64 sowie Gateway und DNS

### 03.06 Dual Stack und WLAN-Segmentierung (P1, 8 Punkte)

Dual Stack betreibt IPv4 und IPv6 parallel. Tunneling kapselt ein Protokoll in einem anderen, um ein nicht direkt unterstützendes Transportnetz zu überbrücken. Ein eigenes Gastnetz trennt die Adressverwaltung und ermöglicht eigene Regeln beziehungsweise eine getrennte Broadcast-Domäne. Den Zugriff auf interne Systeme verhindern erst passende Firewallregeln/ACLs zwischen den Netzen. VLANs können die logische Trennung auf der Infrastruktur umsetzen; Subnetznummern allein erzwingen keine Sicherheitsrichtlinie.

**Bewertungsanker, jeweils 2 Punkte:**

- Dual Stack
- Tunneling
- zwei Segmentierungsvorteile
- Firewall/ACL als tatsächliche Zugriffskontrolle

### 03.07 WLAN-Leistung und Frequenzwahl (P1, 8 Punkte)

Brutto ist nicht Netto: Protokolloverhead, geteilte Funkzeit, Bestätigungen, Störungen und Wiederholungen reduzieren die Nutzdatenrate. 2.4 GHz durchdringt Hindernisse meist besser, ist aber oft stärker belegt und hat weniger überlappungsfreie Kanaloptionen. 5 GHz bietet mehr Kanaloptionen, hat typischerweise geringere Reichweite und kann im ausreichend abgedeckten Raum geeignet sein. Empfehlung: 5 GHz mit geeigneter Kanalplanung; Kapazität und Messung vor Ort entscheiden.

**Bewertungsanker, jeweils 2 Punkte:**

- zwei konkrete Nettoverlustgründe
- 2.4 GHz mit Reichweite und Belegung
- 5 GHz mit Reichweite und Kanälen
- szenariobezogene Empfehlung

### 03.08 Strukturierte Diagnose und Netzpläne (P1, 8 Punkte)

Physisch: Kabel/Port/Link-LED prüfen, gegebenenfalls mit bekannt gutem Kabel testen. IP: ipconfig /all beziehungsweise ip addr mit dem Sollnetz vergleichen. Routing: Routingtabelle und korrektes Gateway prüfen; tracert/traceroute gezielt einsetzen. DNS: nslookup/dig mit Namen und konfiguriertem DNS. ICMP kann gefiltert sein, deshalb beweist ein fehlender Ping keinen kompletten Ausfall. Logischer Plan zeigt Netze, VLANs, Adressen und Kommunikationsbeziehungen; physischer Plan zeigt Standorte, Geräte, Ports und Verkabelung.

**Bewertungsanker, jeweils 2 Punkte:**

- Link- und IP-Prüfung
- Routingprüfung
- DNS-Prüfung und Ping-Grenze
- logischen und physischen Plan unterscheiden

## Schutzbedarf, Datenschutz und Wiederherstellung

### 04.01 CIA mit Folgen im konkreten Betrieb (P1, 8 Punkte)

Vertraulichkeit: Nur berechtigte Personen dürfen Gehaltsdaten lesen; ein Abfluss verletzt die Privatsphäre. Rollenrechte und geeignete Verschlüsselung reduzieren unbefugten Zugriff. Integrität: Auftragsmengen und Kontodaten müssen korrekt bleiben; Manipulation kann falsche Lieferungen oder Zahlungen auslösen. Änderungsrechte, Eingabeprüfungen und nachvollziehbare Protokolle helfen. Verfügbarkeit: Lieferpläne müssen rechtzeitig nutzbar sein; Ausfälle verzögern die Auslieferung. Redundanz und getestete Wiederherstellung senken Ausfallfolgen.

**Bewertungsanker, jeweils 2 Punkte:**

- Vertraulichkeit mit Schaden und Maßnahme
- Integrität mit Schaden und Maßnahme
- Verfügbarkeit mit Schaden und Maßnahme
- konkreter Bezug auf die drei Datenarten

### 04.02 Schutzbedarf und Maximumprinzip (P1, 8 Punkte)

Vertraulichkeit hoch; Integrität hoch; Verfügbarkeit sehr hoch. Je Grundwert wird die höchste abhängige Anforderung übernommen. Ein Mittelwert würde den Schutzbedarf der kritischeren Anwendung absenken, obwohl deren möglicher Schaden bestehen bleibt. Die Einstufung ist anhand definierter Schadenskriterien und Abhängigkeiten zu begründen; sie ist keine bloße Geräteeigenschaft.

**Bewertungsanker, jeweils 2 Punkte:**

- Vertraulichkeit hoch
- Integrität hoch
- Verfügbarkeit sehr hoch
- Maximum pro Grundwert erklären, kein Mittelwert

### 04.03 Ransomware beurteilen (P1, 8 Punkte)

Verfügbarkeit: Dateien oder Dienste sind nicht nutzbar. Integrität: Daten wurden unbefugt verändert/verschlüsselt und sind nicht vertrauenswürdig. Vertraulichkeit: Bei erfolgter Exfiltration wurden Inhalte offengelegt; die Drohung allein beweist den Abfluss noch nicht. Erste Schritte: Betroffene Systeme kontrolliert vom Netz isolieren und den Incident-Prozess beziehungsweise das zuständige Sicherheitsteam aktivieren. Beweise und Logs sichern lassen, Umfang klären und saubere Wiederherstellung vorbereiten. Nicht unkoordiniert löschen oder neu installieren.

**Bewertungsanker, jeweils 2 Punkte:**

- Verfügbarkeit korrekt
- Integrität korrekt
- Vertraulichkeit mit Exfiltrationsunterscheidung
- Isolation und geordnete Eskalation/Beweissicherung

### 04.04 Backup, RAID, RTO und RPO (P1, 8 Punkte)

RAID kann bei bestimmten Laufwerksausfällen die Verfügbarkeit erhöhen, kopiert aber auch versehentliche Änderungen und schützt nicht vor allen Schadensarten. Es ersetzt kein Backup. 3-2-1: drei Datenkopien insgesamt, auf zwei unterschiedlichen Medientypen, eine räumlich getrennt; zusätzlich eine gegen unbefugte Änderung geschützte Offline- oder immutable Kopie vorsehen. RPO maximal 2 h: Wiederherstellungspunkte und Sicherungsintervalle passend planen. RTO maximal 4 h: Wiederanlauf einschließlich Restore testen. Regelmäßige Restore-Tests und geschützte Zugangsdaten sind erforderlich.

**Bewertungsanker, jeweils 2 Punkte:**

- RAID-Grenzen beurteilen
- 3-2-1 korrekt
- RPO 2 h Datenverlust
- RTO 4 h Wiederanlauf und Restore-Test

### 04.05 Firewall und minimale Rechte (P1, 8 Punkte)

Firewall: Gäste dürfen ins Internet, aber nicht auf das Buchhaltungsnetz zugreifen; Regeln begrenzen unerwünschte Kommunikation. Rollenrechte: Nur zuständige Buchhaltungsmitarbeiter erhalten Zugriff auf Finanzdaten, mit getrennten Administratorkonten und minimalen Rechten. MFA ergänzt ein Passwort um einen unabhängigen Faktor und reduziert Missbrauch gestohlener Passwörter. Eine Firewall verhindert nicht jede Phishinghandlung, Fehlberechtigung oder jeden Angriff über erlaubte Verbindungen; weitere Maßnahmen und Überwachung bleiben erforderlich.

**Bewertungsanker, jeweils 2 Punkte:**

- Firewallregel mit geschütztem Ziel
- Rollenrechte und Least Privilege
- MFA mit unabhängigen Faktoren
- Grenzen der Firewall erläutern

### 04.06 Personenbezogene Daten und sichere Altgeräte (P1, 8 Punkte)

Geburtsdatum einer identifizierbaren Person ist personenbezogen. Öffentlich veröffentlichte Kantinenpreise ohne Personenbezug sind hier öffentliche Sachinformation. Die unveröffentlichte Konstruktion kann ein Geschäftsgeheimnis sein, wenn insbesondere wirtschaftlicher Geheimniswert und angemessene Geheimhaltungsmaßnahmen vorliegen. Vor Weitergabe: benötigte Daten gesichert übernehmen und Rechte/Lizenzen prüfen; Daten mit geeignetem, zum Datenträger passendem Verfahren sicher löschen; Erfolg dokumentieren und Gerät/Konten aus der Verwaltung entfernen. Einfaches Löschen von Dateien oder Schnellformatieren genügt nicht zuverlässig.

**Bewertungsanker, jeweils 2 Punkte:**

- Geburtsdatum und Preise richtig einordnen
- Konstruktion mit Schutzvoraussetzungen
- Datenübernahme und sichere Löschung
- Nachweis sowie Konten/Verwaltung bereinigen

### 04.07 Videoüberwachung im Fallbeispiel (P1, 8 Punkte)

Zu prüfen sind ein konkreter legitimer Zweck und eine tragfähige Rechtsgrundlage, Erforderlichkeit und Interessenabwägung, Datenminimierung mit begrenztem Bildausschnitt sowie zweckangemessene kurze Speicher-/Löschfristen und geschützter Zugriff. Transparente Information ist zusätzlich nötig, ersetzt aber keine Rechtsgrundlage. Öffentliche Gehwege dürfen durch Private nur in eng begrenzten Ausnahmefällen erfasst werden. Geeignete unmittelbare Anpassung: Kamera auf den erforderlichen eigenen Bereich begrenzen oder öffentliche Bereiche wirksam maskieren; pauschale Dauer- und Vorratsspeicherung vermeiden. Keine allgemeingültige feste Aufbewahrungsfrist erfinden.

**Bewertungsanker, jeweils 2 Punkte:**

- Zweck und Rechtsgrundlage
- Erforderlichkeit/Abwägung und Bildausschnitt
- Löschkonzept und Zugriff
- Hinweisschild reicht nicht; konkrete Anpassung

### 04.08 Verschlüsselung, Hash und SQL-Injection (P2, 8 Punkte)

Verschlüsselung ist mit passendem Schlüssel umkehrbar und schützt lesbare Inhalte. Ein kryptografischer Hash ist eine nicht zur Umkehr gedachte Abbildung; für Passwörter benötigt man speziell geeignete langsame Passwort-Hashverfahren wie Argon2id mit individuellem Salt, keinen einfachen schnellen Hash. Parametrisierte SQL-Anweisungen trennen Datenwerte vom SQL-Code. Eine Zeichen-Blacklist kann umgangen werden und behandelt Kodierung und Abfragestruktur nicht zuverlässig; Eingabevalidierung ergänzt die Parametrisierung.

**Bewertungsanker, jeweils 2 Punkte:**

- Verschlüsselung versus Hash
- geeignetes Passwortverfahren mit Salt
- Parametrisierung als Trennung von Code und Daten
- Grenzen von Blacklists erklären

## Rechnen, Hardware und Verfügbarkeit

### 05.01 SLA-Verfügbarkeit prüfen (P1, 8 Punkte)

Jahreszeit 365*24 = 8760 h. Erlaubter Ausfallanteil 1-0.998 = 0.002. Maximal 8760*0.002 = 17.52 h = 17 h 31 min 12 s. Mit 20 h Gesamtausfall wird die Jahresverfügbarkeit unterschritten. Auch der einzelne 7-h-Ausfall verletzt die separate Entstörgrenze von 6 h. Jahresverfügbarkeit und Entstörzeit sind unterschiedliche Kriterien.

**Bewertungsanker, jeweils 2 Punkte:**

- Jahreszeit und korrekter Prozentfaktor
- 17.52 h mit Einheit
- Jahreskriterium beurteilen
- Entstörgrenze separat beurteilen

### 05.02 RAID-Kapazität und Ausfalltoleranz (P1, 8 Punkte)

RAID 5: (8-1)*12 = 84 TB; eine Platte darf ausfallen. RAID 10: 8/2*12 = 48 TB. Es übersteht mindestens einen Laufwerksausfall; mehrere sind möglich, wenn nicht beide Platten desselben Spiegelpaares ausfallen. Der gleichzeitige Ausfall eines ganzen Spiegelpaares führt zu Datenverlust im Verbund. Kapazitäts- und Verfügbarkeitsvorteile müssen gegen Kosten und Wiederaufbau abgewogen werden.

**Bewertungsanker, jeweils 2 Punkte:**

- RAID-5-Formel und 84 TB
- RAID-10-Formel und 48 TB
- RAID 5: ein Ausfall
- RAID 10: Abhängigkeit von Spiegelpaaren

### 05.03 Energiekosten berechnen (P1, 8 Punkte)

Arbeitsplätze: 12*0.090 kW*210*8 h = 1814.4 kWh; Kosten 580.608 EUR -> 580.61 EUR. Server: 0.180*365*24 = 1576.8 kWh; Kosten 504.576 EUR -> 504.58 EUR. Gesamtenergie 3391.2 kWh; Gesamtkosten aus ungerundeten Werten 1085.184 EUR -> 1085.18 EUR. Die Summe bereits gerundeter Teilbeträge weicht um einen Cent ab; die Aufgabenregel entscheidet.

**Bewertungsanker, jeweils 2 Punkte:**

- Watt korrekt in kW
- Arbeitsplatzrechnung
- Serverrechnung
- Gesamtbetrag mit Rundungsregel

### 05.04 PoE und Stromstärke (P1, 8 Punkte)

Der 25.5-W-Port ist notwendig, da 12.95 W < 21 W. I=P/U=21/48 A = 0.4375 A = 437.5 mA. Zusätzlich Gesamt-PoE-Budget und Reserven des Switches prüfen: Die gleichzeitige Versorgung benötigt mindestens 210 W am Endgerät, zuzüglich bei der Dimensionierung zu berücksichtigender Verluste und Reserven. Portleistung und Gesamtbudget sind getrennte Grenzen.

**Bewertungsanker, jeweils 2 Punkte:**

- Port anhand Leistungsgrenze auswählen
- Formel I=P/U
- 437.5 mA mit Umrechnung
- Gesamtbudget mindestens 210 W plus Planung

### 05.05 Video-Datenrate und Kompression (P2, 8 Punkte)

Rohdaten: 1280*720*24*25 = 552960000 bit/s = 552.96 Mbit/s. Auf 20 Prozent: *0.20 = 110.592 Mbit/s. Eine Verringerung um 20 Prozent würde dagegen 80 Prozent übrig lassen, also 442.368 Mbit/s. Protokolloverhead und Reserven wären in einer realen Netzdimensionierung zusätzlich zu berücksichtigen.

**Bewertungsanker, jeweils 2 Punkte:**

- Rohdatenformel
- 552.96 Mbit/s
- 110.592 Mbit/s
- auf versus um korrekt unterscheiden

### 05.06 Speicher aus Bitrate berechnen (P2, 8 Punkte)

Gesamtbitrate 6*8*10^6 = 48000000 bit/s. Zeit 48*3600 = 172800 s. Speicher = 48000000*172800/8 = 1036800000000 Byte. Das sind 1036.8 GB beziehungsweise 965.60 GiB. Real: Metadaten, Dateisystem, RAID-/Redundanzkonzept, Schwankungen und Sicherheitsreserve berücksichtigen. RAID-Kapazitätsverlust nicht doppelt verrechnen.

**Bewertungsanker, jeweils 2 Punkte:**

- Gesamtrate und Sekunden
- Division durch 8
- GB und GiB korrekt
- Planungsreserven benennen

### 05.07 Schnittstellen und kompatible Hardware (P2, 8 Punkte)

USB-C ist zunächst eine Bauform. Zu prüfen sind: unterstützte Bildausgabe/DisplayPort-Alt-Mode beziehungsweise die passende Dock-Technik; Zahl, Auflösung und Bildrate gleichzeitig nutzbarer Displays; ausreichende unterstützte Ladeleistung/Power Delivery; Daten-/Netzwerkfähigkeit und geeignetes Kabel sowie Kompatibilität der Geräte/Treiber. Entscheidend ist die durchgängige Unterstützung, nicht ein einzelnes Logo. Ein Monitoranschluss am Dock garantiert nicht jede Kombination.

**Bewertungsanker, jeweils 2 Punkte:**

- Steckerform von Funktionen trennen
- Bildausgabetechnik prüfen
- zwei Displays mit gewünschter Bildrate prüfen
- Ladeleistung und Kabel-/Datenkompatibilität

### 05.08 Verfügbarkeit über RAID hinaus (P1, 8 Punkte)

USV überbrückt eine begrenzte Zeit und ermöglicht kontrolliertes Herunterfahren; sie ersetzt keine beliebig lange Stromversorgung. Redundante Netzteile an geeigneten getrennten Versorgungswegen vermindern einzelne Netzteilausfälle. Redundante Hosts oder ein passend konzipiertes Failover reduzieren Hostausfallfolgen. Monitoring mit Alarmierung erkennt Störungen früh und beschleunigt Reaktion. Weitere passende Ansätze sind redundante Netzwege und vorbeugende Wartung, sofern zum Szenario begründet.

**Bewertungsanker, jeweils 2 Punkte:**

- USV mit zeitlicher Grenze
- Netzteilredundanz
- Host-/Failoverkonzept
- Monitoring mit konkreter Wirkung

## Beschaffung, Angebote und kaufmännisches Rechnen

### 06.01 Anforderungen messbar formulieren (P1, 8 Punkte)

Benötigt: 15 Notebooks, 16 Monitore, 8 Dockingstationen. Beispielhafte Muss-Kriterien unter gekennzeichneten Planungsannahmen: Dock unterstützt zwei Displays mit vereinbarter Auflösung/Bildrate; Notebook bietet Kamera und Mikrofon für die festgelegte Konferenzsoftware; festgelegte Akkulaufzeit im vereinbarten Testszenario; unterstützter sicherer mobiler Zugang per Mobilfunk oder geeignetem Hotspot. Konkrete Werte wie 16 GB RAM oder 8 h Akkulaufzeit sind begründete Annahmen, nicht aus der Anfrage bewiesene Fakten. Kann: besonders geringes Gewicht mit Zielwert. Muss-Kriterien werden vor einer Nutzwertbewertung geprüft.

**Bewertungsanker, jeweils 2 Punkte:**

- Stückzahlen korrekt
- zwei messbare Muss-Kriterien
- zwei weitere messbare Muss-Kriterien
- Kann-Kriterium und Annahmen gekennzeichnet

### 06.02 Nutzwertanalyse mit Muss-Prüfung (P1, 8 Punkte)

A: 4*0.5 + 3*0.3 + 5*0.2 = 3.9. B: 3*0.5 + 5*0.3 + 3*0.2 = 3.6. Nach den vereinbarten Kriterien gewinnt A; bessere Leistung und Energie gleichen den geringeren Servicewert aus. Ein verletztes Muss-Kriterium schließt eine Alternative aus oder erfordert eine vorab abgestimmte Änderung der Anforderung. Ein hoher Gesamtscore heilt den Muss-Verstoß nicht.

**Bewertungsanker, jeweils 2 Punkte:**

- A 3.9 mit Rechnung
- B 3.6 mit Rechnung
- Auswahl mit Kriterienbezug
- Muss-Kriterium als Ausschluss erläutern

### 06.03 Quantitativer Angebotsvergleich (P1, 8 Punkte)

A: Liste 8000.00; nach 10 Prozent Rabatt 7200.00; nach 2 Prozent Skonto 7056.00; plus 50.00 Bezugskosten = 7106.00 EUR. B: 7600.00*0.95 = 7220.00 EUR. A ist um 114.00 EUR günstiger. Rabatt und Skonto werden nacheinander auf die jeweilige Basis gerechnet, nicht als 12 Prozent vom ursprünglichen Listenpreis zusammengefasst.

**Bewertungsanker, jeweils 2 Punkte:**

- Menge und Rabatt A
- Skonto und Bezugskosten A
- Rechnung B
- Auswahl und Differenz 114 EUR

### 06.04 Vorwärtskalkulation (P1, 8 Punkte)

500.00 - 50.00 = 450.00 Zieleinkaufspreis. Skonto 9.00 -> 441.00 Bareinkaufspreis. +15.00 = 456.00 Bezugspreis. Handlungskosten 91.20 -> 547.20 Selbstkosten. Gewinn 54.72 -> 601.92 Barverkaufspreis netto. Umsatzsteuer 114.36 -> 716.28 EUR brutto. Jede Prozentangabe benötigt die richtige Bezugsgröße.

**Bewertungsanker, jeweils 2 Punkte:**

- Rabatt und Skonto
- Bezugspreis und Handlungskosten
- Selbstkosten und Gewinn
- Netto/Brutto und Umsatzsteuer

### 06.05 Rückwärtskalkulation (P1, 8 Punkte)

Selbstkosten 924/1.10 = 840.00. Bezugspreis 840/1.20 = 700.00. Bareinkaufspreis 700-20 = 680.00. Zieleinkaufspreis 680/0.98 = 693.88. Listeneinkaufspreis 693.88/0.90 = 770.98 EUR. Beim Rückgängigmachen eines Zuschlags wird durch 1+p dividiert; ein Abzug wird durch Division durch 1-p rückgängig gemacht.

**Bewertungsanker, jeweils 2 Punkte:**

- Selbstkosten 840
- Bezugspreis 700 und Bareinkauf 680
- Zieleinkauf 693.88
- Listenpreis 770.98 und Faktoren erklären

### 06.06 Qualitative Auswahl und Bezugsquellen (P1, 8 Punkte)

Intern: Lieferantenkartei/ERP und dokumentierte frühere Bestellungen beziehungsweise Reklamationsbewertungen. Extern: Hersteller-/Lieferantenangebote und Fachmessen oder geeignete Branchenverzeichnisse. Rechtzeitige Lieferung kann Projektverzug und Stillstandskosten vermeiden. Besserer Vor-Ort-Service kann Ausfallzeiten und interne Supportkosten senken. Diese Vorteile werden gegen den Mehrpreis und die vereinbarten Muss-Kriterien abgewogen; nicht pauschal immer den billigsten oder teuersten wählen.

**Bewertungsanker, jeweils 2 Punkte:**

- zwei interne Quellen
- zwei externe Quellen
- Liefertermin mit betrieblicher Folge
- Servicevorteil mit Kosten-/Risikoabwägung

### 06.07 Wareneingang nachvollziehbar prüfen (P1, 8 Punkte)

Anlieferung/Verpackung prüfen und sichtbare Schäden mit Fotos und Vermerk festhalten. Menge mit Bestellung und Lieferschein vergleichen: ein Gerät fehlt. Identität/Ausstattung und Seriennummern prüfen, insbesondere Modell und RAM. Geeigneten Funktionstest durchführen. Abweichungen dokumentieren und dem zuständigen Einkauf/Lieferanten zeitnah melden; beschädigte Ware nicht kommentarlos als mängelfrei bestätigen. Unbeschädigte Verpackung belegt weder Vollständigkeit noch richtige Ausstattung.

**Bewertungsanker, jeweils 2 Punkte:**

- äußere Prüfung und Schadenbeleg
- Mengenabweichung erkennen
- Identität/Ausstattung und Funktion
- Dokumentation sowie Weitergabe/Reklamation

### 06.08 Angebot, Rabatt, Skonto und Liefertermin (P1, 8 Punkte)

Rabatt ist ein Preisnachlass etwa aufgrund Menge/Kundenkondition; Skonto ist ein Nachlass bei Zahlung innerhalb der vereinbarten kurzen Frist. Angebotsangaben zum Beispiel: genaue Leistung mit Menge, Einzel-/Gesamtpreis und Steuerbehandlung, Liefertermin/-bedingungen, Zahlungsbedingungen und Bindefrist. Bei Terminüberschreitung: Lieferstatus verbindlich klären und dokumentieren, Auftraggeber frühzeitig informieren sowie Ersatz-/Teillieferung oder Terminplananpassung abstimmen. Wirtschaftliche Folge: Stillstandskosten, entgangener Umsatz oder Ansehensverlust. Rechtsfolgen sind gesondert anhand Vertrag und Umständen zu prüfen.

**Bewertungsanker, jeweils 2 Punkte:**

- Rabatt versus Skonto
- vier prüfbare Angebotsangaben
- zwei konkrete Reaktionen
- wirtschaftliche Folge mit Projektbezug

## Service, Organisation, Projekt und UML

### 07.01 Incident, Service Request, Event und Priorität (P1, 8 Punkte)

a) Event: ein für den Betrieb relevantes beobachtetes Ereignis, das je nach Bewertung weitere Maßnahmen auslösen kann. b) Service Request: standardisierte Leistungsanfrage. c) Incident: ungeplante Unterbrechung beziehungsweise Beeinträchtigung eines Service. Die Priorität richtet sich nach Auswirkung, etwa Zahl Betroffener und Geschäftsschaden, sowie Dringlichkeit, etwa fehlender Ausweichmöglichkeit und zeitkritischem Prozess. Eine laute oder hochrangige meldende Person ist allein kein technischer Prioritätsmaßstab.

**Bewertungsanker, jeweils 2 Punkte:**

- Event begründet
- Request begründet
- Incident begründet
- Impact/Urgency mit Geschäftsbezug

### 07.02 SLA, Abnahme und Testprotokoll (P1, 8 Punkte)

SLA-Inhalte: definierte Servicezeiten, Zielverfügbarkeit mit Messzeitraum, Reaktionsfrist je Priorität und Entstör-/Wiederherstellungsziel samt Messbeginn und Ausnahmen. Reaktionszeit endet bei qualifizierter Aufnahme/Bearbeitung gemäß Vertrag; Entstörzeit endet bei der vereinbarten Wiederherstellung. Protokoll: Gerät/Konfiguration und Versionen, Testfall mit Soll- und Ist-Ergebnis, Mängel/Restpunkte sowie Datum und verantwortliche Freigabe/Abnahme. Die konkrete vertragliche Definition ist maßgeblich.

**Bewertungsanker, jeweils 2 Punkte:**

- vier prüfbare SLA-Inhalte
- Reaktion und Wiederherstellung trennen
- Testobjekt und Soll-Ist-Protokoll
- Mängel und nachvollziehbare Abnahme

### 07.03 Organisation und Stellenarten (P1, 8 Punkte)

Stablinienorganisation: Geschäftsführung -> drei Abteilungsleitungen -> jeweils zugeordnete Ausführungsstellen. Der beratende Stab ist seitlich der Geschäftsführung zugeordnet und erhält keine Linienweisung an die Abteilungen. Instanzen besitzen Leitungs-/Weisungsbefugnis; Ausführungsstellen erledigen operative Arbeit; Stäbe unterstützen durch Fachberatung. Vorteil: klare Zuständigkeiten bei fachlicher Beratung. Nachteil: längere Entscheidungswege beziehungsweise mögliche Konflikte zwischen Beratung und Linie. Mehrere Fachvorgesetzte wären dagegen ein Mehrliniensystem; eine Matrix kombiniert zwei Gliederungsdimensionen.

**Bewertungsanker, jeweils 2 Punkte:**

- Stablinienstruktur richtig benennen/skizzieren
- Instanz und Ausführungsstelle
- Stab ohne Linienweisungsrecht
- Vor- und Nachteil mit Strukturbezug

### 07.04 e.K. und GmbH sachlich vergleichen (P1, 8 Punkte)

e.K.: natürliche Person, grundsätzlich persönliche unbeschränkte Haftung auch mit Privatvermögen, kein gesetzliches Mindestkapital, Führung durch Inhaber, Handelsregister Abteilung A. Reguläre GmbH: juristische Person, für Gesellschaftsschulden grundsätzlich Haftung mit Gesellschaftsvermögen, Stammkapital mindestens 25000 EUR, Geschäftsführung durch bestellte Geschäftsführer, Handelsregister Abteilung B. Empfehlung unter den Annahmen: GmbH erwägen, weil Beteiligungsstruktur und grundsätzliche Haftungsbegrenzung passen; höhere Gründungs-/Verwaltungsanforderungen und Kapitalbedarf abwägen. Persönliche Bürgschaften oder Pflichtverletzungen können dennoch persönliche Haftungsrisiken schaffen. 25000 EUR Stammkapital ist nicht identisch mit der in jedem Fall sofort voll einzuzahlenden Geldsumme.

**Bewertungsanker, jeweils 2 Punkte:**

- Haftungsvergleich mit Grundsatz
- Mindestkapital korrekt
- Führung und Register
- begründete Empfehlung mit Kosten/Grenzen

### 07.05 Rollout, Change und Ergonomie (P1, 8 Punkte)

Sofortumstellung beendet das Altsystem zum Stichtag: schneller und weniger Doppelbetrieb, aber konzentriertes Ausfallrisiko. Parallelbetrieb hält beide Systeme zeitweise verfügbar: mehr Rückfallmöglichkeit, jedoch höhere Kosten und Abgleichaufwand. Pilotgruppe entdeckt Probleme vor breitem Einsatz. Akzeptanz: frühzeitige verständliche Information und rollenbezogene Schulung mit erreichbarem Support. Ergonomie: blendfreie Monitoraufstellung mit passender Höhe/Abstand; Tisch und Stuhl so einstellen, dass Füße stabil stehen und eine entspannte Armhaltung möglich ist. Erfolgreiche Einführung umfasst Technik und Nutzung.

**Bewertungsanker, jeweils 2 Punkte:**

- Sofort- und Parallelbetrieb abwägen
- Pilot mit Risikobegründung
- zwei Akzeptanzmaßnahmen
- zwei ergonomische Einstellungen

### 07.06 Netzplan: rechnen statt Begriffe aufsagen (P2, 8 Punkte)

|Vorgang|FAZ|FEZ|SAZ|SEZ|Puffer|
|---|---|---|---|---|---|
|A|0|2|0|2|0|
|B|2|6|2|6|0|
|C|2|5|3|6|1|
|D|6|8|6|8|0|

Projektdauer 8 Tage; kritischer Pfad A-B-D. Vorwärts: FEZ=FAZ+Dauer und FAZ=max(FEZ der Vorgänger). Rückwärts: SAZ=SEZ-Dauer und SEZ=min(SAZ der Nachfolger). Puffer=SAZ-FAZ.

**Bewertungsanker, jeweils 2 Punkte:**

- Vorwärtsrechnung
- Rückwärtsrechnung
- Puffer C=1, übrige 0
- Dauer 8 und Pfad A-B-D

### 07.07 PDCA, SMART und TCO (P2, 8 Punkte)

SMART-Beispiel: Bis zum Ende des nächsten Quartals sinken die monatlichen, gerätebedingten Incidents von 20 auf höchstens 12 bei gleicher Gerätezahl; die Messung erfolgt über definierte Ticketkategorien. Plan: Ursachen und Maßnahme planen. Do: im Pilot umsetzen. Check: Messwerte mit Ziel vergleichen. Act: wirksame Lösung standardisieren oder nachsteuern. TCO zum Beispiel Lizenzen, Energie, Wartung/Support, Ausfälle und Schulung. Nachhaltigkeit: reparierbare, ausreichend leistungsfähige Geräte mit Ersatzteilversorgung und längerer Nutzungsdauer wählen; nicht nur Anschaffungspreis betrachten.

**Bewertungsanker, jeweils 2 Punkte:**

- SMART-Ziel mit Baseline und Termin
- Plan und Do fallbezogen
- Check und Act fallbezogen
- vier TCO-Arten und nachhaltige Entscheidung

### 07.08 OOP und UML-Klasse (P2, 8 Punkte)

```text
Geraet
--------------------------------
- seriennummer : String
- aktiv : boolean
--------------------------------
+ aktiviere() : void
```
Eine Klasse beschreibt Struktur und Verhalten; ein Objekt ist eine konkrete Instanz mit eigenen Werten. Kapselung verbirgt den internen Zustand und steuert Änderungen über definierte Methoden. Dadurch lassen sich Regeln prüfen, etwa erlaubte Statuswechsel; unkontrollierte Änderungen und unbeabsichtigte Abhängigkeiten werden reduziert. Minus bedeutet private, Plus public.

**Bewertungsanker, jeweils 2 Punkte:**

- UML-Attribute mit Typ und Sichtbarkeit
- Methode mit Sichtbarkeit und Rückgabetyp
- Klasse und Objekt unterscheiden
- Kapselung mit konkretem Vorteil

## Ergänzungen aus bundesweiten Prüfungen und Unterricht

### 08.01 OSI, DHCP, ARP und APIPA (P2, 8 Punkte)

Schicht 1: physische Signalübertragung; Schicht 2: Ethernet/MAC-Frames; Schicht 3: IPv4-Routing; Schicht 4: TCP-Transport. DHCP weist unter anderem IP, Maske, Gateway und DNS zeitlich verwaltet zu. ARP ermittelt für eine lokale IPv4-Ziel-/Next-Hop-Adresse die zugehörige MAC-Adresse. 169.254.0.0/16 ist IPv4-Link-Local: Bei diesem Windows-Szenario liegt eine fehlgeschlagene DHCP-Konfiguration nahe. Prüfen: Server/Dienst, VLAN/Port, Relay und Adresspool; die Adresse kann jedoch auch anderweitig gesetzt worden sein.

**Bewertungsanker, jeweils 2 Punkte:**

- vier Schichten korrekt
- DHCP-Funktion
- ARP-Funktion
- APIPA-Hypothese mit gezieltem Test statt Beweisbehauptung

### 08.02 CPU, RAM, SSD und sicherer Einbau (P2, 8 Punkte)

Die CPU führt Befehle aus; Cache hält häufig benötigte Daten nahe an den Recheneinheiten; RAM hält aktive Programme und Daten flüchtig bereit. Ein logischer Thread teilt sich physische Ressourcen eines Kerns und verdoppelt nicht automatisch die Leistung. M.2 bezeichnet eine Bauform; es gibt unter anderem SATA- und PCIe/NVMe-Anbindung. Leistung hängt von Schnittstelle und Gerät ab. Vor Einbau Stromversorgung trennen und geeigneten ESD-/Potentialausgleich beachten. RAM-Kompatibilität und die vom Mainboard-Handbuch vorgegebene Slotbelegung für Dual Channel prüfen.

**Bewertungsanker, jeweils 2 Punkte:**

- CPU/Cache/RAM unterscheiden
- Thread versus physischer Kern
- M.2-Bauform versus Protokoll
- Strom/ESD und Mainboard-Slotvorgabe

### 08.03 Cloud, On-Premises und Virtualisierung (P2, 8 Punkte)

Cloud kann schnellen Start, flexible Skalierung und weniger eigene Serverpflege ermöglichen; Nachteile können Anbieter-/Internetabhängigkeit und laufende Kosten beziehungsweise Prüfbedarf für Datenverarbeitung und Integration sein. On-Premises bietet mehr unmittelbare Kontrolle, benötigt aber eigene Betriebsressourcen. IaaS stellt Infrastrukturressourcen bereit, deren Gastbetriebssysteme und Anwendungen der Kunde wesentlich selbst verwaltet. SaaS stellt eine nutzbare Anwendung bereit; Verantwortung und Konfiguration bleiben vertraglich aufzuteilen. Ein Hypervisor verwaltet virtuelle Maschinen und ihre Ressourcen. Fällt ihr einziger physischer Host aus, fallen beide VMs aus: zwei VMs allein sind keine Hostredundanz.

**Bewertungsanker, jeweils 2 Punkte:**

- zwei Cloud-Vorteile
- zwei Nachteile mit Fallbezug
- IaaS versus SaaS
- Hypervisor und gemeinsame Ausfallursache

### 08.04 VPN und digitales Zertifikat (P2, 8 Punkte)

Ein geeignetes VPN schützt die Kommunikation über ein nicht vertrauenswürdiges Netz durch Verschlüsselung und Integritätsschutz sowie Authentifizierung der Gegenstellen. Ein Zertifikat bindet einen öffentlichen Schlüssel an eine überprüfbare Identität und wird digital signiert. Zu prüfen sind insbesondere Vertrauenskette/Signatur, Gültigkeit, passender Name beziehungsweise Zweck und gegebenenfalls Widerrufsstatus. Der private Schlüssel bleibt geschützt beim Inhaber. Ein kompromittierter Endpunkt kann Daten vor Verschlüsselung lesen oder nach Entschlüsselung verändern; deshalb bleiben Härtung, Updates und Zugangskontrolle notwendig.

**Bewertungsanker, jeweils 2 Punkte:**

- Vertraulichkeit und Integrität im Tunnel
- Authentifizierung/Zertifikatszweck
- zwei geeignete Zertifikatsprüfungen
- Endpunktrisiko trotz VPN erläutern

### 08.05 Kauf, Leasing und Amortisation (P2, 8 Punkte)

Leasingzahlungen 58*36=2088 EUR; das sind 288 EUR mehr als der Kaufpreis. Beim Leasing nutzt und besitzt der Leasingnehmer das Gerät, Eigentümer bleibt grundsätzlich der Leasinggeber; ein späterer Erwerb braucht eine entsprechende Vereinbarung. Liquidität und planbare Zahlungen können für Leasing sprechen, Gesamtkosten und Bindung dagegen. Amortisation des Mehrpreises: 240/8=30 Monate. Die Rechnung ersetzt keinen Vergleich mit Restwert, Zinsen, Risiken und unterschiedlichen Vertragsleistungen.

**Bewertungsanker, jeweils 2 Punkte:**

- Leasingsumme und Differenz
- Besitz/Eigentum unterscheiden
- Liquidität und Kosten abwägen
- Amortisation 30 Monate mit Formel

### 08.06 Lastenheft, Pflichtenheft und Projektbeteiligte (P2, 8 Punkte)

Lastenheft: Auftraggeber beschreibt was und wofür benötigt wird. Pflichtenheft: Auftragnehmer beschreibt wie und womit umgesetzt wird. Beispielanforderungen: Berechtigte Nutzer können Tickets mit Pflichtfeldern erfassen; ein definierter Test zeigt die vereinbarte Reaktionszeit bei festgelegter Last. Messwerte sind mit dem Auftraggeber abzustimmen. Stakeholder: Support möchte schnelle Bearbeitung, Mitarbeitende einfache Meldung, Geschäftsführung Kosten-/Leistungstransparenz; Datenschutz und Betrieb sind weitere mögliche Beteiligte. Gantt zeigt Vorgänge auf einer Zeitachse; ein Netzplan analysiert Abhängigkeiten und Puffer beziehungsweise kritische Pfade.

**Bewertungsanker, jeweils 2 Punkte:**

- Lasten- und Pflichtenheft
- zwei prüfbare Anforderungen
- drei Stakeholder mit Interessen
- Gantt und Netzplan unterscheiden

### 08.07 Kodierung, Bilddaten und Übertragungsdauer (P2, 8 Punkte)

Textkodierung legt die Abbildung von Zeichen auf Bytes fest; ein Dateiformat legt die Struktur/Inhalte einer Datei fest. UTF-8 verwendet je Unicode-Codepunkt ein bis vier Byte, daher ist die Zeichenzahl nicht allgemein die Bytezahl. Bild: 1000*800*24/8=2400000 Byte. 24 Bit ermöglichen 2^24=16777216 RGB-Kombinationen. Übertragung: 120*2^20*8/(40*10^6)=25.165824 s, etwa 25.17 s. Entscheidend sind Byte/Bit und binäre/dezimale Einheiten.

**Bewertungsanker, jeweils 2 Punkte:**

- Kodierung versus Format und UTF-8
- Bildgröße 2400000 Byte
- Farben 2^24
- Übertragung 25.17 s mit korrekten Einheiten

### 08.08 Härtung und datensparsame Protokollierung (P2, 8 Punkte)

Härtung reduziert unnötige Angriffsflächen und setzt sichere Konfigurationen um. Standardzugänge durch individuelle starke Authentifizierung ersetzen; unnötige Dienste entfernen/deaktivieren; Standardnutzung ohne Adminrechte und getrennte Administrationskonten einrichten. Zusätzlich Updates und Richtlinien kontrolliert verteilen. Sicherheitslogs ermöglichen Erkennung und Nachvollziehbarkeit, benötigen aber Zweckbindung, minimale Inhalte, Zugriffsschutz und festgelegte Aufbewahrung; keine Passwörter protokollieren. Bei KI-Diensten müssen Vertraulichkeit, erlaubte Datenverarbeitung und Anbieterbedingungen geprüft werden; vertrauliche Inhalte nur innerhalb ausdrücklich freigegebener Verfahren verarbeiten. KI-Ausgaben müssen fachlich geprüft werden.

**Bewertungsanker, jeweils 2 Punkte:**

- Härtung erklären
- drei konkrete Änderungen
- Logging-Nutzen mit Datenschutzgrenzen
- KI-Datenweitergabe und fachliche Prüfung
