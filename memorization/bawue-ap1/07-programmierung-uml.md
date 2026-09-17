# 07 – Programmierung, UML und Testen

## 1. Objektorientierung

**Prüfungsantwort:**

„Eine Klasse beschreibt gemeinsame Attribute und Methoden einer Objektart; ein Objekt ist eine konkrete Instanz dieser Klasse. Kapselung schützt den inneren Zustand und stellt kontrollierte Zugriffe über Methoden bereit. Vererbung ermöglicht die Wiederverwendung gemeinsamer Eigenschaften. Polymorphie erlaubt, unterschiedliche konkrete Objekte über eine gemeinsame Schnittstelle zu verwenden.“

## 2. Vorteile objektorientierter Entwicklung

**Prüfungsantwort:**

„Objektorientierung strukturiert Software in fachlich verständliche, gekapselte Einheiten. Klassen und Komponenten können wiederverwendet, einzeln getestet und leichter geändert werden. Klare Schnittstellen reduzieren Abhängigkeiten. Der Nutzen entsteht jedoch nur bei sinnvoller Modellierung; unnötig tiefe Vererbung erhöht die Komplexität.“

## 3. UML-Klassendiagramm lesen

**Prüfungsantwort:**

„Eine Klasse wird typischerweise mit Name, Attributen und Methoden dargestellt. `+` kennzeichnet public, `-` private und `#` protected. Multiplizitäten wie `1`, `0..1` oder `*` geben die mögliche Anzahl zugeordneter Objekte an. Eine ausgefüllte Raute steht für Komposition mit starker Lebenszyklusabhängigkeit, eine leere Raute für Aggregation.“

## 4. Fehlerarten

**Prüfungsantwort:**

„Ein Syntaxfehler verletzt die Grammatik der Programmiersprache und wird meist beim Übersetzen erkannt. Ein Laufzeitfehler tritt während der Ausführung auf, beispielsweise bei einem ungültigen Zugriff. Ein logischer Fehler lässt das Programm laufen, erzeugt aber ein fachlich falsches Ergebnis. Logische Fehler werden vor allem durch geeignete Testfälle und Soll-Ist-Vergleiche gefunden.“

## 5. Allgemeines Algorithmus-Schema

**Prüfungsantwort:**

„Die Eingabedaten werden zunächst validiert und notwendige Variablen initialisiert. Danach werden die Datensätze in einer Schleife verarbeitet. Bedingungen entscheiden, ob ein Datensatz berücksichtigt oder wie er klassifiziert wird. Ergebnisse werden gesammelt und nach Abschluss der Schleife in der geforderten Form ausgegeben. Sonderfälle wie leere Eingaben oder ungültige Werte werden ausdrücklich behandelt.“

## 6. Äquivalenzklassen und Grenzwertanalyse

**Prüfungsantwort:**

„Bei der Äquivalenzklassenbildung werden Eingaben mit erwartbar gleichem Verhalten zu gültigen und ungültigen Klassen zusammengefasst; je Klasse wird mindestens ein repräsentativer Wert getestet. Die Grenzwertanalyse prüft Werte direkt an und neben den Grenzen, weil dort besonders häufig Fehler auftreten. Für einen gültigen Bereich 1 bis 100 wären etwa 0, 1, 100 und 101 wichtige Testwerte.“

## 7. Blackbox- und Whitebox-Test

**Prüfungsantwort:**

„Beim Blackbox-Test werden Ein- und Ausgaben anhand der Spezifikation geprüft, ohne den internen Code zu betrachten. Beim Whitebox-Test werden interne Strukturen wie Anweisungen, Zweige und Pfade berücksichtigt. Beide Ansätze ergänzen sich: Der eine prüft fachliches Verhalten, der andere die technische Abdeckung.“

## 8. Saubere Fehlerbehandlung

**Prüfungsantwort:**

„Erwartbare Fehler werden gezielt erkannt und mit einer verständlichen Meldung behandelt. Technische Details und vertrauliche Daten gehören nicht in Benutzermeldungen, können aber geschützt protokolliert werden. Ressourcen werden auch im Fehlerfall freigegeben. Fehler dürfen nicht stillschweigend ignoriert werden, da dies Diagnose und Datenkonsistenz gefährdet.“

## 9. Versionsverwaltung

**Prüfungsantwort:**

„Versionsverwaltung dokumentiert Änderungen nachvollziehbar, ermöglicht parallele Entwicklung und erlaubt die Wiederherstellung früherer Stände. Kleine, inhaltlich geschlossene Commits mit aussagekräftiger Nachricht erleichtern Review und Fehlersuche. Branches trennen Änderungen, bevor sie nach Prüfung zusammengeführt werden.“

