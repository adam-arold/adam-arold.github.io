name: models-and-tools

# {{ include.title }}
## {{ include.subtitle }}

---

## Authorizációs Modellek

---

### Access Control List (ACL)

---

### Access Control List (ACL)

- Egy egyszerű lista az authorizálható felhasználókról

---

### Access Control List (ACL)

- *Egy egyszerű lista az authorizálható felhasználókról*
- Példa: portás egy exkluzív klubban

---

### Role-Based Access Control (RBAC)

- A felhasználókhoz szerepkörök (role) vannak kötve

---

### Role-Based Access Control (RBAC)

- *A felhasználókhoz szerepkörök (role) vannak kötve*
- Pl.: `User`, `Admin`

---

### Role-Based Access Control (RBAC)

- *A felhasználókhoz szerepkörök (role) vannak kötve*
- *Pl.: `User`, `Admin`*
- A szerepkörökhöz jogosultságok vannak kötve

---

### Role-Based Access Control (RBAC)

- *A felhasználókhoz szerepkörök (role) vannak kötve*
- *Pl.: `User`, `Admin`*
- *A szerepkörökhöz jogosultságok vannak kötve*
- Példa: a portás ad nekünk:
    - Egy piros karszalagot, hogy ihassunk a bárban
    - Egy narancs karszalagot, hogy rulettezhessünk

---

### Policy-Based Access Control (PBAC)

- A role-ok és jogosultságok mellé policy-k is csatlakoznak

---

### Policy-Based Access Control (PBAC)

- *A role-ok és jogosultságok mellé policy-k is csatlakoznak*
- Egy policy a felhasználó részletes adatai alapján további döntéseket hozhat

---

### Policy-Based Access Control (PBAC)

- *A role-ok és jogosultságok mellé policy-k is csatlakoznak*
- *Egy policy a felhasználó részletes adatai alapján további döntéseket hozhat*
- Példa: van piros karszalagunk a bárban, de 18 év alatt nincs kiszolgálás

---

### Risk Adaptive-Based Access Control (RAdAC)

- A fentiek mellé a környezetet is figyelembe veszi

---

### Risk Adaptive-Based Access Control (RAdAC)

- *A fentiek mellé a környezetet is figyelembe veszi*
- Példa: van piros karszalagunk, elmúltunk 18 évesek, de most jöttünk haza külföldről és a járványveszély miatt nem engednek be minket

---

## Matt Bishop Elvei

---

## Matt Bishop Elvei

- Paranoia

---

## Matt Bishop Elvei

- *Paranoia*
- Stupidity

---

## Matt Bishop Elvei

- *Paranoia*
- *Stupidity*
- Dangerous implements

---

## Matt Bishop Elvei

- *Paranoia*
- *Stupidity*
- *Dangerous implements*
- Can't happen

---

### Paranoia

---

### Paranoia

- Ne bízzunk meg semmiben, amit nem mi generálunk

---

### Paranoia

- *Ne bízzunk meg semmiben, amit nem mi generálunk*
- Feltételezzük, hogy a saját kódunk is hibás

---

### Paranoia

- *Ne bízzunk meg semmiben, amit nem mi generálunk*
- *Feltételezzük, hogy a saját kódunk is hibás*
- Ha meghívunk egy függvényt ellenőrizzük, hogy sikeresen lefutott

---

### Paranoia

- *Ne bízzunk meg semmiben, amit nem mi generálunk*
- *Feltételezzük, hogy a saját kódunk is hibás*
- *Ha meghívunk egy függvényt ellenőrizzük, hogy sikeresen lefutott*
- Ez fontos visszatérési értékeknél és validációnál

---

### Stupidity

---

### Stupidity

- Feltételezzük, hogy a felhasználóink képtelenek alapvető összefüggések értelmezésére

---

### Stupidity

- Feltételezzük, hogy a felhasználóink képtelenek alapvető összefüggések értelmezésére

> "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools." ― Douglas Adams, Mostly Harmless

---

### Dangerous Implements

---

### Dangerous Implements

- Ne feltételezzük, hogy a dolgok konzisztensek maradnak hívások között

---

### Dangerous Implements

- *Ne feltételezzük, hogy a dolgok konzisztensek maradnak hívások között*
- Az adat bármikor megváltozhat (akár véletlenül is), ne feltételezzük, hogy konzisztens marad

---

### Dangerous Implements

- *Ne feltételezzük, hogy a dolgok konzisztensek maradnak hívások között*
- *Az adat bármikor megváltozhat (akár véletlenül is), ne feltételezzük, hogy konzisztens marad*
- Sose adjunk vissza tömböket, készítsünk másolatokat

---

### Can't Happen

---

### Can't Happen

- Soha ne mondjuk, hogy soha, készüljünk fel a látszólag lehetetlen esetekre is

---

### Can't Happen

- *Soha ne mondjuk, hogy soha, készüljünk fel a látszólag lehetetlen esetekre is*
- Ha mégis megtörténik egy lehetetlen eset, loggoljuk

---

### Can't Happen

- *Soha ne mondjuk, hogy soha, készüljünk fel a látszólag lehetetlen esetekre is*
- *Ha mégis megtörténik egy lehetetlen eset, loggoljuk*
- Murphy Törvénye!

---

### Saltzer és Schroeder Szabályai

---

### Saltzer és Schroeder Szabályai

#### Az egyszerűség elve

---

### Saltzer és Schroeder Szabályai

#### Az egyszerűség elve

- KISS

---

### Saltzer és Schroeder Szabályai

#### Az egyszerűség elve

- *KISS*
- Egyszerűbb implementáció == kevesebb hiba

---

### Saltzer és Schroeder Szabályai

#### Az egyszerűség elve

- *KISS*
- *Egyszerűbb implementáció == kevesebb hiba*
- Segíti az átláthatóságot is

---

### Saltzer és Schroeder Szabályai

#### Hibatűrő Alapértelmezett Értékek

---

### Saltzer és Schroeder Szabályai

#### Hibatűrő Alapértelmezett Értékek

- Alapértelmezettként mindig tiltsuk a hozzáférést

---

### Saltzer és Schroeder Szabályai

#### Hibatűrő Alapértelmezett Értékek

- *Alapértelmezettként mindig tiltsuk a hozzáférést*
- Whitelist-eljünk

---

### Saltzer és Schroeder Szabályai

#### Hibatűrő Alapértelmezett Értékek

- *Alapértelmezettként mindig tiltsuk a hozzáférést*
- *Whitelist-eljünk*
- A blacklisting veszélyes (biztos, hogy minden benne van?)

---

### Saltzer és Schroeder Szabályai

#### Hibatűrő Alapértelmezett Értékek

- *Alapértelmezettként mindig tiltsuk a hozzáférést*
- *Whitelist-eljünk*
- *A blacklisting veszélyes (biztos, hogy minden benne van?)*
- Tudni fogunk róla, ha nem működik valami, aminek kellene

---

### Saltzer és Schroeder Szabályai

#### Hibatűrő Alapértelmezett Értékek

- *Alapértelmezettként mindig tiltsuk a hozzáférést*
- *Whitelist-eljünk*
- *A blacklisting veszélyes (biztos, hogy minden benne van?)*
- *Tudni fogunk róla, ha nem működik valami, aminek kellene*
- De azt nem, ha valami működik, aminek nem

---

### Saltzer és Schroeder Szabályai

#### Az Authorizáció Fontossága

---

### Saltzer és Schroeder Szabályai

#### Az Authorizáció Fontossága

- Minden hozzáférést egy erőforráshoz ellenőrzini kell

---

### Saltzer és Schroeder Szabályai

#### Az Authorizáció Fontossága

- *Minden hozzáférést egy erőforráshoz ellenőrzini kell*
- Bármikor változhat jogosultság

---

### Saltzer és Schroeder Szabályai

#### Az Authorizáció Fontossága

- *Minden hozzáférést egy erőforráshoz ellenőrzini kell*
- *Bármikor változhat jogosultság*
- Vagy bármikor változhat a program működése

---

### Saltzer és Schroeder Szabályai

#### Nyílt Design

---

### Saltzer és Schroeder Szabályai

#### Nyílt Design

- A Security by Obscurity kerülendő

---

### Saltzer és Schroeder Szabályai

#### Nyílt Design

- *A Security by Obscurity kerülendő*
- Nem megoldás

---

### Saltzer és Schroeder Szabályai

#### Nyílt Design

- *A Security by Obscurity kerülendő*
- *Nem megoldás*
- Viszont nehezíti a dolgunkat

---

### Saltzer és Schroeder Szabályai

#### Nyílt Design

- *A Security by Obscurity kerülendő*
- *Nem megoldás*
- *Viszont nehezíti a dolgunkat*
- Helyette használjunk kulcsokat/jelszavakat, azokat könnyebb megvédeni

---

### Saltzer és Schroeder Szabályai

#### Privilégiumok Szétválasztása

- Ha egy erőforrás hozzáféréséhez két kulcs kell és nem egy, akkor nehezebb feltörni

---

### Saltzer és Schroeder Szabályai

#### Privilégiumok Szétválasztása

- *Ha egy erőforrás hozzáféréséhez két kulcs kell és nem egy, akkor nehezebb feltörni*
- Példa: 2FA

---

### Saltzer és Schroeder Szabályai

#### Privilégium Minimalizálás

---

### Saltzer és Schroeder Szabályai

#### Privilégium Minimalizálás

- Minden felhasználónak csak ahhoz legyen jogosultsága, amihez feltétlenül szükséges

---

### Saltzer és Schroeder Szabályai

#### Privilégium Minimalizálás

- *Minden felhasználónak csak ahhoz legyen jogosultsága, amihez feltétlenül szükséges*
- Ezzel minimalizálható a kár, ha egy támadó hozzájut az adatainkhoz

---

### Saltzer és Schroeder Szabályai

#### Közös Mechanizmusok Minimalizálása

---

### Saltzer és Schroeder Szabályai

#### Közös Mechanizmusok Minimalizálása

- Minnél kevesebb olyan mechanizmus van, ami kapcsolatot teremt a felhasználók közül, annál könnyebb megvédeni őket

---

### Saltzer és Schroeder Szabályai

#### Közös Mechanizmusok Minimalizálása

- *Minnél kevesebb olyan mechanizmus van, ami kapcsolatot teremt a felhasználók közül, annál könnyebb megvédeni őket*
- Például egy webalkalmazás útvonal a felhasználók és a potenciális támadók között

---

### Saltzer és Schroeder Szabályai

#### Pszichológiai Befogadhatóság

---

### Saltzer és Schroeder Szabályai

#### Pszichológiai Befogadhatóság

- Az UI jó UX-al kell, hogy rendelkezzen

---

### Saltzer és Schroeder Szabályai

#### Pszichológiai Befogadhatóság

- *Az UI jó UX-al kell, hogy rendelkezzen*
- És a biztonsági funkciók használata egyértelmű kell, hogy legyen

---

### Saltzer és Schroeder Szabályai

#### Pszichológiai Befogadhatóság

- *Az UI jó UX-al kell, hogy rendelkezzen*
- *És a biztonsági funkciók használata egyértelmű kell, hogy legyen*
- Így a felhasználók jobb eséllyel kerülik el, hogy hibázzanak

---

### Saltzer és Schroeder Szabályai

#### Work Factor

- Mennyi munkával lehet feltörni az alkalmazást?

---

### Saltzer és Schroeder Szabályai

#### Work Factor

- *Mennyi munkával lehet feltörni az alkalmazást?*
- Pl: hány karakteres jelszót fogadunk csak el?

---

### Saltzer és Schroeder Szabályai

#### Work Factor

- *Mennyi munkával lehet feltörni az alkalmazást?*
- *Pl: hány karakteres jelszót fogadunk csak el?*
- Mennyi idő a jelszóellenőrzés? (bcrypt)

---

### Saltzer és Schroeder Szabályai

#### Támadások Loggolása

---

### Saltzer és Schroeder Szabályai

#### Támadások Loggolása

- Ha nem tudunk arról, hogy egy támadás megtörtént, akkor tenni se tudunk ellene

---

### Saltzer és Schroeder Szabályai

#### Támadások Loggolása

- *Ha nem tudunk arról, hogy egy támadás megtörtént, akkor tenni se tudunk ellene*
- Ha már megtörtént a támadás, akkor könnyíti a jövőbeni támadások kivédését

---

### STRIDE

> Fenyegetések kategórizálására használható modell

---

### STRIDE

- (S)poofing
- (T)ampering
- (R)epudiation
- (I)nformation Disclosure
- (D)enial of Service
- (E)scalation of Privileges

---

### STRIDE

#### Spoofing

> Egy felhasználó belépési adatainak a használata a tudtukon kívül

---

### STRIDE

#### Spoofing

> Egy felhasználó belépési adatainak a használata a tudtukon kívül

- Gyenge jelszavak használata

---

### STRIDE

#### Spoofing

> Egy felhasználó belépési adatainak a használata a tudtukon kívül

- *Gyenge jelszavak használata*
- Könnyen kitalálható jelszavak (név, születési idő)

---

### STRIDE

#### Spoofing

> Egy felhasználó belépési adatainak a használata a tudtukon kívül

- *Gyenge jelszavak használata*
- *Könnyen kitalálható jelszavak (név, születési idő)*
- Spoofolni lehet IP címet, e-mail címet, ARP-t és sok mást is

---

### STRIDE

#### Tampering

> Amikor nem authorizált felhasználók módosíthatnak authorizálást igénylő adatokat

---

### STRIDE

#### Tampering

> Amikor nem authorizált felhasználók módosíthatnak authorizálást igénylő adatokat

- A rendszer teljes működését is befolyásolhatja

---

### STRIDE

#### Tampering

> Amikor nem authorizált felhasználók módosíthatnak authorizálást igénylő adatokat

- *A rendszer teljes működését is befolyásolhatja*
- Adatvesztéshez vezethet

---

### STRIDE

#### Tampering

> Amikor nem authorizált felhasználók módosíthatnak authorizálást igénylő adatokat

- *A rendszer teljes működését is befolyásolhatja*
- *Adatvesztéshez vezethet*
- Nehezen visszakereshető

---

### STRIDE

#### Repudiation

> Letagadhatóság

---

### STRIDE

#### Repudiation

> Letagadhatóság

- Egy támadó megpróbálhatja kitörölni a tevékenységének a nyomait

---

### STRIDE

#### Repudiation

> Letagadhatóság

- *Egy támadó megpróbálhatja kitörölni a tevékenységének a nyomait*
- Logokból törlés

---

### STRIDE

#### Repudiation

> Letagadhatóság

- *Egy támadó megpróbálhatja kitörölni a tevékenységének a nyomait*
- *Logokból törlés*
- Spoofing

---

### STRIDE

#### Information Disclosure

> Szenzitív információk 

---

### STRIDE

#### Information Disclosure

> Szenzitív információk 

- Elfelejtett backup-ok, laptopok, HDD-k

---

### STRIDE

#### Information Disclosure

> Szenzitív információk 

- *Elfelejtett backup-ok, laptopok, HDD-k*
- Nem megfelelő authorizáció

---

### STRIDE

#### Information Disclosure

> Szenzitív információk 

- *Elfelejtett backup-ok, laptopok, HDD-k*
- *Nem megfelelő authorizáció*
- Hibás kód

---

### STRIDE

#### Denial of Service

> A szolgáltatás használatának a megtagadása

---

### STRIDE

#### Denial of Service

> A szolgáltatás használatának a megtagadása

- Túlterhelés

---

### STRIDE

#### Denial of Service

> A szolgáltatás használatának a megtagadása

- *Túlterhelés*
- I/O limitek

---

### STRIDE

#### Denial of Service

> A szolgáltatás használatának a megtagadása

- *Túlterhelés*
- *I/O limitek*
- ...

---

### STRIDE

#### Elevation of Privilege

> Admin jog szerzése

---

### STRIDE

#### Elevation of Privilege

> Admin jog szerzése

- Az az eset, amikor a támadó valamilyen módon authorizációra tesz szert

---

### STRIDE

#### Elevation of Privilege

> Admin jog szerzése

- *Az az eset, amikor a támadó valamilyen módon authorizációra tesz szert*
- Általában több sérülékenység kombinációjával hozható létre

---

### STRIDE

#### Elevation of Privilege

> Admin jog szerzése

- *Az az eset, amikor a támadó valamilyen módon authorizációra tesz szert*
- *Általában több sérülékenység kombinációjával hozható létre*
- Az egyik legveszélyesebb eshetőség

---

# Eszközök

---

## Monitoring

---

## Monitoring

- [ELK Stack](https://www.elastic.co/what-is/elk-stack)

---

## Monitoring

- *[ELK Stack](https://www.elastic.co/what-is/elk-stack)*
- [New Relic](https://newrelic.com/)

---

## Monitoring

- *[ELK Stack](https://www.elastic.co/what-is/elk-stack)*
- *[New Relic](https://newrelic.com/)*
- [Datadog](https://www.datadoghq.com/)

---

## Monitoring

- *[ELK Stack](https://www.elastic.co/what-is/elk-stack)*
- *[New Relic](https://newrelic.com/)*
- *[Datadog](https://www.datadoghq.com/)*
- ...

---

## Statikus Kód Elemzés

---

## Statikus Kód Elemzés

- [OWASP Elemző](https://itnext.io/owasp-dependency-check-maven-vulnerabilities-java-898a9cf99f5e)

---

## Statikus Kód Elemzés

- *[OWASP Elemző](https://itnext.io/owasp-dependency-check-maven-vulnerabilities-java-898a9cf99f5e)*
- [FindBugs](https://gleclaire.github.io/findbugs-maven-plugin/)

---

## Statikus Kód Elemzés

- *[OWASP Elemző](https://itnext.io/owasp-dependency-check-maven-vulnerabilities-java-898a9cf99f5e)*
- *[FindBugs](https://gleclaire.github.io/findbugs-maven-plugin/)*
- [SonarQube](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-maven/)

---

## Statikus Kód Elemzés

- *[OWASP Elemző](https://itnext.io/owasp-dependency-check-maven-vulnerabilities-java-898a9cf99f5e)*
- *[FindBugs](https://gleclaire.github.io/findbugs-maven-plugin/)*
- *[SonarQube](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-maven/)*
- [Snyk](https://github.com/snyk/snyk-maven-plugin)

---

## Statikus Kód Elemzés

- *[OWASP Elemző](https://itnext.io/owasp-dependency-check-maven-vulnerabilities-java-898a9cf99f5e)*
- *[FindBugs](https://gleclaire.github.io/findbugs-maven-plugin/)*
- *[SonarQube](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-maven/)*
- *[Snyk](https://github.com/snyk/snyk-maven-plugin)*
- [RIPS](https://github.com/rips/maven-plugin)

---

## Statikus Kód Elemzés

- *[OWASP Elemző](https://itnext.io/owasp-dependency-check-maven-vulnerabilities-java-898a9cf99f5e)*
- *[FindBugs](https://gleclaire.github.io/findbugs-maven-plugin/)*
- *[SonarQube](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-maven/)*
- *[Snyk](https://github.com/snyk/snyk-maven-plugin)*
- *[RIPS](https://github.com/rips/maven-plugin)*
- [Fortify](https://www.microfocus.com/en-us/fortify-integrations/maven)

---

## Statikus Kód Elemzés

- *[OWASP Elemző](https://itnext.io/owasp-dependency-check-maven-vulnerabilities-java-898a9cf99f5e)*
- *[FindBugs](https://gleclaire.github.io/findbugs-maven-plugin/)*
- *[SonarQube](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-maven/)*
- *[Snyk](https://github.com/snyk/snyk-maven-plugin)*
- *[RIPS](https://github.com/rips/maven-plugin)*
- *[Fortify](https://www.microfocus.com/en-us/fortify-integrations/maven)*
- ...

---

# Penetrációs Tesztelés

---

## Biztonsági Szkennelők

---

## Biztonsági Szkennelők

- [Nikto](https://cirt.net/Nikto2)
- [Wikto](https://sectools.org/tool/wikto/)
- [Netsparker](https://www.netsparker.com/)
- [SiteDigger](https://sitedigger.software.informer.com/)
- [BurpSuite](https://tools.kali.org/web-applications/burpsuite)

---

## SQL Injection Eszközök

- [SQLMap](http://sqlmap.org/)
- [SQLNinja](http://sqlninja.sourceforge.net/)
 
---

## Sérülékenység Adatbázisok

- [CVE](https://cve.mitre.org/)
- [NVE](https://nvd.nist.gov/)
- [Google Hacking](https://www.exploit-db.com/google-hacking-database)

---

## Sniffer Eszközök

- [Tcdump](https://www.tcpdump.org/manpages/tcpdump.1.html)
- [ngrep](https://linux.die.net/man/8/ngrep)
- [Wireshark](https://www.wireshark.org/)

---
