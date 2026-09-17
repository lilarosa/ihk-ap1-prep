# 03 – Datenbanken, SQL und Datenformate

## 1. Grundmuster für SELECT

```sql
SELECT spalte1, spalte2
FROM tabelle
WHERE bedingung
ORDER BY spalte1 ASC;
```

**Prüfungssatz:** „`SELECT` bestimmt die auszugebenden Spalten, `FROM` die Datenquelle, `WHERE` filtert Datensätze und `ORDER BY` sortiert das Ergebnis.“

## 2. Filtern ohne typische Fehler

```sql
WHERE status = 'offen'
  AND datum >= '2026-01-01'
  AND kommentar IS NOT NULL
```

**Merke:** Texte in einfache Anführungszeichen; für `NULL` immer `IS NULL` bzw. `IS NOT NULL`, nicht `= NULL`.

## 3. Aggregation

```sql
SELECT kunde_id, COUNT(*) AS anzahl
FROM auftrag
GROUP BY kunde_id
HAVING COUNT(*) >= 2;
```

**Prüfungsantwort:**

„`COUNT`, `SUM`, `AVG`, `MIN` und `MAX` sind Aggregatfunktionen. `GROUP BY` bildet Gruppen gleicher Werte. `WHERE` filtert Zeilen vor der Gruppierung, `HAVING` filtert das bereits gruppierte Ergebnis.“

## 4. Daten einfügen, ändern und löschen

```sql
INSERT INTO geraet (inventar_nr, typ)
VALUES ('NB-101', 'Notebook');

UPDATE geraet
SET status = 'ausgegeben'
WHERE inventar_nr = 'NB-101';

DELETE FROM geraet
WHERE inventar_nr = 'NB-101';
```

**Prüfungshinweis:** Bei `UPDATE` und `DELETE` die `WHERE`-Bedingung ausdrücklich prüfen, sonst können alle Datensätze betroffen sein.

## 5. Primär- und Fremdschlüssel

**Prüfungsantwort:**

„Ein Primärschlüssel identifiziert jeden Datensatz einer Tabelle eindeutig und darf nicht doppelt oder `NULL` sein. Ein Fremdschlüssel verweist auf den Primärschlüssel einer anderen oder derselben Tabelle. Er bildet Beziehungen ab und ermöglicht referenzielle Integrität, sodass keine ungültigen Verweise entstehen.“

**中文记忆:** 主键找自己，外键找别人。

## 6. 1:n-Beziehung

**Prüfungsantwort:**

„Bei einer 1:n-Beziehung kann ein Datensatz der ersten Tabelle mehreren Datensätzen der zweiten Tabelle zugeordnet sein, jeder Datensatz der zweiten Tabelle jedoch nur einem der ersten. Der Fremdschlüssel der 1-Seite wird deshalb in der Tabelle auf der n-Seite gespeichert, zum Beispiel `kunde_id` in `auftrag`.“

## 7. n:m-Beziehung

**Prüfungsantwort:**

„Eine n:m-Beziehung wird durch eine Zwischentabelle in zwei 1:n-Beziehungen aufgelöst. Die Zwischentabelle enthält die Fremdschlüssel beider Entitäten, häufig gemeinsam als zusammengesetzten Primärschlüssel. Zusätzliche Beziehungsattribute, etwa Menge oder Datum, werden ebenfalls dort gespeichert.“

## 8. JOIN erklären

```sql
SELECT k.name, a.auftrags_nr
FROM kunde k
JOIN auftrag a ON a.kunde_id = k.kunde_id;
```

**Prüfungsantwort:**

„Ein `INNER JOIN` liefert nur Datensätze, für die auf beiden Seiten eine passende Verknüpfung existiert. Ein `LEFT JOIN` liefert alle Datensätze der linken Tabelle und ergänzt passende Werte der rechten Tabelle; fehlt eine Zuordnung, stehen dort `NULL`-Werte.“

## 9. Redundanz und Anomalien

**Prüfungsantwort:**

„Redundante Speicherung derselben Information erhöht Speicher- und Pflegeaufwand und kann zu widersprüchlichen Daten führen. Typische Folgen sind Änderungs-, Einfüge- und Löschanomalien. Durch sinnvolle Zerlegung in verbundene Tabellen und die Verwendung von Schlüsseln werden diese Probleme reduziert.“

## 10. CSV, JSON und XML

**Prüfungsantwort:**

„CSV ist einfach und kompakt für tabellarische Daten, bildet jedoch Hierarchien und Datentypen nur eingeschränkt ab. JSON ist gut lesbar, weit verbreitet in Web-APIs und unterstützt verschachtelte Objekte und Arrays. XML ist ausführlicher, unterstützt Attribute, Namensräume und strenge Schema-Validierung, erzeugt jedoch mehr Datenvolumen.“

## 11. Datenvalidierung

**Prüfungsantwort:**

„Eingaben müssen serverseitig auf Datentyp, Wertebereich, Pflichtfelder, Länge und erlaubtes Format geprüft werden. Parametrisierte Abfragen verhindern, dass Eingaben als SQL-Code interpretiert werden. Datenbank-Constraints wie `NOT NULL`, `UNIQUE` und Fremdschlüssel sichern Regeln zusätzlich auf Datenbankebene.“

