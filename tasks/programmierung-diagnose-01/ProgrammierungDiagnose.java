public class ProgrammierungDiagnose {
    static boolean geeignet(int ram, int frei) {
        return ram >= 16 && frei >= 100;
    }

    static int[] auswertung(int[] zahlen) {
        int summe = 0;
        int anzahl = 0;
        for (int i = 0; i < zahlen.length; i++) {
            if (zahlen[i] >= 10) {
                summe = summe + zahlen[i];
                anzahl = anzahl + 1;
            }
        }
        return new int[] {summe, anzahl};
    }

    static int zaehleLangeTickets(int[] zeiten) {
        int anzahl = 0;
        for (int i = 0; i < zeiten.length; i++) {
            if (zeiten[i] > 60) {
                anzahl++;
            }
        }
        return anzahl;
    }

    static boolean vorhanden(String[] artikel, String gesucht) {
        for (int i = 0; i < artikel.length; i++) {
            if (artikel[i].equals(gesucht)) {
                return true;
            }
        }
        return false;
    }

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

    private static int checks = 0;

    private static void pruefe(boolean korrekt, String beschreibung) {
        if (!korrekt) {
            throw new AssertionError(beschreibung);
        }
        checks++;
    }

    public static void main(String[] args) {
        pruefe(!geeignet(16, 80), "1: Speicher reicht nicht");
        pruefe(!geeignet(8, 200), "1: RAM reicht nicht");
        pruefe(geeignet(16, 100), "1: beide Grenzwerte erfuellt");

        int[] ergebnis = auswertung(new int[] {5, 12, 8, 20});
        pruefe(ergebnis[0] == 32 && ergebnis[1] == 2, "2: Summe und Anzahl");
        int[] grenze = auswertung(new int[] {9, 10});
        pruefe(grenze[0] == 10 && grenze[1] == 1, "2: genau 10 wird gezaehlt");

        pruefe(zaehleLangeTickets(new int[] {30, 60, 75, 120}) == 2, "3: normale Daten");
        pruefe(zaehleLangeTickets(new int[0]) == 0, "3: leeres Array");
        pruefe(zaehleLangeTickets(new int[] {60, 61}) == 1, "3: Grenze 60/61");

        String[] artikel = {"A10", "A20", "A30"};
        pruefe(vorhanden(artikel, new String("A10")), "4: erster Treffer und Stringinhalt");
        pruefe(vorhanden(artikel, "A20"), "4: mittlerer Treffer");
        pruefe(vorhanden(artikel, "A30"), "4: letzter Treffer");
        pruefe(!vorhanden(artikel, "A99"), "4: kein Treffer");
        pruefe(!vorhanden(new String[0], "A10"), "4: leeres Array");

        pruefe(durchschnitt(new int[] {10, 15, 20, 25}) == 17.5, "5: Kommaergebnis");
        pruefe(durchschnitt(new int[0]) == 0.0, "5: leeres Array");
        pruefe(durchschnitt(new int[] {7}) == 7.0, "5: ein Wert");
        pruefe(durchschnitt(new int[] {Integer.MAX_VALUE, Integer.MAX_VALUE})
                == Integer.MAX_VALUE, "5: Summe ohne int-Ueberlauf");

        String[] zeilen = {
            "A10;Tastatur;29.90", "A20;Monitor;NULL",
            "A30;Maus;", "A20;Monitor;199.00"
        };
        pruefe(!hatFehlendenPreis(zeilen, "A10"), "6: vorhandener Preis");
        pruefe(hatFehlendenPreis(zeilen, "A20"), "6: Text NULL");
        pruefe(hatFehlendenPreis(zeilen, "A30"), "6: leeres Endfeld");
        pruefe(!hatFehlendenPreis(zeilen, "A99"), "6: unbekannter Artikel");
        pruefe(!hatFehlendenPreis(new String[0], "A10"), "6: keine Zeilen");
        pruefe(!hatFehlendenPreis(new String[] {"A10;Gratisartikel;0"}, "A10"),
                "6: Preis null Euro ist vorhanden");
        pruefe(hatFehlendenPreis(new String[] {"A20;Monitor;199", "A20;Monitor;"}, "A20"),
                "6: spaeterer fehlender Preis muss erkannt werden");
        pruefe(!hatFehlendenPreis(new String[] {"A99;Monitor;NULL"}, "A10"),
                "6: fremder Artikel darf nicht ausloesen");

        System.out.println("Alle " + checks + " Selbstpruefungen bestanden.");
        System.out.println("Aufgabe 2: Summe " + ergebnis[0] + ", Anzahl " + ergebnis[1]);
        System.out.println("Aufgabe 5: Durchschnitt " + durchschnitt(new int[] {10, 15, 20, 25}));
    }
}
