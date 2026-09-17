# 04 – IT-Sicherheit und Datenschutz

## 1. Schutzziele CIA

**Prüfungsantwort:**

„Vertraulichkeit bedeutet, dass Informationen nur von Berechtigten gelesen werden können. Integrität stellt sicher, dass Daten vollständig und unbemerkt unverändert bleiben. Verfügbarkeit bedeutet, dass Systeme und Daten bei Bedarf nutzbar sind. Je nach Fall können zusätzlich Authentizität und Nachvollziehbarkeit relevant sein.“

**中文记忆:** C 不泄露，I 不乱改，A 用得上。

## 2. Schutzbedarf begründen

**Typische Frage:** „Bewerten Sie den Schutzbedarf eines Systems.“

**Prüfungsantwort:**

„Der Schutzbedarf ist hoch. Unbefugte dürfen die Daten nicht lesen. Falsche Daten können zu falschen Entscheidungen führen. Ein Ausfall kann wichtige Arbeitsprozesse stoppen. Deshalb sind Zugriffsschutz, Verschlüsselung, Protokollierung und ein getestetes Backup nötig.“

## 3. Technische und organisatorische Maßnahmen (TOM)

**Prüfungsantwort:**

„Technische Maßnahmen sind beispielsweise Mehrfaktor-Authentisierung, Verschlüsselung, Firewall, Patchmanagement, Backup und Protokollierung. Organisatorische Maßnahmen umfassen Berechtigungskonzepte, Vier-Augen-Prinzip, Schulungen, Notfallpläne und geregelte Ein- und Austrittsprozesse. Maßnahmen sind nach Risiko und Schutzbedarf auszuwählen.“

## 4. Ransomware – Prävention und Reaktion

**Prüfungsantwort:**

„Zur Vorbeugung braucht man Updates, wenige Benutzerrechte, E-Mail-Filter, Schulungen und getrennte Netzbereiche. Backups müssen offline oder unveränderbar gespeichert werden. Bei einem Angriff trennt man das Gerät sofort vom Netz und meldet den Vorfall. Danach wird die Ursache geprüft. Das System wird sauber neu installiert und aus einem geprüften Backup wiederhergestellt.“

**Schlüsselwörter:** isolieren, melden, nicht unkontrolliert löschen, Ursache, sauberes Restore, dokumentieren.

## 5. 3-2-1-Regel

**Prüfungsantwort:**

„Die 3-2-1-Regel fordert mindestens drei Datenkopien auf zwei unterschiedlichen Medientypen, davon eine Kopie räumlich getrennt bzw. offline. Dadurch wird vermieden, dass ein einzelner Defekt, Brand oder Ransomware-Angriff alle Kopien gleichzeitig zerstört. Die Wiederherstellung muss regelmäßig getestet werden.“

## 6. Authentisierung und Autorisierung

**Prüfungsantwort:**

„Authentisierung prüft die behauptete Identität eines Benutzers, zum Beispiel durch Passwort und zweiten Faktor. Autorisierung legt nach erfolgreicher Authentisierung fest, auf welche Ressourcen und Funktionen diese Identität zugreifen darf. Nach dem Least-Privilege-Prinzip werden nur die für die Aufgabe notwendigen Rechte vergeben.“

## 7. Symmetrische, asymmetrische und hybride Verschlüsselung

**Prüfungsantwort:**

„Bei symmetrischer Verschlüsselung wird derselbe geheime Schlüssel zum Ver- und Entschlüsseln genutzt. Das Verfahren ist schnell, aber der Schlüssel muss sicher übertragen werden. Asymmetrische Verschlüsselung nutzt einen öffentlichen und einen privaten Schlüssel. Hybride Verfahren verbinden beide Methoden.“

## 8. Hash, digitale Signatur und Zertifikat

**Prüfungsantwort:**

„Eine Hashfunktion erzeugt aus Daten einen Prüfwert. Damit kann man Änderungen erkennen. Ein Hash ist keine Verschlüsselung. Bei einer digitalen Signatur wird der Hash mit dem privaten Schlüssel signiert. Der öffentliche Schlüssel prüft die Signatur. Ein Zertifikat verbindet einen öffentlichen Schlüssel mit einer Identität.“

## 9. Datenschutzgrundsätze

**Prüfungsantwort:**

„Personenbezogene Daten dürfen nur rechtmäßig, transparent und für festgelegte Zwecke verarbeitet werden. Es gelten Datenminimierung, Richtigkeit, Speicherbegrenzung sowie Integrität und Vertraulichkeit. Verantwortliche müssen die Einhaltung nachweisen können. Erhoben werden daher nur erforderliche Daten, die nach Ablauf der Aufbewahrungsfrist gelöscht oder anonymisiert werden.“

## 10. Anonymisierung und Pseudonymisierung

**Prüfungsantwort:**

„Bei der Anonymisierung wird der Personenbezug so entfernt, dass er mit vertretbarem Aufwand nicht wiederhergestellt werden kann. Bei der Pseudonymisierung werden Identifikationsmerkmale durch ein Kennzeichen ersetzt; über getrennt aufbewahrte Zusatzinformationen ist eine Zuordnung weiterhin möglich. Pseudonymisierte Daten bleiben deshalb personenbezogene Daten.“

## 11. Videoüberwachung

**Prüfungsantwort:**

„Videoüberwachung benötigt einen festgelegten legitimen Zweck und eine Rechtsgrundlage. Sie muss erforderlich und verhältnismäßig sein; mildere Mittel sind vorher zu prüfen. Erfassungsbereich und Speicherdauer sind zu minimieren, Betroffene transparent zu informieren und Zugriffe zu beschränken. Eine dauerhafte Leistungs- oder Verhaltenskontrolle von Beschäftigten ist besonders kritisch.“

## 12. Phishing erkennen und behandeln

**Prüfungsantwort:**

„Warnzeichen sind ungewöhnlicher Zeitdruck, abweichende Absenderdomänen, unerwartete Anhänge, verkürzte Links und Aufforderungen zur Preisgabe von Zugangsdaten. Links werden nicht direkt geöffnet; die Echtheit wird über einen unabhängigen Kommunikationsweg geprüft. Verdächtige Nachrichten werden gemeldet. Nach einer Eingabe von Zugangsdaten sind Passwortwechsel, Sperrung aktiver Sitzungen und Prüfung der Protokolle erforderlich.“

## 13. Schutzbedarf - Maximumprinzip

**Prüfungsantwort:**

„Beim Maximumprinzip bestimmt der höchste Schutzbedarf das Gesamtergebnis. Hat eine Anwendung bei Vertraulichkeit den Wert hoch, bei Integrität sehr hoch und bei Verfügbarkeit normal, ist der gesamte Schutzbedarf sehr hoch. So wird das wichtigste Schutzziel nicht zu niedrig bewertet.“

## 14. Gefährdungen der Verfügbarkeit und Maßnahmen

**Prüfungsantwort:**

„Mögliche Gefährdungen sind Stromausfall, Hardwaredefekt, Feuer, Schadsoftware und menschliche Fehler. Eine USV hilft bei kurzem Stromausfall. RAID und Ersatzgeräte reduzieren Ausfallzeiten bei Hardwaredefekten. Backups ermöglichen die Wiederherstellung. Brandschutz, Monitoring und Notfallpläne ergänzen die Maßnahmen.“

## 15. Geschäftsgeheimnis oder personenbezogene Daten

**Prüfungsantwort:**

„Personenbezogene Daten beziehen sich auf eine natürliche Person, zum Beispiel Geburtsdatum oder Sozialversicherungsnummer. Geschäftsgeheimnisse sind vertrauliche Informationen eines Unternehmens, zum Beispiel Konstruktionspläne oder geheime Lieferverträge. Öffentliche Preise sind normalerweise keine schutzwürdigen Daten.“
