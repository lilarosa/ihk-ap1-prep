# SQL Cheatsheet - Day 01 (SELECT Basics)

## DE: Heute gelernt
- `SELECT *` zeigt alle Spalten.
- `SELECT name, city` zeigt nur bestimmte Spalten.
- `WHERE` filtert Zeilen nach Bedingungen.
- `ORDER BY age DESC` sortiert absteigend.
- Mehrere Bedingungen mit `AND` verbinden.

## Typische Fehler (heute)
1. String ohne Hochkomma
- Falsch: `city = Hamburg`
- Richtig: `city = 'Hamburg'`

2. Zwei Bedingungen ohne `AND`
- Falsch: `city='Hamburg' age>=18`
- Richtig: `city='Hamburg' AND age>=18`

3. Nur einzelne Spalte statt ganze Zeile abgefragt
- Je nach Aufgabe besser `SELECT *` nutzen, wenn komplette Datensaetze erwartet sind.

## EN: Quick recap
- Use quotes for text values.
- Use `AND` for multiple conditions.
- Use `SELECT *` when full rows are required.
