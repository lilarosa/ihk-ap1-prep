# Programmierung: Musterlösungen zu Diagnoseblatt 01

Erst nach dem eigenen Versuch lesen. Gleichwertige fachlich richtige Lösungen sind ebenfalls möglich.

## 1. Bedingungen verstehen

a) `Nicht geeignet`.

`16 >= 16` ist wahr, aber `80 >= 100` ist falsch. Bei `&&` müssen beide Bedingungen wahr sein.

b) Ebenfalls `Nicht geeignet`.

`8 >= 16` ist falsch, auch wenn `200 >= 100` wahr ist.

c) `||` verlangt nur mindestens eine wahre Teilbedingung. Dann würden beide Geräte fälschlich akzeptiert, obwohl jeweils eine Muss-Anforderung fehlt.

**德语答题句：** „Die Anforderung verlangt, dass beide Kriterien gleichzeitig erfüllt sind. Der ODER-Operator würde bereits ein einziges erfülltes Kriterium ausreichen lassen.“

**记住：** `&&` 是同时满足，`||` 是至少满足一个，`>=` 包含边界。

## 2. Schreibtischtest

|i|zahlen[i]|Bedingung|summe nach der Runde|anzahl nach der Runde|
|---|---|---|---|---|
|0|5|falsch|0|0|
|1|12|wahr|12|1|
|2|8|falsch|12|1|
|3|20|wahr|32|2|

Ausgabe:

```text
32
2
```

**Beschreibung:** „Der Algorithmus berechnet die Summe und die Anzahl aller Arraywerte, die mindestens 10 betragen.“

`summe = summe + zahlen[i]` nimmt den bisherigen Wert und addiert den aktuellen Arraywert. `anzahl = anzahl + 1` zählt einen passenden Eintrag, nicht dessen Zahlenwert. Bei nicht erfüllter Bedingung bleiben beide Variablen unverändert.

**容易错的地方：** 第三轮遇到 8 时，`summe` 不会变成 0，也不会变成 8，而是保留 12。变量只有在对应赋值语句执行时才改变。

## 3. Code ergänzen

Lücken: `0`, `zeiten.length`, `>`, `anzahl++` (alternativ `anzahl = anzahl + 1`).

```java
static int zaehleLangeTickets(int[] zeiten) {
    int anzahl = 0;

    for (int i = 0; i < zeiten.length; i++) {
        if (zeiten[i] > 60) {
            anzahl++;
        }
    }

    return anzahl;
}
```

b) Ergebnis: `2`. Nur 75 und 120 sind größer als 60. Genau 60 wird nicht gezählt.

c) Leeres Array: `0`. Die Schleife wird kein einziges Mal ausgeführt, der Anfangswert bleibt erhalten.

**为什么是 `< zeiten.length`？** 四个元素的下标是 0、1、2、3。`length` 是 4，不是最后一个下标；使用 `<=` 会尝试访问不存在的下标 4。

## 4. Logischen Fehler finden

a) Tatsächliches Ergebnis: `false`.

b) Schon bei `i = 0` ist `"A10".equals("A30")` falsch. Deshalb wird im `else` sofort `return false` ausgeführt. Die ganze Methode endet; `A20` und `A30` werden nicht mehr geprüft.

c) Korrektur:

```java
static boolean vorhanden(String[] artikel, String gesucht) {
    for (int i = 0; i < artikel.length; i++) {
        if (artikel[i].equals(gesucht)) {
            return true;
        }
    }

    return false;
}
```

**德语答题句：** „Die Rückgabe false steht innerhalb der Schleife und beendet die Suche bereits beim ersten nicht passenden Eintrag. Sie muss nach die Schleife verschoben werden.“

**为什么 `true` 能提前返回？** 题目只问“是否存在”。找到一个就足够证明存在。但一个元素不匹配，不能证明后面的元素都不匹配。

In Java vergleicht `.equals()` den Stringinhalt. `==` prüft bei Objektreferenzen, ob dieselbe Referenz vorliegt; für den gesuchten Inhaltsvergleich ist es nicht geeignet.

## 5. Eine Methode entwickeln

**Ablauf:** Leeres Array behandeln, Summe initialisieren, alle Zeiten addieren, durch die Anzahl teilen und Gleitkommaergebnis zurückgeben.

```java
static double durchschnitt(int[] zeiten) {
    if (zeiten.length == 0) {
        return 0.0;
    }

    long summe = 0;
    for (int i = 0; i < zeiten.length; i++) {
        summe = summe + zeiten[i];
    }

    return (double) summe / zeiten.length;
}
```

Rechnung: `(10 + 15 + 20 + 25) / 4 = 70 / 4 = 17.5`.

**逐步解释：**

1. 空数组没有可以计算的平均值；本题明确要求返回 `0.0`，因此先单独处理。
2. `summe` 保存已经遍历过的数值之和。这里用 `long`，避免多个较大的 `int` 相加时发生 `int` 溢出。
3. 循环结束后才能计算全部数据的平均值。
4. `(double)` 在除法前转换操作数，保留小数。仅把方法返回类型写成 `double`，不能自动修正先发生的整数除法。

Bei angenommenem ausreichend kleinem Wertebereich ist auch ein `int`-Summenzähler mit korrekter Gleitkommadivision eine passende Einstiegslösung.

**德语答题句：** „Vor der Division wird die Summe in double umgewandelt. Dadurch wird eine Gleitkommadivision statt einer Ganzzahldivision durchgeführt.“

## 6. CSV-Daten prüfen

**Ablauf:** Jede Zeile am Semikolon aufteilen. Nur bei passender Artikelnummer das Preisfeld prüfen. Ein leerer Preis oder der Text NULL führt sofort zu true. Gibt es nach allen Zeilen keinen solchen Treffer, folgt false.

```java
static boolean hatFehlendenPreis(String[] zeilen, String gesucht) {
    for (int i = 0; i < zeilen.length; i++) {
        String[] felder = zeilen[i].split(";", -1);

        if (felder[0].equals(gesucht)
                && (felder[2].isEmpty() || felder[2].equals("NULL"))) {
            return true;
        }
    }

    return false;
}
```

|Suchwert|Ergebnis|Begründung|
|---|---|---|
|A10|false|Die einzige passende Zeile enthält 29.90.|
|A20|true|Mindestens eine passende Zeile enthält NULL; die andere gültige Preiszeile ändert das nicht.|
|A30|true|Das Preisfeld ist leer.|
|A99|false|Es gibt keine passende Zeile und damit keinen passenden Preisfehler.|

**关键细节：**

- 下标从 0 开始：`felder[0]` 是编号，`felder[1]` 是名称，`felder[2]` 是价格。
- Java 中 `split(";", -1)` 保留末尾空字段。否则 `A30;Maus;` 的空价格可能被丢掉，访问第 3 个字段就会出错。
- 括号表示：编号匹配，并且“价格为空或价格为 NULL”。不能让无关商品的缺失价格触发结果。
- `"NULL"` 在这里是 CSV 中的文字，不是 Java 的 `null` 引用。价格 `"0"` 也不是空价格。
- 即使先看到某个商品的正常价格，也要继续找后面的对应记录；任何一条对应记录有缺失价格，就返回 `true`。

Diese Lösung gilt für die ausdrücklich vereinfachte, strukturell gültige Datei. Ein allgemeiner CSV-Import benötigt unter anderem geeignete Behandlung von Anführungszeichen, eingebetteten Trennzeichen und fehlerhaften Zeilen.

## Selbstkontrolle

- Habe ich die verlangte Bedingung einschließlich der Grenze umgesetzt?
- Kann ich jede Schleifenrunde mit den aktuellen Variablenwerten erklären?
- Steht `return false` erst dort, wo wirklich feststeht, dass kein Treffer existiert?
- Werden leere Eingaben wie gefordert behandelt?
- Erfolgt eine nötige Gleitkommaumwandlung vor der Division?
- Prüfe ich bei CSV die richtige Spalte und erhalte leere Endfelder?

[Zurück zu den Aufgaben](AUFGABEN.md) · [Java-Lösungen ausführen](ProgrammierungDiagnose.java)
