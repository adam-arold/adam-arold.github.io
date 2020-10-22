
## Nem Megfelelő Security

---

## Nem Megfelelő Security

- Nem elég erős véletlenszerűség

---

## Nem Megfelelő Security

- *Nem elég erős véletlenszerűség*
- Nem megfelelő jelszó titkosítás

---

## Nem Megfelelő Security

- *Nem elég erős véletlenszerűség*
- *Nem megfelelő jelszó titkosítás*
- Access Control megkerülhetősége

---

## Nem Megfelelő Security

- *Nem elég erős véletlenszerűség*
- *Nem megfelelő jelszó titkosítás*
- *Access Control megkerülhetősége*
- Bizalmas információ kiszivárgása

---

## Nem Megfelelő Security

- *Nem elég erős véletlenszerűség*
- *Nem megfelelő jelszó titkosítás*
- *Access Control megkerülhetősége*
- *Bizalmas információ kiszivárgása*
- Gyenge kriptográfiai kulcsok

---

## Nem Megfelelő Security

- *Nem elég erős véletlenszerűség*
- *Nem megfelelő jelszó titkosítás*
- *Access Control megkerülhetősége*
- *Bizalmas információ kiszivárgása*
- *Gyenge kriptográfiai kulcsok*
- Gyenge algoritmusok használata

---

## Nem Megfelelő Security

- *Nem elég erős véletlenszerűség*
- *Nem megfelelő jelszó titkosítás*
- *Access Control megkerülhetősége*
- *Bizalmas információ kiszivárgása*
- *Gyenge kriptográfiai kulcsok*
- *Gyenge algoritmusok használata*
- Certifikátumok nem megfelelő ellenőrzése

---

## Nem Megfelelő Security

- *Nem elég erős véletlenszerűség*
- *Nem megfelelő jelszó titkosítás*
- *Access Control megkerülhetősége*
- *Bizalmas információ kiszivárgása*
- *Gyenge kriptográfiai kulcsok*
- *Gyenge algoritmusok használata*
- *Certifikátumok nem megfelelő ellenőrzése*
- Szükségtelen jogosultságok adása

---

### Nem elég erős véletlenszerűség

---

### Nem elég erős véletlenszerűség

- Nem minden PRNG alkalmas kriptográfiára

---

### Nem elég erős véletlenszerűség

- *Nem minden PRNG alkalmas kriptográfiára*
- Ha kiszámíthatóak a véletlen számok

---

### Nem elég erős véletlenszerűség

- *Nem minden PRNG alkalmas kriptográfiára*
- *Ha kiszámíthatóak a véletlen számok*
- Kifejezetten veszélyes kulcsok generálásához

---

### Nem elég erős véletlenszerűség

- *Nem minden PRNG alkalmas kriptográfiára*
- *Ha kiszámíthatóak a véletlen számok*
- *Kifejezetten veszélyes kulcsok generálásához*
- Session azonosítókhoz

---

### Nem elég erős véletlenszerűség

- *Nem minden PRNG alkalmas kriptográfiára*
- *Ha kiszámíthatóak a véletlen számok*
- *Kifejezetten veszélyes kulcsok generálásához*
- *Session azonosítókhoz*
- Vagy bármilyen kiszámíthatatlanságot igénylő algoritmushoz

---

### Nem elég erős véletlenszerűség

- *Nem minden PRNG alkalmas kriptográfiára*
- *Ha kiszámíthatóak a véletlen számok*
- *Kifejezetten veszélyes kulcsok generálásához*
- *Session azonosítókhoz*
- *Vagy bármilyen kiszámíthatatlanságot igénylő algoritmushoz*
- Ne használjunk:
  - `java.util.Random`
  - `Math.random()`

---

### SecureRandom

```java
SecureRandom random = SecureRandom.getInstanceStrong();
byte bytes[] = new byte[20];
random.nextBytes(bytes);
int i =random.nextInt(100); //random int in range [0 .. 100)
double d = random.nextDouble(); //random double in range [0.0 .. 1.0)
boolean b = random.nextBoolean(); // random bool, true or false
```

---

### Jelszó Kezelés

```java
PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE username=? AND userpass=?");
ps.setString(1, request.getParameter("username"));
ps.setString(2, request.getParameter("password"));
ResultSet result = ps.executeQuery();
if (result.next()) {
    session.setAttribute("userid", result.getInt(5));
} else {
    System.out.println("Invalid credentials.");
}
```

> Hol lehet a hiba?

---

### Jelszó Kezelés

- A jelszavak plaintextben tárolása

---

### Jelszó Kezelés

- *A jelszavak plaintextben tárolása*
- Ha az adatábzishoz hozzáfér a támadó, akkor az **összes** jelszavunk kiszivárog

---

### Jelszó Kezelés

- *A jelszavak plaintextben tárolása*
- *Ha az adatábzishoz hozzáfér a támadó, akkor az **összes** jelszavunk kiszivárog*
- Megoldás-e a hashelés?

---

### Jelszó Kezelés

- *A jelszavak plaintextben tárolása*
- *Ha az adatábzishoz hozzáfér a támadó, akkor az **összes** jelszavunk kiszivárog*
- *Megoldás-e a hashelés?*

---

### Hashelt Jelszavak Problémái

---

### Hashelt Jelszavak Problémái

- Tippelhető

---

### Hashelt Jelszavak Problémái

- *Tippelhető*
- Brute force-olható (előre kiszámított szivárvány táblákkal)

---

### Hashelt Jelszavak Problémái

- *Tippelhető*
- *Brute force-olható (előre kiszámított szivárvány táblákkal)*
- A megoldás

---

### Hashelt Jelszavak Problémái

- *Tippelhető*
- *Brute force-olható (előre kiszámított szivárvány táblákkal)*
- *A megoldás*
  - Lassú hash függvény (bcrypt, PBKDF2)

---

### Hashelt Jelszavak Problémái

- *Tippelhető*
- *Brute force-olható (előre kiszámított szivárvány táblákkal)*
- *A megoldás*
  - *Lassú hash függvény (bcrypt, PBKDF2)*
  - Sózás

---

### Jelszó Titkosító Algoritmusok

---

### Jelszó Titkosító Algoritmusok

- Argon2
  > OWASP #1, használjuk ezt, ha elérhető
- Password-Based Key Derivation Func. 2 (PBKDF2)
  > SHA-1 alapú
- bcrypt
  > Blowfish cypher alapú, tartalmaz sózást és adaptív
- scrypt
  > Robosztusabb és lassabb a PBKDF2-nél és a bcrypt-nél

---

### Tipikus Jelszó Titkosítási Hibák

---

### Tipikus Jelszó Titkosítási Hibák

- Gyenge kriptográfia

---

### Tipikus Jelszó Titkosítási Hibák

- *Gyenge kriptográfia*
- Jelszavak loggolása

---

### Tipikus Jelszó Titkosítási Hibák

- *Gyenge kriptográfia*
- *Jelszavak loggolása*
- Alapértelmezett jelszavak használata

---

### Tipikus Jelszó Titkosítási Hibák

- *Gyenge kriptográfia*
- *Jelszavak loggolása*
- *Alapértelmezett jelszavak használata*
- Beégetett jelszavak

---