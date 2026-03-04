# SQL Cheatsheet - Day 02 (UPDATE / DELETE)

## DE: Kernpunkte
- `UPDATE` aendert bestehende Daten.
- `DELETE` entfernt Zeilen dauerhaft.
- Immer mit `WHERE` arbeiten, sonst sind alle Zeilen betroffen.

## DE: Beispiele
```sql
UPDATE students SET age = 18 WHERE name = 'Ben';
DELETE FROM students WHERE name = 'David';
```

## DE: Sicherheitsregel
Vor `UPDATE`/`DELETE` zuerst mit `SELECT` pruefen:
```sql
SELECT * FROM students WHERE city = 'Hamburg' AND age >= 21;
```

## EN: Quick recap
- `UPDATE` modifies rows.
- `DELETE` removes rows permanently.
- Always validate conditions with `SELECT` before changing data.
