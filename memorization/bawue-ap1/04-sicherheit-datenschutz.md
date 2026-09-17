# 04 – IT-Sicherheit und Datenschutz

## 1. Schutzziele CIA

**Prüfungsantwort:**

„Vertraulichkeit bedeutet, dass Informationen nur von Berechtigten gelesen werden können. Integrität stellt sicher, dass Daten vollständig und unbemerkt unverändert bleiben. Verfügbarkeit bedeutet, dass Systeme und Daten bei Bedarf nutzbar sind. Je nach Fall können zusätzlich Authentizität und Nachvollziehbarkeit relevant sein.“

**中文记忆:** C 不泄露，I 不乱改，A 用得上。

## 2. Schutzbedarf begründen

**Typische Frage:** „Bewerten Sie den Schutzbedarf eines Systems.“

**Prüfungsantwort:**

„Der Schutzbedarf ist als hoch einzustufen. Eine Offenlegung würde personenbezogene bzw. geschäftskritische Informationen betreffen, eine Manipulation könnte zu fehlerhaften Entscheidungen führen und ein Ausfall würde den zentralen Geschäftsprozess unterbrechen. Daher sind starke Zugriffskontrollen, Protokollierung, Verschlüsselung und ein getestetes Wiederherstellungskonzept erforderlich.“

## 3. Technische und organisatorische Maßnahmen (TOM)

**Prüfungsantwort:**

„Technische Maßnahmen sind beispielsweise Mehrfaktor-Authentisierung, Verschlüsselung, Firewall, Patchmanagement, Backup und Protokollierung. Organisatorische Maßnahmen umfassen Berechtigungskonzepte, Vier-Augen-Prinzip, Schulungen, Notfallpläne und geregelte Ein- und Austrittsprozesse. Maßnahmen sind nach Risiko und Schutzbedarf auszuwählen.“

## 4. Ransomware – Prävention und Reaktion

**Prüfungsantwort:**

„Vorbeugend sind zeitnahe Sicherheitsupdates, restriktive Rechte, E-Mail- und Webfilter, Awareness-Schulungen, Netzwerksegmentierung und offline bzw. unveränderbar gespeicherte Backups erforderlich. Bei einem Verdacht wird das betroffene System sofort vom Netz getrennt, der Vorfall gemeldet und Beweismaterial gesichert. Danach werden Ausbreitung und Ursache analysiert, Systeme aus vertrauenswürdigen Quellen neu aufgebaut und Daten aus einem geprüften Backup wiederhergestellt.“

**Schlüsselwörter:** isolieren, melden, nicht unkontrolliert löschen, Ursache, sauberes Restore, dokumentieren.

## 5. 3-2-1-Regel

**Prüfungsantwort:**

„Die 3-2-1-Regel fordert mindestens drei Datenkopien auf zwei unterschiedlichen Medientypen, davon eine Kopie räumlich getrennt bzw. offline. Dadurch wird vermieden, dass ein einzelner Defekt, Brand oder Ransomware-Angriff alle Kopien gleichzeitig zerstört. Die Wiederherstellung muss regelmäßig getestet werden.“

## 6. Authentisierung und Autorisierung

**Prüfungsantwort:**

„Authentisierung prüft die behauptete Identität eines Benutzers, zum Beispiel durch Passwort und zweiten Faktor. Autorisierung legt nach erfolgreicher Authentisierung fest, auf welche Ressourcen und Funktionen diese Identität zugreifen darf. Nach dem Least-Privilege-Prinzip werden nur die für die Aufgabe notwendigen Rechte vergeben.“

## 7. Symmetrische, asymmetrische und hybride Verschlüsselung

**Prüfungsantwort:**

„Bei symmetrischer Verschlüsselung wird derselbe geheime Schlüssel zum Ver- und Entschlüsseln verwendet; sie ist schnell, erfordert aber einen sicheren Schlüsselaustausch. Asymmetrische Verfahren verwenden ein öffentliches und ein privates Schlüsselpaar und vereinfachen Schlüsselaustausch sowie Signaturen, sind jedoch rechenaufwendiger. Hybride Verfahren tauschen einen Sitzungsschlüssel asymmetrisch aus und verschlüsseln die Nutzdaten effizient symmetrisch.“

## 8. Hash, digitale Signatur und Zertifikat

**Prüfungsantwort:**

„Eine kryptografische Hashfunktion erzeugt aus Daten einen festen Prüfwert und dient der Integritätsprüfung; sie ist keine Verschlüsselung. Bei einer digitalen Signatur wird ein Hashwert mit dem privaten Schlüssel signiert. Die Prüfung mit dem zugehörigen öffentlichen Schlüssel bestätigt Integrität und Urheberschaft. Ein Zertifikat bindet einen öffentlichen Schlüssel an eine Identität und wird von einer vertrauenswürdigen Zertifizierungsstelle bestätigt.“

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

