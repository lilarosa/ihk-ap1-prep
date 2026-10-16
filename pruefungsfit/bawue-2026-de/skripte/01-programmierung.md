# Programmierung, Algorithmen und Tests

Mündliche Kurzfragen mit Musterantworten. Die vollständigen schriftlichen Aufgaben stehen im Aufgabenheft. Nach der Frage folgen im Audio vier Sekunden Denkpause.

## 01.01 Lineare Suche mit Rückgabewert

Frage: Wie suchen Sie in einem Array nach einer Seriennummer und geben einen Wahrheitswert zurück?

Musterantwort: Ich durchlaufe alle Einträge und vergleiche jeden Eintrag mit dem Suchwert. Bei einem Treffer gebe ich sofort wahr zurück. Nur wenn die gesamte Suche ohne Treffer endet, gebe ich falsch zurück. Diese letzte Rückgabe steht außerhalb der Schleife. Dadurch funktioniert auch das leere Array korrekt.

## 01.02 Durchschnitt: drei typische Fehler

Frage: Welche Fehler müssen Sie bei einer Durchschnittsberechnung mit Schleife besonders prüfen?

Musterantwort: Erstens muss der Index kleiner als die Arraylänge sein, weil die Zählung bei null beginnt. Zweitens wird jeder Wert zur bisherigen Summe addiert. Drittens muss vor der Division mindestens ein Operand in eine Gleitkommazahl umgewandelt werden. Das leere Array wird vorab abgefangen. Drei, sechs, acht und neun ergeben zusammen sechsundzwanzig; geteilt durch vier ergibt das sechs Komma fünf.

## 01.03 Schreibtischtest

Frage: Beim Handtest werden sieben, vierzehn, zwanzig und fünf geprüft. Nur Werte ab zehn zählen. Was sind Summe und Anzahl?

Musterantwort: Sieben wird übersprungen. Vierzehn erhöht die Summe auf vierzehn und die Anzahl auf eins. Zwanzig erhöht die Summe auf vierunddreißig und die Anzahl auf zwei. Fünf wird übersprungen. Das Ergebnis lautet vierunddreißig und zwei. Ein Schreibtischtest zeigt den Variablenzustand nach jeder Schleifenrunde.

## 01.04 CSV: fehlenden Preis erkennen

Frage: Wie erkennen Sie für eine gesuchte Artikelnummer einen fehlenden Preis in einer einfachen CSV-Datei?

Musterantwort: Ich teile jede Zeile am Semikolon und erhalte leere Endfelder. Danach entferne ich Rand-Leerzeichen. Nur bei passender Artikelnummer prüfe ich, ob das Preisfeld leer ist oder das Wort null enthält. In diesen Fällen gebe ich wahr zurück. Die Zeichenfolge null bezeichnet hier einen CSV-Inhalt, nicht automatisch den Datenbankwert. Ein Preis von null Euro ist vorhanden. Ohne passenden Fehler folgt falsch nach der Schleife.

## 01.05 Loginlogik ohne vorzeitige Fehlerrückgabe

Frage: Warum darf eine Benutzersuche beim ersten anderen Namen noch nicht falsch zurückgeben?

Musterantwort: Der gesuchte Benutzer kann an einer späteren Position stehen. Deshalb wird nur bei einem passenden Namen entschieden. Bei einem Treffer wird dessen Aktivstatus zurückgegeben. Erst nach einer vollständig erfolglosen Suche folgt falsch. Sichere Anmeldung benötigt zusätzlich eine geeignete Authentifizierung; diese vereinfachte Aufgabe prüft die Suchlogik.

## 01.06 Älteste Dateien mit minimaler Löschanzahl

Frage: Warum reicht es bei einem Ziel strikt unter siebenhundert Megabyte nicht, genau siebenhundert übrig zu lassen?

Musterantwort: Strikt kleiner schließt den Grenzwert aus. Bei tausend Megabyte lösche ich zuerst einhundertzwanzig, dann einhundertachtzig. Jetzt bleiben genau siebenhundert. Deshalb muss auch die nächste älteste Datei mit zweihundertfünfzig Megabyte weg. Vierhundertfünfzig bleiben. Die Schleife läuft, solange die Gesamtgröße mindestens dem Grenzwert entspricht.

## 01.07 Tarif in ein Struktogramm übersetzen

Frage: Wie setzen Sie eine gestaffelte Preisregel mit zulässiger Höchstentfernung um?

Musterantwort: Zuerst prüfe ich ungültige Entfernungen. Weniger als null oder mehr als vierzig Kilometer führen zu minus eins. Danach wähle ich den Grundpreis: bis einschließlich zehn Kilometer zwanzig Euro, darüber fünfunddreißig. Dazu kommen sechzig Cent je Kilometer. Für zehn Kilometer sind es sechsundzwanzig Euro, für elf Kilometer einundvierzig Euro sechzig.

## 01.08 Grenzwerttest und Fehlerarten

Frage: Welche Testfälle decken die Grenzen des Servicepreises ab, und welche Fehlerarten unterscheiden Sie?

Musterantwort: Ich teste direkt an und neben den Grenzen: minus eins und null, zehn und elf, vierzig und einundvierzig Kilometer. Eine fehlende Klammer ist ein Syntaxfehler. Ein ungültiger Arrayindex erzeugt bei Ausführung einen Laufzeitfehler. Ein falscher Vergleich ist ein logischer Fehler: Das Programm kann laufen, liefert aber für bestimmte Eingaben falsche Ergebnisse.
