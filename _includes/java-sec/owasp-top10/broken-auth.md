
## Broken Authentication

---

### Session Kezelés

---

### Session Kezelés

#### Session Hijacking

> A session azonosító a támadó birtokába jut, így a felhasználó megszemélyesíthető

---

### Session Kezelés

#### Session Hijacking

> A session azonosító a támadó birtokába jut, így a felhasználó megszemélyesíthető

- Packet sniffing (nem titkosított)

---

### Session Kezelés

#### Session Hijacking

> A session azonosító a támadó birtokába jut, így a felhasználó megszemélyesíthető

- *Packet sniffing (nem titkosított)*
- Cookie kiolvasása (XSS)

---

### Session Kezelés

#### Session Hijacking

> A session azonosító a támadó birtokába jut, így a felhasználó megszemélyesíthető

- *Packet sniffing (nem titkosított)*
- *Cookie kiolvasása (XSS)*
- Tippelés és brute force (ha gyenge a session id)

---

### Session Kezelés

#### Session Fixation

> A támadó létrehoz egy session-t amivel ráveszi az áldozatot műveletek végrehajtására (phishing)

---

### Session Kezelési Praktikák

---

### Session Kezelési Praktikák

#### Session Létrehozás

---

### Session Kezelési Praktikák

#### Session Létrehozás

- Megfelelő Session azonosító létrehozása

---

### Session Kezelési Praktikák

#### Session Létrehozás

- *Megfelelő Session azonosító létrehozása*
  - Legalább 128 bites

---

### Session Kezelési Praktikák

#### Session Létrehozás

- *Megfelelő Session azonosító létrehozása*
  - *Legalább 128 bites*
  - Véletlenszerű és kiszámíthatatlan

---

### Session Kezelési Praktikák

#### Session Létrehozás

- *Megfelelő Session azonosító létrehozása*
  - *Legalább 128 bites*
  - *Véletlenszerű és kiszámíthatatlan*
- Ne tartalmazzon bizalmas információt

---

### Session Kezelési Praktikák

#### Session Létrehozás

- *Megfelelő Session azonosító létrehozása*
  - *Legalább 128 bites*
  - *Véletlenszerű és kiszámíthatatlan*
- *Ne tartalmazzon bizalmas információt*
- Cookie-ban legyen tárolva

---

### Session Kezelési Praktikák

#### Session Létrehozás

- *Megfelelő Session azonosító létrehozása*
  - *Legalább 128 bites*
  - *Véletlenszerű és kiszámíthatatlan*
- *Ne tartalmazzon bizalmas információt*
- *Cookie-ban legyen tárolva*
- **Ne implementáljuk le kézzel!**

---

### Session Kezelési Praktikák

#### Authentikáció Után

---

### Session Kezelési Praktikák

#### Authentikáció Után

- Mindig hozzunk létre új azonosítót

---

### Session Kezelési Praktikák

#### Authentikáció Után

- *Mindig hozzunk létre új azonosítót*
- Az összes adatot másoljuk át az új session-ba

---

### Session Kezelési Praktikák

#### Authentikáció Után

- *Mindig hozzunk létre új azonosítót*
- *Az összes adatot másoljuk át az új session-ba*
- Majd a régi session-t érvénytelenítsük

---

### Session Kezelési Praktikák

#### Cookie Kezelés

---

### Session Kezelési Praktikák

#### Cookie Kezelés

- Használjuk a `Secure` attribútumot
  > Nem enged titkosítás nélküli kapcsolatot

---

### Session Kezelési Praktikák

#### Cookie Kezelés

- *Használjuk a `Secure` attribútumot*
- Használjuk a `HttpOnly` attribútumot
  > Scriptek nem férhetnek a cooke-hoz

---

### Session Kezelési Praktikák

#### Cookie Kezelés

- *Használjuk a `Secure` attribútumot*
- *Használjuk a `HttpOnly` attribútumot*
- Ne perzisztáljuk a session-t
  > `Max-Age` és `Expires` perzisztál

---

### Session Kezelési Praktikák

#### Cookie Kezelés

- *Használjuk a `Secure` attribútumot*
- *Használjuk a `HttpOnly` attribútumot*
- *Ne perzisztáljuk a session-t*
- Állítsuk be a domain-t

---

### Session Kezelési Praktikák

#### Cookie Kezelés

```java
Cookie cookie = new Cookie("myvar", "xyz");
cookie.setDomain("example.com");
cookie.setSecure(true);
cookie.setHttpOnly(true);
response.addCookie(cookie);
```

```sh
Set-Cookie: myvar=xyz; Domain=example.com; Secure; HttpOnly;
```

---

### Credential Stuffing

A támadó (lopott) felhasználó/jelszó párosokat próbál végig

---

### Authentikációs Megoldások

---

### Authentikációs Megoldások

- 2FA használata

---

### Authentikációs Megoldások

- *2FA használata*
- Alapértelmezett jelszavak kerülése

---

### Authentikációs Megoldások

- *2FA használata*
- *Alapértelmezett jelszavak kerülése*
- Gyenge jelszavak ellenőrzése

---

### Authentikációs Megoldások

- *2FA használata*
- *Alapértelmezett jelszavak kerülése*
- *Gyenge jelszavak ellenőrzése*
- Jelszó helyreállítás felkészítése (minden végeredményhez ugyanaz a visszajelzés)

---

### Authentikációs Megoldások

- *2FA használata*
- *Alapértelmezett jelszavak kerülése*
- *Gyenge jelszavak ellenőrzése*
- *Jelszó helyreállítás felkészítése (minden végeredményhez ugyanaz a visszajelzés)*
- Bejelentkezési probálkozások korlátozása

---

### Authentikációs Megoldások

- *2FA használata*
- *Alapértelmezett jelszavak kerülése*
- *Gyenge jelszavak ellenőrzése*
- *Jelszó helyreállítás felkészítése (minden végeredményhez ugyanaz a visszajelzés)*
- *Bejelentkezési probálkozások korlátozása*
- Használjunk megfelelő session kezelést

---

### Brute Force Authentikáció

#### Példa

---