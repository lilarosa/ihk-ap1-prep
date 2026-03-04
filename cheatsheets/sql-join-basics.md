# SQL Cheatsheet - JOIN Basics

## DE: INNER JOIN
Nur Datensaetze mit passender Beziehung in beiden Tabellen.

```sql
SELECT s.name, c.class_name
FROM students s
INNER JOIN classes c ON s.class_id = c.class_id;
```

## DE: LEFT JOIN
Alle Zeilen aus linker Tabelle (`students`) bleiben erhalten.
Wenn rechts nichts passt, sind rechte Spalten `NULL`.

```sql
SELECT s.name
FROM students s
LEFT JOIN classes c ON s.class_id = c.class_id
WHERE c.class_id IS NULL;
```

## DE: GROUP BY + COUNT
Nach Kategorie gruppieren und Anzahl berechnen.

```sql
SELECT c.class_name, COUNT(*) AS student_count
FROM students s
INNER JOIN classes c ON s.class_id = c.class_id
GROUP BY c.class_name;
```

## EN: Quick recap
- `INNER JOIN`: only matching rows.
- `LEFT JOIN`: keep all rows from left table.
- `GROUP BY` + `COUNT(*)`: count rows per group.
