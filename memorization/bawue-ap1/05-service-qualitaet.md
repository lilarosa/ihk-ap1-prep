# 05 – IT-Service, Backup und Qualität

## 1. Event, Service Request und Incident

**Prüfungsantwort:**

„Ein Event ist eine erkennbare Zustandsänderung eines Systems und kann rein informativ sein. Ein Service Request ist eine standardisierte Benutzeranfrage, etwa nach Software oder einer Berechtigung. Ein Incident ist eine ungeplante Unterbrechung oder Qualitätsminderung eines IT-Services; Ziel des Incident Managements ist die schnellstmögliche Wiederherstellung des normalen Betriebs.“

## 2. Priorität eines Tickets

**Prüfungsantwort:**

„Die Priorität wird aus Auswirkung und Dringlichkeit abgeleitet. Ein Ausfall für viele Benutzer oder einen geschäftskritischen Prozess hat eine hohe Auswirkung. Besteht kein Workaround oder droht unmittelbarer Schaden, ist die Dringlichkeit hoch. Eine laut formulierte Anfrage allein begründet keine hohe Priorität.“

## 3. Inhalt eines SLA

**Prüfungsantwort:**

„Ein Service Level Agreement beschreibt Leistungsumfang, Servicezeiten, Verfügbarkeit, Reaktions- und Lösungszeiten, Prioritätsklassen, Eskalationswege, Verantwortlichkeiten, Messverfahren und Berichtswesen. Die Kennzahlen müssen eindeutig messbar sein. Abgrenzungen und Folgen bei Nichterfüllung sollten ebenfalls geregelt werden.“

## 4. RTO und RPO

**Prüfungsantwort:**

„RTO ist die maximal tolerierbare Zeit bis zur Wiederherstellung eines Services. RPO beschreibt den maximal tolerierbaren Datenverlust, ausgedrückt als Zeitraum seit der letzten wiederherstellbaren Kopie. Eine kurze RTO erfordert schnelle Ersatz- und Wiederanlaufverfahren; eine kurze RPO erfordert häufigere Sicherungen oder Replikation.“

**中文记忆:** RTO 问多久恢复；RPO 问最多丢多久的数据。

## 5. Backup und Archiv

**Prüfungsantwort:**

„Ein Backup dient der Wiederherstellung nach Datenverlust oder Beschädigung und wird regelmäßig überschrieben bzw. nach einem Sicherungsplan aufbewahrt. Ein Archiv dient der langfristigen, nachvollziehbaren und gegebenenfalls revisionssicheren Aufbewahrung von Informationen. Ein Archiv ersetzt kein Backup und ein Backup erfüllt nicht automatisch gesetzliche Archivanforderungen.“

## 6. Voll-, inkrementelles und differentielles Backup

**Prüfungsantwort:**

„Ein Vollbackup sichert alle ausgewählten Daten und ermöglicht eine einfache Wiederherstellung, benötigt aber viel Zeit und Speicher. Ein inkrementelles Backup sichert Änderungen seit der letzten Sicherung; es ist klein, zur Wiederherstellung werden jedoch Vollbackup und alle folgenden Inkremente benötigt. Ein differentielles Backup sichert Änderungen seit dem letzten Vollbackup und benötigt zur Wiederherstellung nur Vollbackup und letztes Differenzial.“

## 7. PDCA-Zyklus

**Prüfungsantwort:**

„Im Schritt Plan werden Problem, Ziel, Kennzahlen und Maßnahmen festgelegt. Do setzt die Maßnahme kontrolliert um. Check vergleicht die gemessenen Ergebnisse mit dem Ziel. Act standardisiert eine erfolgreiche Lösung oder leitet bei Abweichungen neue Verbesserungen ein. Der Zyklus dient der kontinuierlichen Verbesserung.“

## 8. Test- und Abnahmeprotokoll

**Prüfungsantwort:**

„Ein Testprotokoll enthält Testfall, Voraussetzungen, Eingabedaten, erwartetes Ergebnis, tatsächliches Ergebnis, Status, Datum und Tester. Ein Abnahmeprotokoll dokumentiert zusätzlich Auftrag bzw. Lieferumfang, festgestellte Mängel, Restarbeiten, Fristen und die Freigabe mit Verantwortlichen. Anforderungen müssen durch nachvollziehbare Akzeptanzkriterien prüfbar sein.“

## 9. Dokumentation einer Störung

**Prüfungsantwort:**

„Dokumentiert werden Zeitpunkt, betroffene Benutzer und Systeme, Symptome, Fehlermeldungen, Priorität, bereits durchgeführte Prüfungen, Änderungen, Ergebnisse, Ursache, Lösung und Abschlussbestätigung. Eine vollständige Dokumentation verhindert Doppelarbeit und macht die Lösung für ähnliche Störungen wiederverwendbar.“

