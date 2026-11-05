# 巴登州 AP1：高频考法的德语背诵答案

依据核心五卷及单独列出的 2026 标注资料整理。问法均为概括和改写，答案为原创可背诵表达，不冒充逐字官方答案。具体分类、金额和程序仍须套用当题数据。

阅读顺序：先看德语考法，尝试用德语回答，再看范例和中文提示。语音以标题接德语答案连续讲述；双语版随后接中文提示，不预留自答时间。

## Netzwerkkonfiguration und Diagnose / 网络配置与排错

**出现情况：** 5/5, mit anderen Kernthemen gleichauf

### 01.01 Standardgateway und DNS

**考法（概括）：** Erklären Sie die unterschiedlichen Aufgaben von Standardgateway und DNS-Server.

**德语背诵答案：** Das Standardgateway leitet Pakete in andere IP-Netze weiter. Der DNS-Server löst Namen in passende Ressourceninformationen auf, zum Beispiel IP-Adressen. Beide Einträge erfüllen unterschiedliche Aufgaben. Für externe Websites müssen sowohl der Netzwerkweg als auch die Namensauflösung funktionieren.

**中文提示：** 网关负责去别的网络，DNS 负责名字解析。二者不能互换；“网页打不开”不能直接断定是 DNS。

**答题关键词：** andere Netze; Namensauflösung; unterschiedliche Aufgaben

**试卷依据：** S23 IT3.2.5; S24 IT4.3

### 01.02 Gültige Clientkonfiguration

**考法（概括）：** Welche Angaben benötigen Sie, damit ein neuer Client im vorgesehenen Netz und über Namen kommunizieren kann?

**德语背诵答案：** Ich verwende eine freie, eindeutige Hostadresse im vorgesehenen Subnetz. Dazu gehören die passende Subnetzmaske beziehungsweise Präfixlänge, das erreichbare Standardgateway und der vorgesehene DNS-Server. Netz- und Broadcastadresse werden im gewöhnlichen IPv4-Broadcast-Subnetz nicht als Clientadresse vergeben. Die Werte werden aus dem Netzplan abgeleitet.

**中文提示：** 背四项：IP、掩码或前缀、网关、DNS。题目给了网络图，就从图里取值，不凭记忆随便填地址。

**答题关键词：** eindeutige Hostadresse; Maske/Präfix; Gateway und DNS

**试卷依据：** S22 IT2.1.1; W22 IT2.3

### 01.03 Lokales Netz funktioniert, Internet nicht

**考法（概括）：** Lokale Geräte sind erreichbar, externe IP-Adressen aber nicht. Wie prüfen und korrigieren Sie einen möglichen Gatewayfehler?

**德语背诵答案：** Ich vergleiche das eingetragene Standardgateway mit dem zuständigen Routerinterface im Netzplan. Ein falsches Gateway kann die Kommunikation mit fremden Netzen verhindern, obwohl das lokale Netz funktioniert. Ich trage die richtige Routeradresse ein und prüfe danach den externen Zugriff erneut. Die DNS-Konfiguration wird getrennt bewertet.

**中文提示：** 先说原因，再说检查和修复。2024 夏图里的路由器是 .254，客户端却填了 .1，能确认的是网关错误。

**答题关键词：** Routerinterface vergleichen; lokal versus extern; korrigieren und erneut testen

**试卷依据：** W23 IT2.1.1; S24 IT4.3

### 01.04 Private IP und falsches Subnetz

**考法（概括）：** Warum ist eine private Kameraadresse von außen nicht unmittelbar erreichbar, und warum kann eine Kamera im falschen Subnetz lokal ausfallen?

**德语背诵答案：** Private IPv4-Adressen werden nicht direkt über das öffentliche Internet geroutet. Für einen entfernten Zugriff ist deshalb eine geeignete Lösung wie ein korrekt abgesichertes VPN nötig. Liegt die Kamera in einem anderen Subnetz, ist sie nicht automatisch lokal erreichbar. Adressierung und erforderliches Routing müssen zur Netzplanung passen.

**中文提示：** 私网地址不能直接从公网访问；“同一根交换机上”也不等于同一 IP 子网。不要把网络不同一概归咎于坏网线。

**答题关键词：** nicht öffentlich geroutet; geeigneter Fernzugriff; Subnetz und Routing

**试卷依据：** W23 IT2.1.2; S24 IT4.1-4.2

### 01.05 IPv6-Adresstypen und Kurzform

**考法（概括）：** Unterscheiden Sie Link-Local und Global Unicast und erläutern Sie eine sichere IPv6-Kurzschreibweise.

**德语背诵答案：** Link-Local-Adressen gelten nur auf dem lokalen Link und stammen aus dem Bereich fe80::/10. Global-Unicast-Adressen sind für netzübergreifende Kommunikation vorgesehen. Führende Nullen eines Blocks dürfen entfallen; eine zusammenhängende Nullfolge darf einmal mit einem doppelten Doppelpunkt gekürzt werden. Das Beispielpräfix 2001:db8::/32 ist reserviert und nicht real öffentlich routbar.

**中文提示：** Link-Local 只在本地链路有效。双冒号一次；2001:db8 是练习文档用地址，别直接说它真能上互联网。

**答题关键词：** lokaler Link; netzübergreifend; einmalige Nullkompression

**试卷依据：** W22 IT2.3; S23 IT3.2.3; S24 IT4.4

### 01.06 MAC und IP im Datenrahmen

**考法（概括）：** Welche MAC- und IP-Ziele verwendet ein Client beim Senden an einen Server außerhalb des eigenen Subnetzes?

**德语背诵答案：** Eine klassische Ethernet-MAC-Adresse hat 48 Bit und gehört zur Sicherungsschicht, also OSI-Schicht zwei. Auf dem ersten LAN-Abschnitt ist die Ziel-MAC die Adresse des nächsten Routers. Die IP-Zieladresse bezeichnet dagegen den entfernten Server. Der Client liefert dort die Quell-MAC und vor einer möglichen Adressumsetzung auch die Quell-IP. Ethernet adressiert den lokalen nächsten Schritt, IP das entfernte Ziel.

**中文提示：** 核心对比：MAC 看本地下一跳，IP 看最终目标。不要把交换机自动当成数据帧的目标 MAC。

**答题关键词：** Ziel-MAC Router; Ziel-IP Server; erster Abschnitt vor NAT

**试卷依据：** S22 IT2.1.2; S23 IT3.2.2

### 01.07 Logischer und physischer Netzplan

**考法（概括）：** Vergleichen Sie logische und physische Netzwerkdarstellungen und nennen Sie ihren Nutzen.

**德语背诵答案：** Ein logischer Netzplan zeigt die logische Zuordnung der Geräte, Netze und Adressen sowie Kommunikationsbeziehungen. Ein physischer Netzplan zeigt vor allem Standorte, Ports und Verkabelungswege. Der logische Plan hilft bei Adressierung und Routing. Der physische Plan hilft, Geräte und Leitungen vor Ort zu finden und zu prüfen.

**中文提示：** 逻辑图看谁能和谁通信、怎么分网；物理图看设备在哪、线怎么接。按题目要求写两个明确区别。

**答题关键词：** Netze/Adressen; Standorte/Verkabelung; Nutzen für Diagnose

**试卷依据：** S23 IT3.1.1-3.1.2

## Schutzziele, Schutzbedarf und Sicherheit / 保护目标与 Schutzbedarf

**出现情况：** Sicherheit 5/5; Schutzbedarfs-/Gefährdungsanalyse 4/5; formale Einstufung/Begründung 3/5

### 02.01 Die drei Schutzziele

**考法（概括）：** Erläutern Sie Vertraulichkeit, Integrität und Verfügbarkeit mit Geschäftsbezug.

**德语背诵答案：** Vertraulichkeit schützt Informationen vor unberechtigtem Lesen. Integrität schützt ihre Richtigkeit und vor unberechtigter Veränderung. Verfügbarkeit bedeutet, dass berechtigte Personen die Informationen rechtzeitig nutzen können. Bei einer Kundenverwaltung bedrohen Datenabfluss, manipulierte Aufträge und ein Systemausfall jeweils unterschiedliche Schutzziele.

**中文提示：** 保密看谁能读，完整性看有没有被改，可用性看需要时能不能用。解释题要加业务后果，不只列三个名词。

**答题关键词：** unberechtigtes Lesen; Veränderung; rechtzeitige Nutzung

**试卷依据：** S22 IT2.3; W22 IT3.3; S23 IT2.1; W23 IT2.4; S24 IT4.5.1

### 02.02 Hohe Vertraulichkeit und Integrität begründen

**考法（概括）：** Begründen Sie hohen Schutzbedarf für vertrauliche Kundendaten und geschäftskritische Mengen- oder Preisangaben.

**德语背诵答案：** Die Vertraulichkeit ist hoch, wenn der Missbrauch der Kundendaten einen großen Schaden verursacht. Die Integrität ist hoch, wenn manipulierte Mengen oder Preise zu hohen finanziellen Verlusten und Ansehensschäden führen. Die Einstufung wird mit den Schadensgrenzen der Anlage abgeglichen. Ich nenne immer Schutzziel, möglichen Schaden und dessen Größenordnung.

**中文提示：** 2023 夏范例：客户数据泄露与订单金额被改，都要说明“大损失”。具体等级依据附件阈值，不能只写“数据重要”。

**答题关键词：** konkreter Schaden; Finanzen/Ansehen; Kategorien der Anlage

**试卷依据：** S23 IT2.1

### 02.03 Normale Verfügbarkeit trotz wichtiger Daten

**考法（概括）：** Warum kann die Verfügbarkeit eines Vertriebs-Laptops normal sein, obwohl seine Kundendaten vertraulich sind?

**德语背诵答案：** Die Schutzziele werden getrennt beurteilt. Wenn die Daten zentral vorhanden sind und die Arbeit auf einem Ersatzgerät fortgesetzt werden kann, ist ein längerer Ausfall dieses Laptops möglicherweise hinnehmbar. Dann kann seine Verfügbarkeit nach der vorgegebenen Tabelle normal sein. Daraus folgt keine niedrige Anforderung an die Vertraulichkeit.

**中文提示：** 客户数据很敏感，不代表这台笔记本必须随时在线。能换设备继续干活时，可用性可以正常；三个目标不能一刀切。

**答题关键词：** getrennte Grundwerte; Ersatzgerät; hinnehmbarer Ausfall

**试卷依据：** S23 IT2.1

### 02.04 Maximumprinzip

**考法（概括）：** Wie wird der Schutzbedarf eines Systems aus mehreren darauf angewiesenen Anwendungen abgeleitet?

**德语背诵答案：** Nach dem Maximumprinzip übernimmt das System je Schutzziel die höchste relevante Anforderung seiner Anwendungen. Ein Mittelwert würde die kritischere Anwendung unzureichend schützen. Abhängigkeiten werden berücksichtigt. Besondere Kumulations- oder Verteilungseffekte müssen zusätzlich begründet werden; sie sind keine pauschale Ausnahme.

**中文提示：** 每个目标分别取最高，不是给整台机器算一个平均分。先保密取最高，再完整性取最高，再可用性取最高。

**答题关键词：** je Schutzziel; höchste Anforderung; kein Mittelwert

**试卷依据：** S23 IT2.2

### 02.05 Serverraum: sehr hoher Schutzbedarf

**考法（概括）：** Begründen Sie sehr hohen Schutzbedarf eines Serverraums anhand der drei Schutzziele.

**德语背诵答案：** Unberechtigter Zutritt kann vertrauliche Geschäfts- und Kundendaten offenlegen. Manipulierte Server oder Daten können zentrale Entscheidungen und Abläufe verfälschen. Ein Ausfall kann wesentliche Geschäftsprozesse gleichzeitig stoppen. Die Kategorie sehr hoch ist dann begründbar, wenn diese Folgen die entsprechenden außergewöhnlich schweren Schadenskriterien der Anlage erfüllen.

**中文提示：** 用“泄露、被改、停业务”分别解释。不能只因它叫服务器机房，就自动判三项都是非常高。

**答题关键词：** Datenoffenlegung; Manipulation; außergewöhnlich schwerer Ausfall

**试卷依据：** W23 IT2.4

### 02.06 Vier Verfügbarkeitsrisiken und Maßnahmen

**考法（概括）：** Nennen Sie vier Gefährdungen eines Dateiservers und je eine passende Maßnahme für die Verfügbarkeit.

**德语背诵答案：** Stromausfall wird durch eine passend dimensionierte USV begrenzt. Hardwareausfall wird durch geeignete Redundanz abgefedert. Überhitzung wird durch kontrollierte Kühlung und Temperaturüberwachung reduziert. Datenverlust durch Schadsoftware oder Fehlbedienung erfordert geschützte Backups und getestete Wiederherstellung. Jede Maßnahme muss zum genannten Risiko passen.

**中文提示：** 一一对应背：停电配 USV，硬件坏配冗余，过热配散热监控，数据丢失配备份恢复。只列四项措施不够。

**答题关键词：** vier Risiken; je passende Maßnahme; Wirkung auf Verfügbarkeit

**试卷依据：** S22 IT2.3.1-2.3.2

### 02.07 Ransomware: Folgen und Verhalten

**考法（概括）：** Beurteilen Sie Ransomware nach den Schutzzielen und nennen Sie wichtige vorbeugende Verhaltensregeln.

**德语背诵答案：** Verschlüsselte unbrauchbare Dateien beeinträchtigen Verfügbarkeit und Integrität. Die Vertraulichkeit ist zusätzlich betroffen, wenn Daten ausgespäht oder veröffentlicht werden. Mitarbeitende prüfen verdächtige Absender, Links und Anhänge über einen unabhängigen Kanal und umgehen keine Schutzmaßnahmen. Updates, minimale Rechte und geschützte Backups ergänzen die Schulung; Verdachtsfälle werden sofort gemeldet.

**中文提示：** 勒索加密会影响可用和完整性；保密性要看是否泄露。不要把“攻击者加密了”误当成正常的保密措施。

**答题关键词：** CIA getrennt; Phishing vermeiden; melden/Updates/Rechte/Backup

**试卷依据：** W22 IT3.2-3.3

### 02.08 Daten richtig kategorisieren

**考法（概括）：** Unterscheiden Sie personenbezogene Daten, mögliche Geschäftsgeheimnisse und öffentliche Sachinformationen.

**德语背诵答案：** Geburtsdatum oder Sozialversicherungsnummer einer identifizierbaren Person sind personenbezogene Daten. Nicht öffentliche Konstruktionsunterlagen oder Lieferantenabsprachen können Geschäftsgeheimnisse sein, wenn die rechtlichen Schutzvoraussetzungen erfüllt sind. Öffentlich bekannte Kantinenpreise ohne Personenbezug sind hier Sachinformationen. Nicht jeder vertrauliche Inhalt fällt deshalb automatisch unter dieselbe Datenkategorie.

**中文提示：** 个人数据与商业秘密是两回事。供应商协议可能是秘密，但不是因此自动变成个人数据；公开饭菜价格通常是普通信息。

**答题关键词：** Personenbezug; Geheimnisvoraussetzungen; öffentliche Sachinformation

**试卷依据：** W23 IT1.1

### 02.09 Videoüberwachung und passender Schutzbedarf

**考法（概括）：** Was müssen Sie bei personenbezogenen Videoaufnahmen und einer auf den Gehweg gerichteten Kamera beachten?

**德语背诵答案：** Für die Aufnahmen werden Zweck, Rechtsgrundlage, Erforderlichkeit und Interessenabwägung geprüft. Der Bildausschnitt wird auf den nötigen Bereich begrenzt; Zugriff und Speicherdauer werden geregelt. Öffentliche Gehwege dürfen nicht pauschal durch Private überwacht werden. Ein Hinweisschild ersetzt keine Rechtsgrundlage. Die Schutzbedarfskategorien werden anschließend nach der konkreten Anlage begründet, nicht pauschal alle auf hoch gesetzt.

**中文提示：** 背用途、法律基础、必要性、利益衡量，再说缩小画面、访问权和保存期。不能简单背“每个路人同意就够了”。

**答题关键词：** Rechtsgrundlage/Erforderlichkeit; Bildausschnitt; Information ersetzt keine Erlaubnis

**试卷依据：** S24 IT4.5.1-4.5.2

## Datenbanken, Datenmodell und SQL / 数据库、建模与 SQL

**出现情况：** Datenbankthema 5/5; eigenständig SQL formulieren 3/5

### 03.01 Primär- und Fremdschlüssel

**考法（概括）：** Erklären Sie Primär- und Fremdschlüssel und einen fehlgeschlagenen Insert mit bereits belegter Kennung.

**德语背诵答案：** Ein Primärschlüssel identifiziert einen Datensatz eindeutig und darf nicht fehlen. Ein Fremdschlüssel verweist auf einen passenden Schlüssel einer anderen Tabelle und sichert referenzielle Integrität. Eine bereits verwendete Primärschlüsselkennung darf nicht erneut eingefügt werden. Ein neuer Datensatz braucht eine freie Kennung; eine Änderung des vorhandenen Datensatzes erfolgt gezielt per Update.

**中文提示：** 主键唯一且不能为空；外键指向关联记录。重复 ID 的报错通常不是 SQL 拼写问题，而是违反唯一性。

**答题关键词：** eindeutig/nicht NULL; Verweis; Primärschlüsselverletzung

**试卷依据：** W22 IT4.1-4.3; S23 IT4.2

### 03.02 Beziehungen und Zuordnungstabellen

**考法（概括）：** Wie setzen Sie Eins-zu-viele und Viele-zu-viele im relationalen Modell um?

**德语背诵答案：** Bei einer Eins-zu-viele-Beziehung steht der Fremdschlüssel häufig auf der Viele-Seite. Eine Viele-zu-viele-Beziehung wird durch eine Zuordnungstabelle mit beiden Fremdschlüsseln aufgelöst. Ihre Kombination kann als Primärschlüssel doppelte Zuordnungen verhindern. Zusätzlich wird geprüft, ob eine Teilnahme zwingend oder optional ist.

**中文提示：** 一对多的外键通常放“多”的一边；多对多加中间表。0..1 与 1、0..n 与 1..n 不要混。

**答题关键词：** FK auf Viele-Seite; Zuordnungstabelle; Optionalität

**试卷依据：** S22 IT4; W22 IT4.1; S23 IT4.1-4.2

### 03.03 CSV, XML und JSON in Tabellen überführen

**考法（概括）：** Wie leiten Sie aus strukturierten Austauschdaten ein sinnvolles Datenmodell ab?

**德语背诵答案：** Ich identifiziere die fachlichen Objekte, ihre Attribute und wiederkehrenden Kennungen. Danach trenne ich die Entitäten und bestimme Beziehungen, Primärschlüssel und Fremdschlüssel. Passende Datentypen werden ergänzt. CSV ist tabellarisch, XML arbeitet mit Elementen und Attributen, JSON mit strukturierten Schlüssel-Wert-Daten. Das Format allein ersetzt kein relationales Modell.

**中文提示：** 先找“员工、设备、项目”等对象，再找 ID 和关系，不是给每个 CSV 文本字段都单独建一张表。

**答题关键词：** Entitäten/Attribute; Schlüssel/Beziehungen; Formate unterscheiden

**试卷依据：** S22 IT4; S23 IT4.1-4.2; W23 IT1.2.2

### 03.04 Filtern und sortieren

**考法（概括）：** Wie geben Sie bestimmte Kundenspalten mit Namensanfang und vorgegebener Sortierung aus?

**德语背诵答案：** Select wählt die geforderten Spalten, From die Tabelle und Where die passenden Datensätze. Für einen Namen mit bestimmtem Anfang verwende ich Like mit dem Anfang und anschließendem Prozentzeichen. Order by legt die Reihenfolge fest. Asc bedeutet aufsteigend, Desc absteigend; ohne Order by ist die gewünschte Reihenfolge nicht garantiert.

**中文提示：** 顺序记 SELECT、FROM、WHERE、ORDER BY。名字“以 M 开头”是 M 后跟百分号，不是把百分号放前面。

**答题关键词：** LIKE Präfix%; richtige Spalten; ASC/DESC

**试卷依据：** W23 IT1.2.1; Zusatz2026 IT5.2.1

### 03.05 Anzahl und fehlende Werte

**考法（概括）：** Wie zählen Sie Kunden und finden Sie Datensätze ohne hinterlegte E-Mail?

**德语背诵答案：** Count Stern zählt Datensätze. Ein fehlender Datenbankwert wird mit Is null geprüft, nicht mit Gleich null. Ein leerer Text ist ein anderer Wert. Wenn die Aufgabe beide Darstellungen als fehlend definiert, verbinde ich die Prüfungen mit Oder. Count einer bestimmten Spalte überspringt deren SQL-Nullwerte.

**中文提示：** COUNT(*) 计行；IS NULL 查缺失。空字符串与数据库 NULL 不同，是否两个都查取决于题目。

**答题关键词：** COUNT(*); IS NULL; leerer Text getrennt

**试卷依据：** S24 IT3.3; Zusatz2026 IT5.2.2-5.2.3

### 03.06 Bilddaten verwalten: fünf SQL-Muster

**考法（概括）：** Welche SQL-Muster benötigen Sie zum Löschen, Summieren, Zählen, Sortieren und Einfügen von Bildmetadaten?

**德语背诵答案：** Delete mit einer eindeutigen Where-Bedingung entfernt den gewünschten Datensatz. Sum addiert Dateigrößen und Count Stern zählt die Bilder. Absteigende Sortierung nach dem Zeitstempel zeigt neue Bilder zuerst. Insert mit expliziten Spalten ergänzt einen Datensatz. Das Löschen der Datenbankzeile entfernt nicht automatisch die eigentliche Bilddatei.

**中文提示：** 2024 夏这一组是固定五模板：DELETE、SUM、COUNT、ORDER BY DESC、INSERT。真正的文件删除与数据库删行是两件事。

**答题关键词：** DELETE/INSERT; SUM/COUNT; Zeitstempel DESC

**试卷依据：** S24 IT3.1-3.5

### 03.07 Neue abhängige Relation ergänzen

**考法（概括）：** Wie ergänzen Sie mehrere Einsätze oder Ereignisse, die jeweils genau zu einem vorhandenen Gerät gehören?

**德语背诵答案：** Ich lege eine eigene Ereignistabelle mit einer eindeutigen Ereigniskennung an. Sie enthält die geforderten Ereignisattribute und einen Fremdschlüssel auf das Gerät. Ein Gerät kann mehrere Ereignisse besitzen, jedes Ereignis gehört hier genau zu einem Gerät. Dadurch muss ich nicht wiederholte Spalten wie Ereignis eins und Ereignis zwei an das Gerät anhängen.

**中文提示：** “一台设备多次记录”要加事件表，带设备外键，不要在设备表横向加记录1、记录2、记录3。

**答题关键词：** eigene Relation; Ereignis-PK; Geräte-FK/1:n

**试卷依据：** W23 IT1.2.3

## Programmierlogik und Fehlerkorrektur / 编程逻辑与纠错

**出现情况：** 5/5; unterschiedliche Algorithmen, keine identische auswendig lernbare Lösung

### 04.01 Suchalgorithmus im Array

**考法（概括）：** Beschreiben Sie eine Methode, die bei vorhandenem Suchwert true und sonst false liefert.

**德语背诵答案：** Ich durchlaufe das Array und vergleiche jeden Eintrag mit dem Suchwert. Bei einem Treffer gebe ich sofort true zurück. False wird erst nach der vollständig erfolglosen Suche zurückgegeben. Steht diese Rückgabe beim ersten nicht passenden Eintrag, endet die Suche zu früh. Auch das leere Array wird so korrekt behandelt.

**中文提示：** 能提前返回 true，是因为找到一个就证明存在；第一个不匹配不能证明后面没有。false 通常放循环外。

**答题关键词：** alle Einträge; true beim Treffer; false nach der Schleife

**试卷依据：** S22 IT3

### 04.02 Durchschnitt korrekt berechnen

**考法（概括）：** Welche Fehler prüfen Sie bei einer falschen Durchschnittsberechnung mit einem Integer-Array?

**德语背诵答案：** Die Schleife darf nur gültige Indizes verwenden und muss alle Werte addieren. Die Summe wird nicht in jeder Runde überschrieben. Für einen exakten Durchschnitt wird vor der Division ein Operand in eine Gleitkommazahl umgewandelt. Das leere Array wird vor einer Division durch null gesondert behandelt.

**中文提示：** 四处查：循环范围、累加、除法前转换、空数组。方法返回 double，不代表内部整数除法自动有小数。

**答题关键词：** Indexgrenzen; Summe akkumulieren; Gleitkommadivision

**试卷依据：** W22 IT5

### 04.03 Login über einen Rückgabecode

**考法（概括）：** Eine Hilfsmethode liefert 0 bei gültigen Zugangsdaten und sonst einen Fehlercode. Wie wird daraus die geforderte Loginentscheidung?

**德语背诵答案：** Ich rufe die Hilfsmethode mit den übergebenen Zugangsdaten auf und speichere ihren Rückgabecode. Bei Code 0 gebe ich true zurück. Bei einem anderen Code gebe ich die geforderte Fehlermeldung aus und liefere false. Entscheidend ist die vorgegebene Bedeutung des Codes; die Zahl 0 bedeutet in dieser Aufgabe Erfolg.

**中文提示：** 2023 夏的关键：返回码数字 0 是成功，不是直接当成布尔 false。这里的“null”口头读法指数字零，不是空引用。

**答题关键词：** Rückgabecode speichern; 0 bedeutet Erfolg; Meldung plus false

**试卷依据：** S23 IT5

### 04.04 Tarif und Grenzen

**考法（概括）：** Wie korrigieren und implementieren Sie eine Preisregel mit zwei Tarifstufen und einer zulässigen Höchstgrenze?

**德语背诵答案：** Zuerst prüfe ich ungültige Eingaben und die zulässigen Höchstwerte. Danach wähle ich anhand der exakten Grenze den Grundpreis. Anschließend ergänze ich den variablen Preisanteil und liefere das Ergebnis. Wörter wie bis einschließlich und maximal müssen sich im Vergleichsoperator wiederfinden. Ein Grenztest prüft die Stufe und den direkt benachbarten Wert.

**中文提示：** 先合法性，再档位，再附加费用。题目“含边界”就不能乱用大于或小于；背流程，不背旧数字。

**答题关键词：** Gültigkeit zuerst; Grenze korrekt; Preisanteile kombinieren

**试卷依据：** W23 IT1.3.1-1.3.2

### 04.05 Älteste Dateien bis zum Ziel löschen

**考法（概括）：** Wie löschen Sie bei vorgegebener Reihenfolge nur so viele älteste Dateien wie nötig, bis die Restgröße strikt unter dem Limit liegt?

**德语背诵答案：** Ich ermittle die Gesamtgröße und lösche jeweils die älteste verbleibende Datei. Nach erfolgreichem Löschen wird die Gesamtgröße aktualisiert. Die Schleife läuft weiter, solange die Größe mindestens dem Grenzwert entspricht. Erst bei einer strikt kleineren Restgröße stoppe ich. Die Löschreihenfolge und ein sicherer Abbruch bleiben erhalten.

**中文提示：** 2024 夏写的是“严格小于”，所以等于上限还不能停。旧建议答案里的 > 不能不看题意就照抄。

**答题关键词：** älteste zuerst; Gesamtgröße aktualisieren; bei Gleichheit weiter

**试卷依据：** S24 IT2.1

### 04.06 Fehler nachvollziehbar beschreiben

**考法（概括）：** Wie formulieren Sie eine prüfungstaugliche Korrektur eines logischen Fehlers?

**德语背诵答案：** Ich nenne die fehlerhafte Stelle, erkläre ihre Auswirkung und gebe die richtige Bedingung oder Anweisung an. Danach prüfe ich den korrigierten Ablauf mit geeigneten Testdaten. Ein Schreibtischtest notiert die Variablen nach jedem Schritt. Besonders wichtig sind Grenzen, fehlende Treffer und leere Eingaben.

**中文提示：** 别只写“这里错了”。按“错在哪、导致什么、怎样改、用什么测试”回答，才能体现理解。

**答题关键词：** Stelle; Folge/Korrektur; Test

**试卷依据：** W22 IT5; W23 IT1.3.1-1.3.2

## Beschaffung, Angebot und Kalkulation / 采购、Angebot 与商业计算

**出现情况：** Beschaffung 4/5; Angebot im engeren Sinn 3/5

### 05.01 Interne und externe Bezugsquellen

**考法（概括）：** Nennen Sie jeweils zwei interne und externe Quellen für Informationen über mögliche Lieferanten.

**德语背诵答案：** Interne Quellen sind die Lieferantenkartei im Warenwirtschaftssystem und dokumentierte Erfahrungen aus früheren Bestellungen oder Reklamationen. Externe Quellen sind Hersteller- beziehungsweise Lieferantenangebote und geeignete Fachmessen oder Branchenverzeichnisse. Die Informationen werden auf Aktualität und Eignung für den konkreten Bedarf geprüft.

**中文提示：** 内部：ERP 供应商记录、过去订货或投诉经验。外部：厂家报价、展会或行业名录。问两个就各写两个确定的。

**答题关键词：** zwei intern; zwei extern; Bezug zum Bedarf

**试卷依据：** S24 IT1.1

### 05.02 Anforderungen und Nutzwertanalyse

**考法（概括）：** Wie leiten Sie eine begründete Geräteauswahl aus Kundenanforderungen und einer Nutzwertanalyse ab?

**德语背诵答案：** Ich formuliere zuerst messbare Muss- und Kann-Kriterien. Alternativen mit verletzten Muss-Kriterien scheiden aus. Danach gewichte ich die Bewertungskriterien, bewerte alle geeigneten Alternativen auf derselben Skala und addiere die gewichteten Punkte. Die Auswahl wird mit dem Kundennutzen begründet. Eigene Annahmen werden nicht als ausdrücklich genannte Kundenwünsche ausgegeben.

**中文提示：** 先排除不满足硬条件的，再算权重乘分数。不能用很高总分掩盖“必须支持 PoE 但不支持”这种硬伤。

**答题关键词：** Muss vor Bewertung; Gewicht mal Punkte; Kundennutzen

**试卷依据：** S22 IT1.1; W22 IT1.1.1-1.1.2

### 05.03 Angebot auf Vollständigkeit prüfen

**考法（概括）：** Welche Angaben prüfen Sie in einem Angebot, damit die Leistung eindeutig und der Preis vergleichbar ist?

**德语背诵答案：** Ich prüfe genaue Produkt- oder Leistungsbeschreibung, Menge und technische Ausstattung. Preise müssen als netto oder brutto eindeutig erkennbar sein. Hinzu kommen die einschlägigen Liefer- und Zahlungsbedingungen sowie eine gegebenenfalls angegebene Bindung. Fehlende Angaben benenne ich konkret anhand des vorliegenden Angebots. Nicht jede denkbare Angabe ist in jedem Fall zwingend vorgeschrieben.

**中文提示：** 2023 夏重点是净价毛价不清、技术配置不清等。不要把“我通常想看到的项目”说成每一项都是法定必备。

**答题关键词：** Leistung/Menge; netto oder brutto; konkrete Lücke im Dokument

**试卷依据：** W22 IT1.3; S23 IT1.3.1

### 05.04 Quantitativer Angebotsvergleich

**考法（概括）：** Wie berechnen Sie vergleichbare Bezugspreise aus Angeboten mit Rabatt, Skonto und Bezugskosten?

**德语背诵答案：** Ich rechne zuerst dieselbe benötigte Menge. Vom Listeneinkaufspreis ziehe ich Rabatt ab und erhalte den Zieleinkaufspreis. Danach ziehe ich nutzbares Skonto ab und erhalte den Bareinkaufspreis. Mit den Bezugskosten entsteht der Bezugspreis. Erst diese vergleichbaren Endwerte werden gegenübergestellt; die vorgeschriebene Rundung wird eingehalten.

**中文提示：** 同样数量、同样净毛价基础再比较。顺序：减 Rabatt、减 Skonto、加运费等 Bezugskosten；别只看标价。

**答题关键词：** gleiche Menge/Basis; richtige Reihenfolge; Bezugspreis vergleichen

**试卷依据：** S24 IT1.2

### 05.05 Nicht nur den billigsten Lieferanten wählen

**考法（概括）：** Warum kann ein Lieferant trotz fehlendem Rabatt oder höherem Preis sinnvoll sein?

**德语背诵答案：** Eine schnelle und verlässliche Lieferung kann Projektverzug und Stillstandskosten verhindern. Gute bisherige Erfahrungen, passende Qualität und erreichbarer Service senken Risiken. Günstige Zahlungsbedingungen können ebenfalls relevant sein. Ich wäge diese Vorteile gegen den Mehrpreis ab und verknüpfe die Entscheidung mit dem konkreten Kundenauftrag.

**中文提示：** 写价格以外的明确理由，并说业务后果：及时到货避免延期，服务好减少停机，付款条件更合适。不是只写“质量好”。

**答题关键词：** Lieferzeit; Qualität/Service; betriebliche Kosten/Risiken

**试卷依据：** S24 IT1.3

### 05.06 Rabatt, Skonto und Rückwärtskalkulation

**考法（概括）：** Unterscheiden Sie Rabatt und Skonto und erklären Sie die korrekten Prozentbasen beim Kalkulieren.

**德语背诵答案：** Rabatt ist ein vereinbarter Preisnachlass, etwa aufgrund der Menge. Skonto setzt die Zahlung innerhalb der vereinbarten Frist voraus. Beide werden nacheinander auf ihre jeweilige Basis gerechnet. Zuschläge für Handlungskosten und Gewinn beziehen sich auf die angegebenen Ausgangswerte. Rückwärts werden Zuschläge durch den Faktor eins plus Satz und Abzüge durch eins minus Satz zurückgerechnet.

**中文提示：** Rabatt 不是付款速度折扣，Skonto 才是。反算加价10%要除1.10，不是从结果减10%；反算减价2%要除0.98。

**答题关键词：** Zahlungsfrist; jeweilige Prozentbasis; rückwärts dividieren

**试卷依据：** W22 IT1.2; S23 IT1.3.2; Zusatz2026 IT2.1-2.2

### 05.07 Wareneingang in vier Schritten

**考法（概括）：** Beschreiben Sie vier nachvollziehbare Schritte der Wareneingangsprüfung.

**德语背诵答案：** Ich vergleiche Bestellung und Lieferschein hinsichtlich Produkt und Menge. Danach prüfe ich Verpackung und sichtbare Schäden. Ich kontrolliere Identität, Ausstattung und geeignete Funktionen der gelieferten Geräte. Abweichungen und Liefertermin werden dokumentiert und an die zuständige Stelle weitergegeben. Unbeschädigte Verpackung beweist keine vollständige und richtige Lieferung.

**中文提示：** 记：对单和数量、看损坏、核型号配置功能、记录并反馈。题目给了少送、错型号或延期，要明确指出。

**答题关键词：** Bestellung/Lieferschein; Zustand/Identität; Prüfung und Dokumentation

**试卷依据：** S22 IT1.2; S24 IT1.4

## WLAN: Leistung, Sicherheit und Auswahl / 无线网络的高频问法

**出现情况：** 3/5; zusätzlich im markierten Sommer-2026-Material

### 06.01 Brutto ist nicht Netto

**考法（概括）：** Warum kann die gemessene WLAN-Nutzdatenrate deutlich unter der beworbenen Bruttodatenrate liegen?

**德语背诵答案：** Die Bruttodatenrate enthält nicht nur nutzbare Anwendungsdaten. Protokolloverhead, geteilte Funkzeit, Störungen und erneute Übertragungen senken die Nutzdatenrate. Deshalb beweist eine niedrigere Messung allein keinen Defekt. Ich bewerte die tatsächliche Auslastung, Funkbedingungen und benötigte Anwendungsleistung.

**中文提示：** 2022 夏不是让你背“50%永远正常”，而是解释为什么无线净速率低，再结合场景判断。

**答题关键词：** Overhead; geteilte Funkzeit; Störungen/Wiederholungen

**试卷依据：** S22 IT2.2

### 06.02 2,4 und 5 Gigahertz vergleichen

**考法（概括）：** Nennen Sie jeweils zwei typische Eigenschaften von 2,4-GHz- und 5-GHz-WLAN.

**德语背诵答案：** 2,4 Gigahertz erreicht häufig größere Entfernungen und durchdringt Hindernisse besser. Das Band ist jedoch oft stark belegt und bietet weniger überlappungsfreie Kanaloptionen. 5 Gigahertz bietet mehr Kanaloptionen und häufig höhere nutzbare Kapazität bei geeigneter Abdeckung. Seine Reichweite und Hindernisdurchdringung sind typischerweise geringer.

**中文提示：** 2.4：通常穿墙远，但拥挤、可用独立频道少。5：频道多、容量好，但覆盖距离要检查；别只写“5总是更好”。

**答题关键词：** Reichweite; Belegung/Kanäle; abdeckungsbezogener Vergleich

**试卷依据：** W22 IT2.2

### 06.03 Vier WLAN-Sicherheitsmaßnahmen

**考法（概括）：** Nennen Sie vier geeignete Maßnahmen zur sicheren Erstkonfiguration eines Access Points.

**德语背诵答案：** Ich verwende WPA3 mit geeigneter Authentifizierung, soweit Geräte und Einsatzvorgaben das unterstützen. Standardzugänge werden geändert und die Administration wird geschützt. Firmware wird gepflegt und unnötige Dienste werden deaktiviert. Gästezugänge werden vom internen Netz getrennt und mit passenden Zugriffsregeln begrenzt. Eine versteckte SSID ersetzt diese Maßnahmen nicht.

**中文提示：** 四组有用措施：加密认证、改默认管理员入口、更新并关多余服务、访客隔离加规则。隐藏名字不等于安全。

**答题关键词：** Verschlüsselung/Authentifizierung; Administration/Updates; Trennung mit Regeln

**试卷依据：** W22 IT2.1

### 06.04 Wi-Fi 6 und Wi-Fi 6E

**考法（概括）：** Welche Erweiterung ist bei Wi-Fi 6E gegenüber den bisherigen Wi-Fi-6-Bändern wichtig?

**德语背诵答案：** Wi-Fi 6 basiert auf IEEE 802.11ax. Wi-Fi 6E erweitert geeignete Geräte um den 6-Gigahertz-Bereich. Dadurch stehen zusätzliche Funkressourcen zur Verfügung. Die Erweiterung garantiert aber keine bestimmte Nutzdatenrate für jeden Client. Access Point, Endgerät und erlaubte Konfiguration müssen zusammenpassen.

**中文提示：** 2023 夏问的关键是 6E 增加6GHz。不要误背成“所有 Wi-Fi 6 都必然支持6GHz”。

**答题关键词：** 802.11ax; 6-GHz-Erweiterung; kompatible Geräte

**试卷依据：** S23 IT3.2.1

### 06.05 PoE und eigenes WLAN-Subnetz

**考法（概括）：** Warum sind PoE und ein getrenntes WLAN-Subnetz für ein Unternehmen sinnvoll?

**德语背诵答案：** PoE versorgt geeignete Access Points über die Netzwerkleitung mit Daten und Energie. Portleistung und gesamtes Leistungsbudget müssen dafür ausreichen. Ein getrenntes WLAN-Subnetz vereinfacht Verwaltung und eigene Zugriffsregeln. Eine wirksame Zugriffstrennung entsteht erst durch passende technische Regeln; eine andere Netznummer allein genügt nicht.

**中文提示：** PoE省去额外电源布线，但要核单端口和总功率。不同子网只是划分，真正隔离还要防火墙或 ACL。

**答题关键词：** Strom und Daten; Port/Gesamtbudget; Subnetz plus Zugriffskontrolle

**试卷依据：** W22 IT1.1/IT1.3; Zusatz2026 IT3.5

## SLA, Meldungsarten und Priorität / 服务协议、事件分类与优先级

**出现情况：** Service 3/5; ausdrückliches SLA 2/5

### 07.01 SLA-Inhalte

**考法（概括）：** Nennen Sie vier prüfbare Inhalte eines Service Level Agreements.

**德语背诵答案：** Ein SLA kann Leistungsumfang, Servicezeiten, Zielverfügbarkeit und Reaktions- beziehungsweise Wiederherstellungsziele festlegen. Kommunikations- und Eskalationswege können ergänzt werden. Messbeginn, Messzeitraum und Ausnahmen müssen eindeutig sein. Allgemeine Aussagen wie guter Support sind ohne messbare Definition kaum überprüfbar.

**中文提示：** 背范围、服务时间、可用率、响应或恢复目标。要有可检查的标准，不能只写“服务好”。

**答题关键词：** Leistungsumfang/Zeiten; Verfügbarkeit; messbare Fristen

**试卷依据：** S23 IT1.4.1; S22 IT2.4

### 07.02 Reaktion, Entstörung und Jahresverfügbarkeit

**考法（概括）：** Wie beurteilen Sie einen Ausfall gegenüber einem SLA mit Jahresverfügbarkeit und zusätzlicher Entstörfrist?

**德语背诵答案：** Die erlaubte Gesamtausfallzeit ergibt sich aus Gesamtzeit mal eins minus Zielverfügbarkeit als Dezimalzahl. Alle relevanten Ausfälle werden für den Messzeitraum addiert. Eine Entstörfrist je Vorfall wird zusätzlich separat geprüft. Reaktionszeit ist nicht gleich Wiederherstellungszeit. Ein eingehaltenes Jahresbudget kann eine einzelne Fristverletzung nicht automatisch ausgleichen.

**中文提示：** 一年总停机、单次修复时限、首次响应是三件事。总预算合格，也可能某次修复超时。

**答题关键词：** Ausfallbudget; einzelne Frist separat; Reaktion ungleich Wiederherstellung

**试卷依据：** S22 IT2.4

### 07.03 Event, Request oder Incident

**考法（概括）：** Ordnen Sie eine automatische Lizenzwarnung, eine Mausbestellung und einen ausgefallenen Access Point zu und begründen Sie.

**德语背诵答案：** Die automatische Lizenzwarnung ist ein Event, also ein für den Betrieb relevantes beobachtetes Ereignis. Die Mausbestellung ist ein Service Request, eine standardisierte Leistungsanfrage. Der ausgefallene Access Point ist ein Incident, weil ein Service ungeplant beeinträchtigt ist. Entscheidend sind Inhalt und Auswirkung der Meldung, nicht nur die Tatsache, dass ein Ticket existiert.

**中文提示：** 自动状态警告是Event；申请鼠标是Request；AP坏了是Incident。有工单不代表一定是故障。

**答题关键词：** Event: Beobachtung; Request: Anforderung; Incident: Beeinträchtigung

**试卷依据：** S23 IT1.4.2

### 07.04 Ticketpriorität begründen

**考法（概括）：** Wie bestimmen Sie eine sachlich begründete Dringlichkeits- oder Prioritätsstufe?

**德语背诵答案：** Ich bewerte Auswirkung und zeitliche Dringlichkeit anhand der vorgegebenen Matrix. Zahl der Betroffenen, betroffener Geschäftsprozess und vorhandene Ausweichmöglichkeiten sind wichtige Kriterien. Ein vollständiger Ausfall eines kritischen Dienstes kann höher priorisiert werden als ein einzelnes Komfortproblem. Die konkrete Einstufung wird mit den Fallinformationen begründet.

**中文提示：** 按影响和紧急程度，不按谁职位高、催得响。给定矩阵优先于自己随便设“高、中、低”。

**答题关键词：** Impact/Urgency; Geschäftsprozess; vorgegebene Matrix

**试卷依据：** W22 IT3.1

## Organigramm, Stellenarten und GmbH / 组织图、岗位与 GmbH

**出现情况：** 2/5; zusätzlich im markierten Sommer-2026-Material

### 08.01 Organisationsformen erklären

**考法（概括）：** Unterscheiden Sie Einlinien-, Mehrlinien-, Stablinien- und Matrixorganisation.

**德语背诵答案：** In der Einlinienorganisation hat eine Stelle einen eindeutigen vorgesetzten Weisungsweg. In der Mehrlinienorganisation wirken mehrere fachliche Weisungswege. Eine Stablinienorganisation ergänzt die Linie um beratende Stellen. Eine Matrix verbindet zwei Gliederungsdimensionen, etwa Funktion und Projekt. Die Auswahl wird anhand der tatsächlich gezeichneten Weisungs- und Beratungsbeziehungen erklärt.

**中文提示：** 看箭头和权力关系，不凭图长得像什么就猜。一个上级、多专业上级、参谋顾问、项目加职能四类要分开。

**答题关键词：** Weisungswege; Stabsberatung; zwei Matrixdimensionen

**试卷依据：** S23 IT1.1; W23 IT3.1; Zusatz2026 IT1.1

### 08.02 Stabsstelle, Instanz und Ausführungsstelle

**考法（概括）：** Unterscheiden Sie die drei Stellenarten und nennen Sie einen Vorteil sowie einen möglichen Nachteil einer klaren Linienstruktur.

**德语背诵答案：** Eine Instanz besitzt Leitungs- und Weisungsbefugnis. Eine Ausführungsstelle erledigt operative Aufgaben ohne entsprechende Leitungsfunktion. Eine Stabsstelle berät und unterstützt eine Leitung, hat gegenüber der Linie grundsätzlich kein eigenes Weisungsrecht. Klare Zuständigkeiten erleichtern die Zuordnung von Verantwortung; längere Entscheidungswege können jedoch die Zusammenarbeit verzögern.

**中文提示：** Instanz能指挥，执行岗干具体工作，Stab提供建议不直接指挥业务线。优点和缺点都要联系这张图。

**答题关键词：** Leitung; Ausführung; Beratung ohne Linienweisung

**试卷依据：** S23 IT1.1; W23 IT3.1; Zusatz2026 IT1.2-1.3

### 08.03 e.K. und reguläre GmbH

**考法（概括）：** Vergleichen Sie e.K. und reguläre GmbH nach Handelsregister, Haftung, Kapital und Führung und formulieren Sie eine begründete Empfehlung.

**德语背诵答案：** Der Einzelkaufmann haftet grundsätzlich persönlich, führt sein Unternehmen und hat kein gesetzliches Mindestkapital. Er steht im Handelsregister in Abteilung A. Die reguläre GmbH ist eine juristische Person mit mindestens 25000 Euro Stammkapital und bestellter Geschäftsführung. Sie steht in Abteilung B und führt den Zusatz GmbH. Ihre Eintragung ist für die Entstehung notwendig, also konstitutiv. Beim Istkaufmann bestätigt die Eintragung eine bereits bestehende Kaufmannseigenschaft, also deklaratorisch. Für GmbH-Schulden haftet grundsätzlich das Gesellschaftsvermögen. Beteiligungswunsch und Risikobegrenzung sind gegen Kapitalbedarf und Gründungsaufwand abzuwägen. Persönliche Bürgschaften und Pflichtverletzungen können weitere Haftungsrisiken schaffen.

**中文提示：** 登记A对B，GmbH登记才成立；Istkaufmann的登记确认已有身份，别推广到所有个体经营者。再比较责任、资本、经营权。

**答题关键词：** A/B und Registerwirkung; Haftung/Kapital/Führung; begründete Abwägung

**试卷依据：** S23 IT1.2; W23 IT3.2

## Stromkosten und Einsparung / 电费与节省比例

**出现情况：** 1/5; Rechnen aus vorhandenen Leistungs- und Zeitangaben

### 09.01 Jährliche Stromkosten

**考法（概括）：** Wie berechnen Sie die jährlichen Stromkosten mehrerer Geräte mit unterschiedlichen Betriebszeiten?

**德语背诵答案：** Ich rechne Watt in Kilowatt um und multipliziere Leistung, Gerätezahl und jeweilige Betriebsstunden. Das ergibt Kilowattstunden. Danach multipliziere ich mit dem Preis pro Kilowattstunde und addiere die Teilkosten. Dauerläufer und Geräte mit Arbeitstagsbetrieb werden getrennt gerechnet. Einheiten und vorgegebene Rundungsregeln bleiben sichtbar.

**中文提示：** W先除1000变kW，再乘小时和数量，最后乘每kWh价格。服务器全年开与员工电脑只算工作日别混。

**答题关键词：** kW mal h; unterschiedliche Laufzeiten; kWh-Preis

**试卷依据：** W23 IT2.3.1

### 09.02 Einsparung richtig bewerten

**考法（概括）：** Wie ermitteln Sie eine prozentuale Einsparung durch geringere Nutzung einzelner Arbeitsplätze?

**德语背诵答案：** Zuerst bestimme ich die tatsächlich entfallenden Kilowattstunden beziehungsweise Kosten. Die Ersparnis wird durch die vorgegebenen ursprünglichen Gesamtkosten geteilt und mit hundert multipliziert. Weiterlaufende Server und Netzwerkgeräte sparen dadurch nicht automatisch mit. Die Kostenwirkung wird deshalb nur auf die tatsächlich geänderten Geräte und Zeiten bezogen.

**中文提示：** 居家办公减少的是相应工位的运行，不是全公司所有设备一起按同一比例少耗电。百分比的分母要看题目。

**答题关键词：** tatsächlich entfallende Kosten; richtiger Ausgangswert; Dauerläufer bleiben

**试卷依据：** W23 IT2.3.2

## Separates Zusatzsignal aus dem Sommer-2026-Material / 2026 标注资料单独补充

**出现情况：** Nicht in die historische Häufigkeit der fünf Kernprüfungen eingerechnet

### 10.01 Verfügbarkeit in Minuten

**考法（概括）：** Wie rechnen Sie die erlaubte jährliche Ausfallzeit bei vorgegebener Verfügbarkeit?

**德语背诵答案：** Bei 365 Tagen hat das Jahr 525600 Minuten. Die erlaubte Ausfallzeit ist diese Gesamtzeit mal eins minus Verfügbarkeit als Dezimalzahl. Bei 99,9 Prozent sind das 525,6 Minuten. Bei 99,99 Prozent sind es 52,56 Minuten. Die Prozentangabe muss vor der Rechnung richtig umgewandelt werden.

**中文提示：** 99.9%不是99.9小时。先变0.999，再算1减它；最后结果带分钟单位。

**答题关键词：** 525600 Minuten; Dezimalfaktor; 525.6/52.56 Minuten

**试卷依据：** Zusatz2026 IT3.1; S22 IT2.4

### 10.02 RAID 5 und RAID 10

**考法（概括）：** Vergleichen Sie nutzbare Kapazität und Ausfalltoleranz von RAID 5 und RAID 10 bei gleich großen Platten ohne Hot-Spare.

**德语背诵答案：** RAID 5 nutzt grundsätzlich die Kapazität von Anzahl minus eins Platten und toleriert einen Plattenausfall. RAID 10 nutzt bei paarweiser Spiegelung die halbe Rohkapazität. Mehrere Ausfälle sind dort nur möglich, solange kein ganzes Spiegelpaar verloren geht. Bei sechs Platten mit je zwanzig Terabyte ergeben sich hundert Terabyte beziehungsweise sechzig Terabyte nutzbar, ohne weitere Verwaltungsverluste.

**中文提示：** 6块20TB：RAID5是100TB，RAID10是60TB。RAID10能坏几块要看坏在哪对，不能背“任意坏一半”。

**答题关键词：** (n-1) mal S; n/2 mal S; Spiegelpaar entscheidend

**试卷依据：** Zusatz2026 IT3.3.1-3.3.2

### 10.03 RAID ersetzt kein Backup

**考法（概括）：** Beurteilen Sie RAID ohne Backup und nennen Sie ein geeignetes Datensicherungskonzept.

**德语背诵答案：** RAID verbessert die Verfügbarkeit bei bestimmten Laufwerksausfällen. Es schützt nicht allgemein gegen Fehlbedienung, Schadsoftware oder Standortverlust und ersetzt deshalb kein Backup. Ein 3-2-1-Konzept sieht drei Kopien insgesamt, zwei Medientypen und eine räumlich getrennte Kopie vor. Eine offline oder unveränderlich geschützte Kopie und regelmäßige Wiederherstellungstests erhöhen die Robustheit.

**中文提示：** 镜像会把误删也同步过去。背3份总副本、2种介质、1份异地，再加离线或不可改写和恢复测试。

**答题关键词：** RAID-Grenzen; 3-2-1; Restore-Test

**试卷依据：** Zusatz2026 IT3.3.3-3.3.4

### 10.04 CSV nach fehlendem Preis durchsuchen

**考法（概括）：** Wie prüfen Sie mehrere CSV-Zeilen auf mindestens einen fehlenden Preis für eine bestimmte Artikel-ID?

**德语背诵答案：** Ich teile jede Zeile nach der vorgegebenen Struktur auf und erhalte leere Endfelder. Nur bei passender Artikel-ID prüfe ich das Preisfeld auf leeren Inhalt oder den vereinbarten Text NULL. Sobald ein solcher Fehler gefunden ist, liefere ich true. False folgt erst nach der vollständig erfolglosen Suche. Ein vorhandener Preis in einer anderen Zeile beendet die Suche nicht vorzeitig.

**中文提示：** 先匹配商品编号，再看对应价格。NULL文字、空字段和数字0不同；有一条正常价格，也不能跳过后面可能缺价的记录。

**答题关键词：** leere Felder erhalten; ID UND fehlender Preis; mindestens ein Treffer

**试卷依据：** Zusatz2026 IT4.1
