-- Namen mit M beginnen, nach Kennung aufsteigend
SELECT k_id, name, email FROM Kunde
WHERE name LIKE 'M%' ORDER BY k_id ASC;

-- Ort 2, Namen absteigend
SELECT name FROM Kunde WHERE ort_id = 2 ORDER BY name DESC;

-- Alle Kunden; fehlende E-Mail
SELECT COUNT(*) AS anzahl FROM Kunde;
SELECT k_id, name FROM Kunde WHERE email IS NULL;
-- Nur wenn leerer Text ebenfalls als fehlend gilt:
SELECT k_id, name FROM Kunde WHERE email IS NULL OR email = '';

-- Bildmetadaten: loeschen, summieren, zaehlen, sortieren
DELETE FROM Bild WHERE dateiname = 'probe.jpg';
SELECT SUM(bytes) AS gesamt FROM Bild;
SELECT COUNT(*) AS anzahl FROM Bild;
SELECT * FROM Bild ORDER BY zeitstempel DESC;

INSERT INTO Bild (dateiname, bytes, zeitstempel)
VALUES ('neu.jpg', 120000, 1800000000);
