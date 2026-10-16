# Rechnen, Hardware und Verfügbarkeit

Mündliche Kurzfragen mit Musterantworten. Die vollständigen schriftlichen Aufgaben stehen im Aufgabenheft. Nach der Frage folgen im Audio vier Sekunden Denkpause.

## 05.01 SLA-Verfügbarkeit prüfen

Frage: Wie berechnen Sie erlaubte Ausfallzeit und unterscheiden sie von der Entstörzeit?

Musterantwort: Ich multipliziere die Gesamtzeit mit eins minus der Verfügbarkeit als Dezimalzahl. Bei neunundneunzig Komma acht Prozent und achttausendsiebenhundertsechzig Jahresstunden sind siebzehn Komma zweiundfünfzig Stunden Ausfall zulässig. Zwanzig Stunden verletzen diese Vorgabe. Eine zusätzliche Entstörgrenze je Vorfall wird unabhängig davon geprüft: Sieben Stunden sind mehr als erlaubte sechs.

## 05.02 RAID-Kapazität und Ausfalltoleranz

Frage: Wie viel Kapazität liefern acht Platten mit jeweils zwölf Terabyte in RAID fünf und RAID zehn?

Musterantwort: RAID fünf nutzt die Kapazität von sieben Platten: vierundachtzig Terabyte. RAID zehn spiegelt und nutzt die Hälfte: achtundvierzig Terabyte. RAID fünf toleriert einen Laufwerksausfall. RAID zehn kann mehrere Ausfälle tolerieren, solange in keinem Spiegelpaar beide Platten ausfallen. Die Aussage, RAID zehn vertrage beliebige vier Ausfälle, wäre deshalb falsch.

## 05.03 Energiekosten berechnen

Frage: Wie berechnen Sie Stromkosten, ohne Watt und Kilowattstunden zu verwechseln?

Musterantwort: Ich teile Watt durch tausend, multipliziere die Leistung in Kilowatt mit den Betriebsstunden und erhalte Kilowattstunden. Anschließend multipliziere ich mit dem Strompreis. Die zwölf Arbeitsplätze brauchen eintausendachthundertvierzehn Komma vier Kilowattstunden, der Server eintausendfünfhundertsechsundsiebzig Komma acht. Aus den ungerundeten Werten ergeben sich insgesamt eintausendfünfundachtzig Euro achtzehn.

## 05.04 PoE und Stromstärke

Frage: Was prüfen Sie bei der Stromversorgung eines Access Points über das Netzwerkkabel?

Musterantwort: Die Leistung am Endgerät muss ausreichen. Für einundzwanzig Watt reicht ein Port mit zwölf Komma fünfundneunzig Watt nicht; der Port mit fünfundzwanzig Komma fünf Watt passt. Mit Leistung durch Spannung erhalte ich null Komma vier drei sieben fünf Ampere oder vierhundertsiebenunddreißig Komma fünf Milliampere. Bei vielen Geräten prüfe ich zusätzlich das gesamte PoE-Budget des Switches.

## 05.05 Video-Datenrate und Kompression

Frage: Was ist bei komprimierter Videodatenrate die häufigste Prozentfalle?

Musterantwort: Ich multipliziere Pixelanzahl, Farbtiefe und Bilder pro Sekunde. Das ergibt hier fünfhundertzweiundfünfzig Komma neun sechs Megabit pro Sekunde. Auf zwanzig Prozent bedeutet mal null Komma zwei: einhundertzehn Komma fünf neun zwei Megabit pro Sekunde. Um zwanzig Prozent reduziert bedeutet dagegen, dass achtzig Prozent übrig bleiben.

## 05.06 Speicher aus Bitrate berechnen

Frage: Wie rechnen Sie von einer laufenden Datenrate auf Speicherbedarf?

Musterantwort: Ich addiere die Datenraten aller Kameras, multipliziere mit der Zeit in Sekunden und teile die Bitmenge durch acht. Erst danach rechne ich Byte in die verlangte Einheit um. Sechs Kameras mit je acht Megabit pro Sekunde brauchen in achtundvierzig Stunden eintausendsechsunddreißig Komma acht dezimale Gigabyte, also ungefähr neunhundertfünfundsechzig Komma sechs Gibibyte. Für den Betrieb werden Reserven benötigt.

## 05.07 Schnittstellen und kompatible Hardware

Frage: Warum reicht eine USB-C-Buchse als Nachweis für zwei Monitore und Laden nicht aus?

Musterantwort: Die Form sagt noch nicht, welche Funktionen unterstützt werden. Ich prüfe die Bildausgabetechnik, die gleichzeitig möglichen Auflösungen und Bildraten, die Ladeleistung und die Daten- beziehungsweise Netzwerkfunktionen. Notebook, Dock und Kabel müssen zusammenpassen. Erst die Datenblätter der gesamten Verbindung belegen, ob der gewünschte Arbeitsplatz funktioniert.

## 05.08 Verfügbarkeit über RAID hinaus

Frage: Welche Maßnahmen erhöhen Verfügbarkeit zusätzlich zu RAID und Backup?

Musterantwort: Eine USV überbrückt kurze Stromunterbrechungen und ermöglicht geordnetes Herunterfahren. Redundante Netzteile reduzieren einen einzelnen Netzteilfehler. Ein geeignetes Failover kann einen ausgefallenen Host ersetzen. Monitoring mit Alarmierung verkürzt die Zeit bis zur Reaktion. Jede Maßnahme braucht eine konkrete Begründung; eine USV liefert keinen unbegrenzten Strom.
