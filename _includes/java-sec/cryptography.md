name: cryptography

# {{ include.title }}
## {{ include.subtitle }}

---

### Kriptorendszerek Felépítése

---

### Kriptorendszerek Felépítése

- Algoritmusok

---

### Kriptorendszerek Felépítése

- *Algoritmusok*
    - Szimmetrikus

---

### Kriptorendszerek Felépítése

- *Algoritmusok*
    - *Szimmetrikus*
    - Aszimmetrikus

---

### Kriptorendszerek Felépítése

- *Algoritmusok*
    - *Szimmetrikus*
    - *Aszimmetrikus*
- Kulcsok

---

### Kriptorendszerek Felépítése

- *Algoritmusok*
    - *Szimmetrikus*
    - *Aszimmetrikus*
- *Kulcsok*
    - Szimmetrikus titkos kulcsok

---

### Kriptorendszerek Felépítése

- *Algoritmusok*
    - *Szimmetrikus*
    - *Aszimmetrikus*
- *Kulcsok*
    - *Szimmetrikus titkos kulcsok*
    - Aszimmetrikus publikus kulcsok

---

### Kriptorendszerek Felépítése

- *Algoritmusok*
    - *Szimmetrikus*
    - *Aszimmetrikus*
- *Kulcsok*
    - *Szimmetrikus titkos kulcsok*
    - *Aszimmetrikus publikus kulcsok*
    - Kulcsgenerálás (secure random)

---

### Kriptorendszerek Felépítése

- *Algoritmusok*
    - *Szimmetrikus*
    - *Aszimmetrikus*
- *Kulcsok*
    - *Szimmetrikus titkos kulcsok*
    - *Aszimmetrikus publikus kulcsok*
    - *Kulcsgenerálás (secure random)*
    - Biztonságos kulcs tárolás

---

### Kriptorendszerek Felépítése

- *Algoritmusok*
    - *Szimmetrikus*
    - *Aszimmetrikus*
- *Kulcsok*
    - *Szimmetrikus titkos kulcsok*
    - *Aszimmetrikus publikus kulcsok*
    - *Kulcsgenerálás (secure random)*
    - *Biztonságos kulcs tárolás*
- Protokollok: kulcsok használata

---

## Szimmetrikus Kulcsok Használata

![Szimmetrikus Kulcsok Használata](/assets/img/symmetric_key_security_0.svg)

---

## Szimmetrikus Kulcsok Használata

![Szimmetrikus Kulcsok Használata](/assets/img/symmetric_key_security_1.svg)

---

## Szimmetrikus Kulcsok Használata

![Szimmetrikus Kulcsok Használata](/assets/img/symmetric_key_security_2.svg)

---

### Szimmetrikus Algoritmusok

---

### Szimmetrikus Algoritmusok

#### DES

- 56 bites kulcs
- 64 bites blokkméret
- Gyenge algoritmus, **ne használjuk!**

---

### Szimmetrikus Algoritmusok

#### 3DES

- 3x alkalmazza a DES algoritmust
- 56, 112 és 168 bites kulcs
- Ez sem ajánlott

---

### Szimmetrikus Algoritmusok

#### Blowfish

- 32-448 bites kulcs
- 64 bites blokkok
- DES utódja, használata nem javasolt

---

### Szimmetrikus Algoritmusok

#### AES

- 128, 192 és 256 bites kulcs
- 128 bites blokkok
- Ez az "új" standard (Rijndael algoritmus)

---

### Véletlenszerűség

---

### Véletlenszerűség

- Minden titkosítási módszer alapja

---

### Véletlenszerűség

- *Minden titkosítási módszer alapja*
- A kiszámíthatóságot garantálja

---

### Véletlenszerűség

- *Minden titkosítási módszer alapja*
- *A kiszámíthatóságot garantálja*
- Entrópia: a véletlenszerűség mértéke

---

### Véletlenszerűség

- *Minden titkosítási módszer alapja*
- *A kiszámíthatóságot garantálja*
- *Entrópia: a véletlenszerűség mértéke*
- PRNG: determinisztikus

---

### Véletlenszerűség

- *Minden titkosítási módszer alapja*
- *A kiszámíthatóságot garantálja*
- *Entrópia: a véletlenszerűség mértéke*
- *PRNG: determinisztikus*
- TRNG: nem-determinisztikus, eléréséhez a környezetből gyűjt adatot

---

### Véletlenszerűség

- *Minden titkosítási módszer alapja*
- *A kiszámíthatóságot garantálja*
- *Entrópia: a véletlenszerűség mértéke*
- *PRNG: determinisztikus*
- *TRNG: nem-determinisztikus, eléréséhez a környezetből gyűjt adatot*
    - Egér, billentyűzet, HDD seek idők, idő, cpu interruptok között eltelt idő

---

### Az Inicializációs Vektor (IV)

---

### Az Inicializációs Vektor (IV)

- A titkosítás véletlenszerűségéért felelős

---

### Az Inicializációs Vektor (IV)

- *A titkosítás véletlenszerűségéért felelős*
- A legtöbb algoritmusnak szüksége van rá

---

### Az Inicializációs Vektor (IV)

- *A titkosítás véletlenszerűségéért felelős*
- *A legtöbb algoritmusnak szüksége van rá*
- Használatával a rejtjelezett üzenet minden titkosításnál különböző lesz

---

### Az Inicializációs Vektor (IV)

- *A titkosítás véletlenszerűségéért felelős*
- *A legtöbb algoritmusnak szüksége van rá*
- *Használatával a rejtjelezett üzenet minden titkosításnál különböző lesz*
- Nonce: egyszer használatos

---

### Confusion és Diffusion

---

### Confusion és Diffusion

- Kriptoanalízist lassító tulajdonságok (pl statisztika)
- Segítenek elrejteni a kulcs és a rejtjelezett üzenet közötti kapcsolatot

---

### Confusion

Az rejtjelezett üzenet egy bitje a kulcs több részétől függjön.

---

### Diffusion

Az adat egy bitjének a változása esetén a rejtjelezett üzenet fele változzon meg.

---

### Üzemmódok

---

### Electornic Codebook (ECB)

Egyes üzenetek rejtjelezésére használható

![ECB](/assets/img/ECB.svg)

---

### Electornic Codebook (ECB)

Egyes üzenetek rejtjelezésére használható

![ECB](/assets/img/ECB.svg)

---

### Electornic Codebook Hátrányai

![Tux](/assets/img/tux.png)

---

### Cipher Block Chaining (CBC)

Az algoritmus ismétlésével sok blokkos üzenet titkosítására használható

![CBC](/assets/img/CBC_0.svg)

---

### Cipher Block Chaining (CBC)

Az algoritmus ismétlésével sok blokkos üzenet titkosítására használható

![CBC](/assets/img/CBC_1.svg)

---

### CBC Hátrányai

---

### CBC Hátrányai

- Szekvenciális (nem párhuzamosítható)

---

### CBC Hátrányai

- *Szekvenciális (nem párhuzamosítható)*
- Paddingra van szükség 

---

### Cipher Feedback (CFB)

Karakterstreamek titkosítására használható variáns

![CFB](/assets/img/CFB.svg)

---

### CFB Hátrányai

---

### CFB Hátrányai

- Szekvenciális (nem párhuzamosítható)

---

### Output Feedback (OFB)

Karakterstreames variáns, mely részleges párhuzamosítást tesz lehetővé

![OFB](/assets/img/OFB.svg)

---

### Counter CTR

Streamekre használható, párhuzamosítható

![CTR](/assets/img/CTR.svg)

---

### Hash és Message Digest

---

### Hash és Message Digest

- Determinisztikus algoritmus, amely az üzenetet fix méretű bit stringgé alakítja

---

### Hash és Message Digest

- *Determinisztikus algoritmus, amely az üzenetet fix méretű bit stringgé alakítja*
- Gyors

---

### Hash és Message Digest

- *Determinisztikus algoritmus, amely az üzenetet fix méretű bit stringgé alakítja*
- *Gyors*
- Nehéz visszafejteni

---

### Hash és Message Digest

- *Determinisztikus algoritmus, amely az üzenetet fix méretű bit stringgé alakítja*
- *Gyors*
- *Nehéz visszafejteni*
- Nehéz két üzenetet találni ugyanazzal a hash-el (collision)

---

### Hash és Message Digest

- *Determinisztikus algoritmus, amely az üzenetet fix méretű bit stringgé alakítja*
- *Gyors*
- *Nehéz visszafejteni*
- *Nehéz két üzenetet találni ugyanazzal a hash-el (collision)*
- 1 bit változása az üzenetben jelentős változás a hash-ben

---

### Hash Algoritmusok

---

### Hash Algoritmusok

#### MD5 (Message Digest 5)

- 128 bites digest

---

### Hash Algoritmusok

#### MD5 (Message Digest 5)

- *128 bites digest*
- Törött, **ne használjuk**

---

### Hash Algoritmusok

#### SHA-1 (Secure Hash Algorithm)

- 160 bites digest

---

### Hash Algoritmusok

#### SHA-1 (Secure Hash Algorithm)

- *160 bites digest*
- Törött (SHAttered), **ne használjuk**

---

### Hash Algoritmusok

#### SHA-2

- 224, 256, 384, 512 bites digestek

---

### Hash Algoritmusok

#### SHA-2

- *224, 256, 384, 512 bites digestek*
- A 256 ideális választás

---

### Hash Algoritmusok

#### SHA-3

- 224, 256, 384, 512 bites digestek

---

### Hash Algoritmusok

#### SHA-3

- *224, 256, 384, 512 bites digestek*
- A 256 ideális választás

---

### Hash Algoritmusok

#### Argon2, PBKDF2, bcrypt, scrypt

- Jelszavak titkosítására használják

---

### Egykulcsos Titkosítás

#### Példa

---

### Message Authentication Code (MAC)

---

### Message Authentication Code (MAC)

- Üzenetek ellenőrzésére használható eszköz

---

### Message Authentication Code (MAC)

- *Üzenetek ellenőrzésére használható eszköz*
- A digitális aláírás szimmetrikus változata

---

### Message Authentication Code (MAC)

- *Üzenetek ellenőrzésére használható eszköz*
- *A digitális aláírás szimmetrikus változata*
- Az üzenet integritását és authentikusságát biztosítja

---

### Message Authentication Code (MAC)

- *Üzenetek ellenőrzésére használható eszköz*
- *A digitális aláírás szimmetrikus változata*
- *Az üzenet integritását és authentikusságát biztosítja*
- Biztonságosabb, mint a hash, mert kulcs szükséges hozzá

---

### Message Authentication Code (MAC)

#### Példa

---

### Aszimmetrikus Titkosítás

![Aszimmetrikus Titkosítás](/assets/img/asymmetric_key_security.svg)

---

### Aszimmetrikus Kulcsok

- A pubikus megosztható, a privát csak a küldőnél létezik

---

### Aszimmetrikus Kulcsok

- *A pubikus megosztható, a privát csak a küldőnél létezik*
- Nehéz kiszámolni a privát kulcsot a publikus kulcsból

---

### Aszimmetrikus Kulcsok

- *A pubikus megosztható, a privát csak a küldőnél létezik*
- *Nehéz kiszámolni a privát kulcsot a publikus kulcsból*
- A privát kulccsal titkosítunk, a publikussal visszafejtünk

---

### Aszimmetrikus Kulcsok

- *A pubikus megosztható, a privát csak a küldőnél létezik*
- *Nehéz kiszámolni a privát kulcsot a publikus kulcsból*
- *A privát kulccsal titkosítunk, a publikussal visszafejtünk*
- Felhasználás módjai

---

### Aszimmetrikus Kulcsok

- *A pubikus megosztható, a privát csak a küldőnél létezik*
- *Nehéz kiszámolni a privát kulcsot a publikus kulcsból*
- *A privát kulccsal titkosítunk, a publikussal visszafejtünk*
- *Felhasználás módjai*
    - Titkosítás és dekódolás

---

### Aszimmetrikus Kulcsok

- *A pubikus megosztható, a privát csak a küldőnél létezik*
- *Nehéz kiszámolni a privát kulcsot a publikus kulcsból*
- *A privát kulccsal titkosítunk, a publikussal visszafejtünk*
- *Felhasználás módjai*
    - *Titkosítás és dekódolás*
    - Aláírás és ellenőrzés (digitális aláírás)

---

### Algoritmusok Kombinálása

- Aszimmetrikus titkosított csatorna (SSL/TLS)

---

### Algoritmusok Kombinálása

- *Aszimmetrikus titkosított csatorna (SSL/TLS)*
- Aszimmetrikus titkosítással titkosítjuk a szimmetrikus kulcsot

---

### Algoritmusok Kombinálása

- *Aszimmetrikus titkosított csatorna (SSL/TLS)*
- *Aszimmetrikus titkosítással titkosítjuk a szimmetrikus kulcsot*
- Ez lesz a session kulcs

---

### Algoritmusok Kombinálása

- *Aszimmetrikus titkosított csatorna (SSL/TLS)*
- *Aszimmetrikus titkosítással titkosítjuk a szimmetrikus kulcsot*
- *Ez lesz a session kulcs*
- Az adatot a session kulccsal titkosítjuk (AES)

---

### Men in the Middle Támadás

![MitM](/assets/img/mitm_0.svg)

---

### Public Key Infractructure

---

### Public Key Infractructure

- Megbízható digitális certifikátok szolgáltatója

---

### Public Key Infractructure

- *Megbízható digitális certifikátok szolgáltatója*
- Összeköti a publukus kulcsokat egy identitással

---

### Public Key Infractructure

- *Megbízható digitális certifikátok szolgáltatója*
- *Összeköti a publukus kulcsokat egy identitással*
- Az integritást digitális aláírás védi

---

### Public Key Infractructure

- *Megbízható digitális certifikátok szolgáltatója*
- *Összeköti a publukus kulcsokat egy identitással*
- *Az integritást digitális aláírás védi*
- Nem hamisítható

---

### Public Key Infractructure

- *Megbízható digitális certifikátok szolgáltatója*
- *Összeköti a publukus kulcsokat egy identitással*
- *Az integritást digitális aláírás védi*
- *Nem hamisítható*
- RFC 2459 (Internet X.509 Public Key Infrastructure 
  Certificate and CRL Profile)

---

### X.509

Meghatározza:

---

### X.509

Meghatározza:

- A certifikátum formátumát

---

### X.509

Meghatározza:

- *A certifikátum formátumát*
- A Certificate Revocation List (CRL) formátumát

---

### X.509

Meghatározza:

- *A certifikátum formátumát*
- *A Certificate Revocation List (CRL) formátumát*
- Egy certifikátum tartalma:

---

### X.509

Meghatározza:

- *A certifikátum formátumát*
- *A Certificate Revocation List (CRL) formátumát*
- *Egy certifikátum tartalma:*
    - Verzió

---

### X.509

Meghatározza:

- *A certifikátum formátumát*
- *A Certificate Revocation List (CRL) formátumát*
- *Egy certifikátum tartalma:*
    - *Verzió*
    - Serial Number: egyedi azonosító

---

### X.509

Meghatározza:

- *A certifikátum formátumát*
- *A Certificate Revocation List (CRL) formátumát*
- *Egy certifikátum tartalma:*
    - *Verzió*
    - *Serial Number: egyedi azonosító*
    - Issuer: a kibocsájtó (Certification Authority)

---

### X.509

Meghatározza:

- *A certifikátum formátumát*
- *A Certificate Revocation List (CRL) formátumát*
- *Egy certifikátum tartalma:*
    - *Verzió*
    - *Serial Number: egyedi azonosító*
    - *Issuer: a kibocsájtó (Certification Authority)*
    - Validity: mikor jár le

---

### X.509

Meghatározza:

- *A certifikátum formátumát*
- *A Certificate Revocation List (CRL) formátumát*
- *Egy certifikátum tartalma:*
    - *Verzió*
    - *Serial Number: egyedi azonosító*
    - *Issuer: a kibocsájtó (Certification Authority)*
    - *Validity: mikor jár le*
    - Subject: A certifikátum tulajdonosának az azonosítója

---

### X.509

Meghatározza:

- *A certifikátum formátumát*
- *A Certificate Revocation List (CRL) formátumát*
- *Egy certifikátum tartalma:*
    - *Verzió*
    - *Serial Number: egyedi azonosító*
    - *Issuer: a kibocsájtó (Certification Authority)*
    - *Validity: mikor jár le*
    - *Subject: A certifikátum tulajdonosának az azonosítója*
    - Subject Public Key Info: publikus kulcs és a használt algoritmus

---

### X.509

Meghatározza:

- *A certifikátum formátumát*
- *A Certificate Revocation List (CRL) formátumát*
- *Egy certifikátum tartalma:*
    - *Verzió*
    - *Serial Number: egyedi azonosító*
    - *Issuer: a kibocsájtó (Certification Authority)*
    - *Validity: mikor jár le*
    - *Subject: A certifikátum tulajdonosának az azonosítója*
    - *Subject Public Key Info: publikus kulcs és a használt algoritmus*
    - Signature: az aláírás értéke

---

### Men in the Middle Megoldás

![MitM Solution](/assets/img/mitm_solution.svg)

---