# Schutzbedarf, Datenschutz und Wiederherstellung

Mündliche Kurzfragen mit Musterantworten. Die vollständigen schriftlichen Aufgaben stehen im Aufgabenheft. Nach der Frage folgen im Audio vier Sekunden Denkpause.

## 04.01 CIA mit Folgen im konkreten Betrieb

Frage: Wie erklären Sie die drei Schutzziele mit einem konkreten Geschäftsbeispiel?

Musterantwort: Vertraulichkeit schützt Gehaltsdaten vor unberechtigten Lesern. Integrität schützt Aufträge vor falschen oder manipulierten Werten. Verfügbarkeit sorgt dafür, dass Lieferpläne rechtzeitig nutzbar sind. Zu jedem Schutzziel nenne ich einen möglichen betrieblichen Schaden und eine passende Maßnahme. Nur die drei Fachwörter aufzuzählen reicht bei Erläutern nicht aus.

## 04.02 Schutzbedarf und Maximumprinzip

Frage: Wie erbt ein gemeinsamer Server den Schutzbedarf seiner Anwendungen?

Musterantwort: Für jeden Grundwert übernehme ich grundsätzlich die höchste relevante Anforderung. Hier ist Vertraulichkeit hoch, Integrität hoch und Verfügbarkeit sehr hoch. Ein Mittelwert wäre gefährlich, weil der Schaden der kritischeren Anwendung dadurch nicht verschwindet. Die Einstufung wird anhand von Abhängigkeiten und konkreten Schadenskriterien begründet.

## 04.03 Ransomware beurteilen

Frage: Welche Schutzziele verletzt Ransomware, und was tun Sie zuerst?

Musterantwort: Verschlüsselung blockiert die Verfügbarkeit und verändert die Daten unbefugt, betrifft also auch die Integrität. Werden Daten kopiert und offengelegt, ist zusätzlich die Vertraulichkeit verletzt. Eine bloße Drohung beweist den Abfluss noch nicht. Zuerst isoliere ich betroffene Systeme kontrolliert und aktiviere den vorgesehenen Incident-Prozess. Protokolle und Beweismittel sollen erhalten bleiben.

## 04.04 Backup, RAID, RTO und RPO

Frage: Was müssen Sie zu Backup, Wiederherstellungszeit und Datenverlust sagen können?

Musterantwort: RAID ist kein Ersatz für eine getrennte Sicherung. Drei zwei eins bedeutet drei Kopien insgesamt, zwei Medientypen und eine räumlich getrennte Kopie. Eine geschützte Offline- oder unveränderliche Kopie erschwert die Mitverschlüsselung. RPO beschreibt den tolerierten Datenverlust als Zeitspanne, hier zwei Stunden. RTO beschreibt die Wiederanlaufzeit, hier vier Stunden. Beides muss mit Restore-Tests überprüft werden.

## 04.05 Firewall und minimale Rechte

Frage: Wie ergänzen sich Firewall, minimale Rechte und Mehrfaktor-Anmeldung?

Musterantwort: Eine Firewall beschränkt Kommunikation zwischen Sicherheitszonen. Rollenrechte beschränken, was angemeldete Personen lesen oder ändern dürfen. Mehrfaktor-Authentifizierung erschwert die Nutzung gestohlener Passwörter durch einen zweiten unabhängigen Faktor. Keine dieser Maßnahmen ersetzt die anderen. Auch erlaubter Datenverkehr und menschliche Fehlentscheidungen können gefährlich sein.

## 04.06 Personenbezogene Daten und sichere Altgeräte

Frage: Welche Daten sind personenbezogen, und was ist vor der Weitergabe eines Firmenrechners zu tun?

Musterantwort: Ein Mitarbeitergeburtsdatum ist personenbezogen, öffentliche Kantinenpreise ohne Personenbezug sind Sachinformation. Eine geheime Produktkonstruktion kann unter den gesetzlichen Voraussetzungen ein Geschäftsgeheimnis sein. Vor Weitergabe sichere ich benötigte Daten, lösche den Datenträger mit einem geeigneten Verfahren und dokumentiere den Erfolg. Anschließend bereinige ich Konten und Geräteverwaltung. Ein Papierkorb oder eine Schnellformatierung reichen nicht zuverlässig.

## 04.07 Videoüberwachung im Fallbeispiel

Frage: Warum erlaubt ein Hinweisschild keine beliebige Videoüberwachung des Gehwegs?

Musterantwort: Eine Information ersetzt keine Rechtsgrundlage. Zu prüfen sind Zweck, Erforderlichkeit und die Interessen betroffener Personen. Der Bildausschnitt und die Speicherdauer müssen begrenzt sein. Private Überwachung öffentlicher Gehwege ist nur in eng begrenzten Ausnahmefällen zulässig. Ich richte die Kamera auf den notwendigen eigenen Bereich aus oder maskiere fremde Bereiche wirksam. Eine unbegrenzte Speicherung ist kein geeignetes Standardkonzept.

## 04.08 Verschlüsselung, Hash und SQL-Injection

Frage: Wie unterscheiden Sie Verschlüsselung, Passwort-Hashing und den Schutz gegen SQL-Injection?

Musterantwort: Verschlüsselung kann mit dem Schlüssel rückgängig gemacht werden. Passwortspeicherung verwendet ein dafür geeignetes langsames Hashverfahren mit individuellem Salt, beispielsweise Argon zwei id. Gegen SQL-Injection setze ich parametrisierte Abfragen ein. Dadurch bleiben Eingaben Daten und werden nicht als Teil des SQL-Codes interpretiert. Das Sperren einzelner Sonderzeichen ersetzt diese Trennung nicht.
