name: java-security-services

# {{ include.title }}
## {{ include.subtitle }}

---

### A JSS Felépítése

---

### A JSS Felépítése

- Specifikációk gyűjteménye

---

### A JSS Felépítése

- *Specifikációk gyűjteménye*
- Nincs szükség az implementációra

---

### A JSS Felépítése

- *Specifikációk gyűjteménye*
- *Nincs szükség az implementációra*
- Providereken kersztül használjuk (mint a JPA)

---

### A JSS Felépítése

- *Specifikációk gyűjteménye*
- *Nincs szükség az implementációra*
- *Providereken kersztül használjuk (mint a JPA)*
- Készíthetünk saját providert is

---

### JSS Architektúra

![JSS Architektúra](/assets/img/jss_architecture.svg)

---

### Java Authentication and Authorization Service

---

### Authentikáció

#### Subject

- Egy entitást reprezentál (pl egy személy)

---

### Authentikáció

#### Subject

- *Egy entitást reprezentál (pl egy személy)*
- Tartalmazhat credential-okat (biztonsági információ)

---

### Authentikáció

#### Subject

- *Egy entitást reprezentál (pl egy személy)*
- *Tartalmazhat credential-okat (biztonsági információ)*
- és Principalokat (identitás)

---

### Authentikáció

#### LoginContext

- Authentikációhoz használható

---

### Authentikáció

#### LoginContext

- *Authentikációhoz használható*
- Modulokból áll (LoginModule), melyek külön-külön authentikálhatnak

---

### Authentikáció

#### LoginContext

- *Authentikációhoz használható*
- *Modulokból áll (LoginModule), melyek külön-külön authentikálhatnak*
- Sikeres authentikáció után a Subject megkapja a megfelelő Principal-okat

---

### Authentikáció

#### LoginModule

- Egy alkalmazáshoz tetszőleges login stratégiákat tesz lehetővé

---

### Authentikáció

#### LoginModule

- *Egy alkalmazáshoz tetszőleges login stratégiákat tesz lehetővé*
- Egyszerre több is használható

---

### Authentikáció

#### CallbackHandler

- Login során használja a LoginModule authentikációs adatok bekéréséhez (pl jelszavak)

---

### Authorizáció

#### Policy

- Hozzáférési szabályokat tartalmaz

---

### Authorizáció

#### AuthPermission

- Tartalmazza a nevét annak a funkciónak, amihez hozzáférhetünk

---

### JAAS

#### Példa

---

### Java Generic Security Service

---

### Java Generic Security Service

- API, mely lehetővé teszi biztonsági protokollok használatát (pl. Kerberos)
- 

---

### Java Generic Security Service

- *API, mely lehetővé teszi biztonsági protokollok használatát (pl. Kerberos)*
- Segít az alkalmazáslogikát elválasztani biztonsági mechanizmusoktól
- 

---

### Java Generic Security Service

- *API, mely lehetővé teszi biztonsági protokollok használatát (pl. Kerberos)*
- *Segít az alkalmazáslogikát elválasztani biztonsági mechanizmusoktól*
- Kommunikációt tesz lehetővé más GSS felhasználókkal
- 

---

### Java Generic Security Service

- *API, mely lehetővé teszi biztonsági protokollok használatát (pl. Kerberos)*
- *Segít az alkalmazáslogikát elválasztani biztonsági mechanizmusoktól*
- *Kommunikációt tesz lehetővé más GSS felhasználókkal*
- Általában hálózaton keresztül működik
- 

---

### Java Generic Security Service

- *API, mely lehetővé teszi biztonsági protokollok használatát (pl. Kerberos)*
- *Segít az alkalmazáslogikát elválasztani biztonsági mechanizmusoktól*
- *Kommunikációt tesz lehetővé más GSS felhasználókkal*
- *Általában hálózaton keresztül működik*
- Provider alapú architektúra
- 

---

### Java Generic Security Service

- *API, mely lehetővé teszi biztonsági protokollok használatát (pl. Kerberos)*
- *Segít az alkalmazáslogikát elválasztani biztonsági mechanizmusoktól*
- *Kommunikációt tesz lehetővé más GSS felhasználókkal*
- *Általában hálózaton keresztül működik*
- *Provider alapú architektúra*
- JCA-t használ a háttérben
- 

---

### Java Generic Security Service

#### Példa

---

### Java Secure Socket Extension

---

### Java Secure Socket Extension

- JGSS-hez hasonló eszköz

---

### Java Secure Socket Extension

- *JGSS-hez hasonló eszköz*
- SSL implementáció

---

### Java Secure Socket Extension

- *JGSS-hez hasonló eszköz*
- *SSL implementáció*
- PKI-t használ

---

### Java Secure Socket Extension

- *JGSS-hez hasonló eszköz*
- *SSL implementáció*
- *PKI-t használ*
- Elavult technológia, a TLS váltja ki

---

## Kriptográfiai Szolgáltatások

---

### Java Cryptography Architecture & Extension

![JCA & JCE](/assets/img/jca_jce.svg)

---

### Főbb Osztályok

#### SecureRandom

Kriptográfiailag erős véletlen számokat lehet vele létrehozni.

---

### Főbb Osztályok

#### MessageDigest

Message Digest (hash) létrehozására használható.

---

### Főbb Osztályok

#### Signature

Kétkulcsos digitális aláírásra és annak ellenőrzésére lehet használni.

---

### Főbb Osztályok

#### Cipher

Kulccsal inicializáljuk és egykulcsos titkosításra lehet használni.

---

### Főbb Osztályok

#### MAC (Message Authentication Codes)

Kulccsal inicializálható és hash-ek létrehozására alkalmas.

---

### Főbb Osztályok

#### KeyPairGenerator

Kétkulcsos titkosításhoz használt kulcsok létrehozására használható.

---

### Főbb Osztályok

#### SecretKeyFactory

Szimmetrikus kulcsos titkosításhoz készít kulcsokat.

---

### Digitális Aláírás

#### Példa

---

### Bouncy Castle

---

### Bouncy Castle

- JCA és JCE provider

---

### Bouncy Castle

- *JCA és JCE provider*
- JSSE provider

---

### Bouncy Castle

- *JCA és JCE provider*
- *JSSE provider*
- Clean room JCE implementáció

---

### Bouncy Castle

- *JCA és JCE provider*
- *JSSE provider*
- *Clean room JCE implementáció*
- TLS API

---

### Bouncy Castle

- *JCA és JCE provider*
- *JSSE provider*
- *Clean room JCE implementáció*
- *TLS API*
- Certificate API

---

### Bouncy Castle

- *JCA és JCE provider*
- *JSSE provider*
- *Clean room JCE implementáció*
- *TLS API*
- *Certificate API*
- ...

---

### Keystore

---

### Keystore

- Biztonságos kulcs és certifikátum tároló

---

### Keystore

- *Biztonságos kulcs és certifikátum tároló*
- Jelszóval védett

---

### Keystore

- *Biztonságos kulcs és certifikátum tároló*
- *Jelszóval védett*
- `JAVA_HOME/jre/lib/security/cacerts` (jelszó `changeit`)

---

### Keystore

- *Biztonságos kulcs és certifikátum tároló*
- *Jelszóval védett*
- *`JAVA_HOME/jre/lib/security/cacerts` (jelszó `changeit`)*
- Tárolható kulcstípusok

---

### Keystore

- *Biztonságos kulcs és certifikátum tároló*
- *Jelszóval védett*
- *`JAVA_HOME/jre/lib/security/cacerts` (jelszó `changeit`)*
- *Tárolható kulcstípusok*
    - Szimmetrikus kulcsok

---

### Keystore

- *Biztonságos kulcs és certifikátum tároló*
- *Jelszóval védett*
- *`JAVA_HOME/jre/lib/security/cacerts` (jelszó `changeit`)*
- *Tárolható kulcstípusok*
    - *Szimmetrikus kulcsok*
    - Aszimmetrikus kulcsok

---

### Keystore

- *Biztonságos kulcs és certifikátum tároló*
- *Jelszóval védett*
- *`JAVA_HOME/jre/lib/security/cacerts` (jelszó `changeit`)*
- *Tárolható kulcstípusok*
    - *Szimmetrikus kulcsok*
    - *Aszimmetrikus kulcsok*
    - Certifikátumok

---

### Keystore

#### Példa

---