# Netzwerkkonfiguration und Diagnose

Mündliche Kurzfragen mit Musterantworten. Die vollständigen schriftlichen Aufgaben stehen im Aufgabenheft. Nach der Frage folgen im Audio vier Sekunden Denkpause.

## 03.01 Vollständige IPv4-Konfiguration

Frage: Welche vier Angaben benötigen Sie für eine statische IPv4-Konfiguration mit Namensauflösung?

Musterantwort: Ich benötige eine eindeutige freie Hostadresse, die Subnetzmaske, das Standardgateway und den DNS-Server. Das Gateway ist der nächste Router für fremde Netze. DNS ermöglicht insbesondere die Auflösung von Rechner- und Webnamen. Eine beliebige freie Adresse reicht nicht: Sie muss zum vorgesehenen lokalen Subnetz passen.

## 03.02 Subnetz berechnen

Frage: Wie berechnen Sie das Subnetz der Adresse mit letztem Oktett einhundertfünfzig und Präfix sechsundzwanzig?

Musterantwort: Das Präfix lässt sechs Hostbits. Die Maske endet auf einhundertzweiundneunzig, also beträgt die Blockgröße vierundsechzig. Einhundertfünfzig liegt zwischen einhundertachtundzwanzig und einhunderteinundneunzig. Der erste Wert ist die Netzadresse, der letzte der Broadcast. Dazwischen liegen zweiundsechzig nutzbare Hosts.

## 03.03 DNS oder Gateway?

Frage: Wie unterscheiden Sie ein Namensauflösungsproblem von einem falschen Gateway?

Musterantwort: Wenn eine externe IP funktioniert, aber der korrekte Name nicht, prüfe ich zuerst DNS, zum Beispiel mit nslookup. Wenn nur lokale Geräte erreichbar sind und das Gateway auf die eigene Adresse zeigt, korrigiere ich das Gateway auf das Routerinterface im lokalen Netz. Nach jeder Änderung wiederhole ich den passenden Test.

## 03.04 MAC und IP auf dem Weg zum Internet

Frage: Warum ist die Ziel-MAC bei einem Internetzugriff normalerweise die des lokalen Routers?

Musterantwort: Die MAC-Adresse gilt für die Übertragung im aktuellen lokalen Abschnitt. Der entfernte Webserver liegt außerhalb dieses Ethernetnetzes. Daher wird der Frame an den nächsten Router adressiert, während die IP-Zieladresse weiter den Webserver bezeichnet. Der PC bleibt auf diesem ersten Abschnitt die Quelle für MAC und IP. Eine spätere Adressumsetzung wird getrennt betrachtet.

## 03.05 IPv6: Typ, Kurzform und Konfiguration

Frage: Welche IPv6-Punkte sollten Sie sicher beherrschen?

Musterantwort: Führende Nullen in einem Block können entfallen. Eine zusammenhängende Nullfolge darf einmal durch einen doppelten Doppelpunkt ersetzt werden. Link-Local-Adressen beginnen im Bereich fe achtzig und gelten nur auf dem lokalen Link. Adressen mit zweitausendeins Doppelpunkt db acht gehören in unseren Übungen zum Dokumentationsbereich und sind nicht tatsächlich öffentlich routbar. Zur Clientkonfiguration gehören Adresse und Präfix, dazu Gateway und DNS.

## 03.06 Dual Stack und WLAN-Segmentierung

Frage: Was leisten Dual Stack und ein eigenes Gastnetz?

Musterantwort: Dual Stack betreibt beide IP-Versionen parallel. Ein Tunnel verpackt Pakete in ein anderes Protokoll. Ein Gastnetz vereinfacht getrennte Verwaltung und Sicherheitsregeln. Die bloße Vergabe eines anderen Subnetzes verhindert Zugriffe aber noch nicht. Zwischen den Netzen müssen passende Firewallregeln oder Zugriffskontrolllisten durchgesetzt werden.

## 03.07 WLAN-Leistung und Frequenzwahl

Frage: Warum erreicht ein WLAN oft weniger als die beworbene Datenrate, und wann wählen Sie fünf Gigahertz?

Musterantwort: Die Werbung nennt eine Bruttodatenrate. Protokolloverhead, geteilte Funkzeit, Störungen und Wiederholungen reduzieren die nutzbare Rate. Zwei Komma vier Gigahertz reicht häufig weiter, ist aber oft stärker belegt. Fünf Gigahertz bietet mehr Kanaloptionen und eignet sich bei ausreichender Abdeckung gut für einen dicht belegten Raum. Die tatsächliche Leistung wird vor Ort geprüft.

## 03.08 Strukturierte Diagnose und Netzpläne

Frage: Wie vermeiden Sie unstrukturiertes Raten bei Netzwerkfehlern?

Musterantwort: Ich prüfe erst den physischen Link, dann IP-Adresse und Maske, anschließend Routing und zuletzt gezielt die Namensauflösung. Zu jeder Hypothese gehört ein geeigneter Test. Ein fehlgeschlagener Ping allein beweist keinen Totalausfall, weil ICMP gefiltert sein kann. Der logische Netzplan hilft bei Netzen und Adressen; der physische Plan bei Ports, Standorten und Kabeln.
