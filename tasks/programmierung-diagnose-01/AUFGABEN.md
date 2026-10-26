# Programmierung: Diagnoseblatt 01

6 Aufgaben ohne Lösungen. Erst Aufgabe 1 bis 4 bearbeiten, dann 5 und 6.

Eigene Übungen für die Vorbereitung auf AP1 Baden-Württemberg. Keine offiziellen Prüfungsaufgaben. Verwenden Sie Java; bei Aufgaben 5 und 6 ist auch detaillierter Pseudocode möglich. Alle übergebenen Arrays und Zeichenketten sind nicht `null`.

## 1. Bedingungen verstehen

Ein Notebook ist geeignet, wenn es mindestens 16 GB RAM **und** mindestens 100 GB freien Speicher besitzt.

```java
int ram = 16;
int frei = 80;

if (ram >= 16 && frei >= 100) {
    System.out.println("Geeignet");
} else {
    System.out.println("Nicht geeignet");
}
```

a) Welche Ausgabe erscheint?

b) Welche Ausgabe erscheint bei `ram = 8` und `frei = 200`?

c) Ein Kollege ersetzt `&&` durch `||`. Warum entspricht das nicht mehr der Anforderung?

中文要求：写出两次输出，再解释为什么不能把“并且”改成“或者”。

Ihre Antwort:

____________________________________________________________

## 2. Schreibtischtest

Führen Sie den folgenden Algorithmus von Hand aus.

```java
int[] zahlen = {5, 12, 8, 20};
int summe = 0;
int anzahl = 0;

for (int i = 0; i < zahlen.length; i++) {
    if (zahlen[i] >= 10) {
        summe = summe + zahlen[i];
        anzahl = anzahl + 1;
    }
}

System.out.println(summe);
System.out.println(anzahl);
```

a) Ergänzen Sie die Tabelle. Tragen Sie die Werte **nach jeder Schleifenrunde** ein.

|i|zahlen[i]|Bedingung wahr/falsch|summe|anzahl|
|---|---|---|---|---|
|0|5||||
|1|12||||
|2|8||||
|3|20||||

b) Welche beiden Werte werden ausgegeben?

c) Beschreiben Sie in einem Satz, was der Algorithmus ermittelt.

中文要求：每一轮结束后，变量分别是多少？最后用一句话说明程序作用。

Ihre Antwort:

____________________________________________________________

## 3. Code ergänzen

Die Methode soll zählen, wie viele Bearbeitungszeiten **mehr als 60 Minuten** betragen. Ergänzen Sie die vier Lücken.

```java
static int zaehleLangeTickets(int[] zeiten) {
    int anzahl = ______;                  // Lücke 1

    for (int i = 0; i < ______; i++) {    // Lücke 2
        if (zeiten[i] ______ 60) {        // Lücke 3
            ______;                      // Lücke 4
        }
    }

    return anzahl;
}
```

Testdaten: `{30, 60, 75, 120}`.

a) Vervollständigen Sie den Code.

b) Welchen Wert muss die Methode für diese Testdaten zurückgeben?

c) Welches Ergebnis erwarten Sie bei einem leeren Array?

中文提醒：`mehr als 60` 与 `mindestens 60` 不同。

Ihre Antwort:

____________________________________________________________

## 4. Logischen Fehler finden

Die Methode soll prüfen, ob eine Artikelnummer im Array vorhanden ist.

```java
static boolean vorhanden(String[] artikel, String gesucht) {
    for (int i = 0; i < artikel.length; i++) {
        if (artikel[i].equals(gesucht)) {
            return true;
        } else {
            return false;
        }
    }

    return false;
}
```

Aufruf:

```java
String[] artikel = {"A10", "A20", "A30"};
boolean ergebnis = vorhanden(artikel, "A30");
```

a) Welchen Wert liefert der **fehlerhafte** Code tatsächlich?

b) An welcher Stelle endet die Ausführung?

c) Korrigieren Sie die Methode, sodass alle Einträge berücksichtigt werden können.

中文要求：先按错误代码实际执行，再修改。`return` 会结束整个方法。

Ihre Antwort:

____________________________________________________________

## 5. Eine Methode entwickeln

Ein IT-Unternehmen möchte die durchschnittliche Bearbeitungszeit seiner Tickets berechnen.

Entwickeln Sie:

```java
static double durchschnitt(int[] zeiten)
```

Anforderungen:

- Alle Werte des Arrays werden berücksichtigt.
- Das Ergebnis darf Nachkommastellen enthalten.
- Bei einem leeren Array wird `0.0` zurückgegeben.
- Verwenden Sie keine fertige Durchschnittsfunktion.

Testdaten: `{10, 15, 20, 25}`.

a) Schreiben Sie die Methode oder detaillierten Pseudocode.

b) Berechnen Sie das erwartete Ergebnis für die Testdaten.

先用中文写：输入是什么？需要哪些中间变量？循环里做什么？最后返回什么？

Ihre Antwort:

____________________________________________________________

## 6. CSV-Daten prüfen

Eine Datei enthält Artikelinformationen. Jede Zeile hat genau drei Felder:

```text
artikelnummer;bezeichnung;preis
```

Die übergebenen Daten enthalten **keine Kopfzeile**:

```text
A10;Tastatur;29.90
A20;Monitor;NULL
A30;Maus;
A20;Monitor;199.00
```

Entwickeln Sie `hatFehlendenPreis(zeilen, gesucht)`.

Die Methode soll:

- jede Zeile prüfen,
- nur Einträge mit der gesuchten Artikelnummer berücksichtigen,
- `true` zurückgeben, sobald bei einem passenden Eintrag der Preis leer ist oder exakt `"NULL"` enthält,
- andernfalls nach der vollständigen Suche `false` zurückgeben.

Alle Zeilen sind strukturell gültig. Feldinhalte enthalten keine Semikolons oder zusätzlichen Leerzeichen. Beim Aufteilen müssen leere Endfelder erhalten bleiben. Allgemeine CSV-Sonderfälle wie eingebettete Trennzeichen müssen hier nicht unterstützt werden.

a) Schreiben Sie zunächst den Ablauf in eigenen Worten.

b) Schreiben Sie anschließend Pseudocode oder Java.

c) Welche Ergebnisse erwarten Sie für `A10`, `A20`, `A30` und `A99`?

中文说明：同一编号可能出现多次。要判断“是否至少有一条对应记录缺少价格”。

Ihre Antwort:

____________________________________________________________

## Nach der Bearbeitung

|Aufgabe|Zeit|独立完成／不确定／不会|具体卡点|
|---|---|---|---|
|1||||
|2||||
|3||||
|4||||
|5||||
|6||||

[Zur Startseite](README.md) · [Erst danach: Musterlösungen](LOESUNGEN.md)
