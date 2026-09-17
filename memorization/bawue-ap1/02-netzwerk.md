# 02 – Netzwerk und systematische Fehlersuche

## 1. Standardgateway

**Typische Frage:** „Erläutern Sie die Aufgabe des Standardgateways und die Folge einer falschen Konfiguration.“

**Prüfungsantwort:**

„Das Standardgateway leitet Pakete weiter, deren Ziel nicht im lokalen Subnetz liegt. Bei einer falschen Gateway-Adresse können Geräte im eigenen Subnetz weiterhin erreichbar sein, fremde Netze und das Internet jedoch nicht. Zur Prüfung werden lokale IP-Konfiguration und Routeradresse verglichen und anschließend Gateway und externes Ziel angepingt.“

**中文记忆:** 同网段直接找，跨网段交给网关。

## 2. DNS und Gateway unterscheiden

**Prüfungsantwort:**

„DNS löst Namen wie `server.example` in IP-Adressen auf. Das Gateway transportiert Pakete in andere Netze. Ist eine externe IP-Adresse erreichbar, ein Hostname jedoch nicht, liegt wahrscheinlich ein DNS-Problem vor. Ist bereits das Gateway nicht erreichbar, liegt die Ursache eher in lokaler Konfiguration, Verbindung oder Router.“

**Schlüsselwörter:** Namensauflösung, Routing, externe IP, Hostname.

## 3. Systematische Fehlersuche

**Typische Frage:** „Beschreiben Sie ein strukturiertes Vorgehen bei fehlender Netzwerkverbindung.“

**Prüfungsantwort:**

„Zuerst werden Stromversorgung, Kabel, Link-LED und WLAN-Verbindung geprüft. Danach folgen IP-Adresse, Präfix/Subnetzmaske, Gateway und DNS-Server. Anschließend wird stufenweise getestet: Loopback, eigene Adresse, Gateway, externe IP-Adresse und zuletzt ein DNS-Name. Geeignete Werkzeuge sind `ipconfig` bzw. `ip addr`, `ping`, `tracert`/`traceroute` und `nslookup`. Änderungen und Ergebnisse werden dokumentiert.“

**中文记忆:** 物理层 → 本机配置 → 网关 → 外网 IP → 域名。

## 4. IPv6 Link-Local und Global Unicast

**Prüfungsantwort:**

„Eine Link-Local-Adresse aus `fe80::/10` wird automatisch gebildet und gilt nur auf dem lokalen Netzsegment; Router leiten sie nicht weiter. Eine Global-Unicast-Adresse ist global eindeutig und grundsätzlich routingfähig. Link-Local wird unter anderem für Nachbarerkennung und lokale Kommunikation verwendet, Global Unicast für Kommunikation über Router hinweg.“

**Schlüsselwörter:** `fe80::/10`, lokales Segment, nicht geroutet, global eindeutig, routingfähig.

## 5. Dual Stack und Tunneling

**Prüfungsantwort:**

„Beim Dual Stack betreibt ein Gerät IPv4 und IPv6 parallel und wählt abhängig vom Ziel das passende Protokoll. Das ermöglicht eine schrittweise Migration, erhöht jedoch den Betriebs- und Sicherheitsaufwand, weil beide Protokolle administriert werden müssen. Beim Tunneling werden Pakete eines Protokolls in Pakete eines anderen Protokolls gekapselt, um ein nicht kompatibles Zwischennetz zu überbrücken.“

## 6. WLAN 2,4 GHz und 5 GHz

**Prüfungsantwort:**

„Das 2,4-GHz-Band bietet meist eine größere Reichweite und bessere Wanddurchdringung, ist aber stärker ausgelastet und besitzt weniger überlappungsfreie Kanäle. Das 5-GHz-Band ermöglicht typischerweise höhere Datenraten und mehr Kanäle, hat jedoch eine geringere Reichweite. Die Wahl hängt von Entfernung, Hindernissen, Störquellen, Client-Unterstützung und benötigter Datenrate ab.“

**中文记忆:** 2.4 走得远但拥挤；5 更快更干净但穿墙弱。

## 7. Getrenntes Gast-WLAN

**Prüfungsantwort:**

„Ein Gast-WLAN sollte durch ein eigenes VLAN bzw. Subnetz vom internen Netz getrennt werden. Firewall-Regeln erlauben Gästen nur die erforderlichen Dienste, typischerweise Internetzugang, und sperren interne Systeme. Client-Isolation verhindert zusätzlich die direkte Kommunikation zwischen Gästen. Dadurch wird ein kompromittiertes Gastgerät nicht zum direkten Zugang in das Unternehmensnetz.“

## 8. Private IP-Adresse, NAT und VPN

**Prüfungsantwort:**

„Private IPv4-Adressen sind im öffentlichen Internet nicht eindeutig und werden dort nicht geroutet. Ein Router kann sie mittels NAT/PAT auf eine öffentliche Adresse abbilden. Für sicheren Zugriff auf interne Ressourcen über ein fremdes Netz wird ein VPN verwendet. Es stellt einen authentisierten und verschlüsselten Tunnel bereit; NAT allein bietet keine solche Ende-zu-Ende-Absicherung.“

## 9. TCP und UDP

**Prüfungsantwort:**

„TCP arbeitet verbindungsorientiert, bestätigt Daten und stellt Reihenfolge sowie erneute Übertragung sicher. UDP ist verbindungslos und verursacht weniger Overhead, garantiert aber weder Zustellung noch Reihenfolge. TCP eignet sich beispielsweise für Webzugriffe und Dateiübertragung, UDP für zeitkritische Anwendungen wie Sprache, Video oder DNS-Anfragen, bei denen geringe Verzögerung wichtiger sein kann.“

## 10. Switch, Router und Access Point

**Prüfungsantwort:**

„Ein Switch verbindet Geräte innerhalb eines LAN und leitet Frames anhand von MAC-Adressen weiter. Ein Router verbindet unterschiedliche IP-Netze und entscheidet anhand von Routinginformationen über den nächsten Weg. Ein Access Point bindet WLAN-Clients an ein kabelgebundenes Netz an.“

## 11. WLAN sicher konfigurieren

**Prüfungsantwort:**

„Der Access Point soll WPA3 oder mindestens WPA2 mit einem starken Passwort verwenden. Das Standardpasswort des Geräts wird geändert. Firmware-Updates werden regelmäßig installiert. WPS wird deaktiviert, wenn es nicht benötigt wird. Gäste erhalten ein getrenntes WLAN ohne Zugriff auf das interne Netz.“

## 12. Firewall - Aufgaben und Position

**Prüfungsantwort:**

„Eine Firewall prüft den Netzwerkverkehr nach festen Regeln. Sie kann Verbindungen nach IP-Adresse, Port und Protokoll erlauben oder sperren. Eine Stateful Firewall erkennt auch den Zustand einer Verbindung. Die Firewall wird zwischen internem Netz und Internet platziert, damit der ein- und ausgehende Verkehr kontrolliert wird.“

## 13. MAC-Adresse und OSI-Schicht

**Prüfungsantwort:**

„Eine MAC-Adresse hat normalerweise 48 Bit. Sie wird auf Schicht 2 des OSI-Modells verwendet. Ein Switch nutzt MAC-Adressen, um Ethernet-Frames an den richtigen Port weiterzuleiten.“

## 14. Logischer und physikalischer Netzwerkplan

**Prüfungsantwort:**

„Ein logischer Netzwerkplan zeigt IP-Netze, VLANs und Kommunikationswege. Ein physikalischer Plan zeigt reale Geräte, Kabel, Ports und Standorte. Der logische Plan erklärt die Funktion. Der physikalische Plan hilft bei Installation und Fehlersuche vor Ort.“

## 15. Öffentliche und private IPv4-Adresse

**Prüfungsantwort:**

„Eine öffentliche IPv4-Adresse ist im Internet eindeutig und routingfähig. Eine private IPv4-Adresse wird nur im lokalen Netz verwendet. Private Adressen werden im Internet nicht geroutet. Für den Internetzugang setzt der Router sie meist mit NAT auf eine öffentliche Adresse um.“

## 16. Wi-Fi 6 / aktueller WLAN-Standard

**Prüfungsantwort:**

„Wi-Fi 6 entspricht IEEE 802.11ax. OFDMA und MU-MIMO verbessern die Nutzung bei vielen Geräten. Wi-Fi 6E nutzt zusätzlich das 6-GHz-Band. Vor einer Empfehlung müssen Access Point und Clients den Standard unterstützen.“

## 17. Ping-Werte beurteilen

**Prüfungsantwort:**

„Hohe oder stark schwankende Antwortzeiten weisen auf Latenz oder Jitter hin. Paketverlust zeigt, dass Daten nicht zuverlässig ankommen. Folgen können Ruckeln, Aussetzer und Verbindungsabbrüche sein. Danach prüft man Verbindung, Auslastung, WLAN-Signal und Netzwerkgeräte.“

## 18. Kein Standardpasswort

**Prüfungsantwort:**

„Ohne Standardpasswort muss bei der ersten Einrichtung ein eigenes Passwort vergeben werden. Dadurch kann ein bekanntes Herstellerpasswort nicht missbraucht werden. Die Inbetriebnahme dauert etwas länger, die Sicherheit ist aber höher.“
