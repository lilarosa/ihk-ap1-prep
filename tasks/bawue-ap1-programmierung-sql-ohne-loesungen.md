# AP1 BaWü：编程与 SQL 专项练习（无答案）

适用：从理论、网络复习转入编程与数据库的学习者。

这是原创专项练习，不是官方真题，也不是完整 AP1 模拟卷。题型参考巴登-符腾堡州官方样题中的场景题、表结构与关系判断，以及你已有资料中的 Schreibtischtest、Struktogramm 和算法纠错练习。SQL 的具体语法范围、编程题比例仍应以你的学校和当期考试说明为准。本卷分值与建议时间仅用于训练。

## 先怎样练

第一次：只做题 1、2、8、9、10，建议 35 分钟，共 28 分。不会的地方先写出思路；不要搜索整道题的答案。

第二次：做题 3—7，再做题 11—13。第三次：做题 14—16，之后重做错题。掌握基础后，本卷可作为 90 分钟、100 分的专项限时训练；这 90 分钟不是官方对编程和 SQL 单独分配的时间。

考试训练顺序：先在纸上/空白文档作答，再运行代码核对。算法可先用伪代码，之后用你在学校学的语言实现。题 3 指定 Java，因为练习目标是阅读 Java 代码。

每题记录：用时、是否独立完成、卡住的原因。答案发给我时保留题号，我会按本卷自定评分标准批改，并区分逻辑错误、语法错误和德语理解错误。

## 学习顺序与关键词

|顺序|技能|德语词|练习|
|---|---|---|---|
|1|赋值、条件判断、逻辑运算|Zuweisung, Selektion, UND/ODER|1、4|
|2|逐步执行代码|Schreibtischtest|2、3|
|3|循环、数组、统计|Iteration, Array, Summe, Maximum|3、5|
|4|函数、结构图、测试|Rückgabewert, Struktogramm, Grenzwerttest|4、6、7|
|5|表、键、数据类型、关系|Primärschlüssel, Fremdschlüssel, Beziehung|8、16|
|6|查询、筛选、排序|SELECT, WHERE, ORDER BY|9、10|
|7|连接、分组统计|JOIN, GROUP BY, HAVING|11—13|
|8|修改数据、处理缺失值|INSERT, UPDATE, DELETE, NULL|14、15|

看题时特别留意：mindestens = 至少；höchstens = 最多；mehr als = 大于；weniger als = 小于；einschließlich = 包含边界；je/pro = 每个；absteigend = 降序。

## 场景

你在一家 IT 服务公司工作，负责设备管理和报修系统。你需要读取现有代码、修正算法、设计数据表并编写 SQL。

本卷数组从下标 0 开始。伪代码 `←` 是赋值，`=` 是比较，`LÄNGE` 表示元素数量，`MOD` 表示取余。所有循环是否包含终点都明确写出。SQL 文本用单引号，日期使用 ISO 格式。本卷不要求数据库特有的函数。

## A. 编程与算法（40 分）

### 1. 根据需求写条件（4 分，约 5 分钟）

**Formulieren Sie die Bedingung für die Ausgabe „Geeignet“.**

设备必须同时满足：

- RAM 至少 16 GB；
- 可用磁盘空间至少 100 GB；
- 操作系统是 `Windows 11` 或 `Ubuntu 24.04`。

变量为 `ramGB`、`freiGB`、`betriebssystem`。

a) 写出完整布尔条件，明确括号和 AND/OR 的组合。（3 分）

b) 当 RAM=8、可用空间=200、系统为 Ubuntu 24.04 时，应该输出 `Geeignet` 还是 `Nicht geeignet`？（1 分）

作答：

### 2. 手工跟踪循环（6 分，约 7 分钟）

**Führen Sie einen Schreibtischtest durch.**

```text
werte ← [8, 15, 22, 9]
summe ← 0
anzahl ← 0
FÜR i ← 0 BIS 3 EINSCHLIESSLICH
    WENN werte[i] >= 10 DANN
        summe ← summe + werte[i]
        anzahl ← anzahl + 1
    ENDE WENN
ENDE FÜR
AUSGABE summe, anzahl
```

a) 每一行填写该轮执行结束时的变量值。（4 分）

|i|werte[i]|条件为真/假|summe|anzahl|
|---|---|---|---|---|
|0|8||||
|1|15||||
|2|22||||
|3|9||||

b) 写出最后输出的两个值。（2 分）

作答：

### 3. 阅读并修正 Java 代码（8 分，约 8 分钟）

**Beschreiben und korrigieren Sie drei Fehler.**

需求：返回数组中全部数值的总和。空数组返回 0。

```java
static int summe(int[] werte) {
    int ergebnis = 1;
    for (int i = 0; i <= werte.length; i++) {
        ergebnis = werte[i];
    }
    return ergebnis;
}
```

a) 找出三个错误，分别说明会产生什么影响。（每个 2 分，共 6 分）

b) 写出完整修正后的方法。（2 分）

作答：

### 4. 编写带返回值的函数（6 分，约 7 分钟）

**Entwickeln Sie die Funktion `prioritaet(stunden, kritisch)`.**

规则按以下顺序判断：

1. `stunden < 0`：返回 `Ungueltig`。
2. 合法输入中，如果 `kritisch = wahr` 或 `stunden >= 24`：返回 `Hoch`。
3. 其余情况中，如果 `stunden >= 8`：返回 `Mittel`。
4. 其余：返回 `Normal`。

写伪代码或你熟悉的语言。返回一个字符串即可，不需要输入界面。（输入检查 2 分；优先级判断 3 分；返回值完整 1 分）

作答：

### 5. 数组统计（6 分，约 8 分钟）

**Entwickeln Sie einen Algorithmus zur Auswertung der Bearbeitungszeiten.**

数组 `zeiten` 存储报修处理时长，单位为分钟。所有值非负，数组保证至少有一个元素。

要求遍历数组并计算：

- 全部处理时间的总和；
- 最大处理时间；
- 严格大于 60 分钟的记录数量。

写完整算法，不使用语言自带的求和或最大值函数。最后输出三个结果。（初始化 2 分；遍历与三项统计 3 分；输出 1 分）

作答：

### 6. 把规则转换为结构图（6 分，约 7 分钟）

**Erstellen Sie ein Struktogramm für die Bestellprüfung.**

仓库某种配件的当前库存为 `bestand`，最低库存为 `mindestbestand`。两者均为非负整数。

- 当前库存严格小于最低库存时，订购数量为 `mindestbestand - bestand + 5`，输出订购数量。
- 否则输出 `Keine Bestellung erforderlich`。

画出一个 Struktogramm，包含判断、两个分支及相应指令。（条件 2 分；分支逻辑 3 分；结构清晰 1 分）

先实际画图；如果发文字答案，可以用清晰缩进表达，并注明你认为各块的位置。

作答：

### 7. 设计边界测试（4 分，约 5 分钟）

**Geben Sie vier geeignete Testfälle mit erwarteten Ergebnissen an.**

使用题 4 的需求。令 `kritisch = falsch`，为 `stunden` 的 8 和 24 两个判断边界各设计两组测试：边界值，以及刚低于边界的整数值。

|测试编号|stunden|kritisch|预期返回值|
|---|---|---|---|
|1||falsch||
|2||falsch||
|3||falsch||
|4||falsch||

每组输入与预期结果均正确得 1 分。

## B. 数据库与 SQL（60 分）

题 8—15 均使用下列三张表。表中没有省略的数据。除 `bearbeiter` 外，所有字段都不允许 NULL。

### Anlage 1：Mitarbeiter（员工）

|mitarbeiter_id|name|abteilung|
|---|---|---|
|1|Anna|IT|
|2|Ben|Vertrieb|
|3|Cem|IT|
|4|Dora|Personal|

### Anlage 2：Geraet（设备）

|geraet_id|bezeichnung|ram_gb|preis|mitarbeiter_id|
|---|---|---|---|---|
|101|Notebook A|16|850.00|1|
|102|Notebook B|8|600.00|2|
|103|Desktop C|32|1200.00|3|
|104|Notebook D|16|950.00|1|
|105|Desktop E|8|500.00|4|

### Anlage 3：Ticket（报修单）

|ticket_id|geraet_id|status|dauer_min|erstellt_am|bearbeiter|
|---|---|---|---|---|---|
|201|101|offen|0|2026-10-01|NULL|
|202|101|geschlossen|45|2026-10-02|Anna|
|203|103|geschlossen|90|2026-10-03|Cem|
|204|104|offen|0|2026-10-04|NULL|
|205|102|geschlossen|30|2026-10-04|Anna|
|206|103|geschlossen|60|2026-10-05|Cem|

业务规则：每台设备恰好分配给一名员工；员工可以没有设备，也可以有多台设备。每个 Ticket 恰好对应一台设备；设备可以没有 Ticket，也可以有多个 Ticket。当前模型的 `bearbeiter` 只是可为空的姓名文本，不是外键。

### 8. 表结构与关系（8 分，约 7 分钟）

**Bestimmen Sie Schlüssel, Datentypen und Beziehungen.**

a) 列出三张表各自的主键。（3 分）

b) 列出两个外键及各自引用的表和字段。（2 分）

c) 说明 Mitarbeiter 与 Geraet 的关系，以及 Geraet 与 Ticket 的关系。标明“一端”和“多端”。（2 分）

d) 为 `preis` 选择适合精确保存欧元金额的数据类型。（1 分）

作答：

### 9. 单表查询（4 分，约 4 分钟）

**Erstellen Sie eine SQL-Abfrage für alle Geräte mit mindestens 16 GB RAM.**

只显示 `bezeichnung`、`ram_gb`，按 `ram_gb` 降序，同样 RAM 的设备按 `geraet_id` 升序。

写 SQL。（字段 1 分；筛选 1 分；两项排序 2 分）

作答：

### 10. 多条件筛选（6 分，约 5 分钟）

**Ermitteln Sie alle Notebooks mit einem Preis von höchstens 900 Euro.**

Notebook 定义为 `bezeichnung` 以 `Notebook` 开头的设备。

a) 写 SQL，输出 `geraet_id`、`bezeichnung`、`preis`。（4 分）

b) 不运行 SQL，写出结果中的设备编号。（2 分）

作答：

### 11. 两表连接（6 分，约 5 分钟）

**Zeigen Sie alle Geräte, die Beschäftigten der Abteilung IT zugeordnet sind.**

输出设备名称、员工姓名，按设备编号升序。必须使用显式 `JOIN ... ON ...`。

写 SQL。（连接 3 分；字段 1 分；IT 筛选 1 分；排序 1 分）

作答：

### 12. 分组统计（8 分，约 6 分钟）

**Ermitteln Sie die Anzahl und die gesamte Bearbeitungszeit der geschlossenen Tickets je Gerät.**

只统计 `status = 'geschlossen'` 的 Ticket。输出 `geraet_id`、数量 `anzahl_tickets`、总时长 `gesamt_min`，按 `geraet_id` 升序。不需要显示没有已关闭 Ticket 的设备。

a) 写 SQL。（筛选 1 分；两项聚合及别名 2 分；分组 2 分；排序 1 分，共 6 分）

b) 写出设备 103 对应的数量与总时长。（2 分）

作答：

### 13. 对分组结果筛选（8 分，约 6 分钟）

**Zeigen Sie nur Geräte mit mindestens zwei geschlossenen Tickets.**

a) 写 SQL，输出 `geraet_id` 和已关闭 Ticket 数量 `anzahl_tickets`。（状态筛选 1 分；字段和聚合 2 分；分组 1 分；分组筛选 2 分，共 6 分）

b) 用一两句解释，行级状态筛选与分组数量筛选为什么放在不同位置。中文或德语均可。（2 分）

作答：

### 14. 修改数据（8 分，约 7 分钟）

**Formulieren Sie die SQL-Anweisungen.**

以下三问各自从原始表开始，不互相影响。只写语句，不修改真实业务数据库。

a) 添加设备 106：`Notebook F`，RAM 16 GB，价格 780.00 欧元，分配给员工 2。INSERT 必须显式列出字段名。（3 分）

b) 将 Ticket 201 改为 `geschlossen`，时长改为 25，处理人改为 `Anna`。只能修改此 Ticket。（3 分）

c) 删除 Ticket 205。只能删除此 Ticket。（2 分）

作答：

### 15. 缺失值与零数量（6 分，约 6 分钟）

**Berücksichtigen Sie NULL-Werte und Geräte ohne Tickets.**

a) 找出尚未分配处理人的 Ticket，输出 `ticket_id`。写 SQL。（2 分）

b) 输出每台设备的编号及 Ticket 数量 `anzahl_tickets`。包括没有 Ticket 的设备，这种设备数量显示为 0。按设备编号升序。使用 `LEFT JOIN`。（连接 2 分；计数与分组 2 分，共 4 分）

作答：

### 16. 从业务需求设计关联表（6 分，约 7 分钟）

**Überführen Sie die neue Anforderung in ein relationales Datenmodell.**

新增需求：一名员工可以完成多门培训，一门培训也可以由多名员工完成。每名员工对每门培训只记录一次完成情况，并保存完成日期。

`Mitarbeiter` 表已经存在。培训需要记录 `schulung_id` 和 `titel`。

a) 员工与培训之间是什么关系？（1 分）

b) 给出新增两张表的表名、字段及适合的数据类型。（2 分）

c) 标出主键和外键，确保同一员工与同一培训不会出现重复完成记录。（3 分）

可以用表格或简写关系模式作答，不要求 CREATE TABLE。注意：关联表设计是本卷的拓展练习，不表示当期 AP1 必考 m:n。

作答：

## 交卷记录

|题号|用时|独立完成/查语法/不会|卡住的具体位置|
|---|---|---|---|
|1||||
|2||||
|3||||
|4||||
|5||||
|6||||
|7||||
|8||||
|9||||
|10||||
|11||||
|12||||
|13||||
|14||||
|15||||
|16||||

## 资料选择与来源

建议组合：巴登州官方样题理解出题形式 → 本卷按技能练习 → 学校提供的巴登州历年题限时作答。编程先把条件、循环、数组和手工跟踪练熟；SQL 先把主外键与单表查询练熟，再做连接和分组。

- [IHK Stuttgart：IT-Berufe 改革与巴登州官方样题入口](https://www.ihk.de/stuttgart/fuer-unternehmen/fachkraefte-und-ausbildung/ausbildung/novellierung-it-berufe-4729008)。
- [巴登州官方 AP1 样题 PDF](https://www.ihk.de/blueprint/servlet/resource/blob/5417166/d7ddd799d59a82bc262fa9ec50eef6bf/beispielspielaufgabe-pruefungit-bawue-barrierefrei-data.pdf)：任务 3.2 和 3.3 涉及数据库表结构、类型、键和关系。该历史样题可用于理解题型，不应当作当期完整范围清单。
- [IHK-AkA：考试说明](https://www.ihk-aka.de/pruefungen/ap/berufe)：页面明确提醒其考试信息不适用于 Baden-Württemberg，应咨询当地 IHK。因此不要直接把全国版 AP1 目录的变化套用到巴登州。
- 你现有的 `ap1-komplette-uebungen.html`：可以继续用 Java、Pseudocode、Struktogramm 部分。它混有 AP2、GA2 等材料，应按标签筛选；它的说明也明确排除了 SQL，因此不能单独承担本次 SQL 训练。

本文件没有参考答案。完成第一批题后，把答案按 `1a、1b、2a、2b、8a…` 发给我即可。
