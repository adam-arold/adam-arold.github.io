name: owasp10

# {{ include.title }}

> The Open Web Application Security Project® (OWASP) is a nonprofit foundation that works to improve the security of software.

---

## OWASP Top 10

- Injection
  > Nem megbízható adat (SQL, NoSQL, LDAP) interpretálása parancsként

---

## OWASP Top 10

- *Injection*
- Broken Authentication
  > Jelszavak, tokenek és session-ok ellophatósága

---

## OWASP Top 10

- *Injection*
- *Broken Authentication*
- Sensitive Data Exposure
  > Fontos információk nem megfelelő védelme

---

## OWASP Top 10

- *Injection*
- *Broken Authentication*
- *Sensitive Data Exposure*
- XML External Entities (XEE)
  > Rosszul konfigurált XML feldolgozón keresztül belső fájlok elérése

---

## OWASP Top 10

- *Injection*
- *Broken Authentication*
- *Sensitive Data Exposure*
- *XML External Entities (XEE)*
- Broken Access Control
  > Nem megfelelő authorizáció miatt szenzitív adatok kiszivárgása

---

## OWASP Top 10

- *Injection*
- *Broken Authentication*
- *Sensitive Data Exposure*
- *XML External Entities (XEE)*
- *Broken Access Control*
- Security Misconfiguration
  > Nem megfelelően beállított szolgáltatások használata

---

## OWASP Top 10

- *Injection*
- *Broken Authentication*
- *Sensitive Data Exposure*
- *XML External Entities (XEE)*
- *Broken Access Control*
- *Security Misconfiguration*
- Cross-Site Scripting (XSS)
  > Nem megbízható adat megjelenítése

---

## OWASP Top 10

- *Injection*
- *Broken Authentication*
- *Sensitive Data Exposure*
- *XML External Entities (XEE)*
- *Broken Access Control*
- *Security Misconfiguration*
- *Cross-Site Scripting (XSS)*
- Insecure Deserialization
  > Szerializált adatban tárolt támadások futtatása

---

## OWASP Top 10

- *Injection*
- *Broken Authentication*
- *Sensitive Data Exposure*
- *XML External Entities (XEE)*
- *Broken Access Control*
- *Security Misconfiguration*
- *Cross-Site Scripting (XSS)*
- *Insecure Deserialization*
- Using Components with Known Vulnerabilities
  > Mások által írt támadható kódok futtatása

---

## OWASP Top 10

- *Injection*
- *Broken Authentication*
- *Sensitive Data Exposure*
- *XML External Entities (XEE)*
- *Broken Access Control*
- *Security Misconfiguration*
- *Cross-Site Scripting (XSS)*
- *Insecure Deserialization*
- *Using Components with Known Vulnerabilities*
- Insufficient Logging & Monitoring
  > Támadások nem megfelelő, vagy hiányos észlelése

---

{% include java-sec/owasp-top10-injection.md %}
{% include java-sec/owasp-top10-broken-auth.md %}
{% include java-sec/owasp-top10-sensitive-data-exposure.md %}
{% include java-sec/owasp-top10-xee.md %}
{% include java-sec/owasp-top10-broken-access-control.md %}
{% include java-sec/owasp-top10-misconfig.md %}