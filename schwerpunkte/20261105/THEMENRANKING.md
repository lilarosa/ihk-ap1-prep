# 巴登州 AP1：基于已提供试卷的重点排序

统计核心样本：**5 份**可明确识别的巴登州试卷，分别为 2022 夏、2022/23 冬、2023 夏、2023/24 冬、2024 夏。重复文件、不同扫描版和答案不另计。

**同为 5/5 的主题并列最高频。下表先后顺序是复习建议，不是假装精确的概率排名。** 同一题可涉及多个主题，次数不能相加当作总题数。只统计明确要求完成的题目，不把背景里提到一个词就计为考过。

## 第一层：大主题

|复习顺序|主题|核心样本出现|标注 2026 夏资料|
|---|---|---|---|
|1|Netzwerkkonfiguration und Diagnose / 网络配置与排错|5/5|另有出现|
|2|IT-Sicherheit, Schutzziele und Schutzbedarf / 安全、CIA 与保护需求|5/5|另有出现|
|3|Datenbanken und Datenmodellierung / 数据库、关系模型与 SQL|5/5|另有出现|
|4|Programmierung und Algorithmik / 编程逻辑、找错与实现|5/5|另有出现|
|5|Beschaffung, Angebote und Verkaufskalkulation / 采购、报价与销售计算|4/5|另有出现|
|6|Service, SLA und Tickets / 服务、SLA 与工单|3/5|未计到对应明确题目|
|7|Aufbauorganisation und Rechtsformen / 组织结构与公司法律形式|2/5|另有出现|
|8|Stromkosten und Energieeinsparung / 电费与节能计算|1/5|未计到对应明确题目|

你提到的 **WLAN、Schutzbedarf、Angebot 确实有重复考法**。但频次要细分：

- WLAN：**3/5**；补充的标注 2026 夏资料也有。
- Schutzbedarf／按 Schutzziel 分析风险：**4/5**。其中正式分类或解释既定等级是 **3/5**；2022 夏更接近按可用性挑选风险与措施。
- 采购与报价大主题：**4/5**。严格限于“填写、检查、比较报价单”是 **3/5**。
- 数据库大主题：**5/5**，但要求自己写 SQL 是 **3/5**。不能把 ER 模型题全部算成 SQL 题。

## 第二层：具体考法

|具体考法|次数|2022夏|2022/23冬|2023夏|2023/24冬|2024夏|2026补充|
|---|---|---|---|---|---|---|---|
|IPv4-Konfiguration, Subnetz oder Gatewayfehler|4/5|有|-|有|有|有|-|
|ERM, Kardinalitäten oder Relationen erweitern|4/5|有|有|有|有|-|有|
|Schutzbedarfs-/Gefährdungsanalyse mit Fallbezug|4/5|有|-|有|有|有|-|
|WLAN-Leistung, Frequenzen, Sicherheit oder Standard|3/5|有|有|有|-|-|有|
|IPv6-Konfiguration oder Adresstypen|3/5|-|有|有|-|有|有|
|SQL selbst formulieren oder analysieren|3/5|-|有|-|有|有|有|
|Angebot erstellen, prüfen oder vergleichen|3/5|-|有|有|-|有|-|
|Schutzbedarf einstufen oder Einstufung begründen|3/5|-|-|有|有|有|-|
|SLA-Inhalte oder Einhaltung ausdrücklich prüfen|2/5|有|-|有|-|-|-|
|Handels-/Differenzkalkulation|2/5|-|有|有|-|-|有|
|Wareneingangsprüfung|2/5|有|-|-|-|有|-|
|RAID und Backup fachlich vergleichen|0/5|-|-|-|-|-|有|

## 每次出现的任务依据

页码指卷内印刷页码；任务号以题目为准，OCR 中的字符误识别不另造任务。问法在本包中重新概括，不复制完整原卷。

### NET - Netzwerkkonfiguration und Diagnose (5/5)

- Sommer 2022：IT2.1, S.2: IPv4-Konfiguration und Frame-Adressen。
- Winter 2022/23：IT2.3, S.3: IPv6-Konfiguration。
- Sommer 2023：IT3.1-3.2, S.3-4: Netzplan und IP-Konfiguration。
- Winter 2023/24：IT2.1, S.4: fehlerhaftes Gateway und IPv4-Adresstypen。
- Sommer 2024：IT4.1-4.4, S.3-4: private IP, Subnetz, Gateway, IPv6。

### SEC - IT-Sicherheit, Schutzziele und Schutzbedarf (5/5)

- Sommer 2022：IT2.3.1-2.3.2, S.3: Verfügbarkeitsgefährdungen und Maßnahmen。
- Winter 2022/23：IT3.2-3.3, S.4: Ransomware und drei Schutzziele。
- Sommer 2023：IT2.1-2.2, S.3: Kategorien und Maximumprinzip。
- Winter 2023/24：IT1.1, IT2.2 und IT2.4, S.2/4/5: Datenkategorien, Firewall, Serverraum。
- Sommer 2024：IT4.5, S.4: Bilddaten-Schutzbedarf und Videoüberwachung。

### DB - Datenbanken und Datenmodellierung (5/5)

- Sommer 2022：IT4, S.4: JSON in ERM überführen。
- Winter 2022/23：IT4.1-4.3, S.4: Kardinalitäten, SQL, doppelter Primärschlüssel。
- Sommer 2023：IT4.1-4.2, S.4: ERM und Relationen mit Schlüsseln。
- Winter 2023/24：IT1.2.1-1.2.3, S.2-3: SQL, Export und zusätzliche Relation。
- Sommer 2024：IT3.1-3.5, S.3: fünf SQL-Anweisungen。

### PROG - Programmierung und Algorithmik (5/5)

- Sommer 2022：IT3, S.4: MAC-Adresse im Array suchen。
- Winter 2022/23：IT5, S.5: Durchschnittsberechnung korrigieren。
- Sommer 2023：IT5, S.5: Login über Rückgabecode einer Hilfsmethode。
- Winter 2023/24：IT1.3.1-1.3.2, S.3-4: Struktogramm korrigieren und Tarif codieren。
- Sommer 2024：IT2.1, S.2: älteste Dateien bis zum Speicherziel löschen。

### BES - Beschaffung, Angebote und Verkaufskalkulation (4/5)

- Sommer 2022：IT1.1-1.2, S.2: Anforderungen und Wareneingang。
- Winter 2022/23：IT1.1-1.3, S.2-3: Nutzwert, Kalkulation und Angebot。
- Sommer 2023：IT1.3.1-1.3.2, S.2-3: Angebotslücken und Gewinn/Verlust。
- Sommer 2024：IT1.1-1.4, S.2: Bezugsquellen, Angebotsvergleich und Wareneingang。

### SERVICE - Service, SLA und Tickets (3/5)

- Sommer 2022：IT2.4, S.3: Jahresverfügbarkeit und Entstördauer。
- Winter 2022/23：IT3.1, S.3: Dringlichkeitsstufen。
- Sommer 2023：IT1.4.1-1.4.2, S.3: SLA-Inhalte und Event/Request/Incident。

### ORG - Aufbauorganisation und Rechtsformen (2/5)

- Sommer 2023：IT1.1-1.2, S.2: Organigramm und Wechsel zur GmbH。
- Winter 2023/24：IT3.1-3.2, S.5-6: Organigramm und e.K./GmbH。

### ENERGIE - Stromkosten und Energieeinsparung (1/5)

- Winter 2023/24：IT2.3.1-2.3.2, S.5: Jahreskosten und Einsparung。

### IPV4 - IPv4-Konfiguration, Subnetz oder Gatewayfehler (4/5)

- Sommer 2022：IT2.1.1-2.1.2, S.2。
- Sommer 2023：IT3.2.4-3.2.5, S.4。
- Winter 2023/24：IT2.1.1-2.1.3, S.4。
- Sommer 2024：IT4.1-4.3, S.3-4。

### ERM - ERM, Kardinalitäten oder Relationen erweitern (4/5)

- Sommer 2022：IT4, S.4。
- Winter 2022/23：IT4.1, S.4。
- Sommer 2023：IT4.1-4.2, S.4。
- Winter 2023/24：IT1.2.3, S.3。

### SCHUTZ - Schutzbedarfs-/Gefährdungsanalyse mit Fallbezug (4/5)

- Sommer 2022：IT2.3, S.3: Gefährdungen für Verfügbarkeit; keine vollständige CIA-Einstufung。
- Sommer 2023：IT2.1-2.2, S.3。
- Winter 2023/24：IT2.4, S.5。
- Sommer 2024：IT4.5.1, S.4。

### WLAN - WLAN-Leistung, Frequenzen, Sicherheit oder Standard (3/5)

- Sommer 2022：IT2.2, S.3: Brutto-/Nettodatenrate。
- Winter 2022/23：IT1.1 und IT2.1-2.2, S.2-3: Auswahl, Schutz, Frequenzen。
- Sommer 2023：IT3.2.1, S.4: Wi-Fi-6E-Neuerung。

### IPV6 - IPv6-Konfiguration oder Adresstypen (3/5)

- Winter 2022/23：IT2.3, S.3。
- Sommer 2023：IT3.2.3, S.4。
- Sommer 2024：IT4.4, S.4。

### SQL - SQL selbst formulieren oder analysieren (3/5)

- Winter 2022/23：IT4.2-4.3, S.4。
- Winter 2023/24：IT1.2.1, S.2。
- Sommer 2024：IT3.1-3.5, S.3。

### ANGEBOT - Angebot erstellen, prüfen oder vergleichen (3/5)

- Winter 2022/23：IT1.3, S.3: Angebot vervollständigen。
- Sommer 2023：IT1.3.1, S.2: fehlende Bestandteile。
- Sommer 2024：IT1.2, S.2: quantitativer Angebotsvergleich。

### SCHUTZ_KAT - Schutzbedarf einstufen oder Einstufung begründen (3/5)

- Sommer 2023：IT2.1-2.2, S.3: Kategorien vorgegeben。
- Winter 2023/24：IT2.4, S.5: sehr hoch vorgegeben, begründen。
- Sommer 2024：IT4.5.1, S.4: Bilddaten anhand Anlage einstufen。

### SLA - SLA-Inhalte oder Einhaltung ausdrücklich prüfen (2/5)

- Sommer 2022：IT2.4, S.3。
- Sommer 2023：IT1.4.1, S.3。

### KALK - Handels-/Differenzkalkulation (2/5)

- Winter 2022/23：IT1.2, S.2。
- Sommer 2023：IT1.3.2, S.3。

### WARE - Wareneingangsprüfung (2/5)

- Sommer 2022：IT1.2, S.2。
- Sommer 2024：IT1.4, S.2。

### RAID - RAID und Backup fachlich vergleichen (0/5)

- 核心五卷中没有把它作为专门要求作答的题目。不能仅因场景提到 RAID 就计为 RAID 原理题。

## 结论怎样使用

先保证网络、安全、数据库和编程都有基本作答能力，再重点背采购报价、WLAN 和服务分类的固定表达。组织结构虽只有 2/5，但在 2023/24 冬卷中占有明显分量，不能简单忽略。频次不等于分值，也不等于未来出现概率。

## 2026 资料与缺口

额外的 FA-230 资料标有 Sommer 2026：组织、反向商业计算、可用率、RAID/Backup、IPv6/WLAN、CSV 和数据库都值得补充。它不与已确认的五卷混算。若只把它作为第六份观察资料，WLAN 是 4/6、SQL 是 4/6；这仍不是下一次考试的概率。

本次没有可核验的 2025 巴登州试卷。全国版 Frühjahr 2026 不纳入巴登州历史频次。学校资料和全国卷仅作补充背景，不用于给核心五卷“增加命中次数”。

## 答案质量上的几个提醒

- 2024 夏的题目写“剩余总量严格小于上限”；因此等于上限时还需继续删除。旧建议答案有 `while >` 的写法，本包按明确需求解释边界，不机械照抄。
- 2024 夏网络图的内网路由器是 `192.168.0.254`，客户端网关写成 `192.168.0.1`，这里能明确判断的是网关错误。图里 `192.168.0.1` 标注为测试服务器，不能据此擅自认定其必然是 DNS。
- 不把某一卷的 Schutzbedarf 分类表当作通用标准。旧答案里对视频监控的法律表述也不能简化成“任何拍摄都必须逐人同意”；须考虑合法基础、必要性和利益衡量。

本包的德语背诵答案是适用于明确问法的原创范例；需要分类、代码或金额计算的题目仍须结合当题数据。