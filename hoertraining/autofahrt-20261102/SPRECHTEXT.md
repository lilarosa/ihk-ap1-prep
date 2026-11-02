# AP1 Baden-Württemberg: Kompaktwissen für die Autofahrt

Lesefassung zur deutschen Hörfassung. Kurze Aussagen, keine Quizfragen und keine eingeplanten Selbstantwortpausen.

## Arbeitsplatz, Hardware und Schnittstellen

Die CPU führt Befehle aus und verarbeitet Daten. Ihre Eignung hängt von der konkreten Anwendung ab.

Mehr Prozessorkerne helfen bei parallelisierbaren Aufgaben. Ein hoher Takt allein beweist keine höhere Gesamtleistung.

Ein logischer Thread ist kein zusätzlicher physischer Kern. Mehrere Threads können sich die Ressourcen eines Kerns teilen.

Der Cache hält häufig benötigte Daten nahe an der CPU. Er verkürzt bestimmte Speicherzugriffe.

Der RAM hält aktive Programme und Daten bereit. Sein Inhalt geht ohne Strom normalerweise verloren.

Zu wenig RAM führt häufig zu zusätzlicher Auslagerung. Das kann Anwendungen deutlich verlangsamen.

Die SSD speichert Daten dauerhaft. Sie arbeitet ohne bewegliche Schreib- und Leseköpfe.

Eine HDD speichert magnetisch auf rotierenden Scheiben. Sie bietet häufig viel Kapazität pro Euro.

Eine SSD bietet meist kurze Zugriffszeiten und ist unempfindlicher gegen Erschütterungen. Trotzdem benötigt sie Backups.

M.2 bezeichnet eine Bauform. M.2 bedeutet nicht automatisch NVMe.

SATA und PCIe sind unterschiedliche Anbindungen. NVMe ist ein Protokoll für geeignete PCIe-Speicher.

Bei einer Aufrüstung müssen Sockel, Chipsatz und Firmware passen. Auch Kühlung und Stromversorgung sind zu prüfen.

RAM-Generation und Mainboard müssen kompatibel sein. Die Kapazität muss zum Bedarf passen.

Für Dual Channel gilt die Slotbelegung des Mainboard-Handbuchs. Zwei beliebige belegte Slots garantieren ihn nicht.

Vor dem Komponenteneinbau wird die Stromversorgung sicher getrennt. Geeigneter ESD-Schutz reduziert Schäden durch statische Entladung.

Wärmeleitpaste verbessert den Wärmeübergang zwischen Prozessor und Kühler. Sie ersetzt keinen korrekt montierten Kühler.

Das Netzteil muss passende Anschlüsse und ausreichende Leistung bieten. Wirkungsgrad und Leistungsreserve sind zusätzlich wichtig.

USB-C beschreibt zuerst die Steckerform. Die Form garantiert weder hohe Datenrate noch Laden oder Bildausgabe.

Für ein Dock müssen Notebook, Dock und Kabel zusammenpassen. Ladeleistung und gleichzeitige Monitorauflösungen werden getrennt geprüft.

HDMI und DisplayPort übertragen digitale Bildsignale und üblicherweise Ton. Die unterstützte Kombination hängt von Geräten, Versionen und Kabeln ab.

Ethernet über Kupfer verwendet häufig achtpolige Steckverbindungen. Kabelkategorie, Länge und Installation beeinflussen die erreichbare Verbindung.

PoE versorgt geeignete Geräte über die Netzwerkleitung mit Energie. Gleichzeitig werden Daten übertragen.

Bei PoE zählen Portleistung und Gesamtbudget des Switches. Viele einzeln passende Geräte können gemeinsam das Budget überschreiten.

Eine USV überbrückt begrenzte Stromunterbrechungen. Sie ermöglicht auch ein kontrolliertes Herunterfahren.

Ein großer Monitor allein ist noch kein ergonomischer Arbeitsplatz. Höhe, Abstand, Beleuchtung und Reflexionen müssen passen.

Stuhl und Tisch werden zur Person eingestellt. Füße stehen stabil, Arme liegen entspannt und die Haltung wechselt regelmäßig.

Bei der Geräteauswahl zählen Anforderungen und Kompatibilität. Ein teureres Gerät ist nicht automatisch die passendere Lösung.

Zur Inbetriebnahme gehören Betriebssystem, Treiber und Updates. Danach folgen Sicherheitskonfiguration, Funktionstests und Dokumentation.

Ein gutes Testprotokoll nennt Gerät, Konfiguration und Testfall. Es vergleicht Soll und Ist und dokumentiert Abweichungen.

Bei gemeinsam genutzten Schreibtischen werden Personen und Arbeitsplätze getrennt gezählt. Nicht jede Person benötigt eine eigene Dockingstation am Standort.

Auflösung beschreibt die Anzahl der Bildpunkte. Bildwiederholrate beschreibt Aktualisierungen pro Sekunde.

DisplayPort-MST kann mehrere Bildschirme über eine geeignete Verbindung ansteuern. Geräte, Verkabelung und verfügbare Bandbreite müssen das unterstützen.

Ein Mainboard-Chipsatz koordiniert wichtige Anschluss- und Kommunikationsfunktionen. Er begrenzt mit der Plattform mögliche Erweiterungen.

ECC-Speicher kann bestimmte Speicherfehler erkennen und korrigieren. Prozessor und Mainboard müssen diese Funktion unterstützen.

Ein TPM unterstützt den geschützten Umgang mit kryptografischen Schlüsseln. Es ersetzt weder Zugriffsschutz noch Datensicherung.

Thunderbolt kann mehrere Übertragungsfunktionen über geeignete Anschlüsse bündeln. Eine USB-C-Buchse allein beweist keine Thunderbolt-Unterstützung.

Die Wattangabe eines Netzteils ist keine dauerhaft verbrauchte Energiemenge. Tatsächliche Last, Wirkungsgrad und Betriebszeit bestimmen den Verbrauch.

## Betriebssystem, Rechte, Cloud und Virtualisierung

Das Betriebssystem verwaltet Hardware und Ressourcen. Es stellt Anwendungen grundlegende Dienste bereit.

Ein Prozess ist ein ausgeführtes Programm mit eigenem Kontext. Threads sind Ausführungsstränge innerhalb eines Prozesses.

Der Scheduler verteilt Rechenzeit. Viele laufende Prozesse bedeuten nicht, dass alle gleichzeitig auf demselben Kern rechnen.

Virtueller Speicher bildet einen logischen Adressraum ab. Nicht jeder Teil liegt jederzeit im physischen RAM.

Eine Auslagerungsdatei erweitert die Speicherverwaltung. Sie ersetzt keinen ausreichend großen Arbeitsspeicher.

Ein Dateisystem organisiert Dateien, Verzeichnisse und Metadaten. Berechtigungen und Wiederherstellungsfunktionen hängen vom eingesetzten System ab.

Ein Dateiname und seine Erweiterung beweisen das Format nicht sicher. Der Inhalt kann zusätzlich geprüft werden.

Beim Start initialisiert die Firmware wichtige Hardware. Anschließend wird ein geeigneter Startmechanismus für das Betriebssystem verwendet.

UEFI ist moderne Systemfirmware. Secure Boot prüft die Vertrauenswürdigkeit geeigneter Startkomponenten anhand von Signaturen.

Secure Boot und Festplattenverschlüsselung erfüllen unterschiedliche Aufgaben. Das eine ersetzt das andere nicht.

Ein Treiber verbindet das Betriebssystem mit einer Gerätefunktion. Falsche oder veraltete Treiber können Störungen verursachen.

Updates beheben Fehler und Sicherheitslücken. Änderungen sollten passend zum Risiko getestet und dokumentiert werden.

Ein Standardkonto erhält nur die benötigten Rechte. Administrative Aufgaben verwenden getrennte privilegierte Konten.

Authentifizierung prüft die behauptete Identität. Autorisierung legt fest, was diese Identität tun darf.

Gruppen und Rollen vereinfachen die Rechteverwaltung. Berechtigungen werden nach dem tatsächlichen Aufgabenbedarf vergeben.

Ein Hypervisor stellt virtuelle Maschinen bereit. Er verwaltet ihre Zugriffe auf gemeinsame physische Ressourcen.

Eine virtuelle Maschine besitzt normalerweise ein eigenes Gastbetriebssystem. Mehrere virtuelle Maschinen können auf demselben Host laufen.

Zwei virtuelle Maschinen auf einem einzigen Host sind keine Hostredundanz. Ein Hostausfall kann beide gleichzeitig treffen.

Container teilen gewöhnlich den Kernel des Hostsystems. Sie sind deshalb nicht dasselbe wie vollständige virtuelle Maschinen.

Ein Snapshot hält einen bestimmten Systemzustand fest. Er ersetzt keine unabhängig geschützte Datensicherung.

On-Premises bedeutet Betrieb in eigener Verantwortung auf eigener beziehungsweise zugeordneter Infrastruktur. Das erfordert geeignete Betriebsressourcen.

Cloud-Dienste werden über ein Netz bereitgestellt. Skalierbarkeit kann steigen, aber Anbieter- und Verbindungsabhängigkeiten bleiben.

IaaS stellt Infrastrukturressourcen bereit. Der Kunde verwaltet häufig Gastbetriebssysteme und Anwendungen selbst.

PaaS stellt eine Plattform für Anwendungen bereit. Viele Aufgaben der darunterliegenden Infrastruktur übernimmt der Anbieter.

SaaS stellt eine nutzbare Anwendung bereit. Benutzerverwaltung, Konfiguration und erlaubte Datenverarbeitung bleiben trotzdem zu klären.

Public, Private und Hybrid Cloud beschreiben unterschiedliche Bereitstellungsmodelle. Sie sind keine Synonyme für IaaS, PaaS und SaaS.

Cloud ist nicht automatisch günstiger oder sicherer. Kosten, Zuständigkeiten, Datenschutz, Integration und Ausstiegsmöglichkeiten werden verglichen.

Bei einer Migration gehören Datenprüfung und Rückfallplanung dazu. Erst ein erfolgreicher Test belegt die nutzbare Übernahme.

Der Kernel ist der zentrale Kern des Betriebssystems. Er vermittelt grundlegende Ressourcen- und Hardwarezugriffe.

Ein Typ-1-Hypervisor läuft direkt auf der vorgesehenen Hardwareplattform. Ein Typ-2-Hypervisor setzt auf einem Hostbetriebssystem auf.

NTFS ist ein typisches Windows-Dateisystem, ext4 ein verbreitetes Linux-Dateisystem. FAT32 hat unter anderem eine Begrenzung der einzelnen Dateigröße auf knapp vier Gibibyte.

Journaling protokolliert bestimmte Dateisystemänderungen zur besseren Konsistenzwiederherstellung. Es ist kein Backup aller Dateiinhalte.

Lesen, Schreiben und Ausführen sind unterschiedliche Berechtigungen. Die genaue Wirkung bei Dateien und Verzeichnissen hängt vom System ab.

Live-Migration verschiebt eine laufende virtuelle Maschine zwischen geeigneten Hosts. Voraussetzungen und verbleibende Unterbrechungen hängen von der Technik ab.

Vertikale Skalierung vergrößert Ressourcen eines Systems. Horizontale Skalierung ergänzt weitere Systeme beziehungsweise Instanzen.

Shared Responsibility teilt Sicherheits- und Betriebsaufgaben zwischen Anbieter und Kunde. Die Aufteilung hängt vom Dienstmodell und Vertrag ab.

Vendor Lock-in erschwert einen Anbieterwechsel. Proprietäre Schnittstellen und schwer exportierbare Daten können dazu beitragen.

## Netzwerkgrundlagen, IPv4 und Fehlersuche

Ein Switch verbindet Geräte innerhalb eines lokalen Netzes. Er leitet Ethernet-Frames anhand von MAC-Adressen weiter.

Ein Router verbindet unterschiedliche IP-Netze. Seine Routingtabelle bestimmt geeignete nächste Wege.

Ein Access Point verbindet WLAN-Geräte mit einem Netz. Er ist nicht automatisch der Internetrouter.

Ein Repeater empfängt und sendet Funksignale erneut. Das garantiert keine Verdopplung der nutzbaren Datenrate.

Die erste OSI-Schicht betrifft physische Signale. Die zweite Schicht betrifft unter anderem Ethernet-Frames und MAC-Adressen.

Die dritte OSI-Schicht betrifft Vermittlung und Routing. Die vierte Schicht stellt Transportfunktionen bereit.

Die oberen OSI-Schichten beschreiben Sitzung, Darstellung und Anwendung. Das Modell hilft, Fehler systematisch einzuordnen.

Eine IPv4-Adresse hat 32 Bit. Die Präfixlänge trennt Netzanteil und Hostanteil.

Die Subnetzmaske kennzeichnet den Netzanteil. Adresse und Maske müssen gemeinsam betrachtet werden.

In einem gewöhnlichen Broadcast-Subnetz sind Netz- und Broadcastadresse keine normalen Clientadressen. Sonderfälle haben eigene Regeln.

Bei Präfix 24 bleiben acht Hostbits. Ein gewöhnliches solches Netz bietet 254 nutzbare Hostadressen.

Bei Präfix 26 bleiben sechs Hostbits. Das ergibt normalerweise 62 nutzbare Hostadressen.

Eine gültige statische Clientadresse liegt im vorgesehenen Subnetz. Sie darf nicht bereits einem anderen Gerät zugeordnet sein.

Das Standardgateway ist der nächste Router für Ziele außerhalb des lokalen Netzes. Sein lokales Interface muss passend erreichbar sein.

DNS löst Namen in Ressourceninformationen auf. Dazu gehören insbesondere IP-Adressen.

DHCP verteilt Netzwerkkonfigurationen zeitlich verwaltet. Dazu können Adresse, Maske, Gateway und DNS gehören.

Ein DHCP-Lease ist zeitlich begrenzt. Ein ausgeschöpfter Adresspool kann neue Zuweisungen verhindern.

Ein DHCP-Relay vermittelt DHCP-Nachrichten über Netzgrenzen. Ein Router leitet diese Broadcasts nicht einfach unverändert überall weiter.

Eine automatisch vergebene IPv4-Link-Local-Adresse beginnt häufig mit 169 Punkt 254. Unter Windows deutet das oft auf fehlende DHCP-Antworten hin.

ARP ermittelt im lokalen IPv4-Netz die MAC-Adresse einer Ziel- oder Next-Hop-Adresse. Es ist kein DNS-Dienst.

Für ein entferntes Ziel trägt der erste Ethernet-Frame die MAC des lokalen nächsten Routers. Die IP-Zieladresse bezeichnet weiter das entfernte Ziel.

Private IPv4-Bereiche beginnen mit 10, mit 172 Punkt 16 bis 31 und mit 192 Punkt 168. Sie sind nicht direkt öffentlich routbar.

Nicht jede Adresse mit 172 am Anfang ist privat. Der zweite Zahlenblock entscheidet mit.

NAT übersetzt IP-Adressen. Portbasierte Varianten können viele interne Verbindungen über eine öffentliche Adresse abbilden.

NAT ist kein vollständiges Sicherheitskonzept. Zugriffsregeln und weitere Schutzmaßnahmen bleiben nötig.

TCP bietet einen verbindungsorientierten, geordneten und zuverlässigen Bytestrom. UDP bietet diese Zusagen selbst nicht.

Ports ordnen Transportkommunikation Diensten und Endpunkten zu. Eine Portnummer allein beweist nicht den tatsächlichen Anwendungsinhalt.

HTTPS verwendet häufig TCP-Port 443. DNS verwendet häufig Port 53 über UDP oder TCP.

SSH verwendet üblicherweise Port 22. Unverschlüsseltes HTTP verwendet häufig Port 80.

Bei Fehlern wird zuerst der physische Link geprüft. Danach folgen IP-Konfiguration, Routing und Namensauflösung.

Mit ipconfig oder ip addr wird die Konfiguration geprüft. nslookup oder dig helfen bei der DNS-Prüfung.

Ping prüft eine bestimmte ICMP-Erreichbarkeit. Ein fehlender Ping beweist keinen vollständigen Dienstausfall.

Traceroute beziehungsweise tracert hilft bei der Weganalyse. Filter und asymmetrische Wege können die Anzeige beeinflussen.

Wenn externe IP-Adressen funktionieren, Namen aber nicht, ist DNS eine naheliegende Hypothese. Sie wird gezielt überprüft.

Wenn nur lokale Ziele funktionieren, werden Gateway und Routing geprüft. Ein geratenes DNS-Problem erklärt nicht automatisch jede Störung.

Ein logischer Netzplan zeigt Netze, Adressen und Kommunikationsbeziehungen. Ein physischer Netzplan zeigt Standorte, Ports und Verkabelung.

Die sieben OSI-Schichten heißen Bitübertragung, Sicherung und Vermittlung. Danach folgen Transport, Sitzung, Darstellung und Anwendung.

Eine MAC-Adresse identifiziert eine Schnittstelle auf der Sicherungsschicht im jeweiligen Kontext. Sie ist nicht unveränderlich gegen Nachbildung geschützt.

Ein Access-Port ordnet typischerweise Endgeräte einem VLAN zu. Ein Trunk transportiert mehrere entsprechend gekennzeichnete VLANs.

Eine Broadcast-Domäne begrenzt die Verteilung entsprechender Broadcasts. Router und VLAN-Trennung können solche Bereiche abgrenzen.

Eine DMZ ist ein getrennt geschütztes Netz für bestimmte exponierte Dienste. Sie ist kein ungeschützter direkter Zugang ins interne Netz.

Portweiterleitung ordnet eine von außen angesprochene Verbindung einem internen Ziel zu. Damit kann ein interner Dienst von außen erreichbar werden.

Quality of Service priorisiert Verkehr nach Regeln. Es erzeugt keine unbegrenzte zusätzliche Bandbreite.

ICMP dient unter anderem Fehler- und Kontrollmeldungen. Ping nutzt bestimmte ICMP-Nachrichten, aber ICMP besteht nicht nur aus Ping.

## IPv6, WLAN und Netzsegmentierung

Eine IPv6-Adresse hat 128 Bit. Sie wird üblicherweise in hexadezimalen Blöcken dargestellt.

Führende Nullen eines Blocks dürfen entfallen. Eine zusammenhängende Nullfolge darf einmal durch einen doppelten Doppelpunkt ersetzt werden.

Zwei doppelte Doppelpunkte in derselben IPv6-Adresse wären mehrdeutig. Deshalb ist diese Kurzschreibweise dort nur einmal erlaubt.

Ein typisches IPv6-LAN verwendet ein Präfix von 64 Bit. Die konkrete Vorgabe des Netzplans ist maßgeblich.

IPv6 kennt keinen Broadcast. Bestimmte Verteilaufgaben werden unter anderem mit Multicast erledigt.

Link-Local-Adressen stammen aus dem Bereich fe80 mit Präfix 10. Sie gelten nur auf dem jeweiligen lokalen Link.

Bei einer Link-Local-Adresse kann die Angabe des Interfaces nötig sein. Dieselbe Schreibweise kann auf verschiedenen Links vorkommen.

Global-Unicast-Adressen sind für netzübergreifende Kommunikation vorgesehen. Nicht jeder formal passende Bereich ist tatsächlich öffentlich routbar.

Der Bereich 2001 Doppelpunkt db8 ist für Dokumentation reserviert. Solche Beispieladressen werden nicht im öffentlichen Internet verwendet.

Unique-Local-Adressen sind für lokale beziehungsweise organisationsinterne Nutzung vorgesehen. Sie ersetzen keine Zugriffsregeln.

Neighbor Discovery übernimmt wichtige IPv6-Nachbarschaftsaufgaben. Dazu gehört die Ermittlung von Link-Layer-Adressen.

Router Advertisements teilen IPv6-Clients wichtige Netzinformationen mit. Das Standardgateway wird normalerweise darüber bekanntgegeben.

SLAAC ermöglicht zustandslose automatische Adresskonfiguration. DHCPv6 kann weitere Konfiguration oder verwaltete Adressen bereitstellen.

Dual Stack betreibt IPv4 und IPv6 parallel. Beide Protokolle benötigen passende Konfiguration und Schutzregeln.

Tunneling kapselt ein Protokoll in einem anderen. Es überbrückt ein Netz, das das innere Protokoll nicht direkt transportiert.

Ein VLAN trennt logische Ethernet-Broadcast-Domänen. Die Kommunikation zwischen VLANs benötigt eine geeignete Vermittlung.

Ein eigenes Gastnetz erleichtert getrennte Verwaltung. Den Zugriff auf interne Systeme begrenzen erst passende Firewallregeln oder Zugriffskontrolllisten.

Ein anderes Subnetz allein ist keine verlässliche Zugriffssperre. Die Trennung muss technisch durchgesetzt werden.

WLAN teilt Funkzeit zwischen mehreren Teilnehmern. Die beworbene Bruttodatenrate ist keine garantierte Nutzdatenrate.

Overhead, Störungen und Wiederholungen senken den Durchsatz. Viele gleichzeitig aktive Geräte teilen verfügbare Kapazität.

2,4 Gigahertz hat häufig eine größere Reichweite. Das Band ist aber oft stärker belegt.

5 Gigahertz bietet mehr Kanaloptionen. Hindernisse und Reichweite müssen trotzdem berücksichtigt werden.

Wi-Fi 6 bezeichnet IEEE 802.11ax. Wi-Fi 6E erweitert geeignete Geräte um den 6-Gigahertz-Bereich.

Die SSID ist der Name eines Funknetzes. Eine versteckte SSID ist kein wirksamer Ersatz für Verschlüsselung.

Starke WLAN-Authentifizierung und geeignete Verschlüsselung schützen den Zugang. Veraltete Verfahren werden nicht durch ein langes Netzwerknamensfeld sicher.

Eine MAC-Adressfilterung ist höchstens eine ergänzende Hürde. MAC-Adressen können unter anderem nachgebildet werden.

Bei schlechter Funkleistung werden Kanalbelegung, Signalqualität und Aufstellung geprüft. Einfach mehr Access Points ohne Planung kann zusätzliche Störungen erzeugen.

Latenz ist die Verzögerung einer Übertragung. Jitter bezeichnet die Schwankung dieser Verzögerung.

Für Echtzeitkommunikation können hohe Latenz und Jitter problematisch sein. Paketverlust ist ein zusätzliches, getrenntes Kriterium.

Ein VPN schützt bei geeigneter Konfiguration einen Kommunikationsweg. Es macht einen bereits kompromittierten Client nicht automatisch vertrauenswürdig.

WPA3 ist eine Familie von WLAN-Sicherheitsverfahren. Unterstützte Betriebsarten und Endgeräte müssen zur gewählten Konfiguration passen.

Client-Isolation kann direkte Kommunikation zwischen WLAN-Clients begrenzen. Sie ersetzt nicht alle Regeln zu anderen Netzen.

Ein erfolgreicher Ping ohne Verlust bewertet nur die getestete Verbindung und Zeit. Er beweist weder ausreichende Echtzeitqualität noch dauerhafte Fehlerfreiheit.

## Informationssicherheit, Angriffe und Schutzmaßnahmen

Vertraulichkeit bedeutet Schutz vor unberechtigtem Lesen. Integrität bedeutet Schutz vor unberechtigter oder unbemerkter Veränderung.

Verfügbarkeit bedeutet rechtzeitige Nutzbarkeit. Ein System kann vertraulich und trotzdem nicht verfügbar sein.

Zu jedem Schutzziel gehört ein konkreter möglicher Schaden. Erst daraus werden passende Schutzmaßnahmen abgeleitet.

Schutzbedarf wird häufig als normal, hoch oder sehr hoch eingestuft. Maßgeblich sind die vorgegebenen Schadenskriterien.

Eine Einstufung wird begründet, nicht nur angekreuzt. Vertrauliche Kundendaten und existenzkritische Abläufe benötigen unterschiedliche Betrachtungen.

Nach dem Maximumprinzip übernimmt ein System je Schutzziel die höchste relevante Anforderung seiner abhängigen Anwendungen. Ein einfacher Mittelwert wäre ungeeignet.

Kumulation kann den Schutzbedarf erhöhen. Viele einzeln kleine Schäden können zusammen schwerwiegend werden.

Verteilung kann Abhängigkeiten verändern. Solche Effekte müssen begründet werden und sind keine pauschalen Ausnahmen.

Eine Bedrohung ist ein mögliches schädigendes Ereignis. Eine Schwachstelle erleichtert dessen Eintritt oder Wirkung.

Risiko berücksichtigt Eintrittswahrscheinlichkeit und Schadensausmaß. Eine Maßnahme sollte zum konkreten Risiko passen.

Technische und organisatorische Maßnahmen ergänzen sich. Eine Firewall ersetzt beispielsweise keine klare Zuständigkeit.

Least Privilege bedeutet minimale notwendige Rechte. Nicht benötigte Rechte werden entzogen.

Need to know beschränkt Informationszugriff auf den Aufgabenbedarf. Neugier allein begründet keine Berechtigung.

Mehrfaktor-Authentifizierung kombiniert unabhängige Faktoren. Zwei verschiedene Passwörter sind nicht automatisch zwei Faktoren.

Wissen, Besitz und körperliches Merkmal sind typische Faktoren. Ein Passwort und ein geeigneter Sicherheitsschlüssel können kombiniert werden.

Starke Passwörter sind ausreichend lang, schwer vorhersehbar und einzigartig. Ein Passwortmanager unterstützt ihre Verwaltung.

Standardkennwörter und ungenutzte Konten erhöhen das Risiko. Sichere Erstkonfiguration verändert beziehungsweise entfernt sie.

Härtung reduziert unnötige Angriffsflächen. Unnötige Dienste werden deaktiviert und sichere Einstellungen durchgesetzt.

Eine Firewall erlaubt oder sperrt Kommunikation nach Regeln. Sie benötigt eine passende Platzierung zwischen Sicherheitszonen.

Eine zustandsbehaftete Firewall berücksichtigt Verbindungszustände. Das ersetzt keine Prüfung sämtlicher Anwendungsrisiken.

Netzsegmentierung begrenzt mögliche Ausbreitung. Rechte und Regeln zwischen den Segmenten müssen trotzdem stimmen.

Schadsoftware umfasst unter anderem Viren, Würmer und Trojaner. Diese Begriffe beschreiben unterschiedliche Eigenschaften.

Ein Virus hängt typischerweise an einem Wirtsobjekt. Ein Wurm kann sich selbstständig über geeignete Wege verbreiten.

Ein Trojaner täuscht eine nützliche oder harmlose Funktion vor. Seine schädliche Wirkung ist darin verborgen.

Ransomware kann Daten verschlüsseln und Dienste blockieren. Zusätzlicher Datendiebstahl bedroht die Vertraulichkeit.

Eine bloße Erpressungsdrohung beweist einen Datenabfluss noch nicht. Die Untersuchung muss den tatsächlichen Umfang klären.

Phishing täuscht vertrauenswürdige Kommunikation vor. Ziel sind etwa Zugangsdaten, Zahlungen oder das Öffnen schädlicher Inhalte.

Social Engineering nutzt menschliches Verhalten aus. Zeitdruck, Autorität und Hilfsbereitschaft können dafür missbraucht werden.

Verdächtige Anfragen werden über einen bekannten unabhängigen Kanal geprüft. Die Telefonnummer aus der verdächtigen Nachricht ist dafür nicht automatisch geeignet.

Bei einem vermuteten Sicherheitsvorfall werden betroffene Systeme kontrolliert isoliert. Der vorgesehene Melde- und Eskalationsweg wird aktiviert.

Beweise und Protokolle sollen erhalten bleiben. Unkoordiniertes Löschen oder Neuinstallieren kann die Untersuchung erschweren.

Verschlüsselung schützt Inhalte mit einem Schlüssel. Entschlüsselung macht sie mit dem passenden Schlüssel wieder lesbar.

Symmetrische Verschlüsselung verwendet denselben geheimen Schlüssel auf beiden Seiten. Seine sichere Verteilung ist wichtig.

Asymmetrische Verfahren verwenden ein Schlüsselpaar. Öffentlicher und privater Schlüssel haben unterschiedliche Rollen.

Bei asymmetrischer Vertraulichkeit wird für den Empfänger mit dessen öffentlichem Schlüssel verschlüsselt. Entschlüsselt wird mit dessen privatem Schlüssel.

Eine digitale Signatur wird mit dem privaten Signaturschlüssel erzeugt. Der zugehörige öffentliche Schlüssel dient zur Prüfung.

Ein Hash ist keine rückwärts entschlüsselbare Geheimschrift. Eine passende Hashfunktion dient unter anderem der Integritätsprüfung.

Passwörter brauchen geeignete langsame Passwort-Hashverfahren mit individuellem Salt. Ein einfacher schneller Hash ist dafür keine gute Standardlösung.

Ein Zertifikat bindet einen öffentlichen Schlüssel an eine Identität. Vertrauenskette, Gültigkeit und passende Identität werden geprüft.

TLS schützt bei korrekter Prüfung einen Kommunikationskanal. Es beweist nicht, dass jeder Inhalt des Servers fachlich richtig ist.

HTTPS ist HTTP über einen geschützten TLS-Kanal. Ein Schlosszeichen allein beweist keine ehrliche Geschäftsabsicht.

Sicherheitsprotokolle helfen bei Erkennung und Nachvollziehbarkeit. Sie brauchen Zugriffsschutz und einen klaren Zweck.

Backups, Updates, Schulung und Monitoring ergänzen sich. Einzelmaßnahmen bieten keinen absoluten Schutz.

Hybride Verschlüsselung kombiniert asymmetrische und symmetrische Verfahren. Der Datentransport nutzt dabei üblicherweise einen geeignet vereinbarten symmetrischen Sitzungsschlüssel.

Eine Zertifizierungsstelle bestätigt Zertifikatsbindungen nach ihren Prüfregeln. Vertrauen entsteht nicht allein dadurch, dass irgendein Zertifikat existiert.

Ein selbstsigniertes Zertifikat hat ohne zusätzlichen Vertrauensaufbau keine allgemein anerkannte Vertrauenskette. Eine Warnung sollte nicht gedankenlos übergangen werden.

Defense in Depth kombiniert mehrere Schutzschichten. Der Ausfall einer einzelnen Maßnahme soll nicht sofort alle Grenzen beseitigen.

Zero Trust verlangt keine pauschale Vertrauensannahme allein wegen eines internen Standorts. Zugriffe werden passend zu Identität, Kontext und Risiko geprüft.

Das Vier-Augen-Prinzip verlangt eine zweite zuständige Prüfung bei kritischen Handlungen. Es reduziert bestimmte Fehler- und Missbrauchsrisiken.

Zutritt betrifft Räume, Zugang betrifft die Systemnutzung. Zugriff betrifft konkrete Daten und Funktionen nach der Anmeldung.

Ein Notfallplan regelt Zuständigkeiten, Kommunikation und Wiederanlauf. Er muss im Notfall erreichbar und praktisch erprobt sein.

## Datenschutz, Datensicherung und Wiederherstellung

Datenschutz schützt natürliche Personen bei der Verarbeitung personenbezogener Daten. Informationssicherheit schützt Informationen allgemein.

Personenbezogene Daten beziehen sich auf identifizierte oder identifizierbare Menschen. Auch indirekte Zuordnung kann dafür ausreichen.

Gesundheitsdaten gehören zu besonders geschützten Datenkategorien. Nicht jedes vertrauliche Unternehmensdokument ist deshalb personenbezogen.

Für eine Verarbeitung ist eine passende Rechtsgrundlage nötig. Einwilligung ist eine Möglichkeit, aber nicht die einzige.

Zweckbindung bedeutet Verwendung für festgelegte zulässige Zwecke. Eine spätere beliebige Nutzung ist dadurch nicht automatisch erlaubt.

Datenminimierung begrenzt die Verarbeitung auf notwendige Daten. Vorratssammlung ohne konkreten Bedarf widerspricht diesem Prinzip.

Speicherbegrenzung verlangt geeignete Fristen und Löschregeln. Daten bleiben nicht allein aus Bequemlichkeit unbegrenzt erhalten.

Betroffene Personen müssen angemessen informiert werden. Auch ihre anwendbaren Rechte müssen organisatorisch unterstützt werden.

Auftragsverarbeitung erfordert passende vertragliche und organisatorische Regelungen. Ein Cloudvertrag allein löst nicht alle Datenschutzfragen.

Videoaufnahmen erkennbarer Personen sind regelmäßig personenbezogene Daten. Zweck, Erforderlichkeit und Interessenabwägung sind zu prüfen.

Ein Hinweisschild ersetzt keine Rechtsgrundlage für Videoüberwachung. Es erfüllt höchstens einen Teil der Informationspflichten.

Öffentliche Gehwege dürfen durch Private nicht pauschal mitüberwacht werden. Bildausschnitt und Maskierung können die Erfassung begrenzen.

Für Videoaufnahmen gibt es keine beliebig erfundene allgemeine Speicherfrist. Die Dauer muss zum zulässigen Zweck passen.

Bei einer Datenpanne werden Verantwortliche und Datenschutzfunktion unverzüglich eingebunden. Mögliche Meldepflichten und Fristen werden gezielt geprüft.

Eine Meldung an die Aufsicht muss unter den gesetzlichen Voraussetzungen unverzüglich und möglichst binnen 72 Stunden erfolgen. Nicht jede Störung ist automatisch meldepflichtig.

Beim Weitergeben alter Geräte werden benötigte Daten zuerst geordnet übernommen. Danach erfolgt eine geeignete sichere Löschung.

Papierkorb und Schnellformatierung löschen Daten nicht zuverlässig gegen Wiederherstellung. Das Verfahren muss zum Datenträger passen.

RAID erhöht je nach Aufbau die Verfügbarkeit bei bestimmten Laufwerksausfällen. Es ist kein Ersatz für ein Backup.

RAID schützt nicht allgemein gegen versehentliches Löschen, Ransomware oder Brand. Solche Schäden können den gesamten Verbund treffen.

RAID 1 spiegelt Daten. Bei zwei gleich großen Platten entspricht die nutzbare Kapazität grundsätzlich einer Platte.

RAID 5 verteilt Daten und Parität. Es toleriert den Ausfall einer Platte.

RAID 10 kombiniert Spiegelung und Striping. Mehrere Ausfälle sind nur bei geeigneter Verteilung auf die Spiegelpaare tolerierbar.

Fallen beide Platten desselben RAID-10-Spiegelpaars aus, kann der gesamte Verbund ausfallen. Die reine Anzahl ausgefallener Platten genügt zur Bewertung nicht.

Eine vollständige Sicherung kopiert den gesamten ausgewählten Datenbestand. Sie vereinfacht oft die Wiederherstellung, benötigt aber mehr Sicherungsaufwand.

Eine inkrementelle Sicherung speichert Änderungen seit der letzten passenden Sicherung. Zur Wiederherstellung wird die benötigte Kette gebraucht.

Eine differentielle Sicherung speichert Änderungen seit der letzten Vollsicherung. Zur Wiederherstellung genügen grundsätzlich Vollsicherung und passende differentielle Sicherung.

Die 3-2-1-Regel bedeutet drei Kopien insgesamt. Sie verteilt sich auf zwei Medientypen und eine räumlich getrennte Kopie.

Eine offline oder unveränderlich geschützte Kopie erschwert gemeinsame Verschlüsselung. Auch ihre Zugangsdaten müssen geschützt werden.

RPO beschreibt den maximal tolerierten Datenverlust als Zeitspanne. Dazu müssen geeignete Wiederherstellungspunkte existieren.

RTO beschreibt die angestrebte maximale Wiederanlaufzeit. Dazu gehören mehr Schritte als nur das Kopieren einer Datei.

Ein vorhandenes Backup ist noch kein bewiesener erfolgreicher Restore. Wiederherstellung wird regelmäßig getestet und dokumentiert.

Redundante Netzteile, Hosts und Netzwege reduzieren bestimmte Ausfallrisiken. Gemeinsame Ausfallursachen müssen gesondert betrachtet werden.

Pseudonymisierung ersetzt direkte Zuordnungsmerkmale durch Kennzeichen. Mit zusätzlichen Informationen bleibt eine Zuordnung möglich.

Anonymisierung soll einen Personenbezug wirksam und dauerhaft aufheben. Pseudonymisierte Daten bleiben grundsätzlich personenbezogen.

Ein Geschäftsgeheimnis ist nicht einfach jede unveröffentlichte Information. Unter anderem sind Geheimniswert und angemessene Geheimhaltungsmaßnahmen wichtig.

## Programmierung, Algorithmik, Tests und UML

Ein Algorithmus beschreibt eine eindeutige Verarbeitung in einzelnen Schritten. Eingabe, Verarbeitung und Ausgabe werden getrennt betrachtet.

Vor dem Schreiben wird die Anforderung zerlegt. Benötigt werden Eingaben, Zwischenwerte, Bedingungen und das geforderte Ergebnis.

Eine Variable speichert einen Wert mit einem vorgesehenen Datentyp. Der Typ beeinflusst erlaubte Operationen und Wertebereiche.

Ganzzahlen sind nicht automatisch beliebig groß. Ein Überlauf kann ein mathematisch erwartetes Ergebnis verfälschen.

Eine boolesche Variable enthält wahr oder falsch. Sie eignet sich für Bedingungen und Prüfergebnisse.

Zuweisung verändert einen Variablenwert. Ein Vergleich prüft eine Beziehung und liefert einen Wahrheitswert.

Eine Sequenz führt Anweisungen nacheinander aus. Eine Verzweigung wählt einen passenden Ausführungspfad.

UND verlangt beide Bedingungen. ODER verlangt mindestens eine Bedingung.

NICHT kehrt einen Wahrheitswert um. Klammern machen die gewünschte Kombination eindeutig.

Mindestens bedeutet größer oder gleich. Mehr als bedeutet strikt größer.

Höchstens bedeutet kleiner oder gleich. Weniger als bedeutet strikt kleiner.

Ein If-Else unterscheidet zwei Wege. Bei mehreren Regeln muss ihre Reihenfolge zur Spezifikation passen.

Eine While-Schleife prüft die Bedingung vor dem Durchlauf. Sie kann deshalb auch kein einziges Mal laufen.

Eine Do-While-Schleife prüft erst nach dem Schleifenkörper. Sie läuft mindestens einmal.

Eine For-Schleife fasst häufig Initialisierung, Bedingung und Fortschaltung zusammen. Die Abbruchbedingung bleibt trotzdem entscheidend.

Eine Schleife braucht einen nachvollziehbaren Fortschritt. Sonst kann sie unbeabsichtigt unendlich weiterlaufen.

Arrays speichern mehrere Elemente über Indizes. In Java und C# beginnt der erste Index bei null.

Bei vier Elementen sind die gültigen Indizes null bis drei. Die Länge vier ist kein gültiger Elementindex.

Beim Durchlaufen gilt häufig: Index kleiner als Länge. Kleiner oder gleich kann einen Zugriff außerhalb des Arrays auslösen.

Eine Summe startet üblicherweise bei null. Jeder passende Wert wird zur bisherigen Summe addiert.

Eine Zählvariable startet üblicherweise ebenfalls bei null. Pro passendem Eintrag wird sie um eins erhöht.

Summe und Anzahl sind unterschiedliche Größen. Der Wert eines Eintrags ist nicht seine Anzahl.

Beim Maximum kann der erste vorhandene Wert als Anfang dienen. Eine ungeprüfte Null ist bei ausschließlich negativen Werten falsch.

Ein Durchschnitt ergibt sich aus Summe geteilt durch Anzahl. Das leere Array braucht eine ausdrücklich festgelegte Behandlung.

Bei Ganzzahldivision kann der Nachkommateil verloren gehen. Eine nötige Umwandlung erfolgt vor der Division.

Ein Rückgabetyp mit Nachkommastellen repariert keine vorherige Ganzzahldivision. Die Operanden bestimmen die ausgeführte Rechnung.

Eine Methode erhält Parameter und kann einen Wert zurückgeben. Parameter und lokale Variablen haben einen begrenzten Gültigkeitsbereich.

Return beendet die gesamte aktuelle Methode. Es bedeutet nicht nur Ende dieser Schleifenrunde.

Bei einer Existenzsuche darf ein Treffer sofort wahr liefern. Ein nicht passender erster Eintrag beweist noch nicht, dass nichts vorhanden ist.

Die Rückgabe falsch steht bei linearer Existenzsuche normalerweise nach der Schleife. Nur dann wurden alle nötigen Einträge berücksichtigt.

In Java vergleicht equals den Inhalt geeigneter Strings. Ein doppeltes Gleichheitszeichen vergleicht dort Objektreferenzen.

Ein Schreibtischtest führt Code schrittweise von Hand aus. Nach jedem Durchlauf werden die relevanten Variablenwerte notiert.

Nicht ausgeführte Zuweisungen verändern keine Variable. Bei einer falschen If-Bedingung bleibt der bisherige Wert bestehen.

Bei CSV wird zuerst die vereinbarte Struktur gelesen. Feldreihenfolge, Trennzeichen und mögliche Kopfzeile sind entscheidend.

Ein leeres letztes CSV-Feld muss beim Aufteilen erhalten bleiben. In Java kann dafür Split mit negativem Limit verwendet werden.

Ein CSV-Text mit den Buchstaben NULL ist nicht automatisch eine Java-Nullreferenz. Die Zahl null ist außerdem nicht dasselbe wie ein fehlender Preis.

Bei einer Preisprüfung wird zuerst die richtige Artikelnummer verglichen. Erst dann wird das zugehörige Preisfeld bewertet.

Bei der Regel mindestens ein fehlerhafter Eintrag genügt ein passender Fehler. Ein vorheriger gültiger Eintrag darf die Suche nicht zu früh beenden.

Bei begrenztem Dateispeicher wird die Löschreihenfolge beachtet. Wenn älteste zuerst gefordert ist, darf nicht irgendeine große Datei verschwinden.

Strikt unter einem Grenzwert bedeutet: Gleichheit reicht noch nicht. Die Schleife muss bei Gleichheit gegebenenfalls weiterarbeiten.

Nach erfolgreichem Löschen wird die Gesamtgröße aktualisiert. Alle Größen müssen dieselbe Einheit verwenden.

Ein Syntaxfehler verletzt die Sprachregeln. Ein Laufzeitfehler tritt erst bei der Ausführung auf.

Ein logischer Fehler kann gültigen Code mit falschem Ergebnis erzeugen. Er wird durch passende Soll-Ist-Tests sichtbar.

Grenzwerttests prüfen direkt an und neben einer Grenze. Leere Eingaben und fehlende Treffer sind wichtige Sonderfälle.

Äquivalenzklassen bündeln Eingaben mit erwartet gleichem Verhalten. Repräsentative Tests werden aus den relevanten Klassen gewählt.

Blackbox-Tests prüfen Verhalten anhand der Spezifikation. Whitebox-Tests berücksichtigen zusätzlich die interne Programmstruktur.

Ein Struktogramm stellt Kontrollstrukturen verschachtelt dar. Ein Programmablaufplan stellt Abläufe mit Symbolen und Verbindungen dar.

Eine Klasse beschreibt gemeinsame Attribute und Methoden. Ein Objekt ist eine konkrete Instanz mit eigenen Werten.

Kapselung schützt den inneren Zustand durch kontrollierte Zugriffe. Private Attribute werden nicht beliebig von außen verändert.

Vererbung beschreibt eine Ist-ein-Beziehung. Gemeinsames Verhalten kann über eine passende Oberklasse wiederverwendet werden.

Polymorphie erlaubt unterschiedliche konkrete Implementierungen über eine gemeinsame Schnittstelle. Die tatsächlich ausgeführte Methode hängt vom konkreten Objekt ab.

Im UML-Klassendiagramm bedeutet Plus öffentlich und Minus privat. Attribute haben Typen, Methoden Parameter und gegebenenfalls Rückgabetypen.

Eine Assoziation beschreibt eine Beziehung zwischen Objekten. Multiplizitäten nennen die erlaubte Anzahl zugeordneter Objekte.

Eine Komposition beschreibt eine starke Teil-Ganzes-Beziehung. Ihre Teile sind an den Lebenszyklus des Ganzen gebunden.

Ein Use-Case-Diagramm zeigt Akteure und fachliche Anwendungsfälle. Es zeigt nicht die genaue Reihenfolge einzelner Codeanweisungen.

Ein Aktivitätsdiagramm beschreibt einen Ablauf. Ein Sequenzdiagramm beschreibt zeitlich geordnete Nachrichten zwischen Beteiligten.

Versionsverwaltung macht Änderungen nachvollziehbar. Aussagekräftige Commits und passende Reviews helfen bei Fehlersuche und Zusammenarbeit.

Ein Off-by-one-Fehler verschiebt eine Grenze um eins. Typische Folgen sind ein ausgelassenes letztes Element oder ein ungültiger Index.

Kurzschlussauswertung prüft nicht immer beide Teilbedingungen. Bei UND kann ein falscher erster Teil bereits entscheiden.

Bei ODER kann ein wahrer erster Teil bereits entscheiden. Das ist bei Schutzprüfungen vor weiteren Zugriffen wichtig.

Break verlässt die betreffende Schleife. Continue überspringt den Rest des aktuellen Schleifendurchlaufs.

Ein Konstruktor initialisiert ein neues Objekt. Er ist keine beliebige Methode mit Rückgabewert.

Ein Interface beschreibt einen Vertrag für angebotene Funktionen. Eine abstrakte Klasse kann zusätzlich gemeinsamen Zustand und Implementierung bereitstellen.

Rekursion bedeutet einen direkten oder indirekten Selbstaufruf. Sie braucht eine passende Abbruchbedingung und Fortschritt zum Abbruch.

Bei UML steht die leere Raute für Aggregation. Die ausgefüllte Raute bezeichnet Komposition mit stärkerer Lebenszyklusbindung.

Multiplizität eins bedeutet genau eins, null bis eins bedeutet optional. Eins bis beliebig verlangt mindestens ein zugeordnetes Objekt.

Include bezeichnet im Use Case eine eingebundene Teilfunktion. Extend beschreibt eine bedingte Erweiterung unter den modellierten Voraussetzungen.

Ein Zustandsdiagramm zeigt Zustände und Übergänge. Es ist besonders für ereignisabhängiges Verhalten geeignet.

Methoden zerlegen Aufgaben und vermeiden unnötige Wiederholung. Gute Namen und klar begrenzte Aufgaben erleichtern das Verstehen.

## Datenmodellierung, Datenformate und SQL

Eine relationale Datenbank speichert Daten in verbundenen Tabellen. Zeilen sind Datensätze, Spalten beschreiben Attribute.

Ein Datentyp begrenzt die möglichen Werte eines Attributs. Er sollte zur fachlichen Bedeutung passen.

Für genaue Geldbeträge eignet sich häufig Decimal. Binäre Gleitkommazahlen stellen viele Dezimalbrüche nicht exakt dar.

Ein Primärschlüssel identifiziert jeden Datensatz eindeutig. Er darf nicht fehlen und nicht doppelt vorkommen.

Ein Fremdschlüssel verweist auf einen passenden Schlüssel einer referenzierten Tabelle. Er unterstützt referenzielle Integrität.

Eine doppelte Primärschlüsselkennung kann ein Insert scheitern lassen. Für eine neue Zeile wird eine neue gültige Kennung benötigt.

Eine Eins-zu-viele-Beziehung verbindet einen Datensatz mit mehreren anderen. Der Fremdschlüssel steht häufig auf der Viele-Seite.

Eine Viele-zu-viele-Beziehung braucht im relationalen Modell eine Zuordnungstabelle. Diese enthält die Verweise auf beide Seiten.

Ein zusammengesetzter Primärschlüssel besteht aus mehreren Attributen. Er kann doppelte Kombinationen in einer Zuordnungstabelle verhindern.

Optionalität und maximale Anzahl sind getrennt zu prüfen. Genau eins ist nicht dasselbe wie null oder eins.

Redundanz bedeutet unnötige Wiederholung derselben Information. Unkontrollierte Wiederholung kann widersprüchliche Änderungen verursachen.

Einfüge-, Änderungs- und Löschanomalien entstehen bei ungünstiger Datenstruktur. Normalisierung reduziert solche Abhängigkeiten.

Die erste Normalform verlangt atomare Werte im vorgesehenen Modell. Wiederholungsgruppen gehören nicht einfach in nummerierte Parallelspalten.

Die zweite Normalform vermeidet Teilabhängigkeiten von zusammengesetzten Schlüsseln. Die dritte vermeidet bestimmte transitive Abhängigkeiten von Nichtschlüsselattributen.

Bei Bestellungen werden Bestellung, Position, Artikel und Hersteller sinnvoll getrennt. Die Schlüssel verbinden diese Tabellen.

Der historische Verkaufspreis kann zur Bestellposition gehören. Eine spätere Artikelpreisänderung darf alte Rechnungen nicht unbeabsichtigt verändern.

Select bestimmt die auszugebenden Spalten. From bestimmt die verwendete Tabelle beziehungsweise Tabellenquelle.

Where filtert einzelne Zeilen. And und Or verbinden Bedingungen, Klammern legen ihre Kombination klar fest.

Texte werden in SQL normalerweise in einfache Anführungszeichen gesetzt. Zahlen brauchen diese Textkennzeichnung nicht.

Like erlaubt Mustervergleiche. Das Prozentzeichen steht für beliebig viele Zeichen, der Unterstrich für ein Zeichen.

Für einen Namen mit bestimmtem Anfang folgt im Like-Muster ein Prozentzeichen. Ein Prozentzeichen davor würde eine andere Suche erzeugen.

Order by legt die Sortierung fest. Asc bedeutet aufsteigend, Desc absteigend.

Ohne Order by ist keine gewünschte Ergebnisreihenfolge garantiert. Eine zufällig passende Anzeige genügt nicht.

Count Stern zählt Zeilen. Count einer Spalte zählt deren Werte ohne SQL-Null.

Sum addiert passende Werte. Avg berechnet einen Durchschnitt, Min und Max liefern kleinsten und größten Wert.

SQL-Null bedeutet fehlend oder unbekannt. Es wird mit Is null beziehungsweise Is not null geprüft.

Gleich Null ist keine geeignete SQL-Nullprüfung. Leerer Text ist außerdem nicht dasselbe wie SQL-Null.

Eine leere E-Mail kann je Datenmodell als leerer Text oder als Null gespeichert sein. Die Aufgabenbeschreibung entscheidet über den richtigen Filter.

Insert fügt Datensätze hinzu. Explizite Spaltennamen machen die Zuordnung der Werte klarer.

Update verändert vorhandene Datensätze. Eine gezielte Where-Bedingung begrenzt die Änderung.

Delete entfernt Datensätze. Ohne passende Einschränkung können sämtliche Zeilen betroffen sein.

Ein Delete auf Bildmetadaten löscht nicht automatisch die Bilddatei. Das benötigt zusätzliche Anwendungslogik.

Ein Join verbindet passende Zeilen anhand einer Bedingung. Häufig werden Fremdschlüssel und referenzierter Schlüssel verglichen.

Ein Inner Join zeigt nur passende Verbindungen. Ein Left Join erhält zusätzlich Zeilen der linken Seite ohne Partner.

Für eine Anzahl null bei fehlenden Partnern wird nach einem Left Join ein geeignetes rechtes Schlüsselattribut gezählt. Count Stern würde auch die erhaltene linke Zeile zählen.

Group by bildet Gruppen. Aggregatfunktionen werden dann auf die jeweilige Gruppe angewendet.

Having filtert Gruppenergebnisse. Ein Filter auf einzelne Ausgangszeilen gehört normalerweise in Where.

Für mindestens zwei Tickets wird die Anzahl einer Gruppe mit zwei verglichen. Eine Statusbedingung kann vorher geschlossene Tickets auswählen.

Parametrisierte Abfragen trennen Datenwerte von SQL-Code. Sie sind eine zentrale Maßnahme gegen SQL-Injection.

Eingabevalidierung ergänzt parametrisierte Abfragen. Eine einfache Zeichen-Blacklist ersetzt die sichere Trennung nicht.

Constraints wie Not null, Unique und Fremdschlüssel erzwingen wichtige Datenregeln. Oberflächenprüfungen allein reichen dafür nicht immer.

Eine Transaktion bündelt zusammengehörige Änderungen. Commit bestätigt sie, Rollback macht nicht bestätigte Änderungen rückgängig.

Atomarität bedeutet alles oder nichts. Konsistenz, Isolation und Dauerhaftigkeit ergänzen die grundlegenden Transaktionseigenschaften.

Ein Index kann bestimmte Lesezugriffe beschleunigen. Er benötigt Speicher und kann Schreibzugriffe zusätzlich belasten.

CSV ist ein tabellarisches Austauschformat mit vereinbartem Trennzeichen. Allgemeine CSV-Dateien können Maskierung und Anführungszeichen benötigen.

JSON verwendet strukturierte Schlüssel und Werte. Zeichenketten stehen in doppelten Anführungszeichen und Zahlen können Zahlen bleiben.

XML strukturiert Daten mit Elementen und Attributen. Es kann verschachtelte Zusammenhänge darstellen.

Eine Programmiersprachen-Nullreferenz, SQL-Null und der CSV-Text NULL sind verschiedene Darstellungen. Sie dürfen nicht ungeprüft gleichgesetzt werden.

Bei einer Prüfung werden die vorgegebenen Tabellen- und Spaltennamen exakt verwendet. Die logisch richtige Idee braucht auch eine zur Aufgabe passende Abfrage.

Eine Entität ist ein unterscheidbares fachliches Objekt. Ein Attribut beschreibt eine seiner Eigenschaften.

Eine Eins-zu-eins-Beziehung erlaubt höchstens einen Partner auf jeder Seite. Die zusätzliche Optionalität muss ausdrücklich modelliert werden.

Delete entfernt Zeilen, Drop entfernt ein Datenbankobjekt wie eine Tabelle. Truncate leert eine Tabelle mit systemspezifischen Eigenschaften.

Transaktionsdauerhaftigkeit bedeutet Erhalt bestätigter Änderungen unter den vorgesehenen Betriebsannahmen. Sie ist keine Garantie gegen jeden denkbaren physischen Totalschaden.

Ein Datenbankkonto erhält nur die nötigen Rechte. Eine reine Leseanwendung benötigt nicht automatisch administrative Änderungsrechte.

## Beschaffung, Angebote und wirtschaftliches Handeln

Eine Bedarfsanalyse klärt den tatsächlichen Kundennutzen. Interviews, Beobachtungen und vorhandene Dokumente können dazu beitragen.

Anforderungen werden möglichst messbar formuliert. Eigene technische Annahmen werden als Annahmen gekennzeichnet.

Muss-Kriterien sind zwingend. Kann-Kriterien verbessern die Lösung, ersetzen aber keine fehlende Muss-Anforderung.

Interne Bezugsquellen sind etwa Lieferantenkartei und Bestellhistorie. Externe Quellen sind etwa Herstellerangebote und Branchenverzeichnisse.

Ein quantitativer Angebotsvergleich betrachtet vergleichbare Kosten. Mengen, Rabatt, Skonto und Bezugskosten müssen passend berücksichtigt werden.

Ein qualitativer Vergleich berücksichtigt zusätzliche Kriterien. Dazu zählen Lieferzeit, Kompatibilität, Service und Zuverlässigkeit.

Die Nutzwertanalyse beginnt mit geeigneten Kriterien und Gewichten. Anschließend werden Alternativen auf derselben Skala bewertet.

Gewichtete Punkte werden addiert. Die Gewichte müssen zusammen zur vereinbarten Gesamtskala passen.

Ein hoher Nutzwert heilt kein verletztes Muss-Kriterium. Ungeeignete Alternativen werden vorher ausgeschlossen oder die Anforderung wird ausdrücklich neu abgestimmt.

Ein Rabatt ist ein Preisnachlass. Er kann beispielsweise an Menge oder Kundenkonditionen anknüpfen.

Skonto ist ein Nachlass für Zahlung innerhalb einer vereinbarten kurzen Frist. Nicht genutztes Skonto darf nicht als sichere Ersparnis gerechnet werden.

Rabatt und Skonto haben unterschiedliche Rechenbasen. Ihre Prozentsätze werden nicht einfach addiert.

Vom Listeneinkaufspreis wird Liefererrabatt abgezogen. Das ergibt den Zieleinkaufspreis.

Nach Abzug des Liefererskontos entsteht der Bareinkaufspreis. Dazu kommen die Bezugskosten.

Der Bezugspreis ist die Basis für den vereinbarten Handlungskostenzuschlag. Mit Handlungskosten entstehen die Selbstkosten.

Nach dem Gewinnzuschlag entsteht der Barverkaufspreis. Gegebenenfalls folgen die Rückrechnungen für Kundenskonto und Kundenrabatt.

Kundenskonto wird vom Zielverkaufspreis abgezogen. Deshalb wird beim Hochrechnen vom Barverkaufspreis durch den verbleibenden Faktor geteilt.

Kundenrabatt wird vom Listenverkaufspreis abgezogen. Auch hier wird beim Hochrechnen durch den verbleibenden Faktor geteilt.

Umsatzsteuer wird auf die passende Nettobasis gerechnet. Netto und Brutto dürfen nicht ungeprüft gemischt werden.

Bei Rückwärtskalkulation werden Zuschläge durch Division rückgängig gemacht. Ein Aufschlag von zehn Prozent entspricht dem Faktor eins Komma eins.

Ein Abzug von zwei Prozent lässt 98 Prozent übrig. Rückwärts wird durch null Komma 98 geteilt.

Ein Angebot soll Leistung und Menge eindeutig beschreiben. Preise, Lieferung, Zahlung und Bindung müssen erkennbar sein.

Eine Anfrage ist nicht automatisch ein fertiger Kaufvertrag. Maßgeblich sind passende Willenserklärungen und ihre Bedingungen.

Eine abweichende Bestellung kann ein neues Angebot sein. Eine Auftragsbestätigung ist deshalb anhand ihres Inhalts einzuordnen.

Bei Wareneingang werden Menge, Identität und sichtbarer Zustand geprüft. Danach folgen geeignete Ausstattungs- und Funktionstests.

Bestellung, Lieferschein und Lieferung werden verglichen. Abweichungen werden nachvollziehbar dokumentiert.

Bei beiderseitigen Handelsgeschäften gelten besondere Untersuchungs- und Rügepflichten. Erkennbare Mängel müssen grundsätzlich unverzüglich angezeigt werden.

Später erkennbare Mängel werden nach Entdeckung unverzüglich angezeigt. Eine pauschale starre Tageszahl passt nicht zu jedem Fall.

Bei einer verspäteten Lieferung werden Status und Alternativen geklärt. Auftraggeber und Projektplanung werden frühzeitig informiert.

Rechtliche Verzugsfolgen hängen von den konkreten Voraussetzungen ab. Nicht jede Terminabweichung erlaubt automatisch jede Rechtsfolge.

Ein etwas teurerer Lieferant kann insgesamt wirtschaftlicher sein. Rechtzeitige Lieferung und geringere Ausfallkosten können den Mehrpreis rechtfertigen.

TCO betrachtet die Gesamtkosten der Nutzung. Kaufpreis, Energie, Lizenzen, Wartung, Schulung und Ausfälle gehören dazu.

Leasing überlässt die Nutzung gegen vereinbarte Zahlungen. Eigentümer bleibt grundsätzlich der Leasinggeber.

Eine Kaufoption ist eine vereinbarte Erwerbsmöglichkeit. Eigentum geht beim Leasing nicht automatisch am Ende über.

Leasing kann Liquidität schonen und Zahlungen planbar machen. Laufzeitbindung und Gesamtkosten müssen trotzdem bewertet werden.

Die einfache Amortisationszeit ist Investition geteilt durch periodische Einsparung. Das Ergebnis hat die Zeiteinheit dieser Einsparung.

Ein Einzelkaufmann haftet grundsätzlich auch mit seinem Privatvermögen. Ein gesetzliches Mindestkapital wie bei der regulären GmbH ist dafür nicht vorgeschrieben.

Die reguläre GmbH ist eine eigene juristische Person. Ihr Stammkapital beträgt mindestens 25000 Euro.

Für GmbH-Schulden haftet grundsätzlich das Gesellschaftsvermögen. Persönliche Bürgschaften oder Pflichtverletzungen können zusätzliche persönliche Risiken schaffen.

Stammkapital und sofortige Bareinzahlung sind nicht dieselbe Aussage. Die Gründungsvoraussetzungen müssen sauber unterschieden werden.

Beim Angebotsvergleich zählt die vorgegebene Rundungsregel. Ein zu früh gerundetes Zwischenergebnis kann Folgewerte verändern.

Gesetzliche Mängelhaftung und freiwillige Garantie sind verschieden. Eine Garantie ersetzt die gesetzlichen Rechte nicht automatisch.

Bei einer mangelhaften Kaufsache steht grundsätzlich zunächst Nacherfüllung im Vordergrund. Weitere Rechte hängen von den jeweiligen Voraussetzungen ab.

Eigentumsvorbehalt kann Eigentumsübergang an die vollständige Zahlung knüpfen. Besitz und Eigentum sind deshalb zu unterscheiden.

Eine Mahnung fordert eine fällige Leistung ein. Ob sie für Verzug nötig ist, hängt vom konkreten Fall ab.

Eine Nachfrist gibt zusätzliche Zeit zur ordnungsgemäßen Leistung. Sie ist von der bloßen Feststellung einer Verspätung zu unterscheiden.

Annahmeverzug betrifft eine nicht ordnungsgemäß angenommene angebotene Leistung. Auch dafür müssen die jeweiligen Voraussetzungen vorliegen.

Fixe Kosten ändern sich im betrachteten Bereich nicht direkt mit der Menge. Variable Kosten hängen von der betrachteten Leistungsmenge ab.

## Service, Organisation, Projekt und Einführung

Ein Incident ist eine ungeplante Unterbrechung oder Beeinträchtigung eines Service. Ziel ist die passende Wiederherstellung.

Ein Service Request ist eine standardisierte Leistungsanfrage. Eine Monitorbestellung ist nicht automatisch eine Störung.

Ein Event ist ein relevantes beobachtetes Ereignis. Eine Schwellwertmeldung kann einen Incident auslösen, muss es aber nicht.

Ein Problem beschreibt die zugrunde liegende oder mögliche Ursache von Incidents. Ursachenarbeit unterscheidet sich von schneller Entstörung.

Ein Ticket dokumentiert Meldung und Bearbeitung. Zeitpunkt, Fehlerbild, Betroffene und bisherige Maßnahmen müssen nachvollziehbar sein.

Die Priorität ergibt sich aus Auswirkung und Dringlichkeit. Die Lautstärke der meldenden Person ist kein sachliches Kriterium.

Eine Eskalation kann fachlich oder hierarchisch erfolgen. Sie folgt einem passenden definierten Ablauf.

Ein SLA legt messbare Servicezusagen fest. Dazu gehören Servicezeit, Verfügbarkeit, Reaktion und Wiederherstellungsziele.

Reaktionszeit und Entstörzeit sind unterschiedliche Größen. Schnelle Antwort beweist noch keine behobene Störung.

Verfügbarkeit braucht einen Messzeitraum und klare Ausnahmen. Wartungsfenster werden nach der konkreten Vereinbarung behandelt.

Ein einzelner zu langer Ausfall kann eine Entstörgrenze verletzen. Die Jahresverfügbarkeit muss zusätzlich separat gerechnet werden.

Eine Einweisung erklärt Anmeldung, Funktionen und sichere Nutzung. Auch Datenablage und Supportweg gehören dazu.

Eine Abnahme vergleicht die erbrachte Leistung mit den Anforderungen. Offene Mängel und verantwortliche Freigaben werden dokumentiert.

Ein Lastenheft beschreibt aus Auftraggebersicht was und wofür benötigt wird. Ein Pflichtenheft beschreibt wie und womit der Auftragnehmer umsetzt.

Ein Projekt hat ein definiertes Ziel und einen begrenzten Rahmen. Aufgaben, Ressourcen, Termine und Verantwortlichkeiten werden geplant.

Stakeholder sind vom Projekt betroffene oder darauf einwirkende Beteiligte. Ihre Interessen können sich unterscheiden.

SMART-Ziele sind konkret und überprüfbar. Messwert, realistischer Zielwert und Termin machen Fortschritt beurteilbar.

Zeit, Kosten und Leistungsumfang beeinflussen sich. Änderungen an einer Größe erfordern oft eine neue Abstimmung der anderen.

Ein Gantt-Diagramm stellt Vorgänge auf einer Zeitachse dar. Ein Netzplan macht insbesondere Abhängigkeiten und Puffer analysierbar.

FAZ bedeutet frühester Anfang, FEZ frühestes Ende. Frühestes Ende ergibt sich aus frühestem Anfang plus Dauer.

Der früheste Anfang nach mehreren Vorgängern richtet sich nach deren spätestem frühesten Ende. Erst dann sind alle nötigen Vorgänger abgeschlossen.

SAZ bedeutet spätester Anfang, SEZ spätestes Ende. Die Rückwärtsrechnung beginnt am vorgegebenen beziehungsweise ermittelten Projektende.

Gesamtpuffer ist spätester minus frühester Anfang. Gleichwertig ist spätestes minus frühestes Ende.

Ein kritischer Vorgang hat im betrachteten Netzplan keinen Gesamtpuffer. Seine Verzögerung kann das Projektende verschieben.

Eine Einlinienorganisation gibt jeder Stelle einen eindeutigen Weisungsweg. Das schafft Klarheit, kann aber Entscheidungen verlängern.

In einer Mehrlinienorganisation gibt es mehrere fachliche Weisungswege. Kompetenzkonflikte müssen vermieden werden.

Eine Stabsstelle berät eine Leitung. Sie besitzt gegenüber der Linie grundsätzlich keine eigene Linienweisungsbefugnis.

Eine Instanz besitzt Leitungsbefugnis. Eine Ausführungsstelle erledigt operative Aufgaben ohne entsprechende Leitungsfunktion.

Eine Matrix verbindet zwei Gliederungsdimensionen. Zum Beispiel können Funktion und Projekt gemeinsam wirken.

Change Management begleitet Veränderungen technisch und organisatorisch. Information, Beteiligung und Qualifizierung fördern die erfolgreiche Nutzung.

Eine Pilotgruppe erprobt die Lösung vor dem breiten Einsatz. So werden Probleme mit begrenzter Auswirkung sichtbar.

Eine Sofortumstellung beendet den alten Betrieb zum Stichtag. Das spart Doppelbetrieb, bündelt aber Umstellungsrisiken.

Ein Parallelbetrieb hält beide Systeme zeitweise verfügbar. Er erleichtert Vergleiche, verursacht aber zusätzlichen Aufwand und Datenabgleich.

Ein Rollback-Plan beschreibt den kontrollierten Rückweg. Er muss vor der kritischen Umstellung vorbereitet sein.

Tests benötigen Eingaben, erwartete Ergebnisse und tatsächliche Ergebnisse. Abweichungen werden bewertet, statt nur funktioniert zu notieren.

PDCA bedeutet planen, umsetzen, prüfen und verbessern beziehungsweise standardisieren. Der Soll-Ist-Vergleich entscheidet über das weitere Vorgehen.

Eine gute Dokumentation ist nachvollziehbar und aktuell. Sie nennt auch Änderungen, Ansprechpartner und offene Punkte.

Ein Workaround stellt vorläufig nutzbaren Betrieb her. Er beseitigt nicht zwingend die eigentliche Ursache.

Eine Known Error Database hält bekannte Fehler und geeignete Lösungsansätze fest. Sie kann wiederholte Diagnosearbeit reduzieren.

Ein Meilenstein kennzeichnet ein wichtiges überprüfbares Projektereignis. Er ist nicht einfach eine beliebig lange Tätigkeit.

Ein schrittweiser Rollout führt das System nacheinander für Teilbereiche ein. Das begrenzt Risiken, verlängert aber gegebenenfalls den Gesamtübergang.

## Rechenregeln, Einheiten und häufige Zahlenfallen

Ein Byte besteht aus acht Bit. Von Bit nach Byte wird durch acht geteilt.

Ein dezimales Kilobyte hat tausend Byte. Ein Kibibyte hat 1024 Byte.

Ein Megabyte hat eine Million Byte. Ein Mebibyte hat 1024 mal 1024 Byte.

Gigabyte und Gibibyte sind ebenfalls unterschiedliche Einheiten. Die Aufgabenangabe entscheidet über den richtigen Faktor.

Für eine Übertragungszeit wird Datenmenge durch nutzbare Datenrate geteilt. Beide Größen brauchen zueinander passende Einheiten.

Eine Datenmenge in Byte wird für eine Rate in Bit pro Sekunde zuerst mit acht multipliziert. Sonst entsteht ein Faktor-acht-Fehler.

Die theoretische Linkrate ist nicht automatisch die nutzbare Rate. Overhead und Auslastung können die Übertragungszeit erhöhen.

Unkomprimierte Bildgröße ergibt sich aus Pixelanzahl mal Farbtiefe. Das Ergebnis in Bit wird für Byte durch acht geteilt.

Bei 24 Bit Farbtiefe sind grundsätzlich zwei hoch 24 Farbkombinationen darstellbar. Das sind ungefähr 16,8 Millionen.

Eine rohe Videodatenrate ergibt sich aus Bildgröße mal Bildern pro Sekunde. Kompression verändert anschließend die zu speichernde Rate.

Auf 20 Prozent komprimiert bedeutet Faktor null Komma zwei. Um 20 Prozent reduziert bedeutet dagegen Faktor null Komma acht.

Für Videospeicher wird die Datenrate mit der Zeit multipliziert. Bei mehreren Kameras kommt deren Anzahl hinzu.

Stunden werden für Sekundenraten mit 3600 multipliziert. Erst danach werden Bit, Byte und Speichereinheiten umgerechnet.

Elektrische Leistung ergibt sich aus Spannung mal Stromstärke. Für die Stromstärke wird Leistung durch Spannung geteilt.

Ein Ampere entspricht tausend Milliampere. Ein Ergebnis in Ampere darf nicht unverändert als Milliampere beschriftet werden.

Energie ergibt sich aus Leistung mal Zeit. Kilowatt mal Stunden ergibt Kilowattstunden.

Watt wird für Kilowatt durch tausend geteilt. Kilowattstunden mal Preis pro Kilowattstunde ergibt Energiekosten.

Bei Stromkosten werden unterschiedliche Laufzeiten getrennt gerechnet. Ein Server kann ganzjährig laufen, während Arbeitsplätze nur Arbeitstage zählen.

Ein Jahr mit 365 Tagen hat 8760 Stunden. Das entspricht 525600 Minuten.

Erlaubte Ausfallzeit ergibt sich aus Gesamtzeit mal eins minus Verfügbarkeit als Dezimalzahl. Prozent und Dezimalzahl dürfen nicht verwechselt werden.

99,9 Prozent Verfügbarkeit lassen 0,1 Prozent Ausfall zu. Bei 365 Tagen sind das 525,6 Minuten.

99,99 Prozent Verfügbarkeit lassen nur 52,56 Minuten pro solchem Jahr zu. Eine zusätzliche Neun verkleinert das Ausfallbudget erheblich.

Für ein gewöhnliches IPv4-Broadcast-Subnetz gelten zwei hoch Hostbits minus zwei nutzbare Hosts. Sonderfälle wie Punkt-zu-Punkt-Präfixe werden gesondert behandelt.

Die Hostbits ergeben sich aus 32 minus Präfixlänge. Bei Präfix 27 bleiben fünf Hostbits und normalerweise 30 nutzbare Adressen.

Die Blockgröße im relevanten Maskenoktett ergibt sich aus 256 minus Maskenwert. Der Host wird dem passenden Block zugeordnet.

Bei Präfix 26 ist die Blockgröße im letzten Oktett 64. Eine Adresse mit letztem Oktett 150 liegt dann zwischen 128 und 191.

In diesem Block ist 128 die Netzadresse und 191 der Broadcast. Die normalen Hostadressen reichen von 129 bis 190.

RAID 5 mit gleich großen Platten nutzt grundsätzlich Anzahl minus eins mal Plattenkapazität. Hot-Spare und weitere Verluste werden gegebenenfalls zusätzlich berücksichtigt.

RAID 10 mit paarweiser Spiegelung nutzt grundsätzlich die halbe Rohkapazität. Die Plattenzahl muss zum vorgesehenen Aufbau passen.

Bei unterschiedlichen Plattengrößen begrenzt im einfachen Verbund häufig die kleinste Platte. Die konkrete Technik und Aufgabenannahme sind entscheidend.

Ein Preisaufschlag von 20 Prozent entspricht Faktor eins Komma zwei. Die Rückrechnung erfolgt durch diesen Faktor, nicht durch Abzug von 20 Prozent.

Ein Nachlass von zehn Prozent lässt 90 Prozent übrig. Rückwärts wird durch null Komma neun gerechnet.

Prozentuale Änderung ist Differenz geteilt durch Ausgangswert mal hundert. Der Bezugswert muss ausdrücklich stimmen.

Ein effektiver Stundensatz verteilt relevante Gesamtkosten auf produktive Stunden. Bezahlte Stunden sind nicht automatisch vollständig produktiv.

Bei jeder Rechnung stehen Formel, Einsetzen und Ergebnis mit Einheit. Danach folgt die passende Rundung und eine Plausibilitätsprüfung.

Ein Präfix-25-Netz hat normalerweise 126 nutzbare IPv4-Hosts. Ein Präfix-28-Netz hat normalerweise 14.

In ein Präfix-24-Netz passen 16 gleich große Präfix-28-Netze. Die zusätzliche Zahl der Netzbits bestimmt die Anzahl.

Bei VLSM werden unterschiedlich große Subnetze passend zum Bedarf vergeben. Häufig werden die größten Bedarfe zuerst eingeplant.

Für Minuten aus Sekunden wird durch 60 geteilt. Ganze Minuten und verbleibende Sekunden werden getrennt angegeben.

## Nachhaltigkeit, KI und die letzten Prüfungsregeln

Green IT betrachtet den gesamten Lebenszyklus. Herstellung, Nutzung, Reparatur und Entsorgung verbrauchen Ressourcen.

Ein niedriger Stromverbrauch allein beweist nicht die beste Umweltbilanz. Nutzungsdauer und Herstellungsaufwand gehören zur Bewertung.

Reparierbarkeit und verfügbare Ersatzteile können die Nutzung verlängern. Ein Austausch sollte zum Bedarf passen.

Energiesparfunktionen reduzieren unnötigen Verbrauch. Sie werden so eingerichtet, dass betriebliche Anforderungen weiterhin erfüllt sind.

Ausgediente Elektronik gehört in geeignete Verwertungswege. Daten werden vorher mit einem passenden Verfahren geschützt entfernt.

Ein Nachhaltigkeitsvorschlag braucht eine konkrete Wirkung. Weniger Energie, längere Nutzung oder vermiedener Abfall sind nachvollziehbare Wirkungen.

Generative KI erzeugt plausible Ausgaben, aber keine garantierte Wahrheit. Fachliche Prüfung bleibt erforderlich.

Fehlerhafte KI-Aussagen können überzeugend formuliert sein. Quellen, Zahlen und Code werden deshalb überprüft.

Vertrauliche Kundendaten gehören nicht ungeprüft in öffentliche KI-Dienste. Freigabe, Verarbeitungsvorgaben und Datenschutz müssen passen.

Auch KI-generierter Code kann Sicherheitslücken enthalten. Ein bestandener Einzeltest ersetzt keine geeignete Prüfung.

Im Prüfungstext bestimmt der Operator die Antworttiefe. Nennen verlangt andere Tiefe als erläutern oder begründen.

Bei Nennen werden die geforderten Punkte präzise aufgeführt. Bei Beschreiben wird Merkmal oder Ablauf verständlich dargestellt.

Bei Erläutern wird ein Zusammenhang erklärt und auf den Fall bezogen. Bei Begründen folgen Entscheidung, fachlicher Grund und konkrete Auswirkung.

Bei Bewerten werden passende Kriterien abgewogen. Am Ende steht ein nachvollziehbares Urteil.

Die geforderte Anzahl von Antworten wird eingehalten. Unsichere Zusatzangaben verbessern einen klaren richtigen Punkt nicht automatisch.

Eine Sicherheitsantwort verbindet Schutzziel, möglichen Schaden und Maßnahme. Ein reines Schlagwort erfüllt eine Begründung oft nicht.

Eine Diagnoseantwort verbindet Ursache, Prüfung und Behebung. Danach wird der erfolgreiche Zustand erneut getestet.

Eine Auswahlantwort nennt die gewählte Lösung und passende Eigenschaft. Anschließend wird ihr Nutzen für den konkreten Kunden erklärt.

Bei Programmieraufgaben werden zuerst Eingabe und Ausgabe geklärt. Dann folgen Initialisierung, Schleife, Bedingung und Rückgabe.

Bei SQL werden Tabelle, Spalten, Filter und Sortierung systematisch geprüft. Änderungen brauchen eine passende Einschränkung.

Bei Aufgaben mit Anlagen werden die vorgegebenen Daten verwendet. Eigene Annahmen werden nicht als Kundenfakten ausgegeben.

Wenn eine vollständige Lösung fehlt, bleiben nachvollziehbare Teilschritte wertvoll. Korrekte Formeln, Bedingungen und begründete Ansätze werden sauber notiert.

Eine gelernte Definition wird auf die konkrete Situation übertragen. Der Bezug zum Kunden oder Prozess macht die Antwort prüfbar.

Diese Wiederholung bündelt wichtige Grundlagen und ausgewertete Aufgabentypen. Die genaue kommende Prüfung lässt sich daraus nicht vorhersagen.

Energieeffizienz beschreibt das Verhältnis von Nutzen zu eingesetzter Energie. Ein effizienteres Gerät kann bei viel stärkerer Nutzung trotzdem mehr Gesamtenergie verbrauchen.

Ein Rebound-Effekt verringert erwartete Einsparungen durch zusätzliche Nutzung. Deshalb werden auch absolute Verbräuche betrachtet.

Maschinelles Lernen gewinnt Muster aus Trainingsdaten. Es ist nicht dasselbe wie eine feste Liste manuell formulierter Wenn-Dann-Regeln.

Training passt Modellparameter anhand von Daten an. Inferenz verwendet das trainierte Modell für neue Eingaben.

Bias bezeichnet systematische Verzerrung. Ungeeignete Daten und unpassende Auswertung können betriebliche Entscheidungen verfälschen.

Halluzination bezeichnet überzeugend erzeugte, aber unzutreffende Inhalte. Sprachliche Sicherheit ist kein Beweis für fachliche Richtigkeit.
