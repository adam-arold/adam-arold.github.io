## Bemenet Ellenőrzés (Validáció)

---

### A Biztonságos Programozás 3 Szabálya

---

### A Biztonságos Programozás 3 Szabálya

- Validáljunk

---

### A Biztonságos Programozás 3 Szabálya

- Validáljunk
- Validáljunk

---

### A Biztonságos Programozás 3 Szabálya

- Validáljunk
- Validáljunk
- Validáljunk

---

### Validációs Módszerek

---

### Validációs Módszerek

- Szűrjük az adatot

---

### Validációs Módszerek

- *Szűrjük az adatot*
- Validájuk a tartalmát

---

### Validációs Módszerek

- *Szűrjük az adatot*
- *Validájuk a tartalmát*
- Ne próbáljuk javítani

---

### Validációs Módszerek

- *Szűrjük az adatot*
- *Validájuk a tartalmát*
- *Ne próbáljuk javítani*
- Escapeljünk (bár ez kikerülhető)

---

### Validációs Módszerek

- *Szűrjük az adatot*
- *Validájuk a tartalmát*
- *Ne próbáljuk javítani*
- *Escapeljünk (bár ez kikerülhető)*
- Whitelisteljünk!

---

### Validációs Módszerek

- *Szűrjük az adatot*
- *Validájuk a tartalmát*
- *Ne próbáljuk javítani*
- *Escapeljünk (bár ez kikerülhető)*
- *Whitelisteljünk!*
- A kimenetet is Escapeljünk

---

### Defenzív Programozás

---

### Defenzív Programozás

- Rétegeljük az alkalmazásunkat

---

### Defenzív Programozás

- *Rétegeljük az alkalmazásunkat*
- Minden réteg legyen robosztus

---

### Defenzív Programozás

- *Rétegeljük az alkalmazásunkat*
- *Minden réteg legyen robosztus*
- Mindenhol feltételezzünk hibákat

---

### Integer Overflow

---

### Integer Overflow

- Akkor történik, amikor egy szám megnövelt értéke nem reprezentálható

---

### Integer Overflow

- *Akkor történik, amikor egy szám megnövelt értéke nem reprezentálható*
- Nincs hibajelzés amikor megtörténik

---

### Integer Overflow

#### Példa

```java
System.out.printf("MIN_VALUE-1 = %d%n", (MIN_VALUE - 1));
System.out.printf("MAX_VALUE+1 = %d%n", (MAX_VALUE + 1));
System.out.printf("MAX_VALUE+1(u) = %s%n", toUnsignedString(MAX_VALUE + 1));
System.out.printf("-1(u) = %d%n", toUnsignedLong(-1));
System.out.printf("abs(MIN_VALUE)= %d%n", Math.abs(MIN_VALUE));
```

---

### Integer Overflow Megoldás

---

### Integer Overflow Megoldás

- Használjunk long-ot *( :) )*

---

### Integer Overflow Megoldás

- *Használjunk long-ot *( :) )* *
- Validáljunk a művelet előtt

---

### Integer Overflow Megoldás

- *Használjunk long-ot *( :) )* *
- *Validáljunk a művelet előtt*
- `BigInteger` vagy `BigDecimal` használata

---

### Integer Overflow Megoldás

- *Használjunk long-ot *( :) )* *
- *Validáljunk a művelet előtt*
- *`BigInteger` vagy `BigDecimal` használata*
- Checked aritmetika

---

### Checked Aritmetika

```java
Math.subtractExact(MIN_VALUE, 1);
Math.addExact(MAX_VALUE, 1);
```

---

### Megtörtént Eset: CRC32

Ha `crc.update( new byte[0], 4, Integer.MAX_VALUE-3 );`

```java
public void update( byte[] b, int off, int len){
    if ( b == null ){                                   
        throw new NullPointerException();               
    }
    if ( off < 0 || len < 0 || off + len > b.length ){  
        throw new ArrayIndexOutOfBoundsException();     
    }                                                   
    crc = updateBytes( crc, b, off, len);               
}
//...
private void updateBytes( int , byte[] , int , int );
```

---

### Megtörtént Eset: CRC32


Ha `crc.update( new byte[0], 4, Integer.MAX_VALUE-3 );`

```java
public void update( byte[] b, int off, int len){
    if ( b == null ){                                   // off = 4
        throw new NullPointerException();               // len = MAX_INT-3
    }
    if ( off < 0 || len < 0 || off + len > b.length ){  
        throw new ArrayIndexOutOfBoundsException();     
    }                                                   
    crc = updateBytes( crc, b, off, len);               
}
//...
private void updateBytes( int , byte[] , int , int );
```

---

### Megtörtént Eset: CRC32


Ha `crc.update( new byte[0], 4, Integer.MAX_VALUE-3 );`

```java
public void update( byte[] b, int off, int len){
    if ( b == null ){                                   // off = 4
        throw new NullPointerException();               // len = MAX_INT-3
    }
    if ( off < 0 || len < 0 || off + len > b.length ){  // off+len = MIN_INT
        throw new ArrayIndexOutOfBoundsException();     // b.length = 0
    }                                                   // off+len < b.length
    crc = updateBytes( crc, b, off, len);               
}
//...
private void updateBytes( int , byte[] , int , int );
```

---

### Megtörtént Eset: CRC32


Ha `crc.update( new byte[0], 4, Integer.MAX_VALUE-3 );`

```java
public void update( byte[] b, int off, int len){
    if ( b == null ){                                   // off = 4
        throw new NullPointerException();               // len = MAX_INT-3
    }
    if ( off < 0 || len < 0 || off + len > b.length ){  // off+len = MIN_INT
        throw new ArrayIndexOutOfBoundsException();     // b.length = 0
    }                                                   // off+len < b.length
    crc = updateBytes( crc, b, off, len);               // BOOM
}
//...
private void updateBytes( int , byte[] , int , int );
```

---

### Megtörtént Eset: CRC32


Ha `crc.update( new byte[0], 4, Integer.MAX_VALUE-3 );`

```java
public void update( byte[] b, int off, int len){
    if ( b == null ){                                   // off = 4
        throw new NullPointerException();               // len = MAX_INT-3
    }
    if ( off < 0 || len < 0 || off + len > b.length ){  // off+len = MIN_INT
        throw new ArrayIndexOutOfBoundsException();     // b.length = 0
    }                                                   // off+len < b.length
    crc = updateBytes( crc, b, off, len);               // BOOM
}
//...
private void updateBytes( int , byte[] , int , int );
```
> Fix: `if ( off < 0 || len < 0 || off > b.length - len ){`

---

### Path Traversal Vulnerability

---

### Path Traversal Vulnerability

- Az útvonal nem megfelelő validációja

---

### Path Traversal Vulnerability

- *Az útvonal nem megfelelő validációja*
- `../` használata

---

### Path Traversal Vulnerability

- *Az útvonal nem megfelelő validációja*
- *`../` használata*
- `/./` használata

---

### Path Traversal Vulnerability

- *Az útvonal nem megfelelő validációja*
- *`../` használata*
- *`/./` használata*
- Rövid fájlnevek (Windows): `C:\TOPSECRET\` vs `C:\topsec~1\`

---

### Path Traversal Megoldások

---

### Path Traversal Megoldások

- A blacklisting nem megoldás

---

### Path Traversal Megoldások

- *A blacklisting nem megoldás*
- Whitelisteljünk (ha lehet)

---

### Path Traversal Megoldások

- *A blacklisting nem megoldás*
- *Whitelisteljünk (ha lehet)*
- Készítsünk absztrakciót -> fájlnevek helyett azonosítók

---

### Path Traversal Megoldások

- *A blacklisting nem megoldás*
- *Whitelisteljünk (ha lehet)*
- *Készítsünk absztrakciót -> fájlnevek helyett azonosítók*
- Kanonizáció: `java.io.File.getCanonicalPath()` (kitörli a `./`, `../`-t)

---

### Megtörtént Eset: LastPass

---

### Megtörtént Eset: LastPass

- Jelszó mezőket automatikusan kitölti

---

### Megtörtént Eset: LastPass

- *Jelszó mezőket automatikusan kitölti*
- Regex-et használt az autofill eldöntéséhez
  ```javascript
  var fixedURL = URL.match(/^(.*:\/\/[^\/]+\/.*)@/);
  fixedURL && (url = url.substring(0, fixedURL[1].length) +
  url.substring(fixedURL[1].length).replace(/@/g, "%40"));
  ```

---

### Megtörtént Eset: LastPass

- *Jelszó mezőket automatikusan kitölti*
- *Regex-et használt az autofill eldöntéséhez*
  ```javascript
  var fixedURL = URL.match(/^(.*:\/\/[^\/]+\/.*)@/);
  fixedURL && (url = url.substring(0, fixedURL[1].length) +
  url.substring(fixedURL[1].length).replace(/@/g, "%40"));
  ```
- A támadó részleges match esetén jelszót lophatott:
  `http://attacker.com/@twitter.com/@...`

---

### Nem Ellenőrzött Redirect és Forward

---

### Nem Ellenőrzött Redirect és Forward

- A felhasználó által megadott útvonal használata redirecthez
  
  `http://mysite.com/redirect?url=http://www.evil-attacker.com/`

---

### Nem Ellenőrzött Redirect és Forward

- *A felhasználó által megadott útvonal használata redirecthez*
  
  *`http://mysite.com/redirect?url=http://www.evil-attacker.com/`*
- Forwardolás admin oldalra
  
  `http://mysite.com/forward?url=/admin/`

---

### Nem Ellenőrzött Redirect és Forward

- *A felhasználó által megadott útvonal használata redirecthez*
  
  *`http://mysite.com/redirect?url=http://www.evil-attacker.com/`*
- Forwardolás admin oldalra
  
  `http://mysite.com/forward?url=/admin/`
  > Ha közvetlen betöltés történik, az kikerülheti az authorizációt

---

### Nem Biztonságos JNI Hívások

---

### Nem Biztonságos JNI Hívások

- Ha tehetjük, akkor ne használjuk

---

### Nem Biztonságos JNI Hívások

- *Ha tehetjük, akkor ne használjuk*
- Ha a forráskódot módosíthatjuk, akkor javítsuk ki

---

### Nem Biztonságos JNI Hívások

- *Ha tehetjük, akkor ne használjuk*
- *Ha a forráskódot módosíthatjuk, akkor javítsuk ki*
- Egyébként írjunk wrapper-t

---

### Nem Biztonságos JNI Hívások

- *Ha tehetjük, akkor ne használjuk*
- *Ha a forráskódot módosíthatjuk, akkor javítsuk ki*
- *Egyébként írjunk wrapper-t*
- És a wrapper-ben végezzük el a validációt

---

### Nem Biztonságos Reflection

---

### Nem Biztonságos Reflection

#### Tipikus Felhasználás: Command Dispatcher

```java
String cmdName = request.getParameter("cmdName");
Worker worker = null;
if (cmdName.equals("Add")) {
    worker = new AddCommand();
} else if (cmdName.equals("Modify")) {
    worker = new ModifyCommand();
} else {
    throw new UnknownActionError();
}
worker.doAction(request);
```

---

### Nem Biztonságos Reflection

#### Command Dispatcher Reflectionnel

```java
String cmdName = request.getParameter("cmdName");
Class cmdClass = Class.forName(cmdName + "Command");
Worker ao = (Worker) cmdClass.newInstance();
ao.doAction(request);
```

---

### Nem Biztonságos Reflection

#### Command Dispatcher Reflectionnel

```java
String cmdName = request.getParameter("cmdName");
Class cmdClass = Class.forName(cmdName + "Command");
Worker ao = (Worker) cmdClass.newInstance();
ao.doAction(request);
```

> Nincs ellenőrizve a class

---

### Nem Biztonságos Reflection

#### Command Dispatcher Reflectionnel

```java
String cmdName = request.getParameter("cmdName");
Class cmdClass = Class.forName(cmdName + "Command");
Worker ao = (Worker) cmdClass.newInstance();
if (isOfExpectedType(ao)) {
    ao.doAction(request); // whitelisting
}
```

> Ellenőrzés ugyan van, de az osztály példányosul

---

### Nem Biztonságos Reflection

- Vonzó a reflection használata

---

### Nem Biztonságos Reflection

- *Vonzó a reflection használata*
- De nagyon nehéz biztonságossá tenni

---

### Nem Biztonságos Reflection

- *Vonzó a reflection használata*
- *De nagyon nehéz biztonságossá tenni*
- Kerüljük a használatát

---

### Nem Biztonságos Reflection

- *Vonzó a reflection használata*
- *De nagyon nehéz biztonságossá tenni*
- *Kerüljük a használatát*
- Ne függjünk bemeneti paramétertől

---

### Nem Biztonságos Reflection

- *Vonzó a reflection használata*
- *De nagyon nehéz biztonságossá tenni*
- *Kerüljük a használatát*
- *Ne függjünk bemeneti paramétertől*
- Ha mégis szükséges, whitelist-eljünk

---

### Log Forging

---

### Log Forging

```java
private static void parseValue(String val) {
    try {
        int value = Integer.parseInt(val);
    }
    catch (NumberFormatException nfe) {
        LOGGER.info("Failed to parse val=" + val);
    }
}
```

> Mi lehet a probléma?

---

### Log Forging

```java
private static void parseValue(String val) {
    try {
        int value = Integer.parseInt(val);
    }
    catch (NumberFormatException nfe) {
        LOGGER.info("Failed to parse val=" + val);
    }
}
```

> `parseValue("one\nUser logged out")`

---

### Log Forging

```java
17:04:44.797 [main] INFO c.t.s._.LogForging - Failed to parse val=one
User logged out
```

---

### Log Forging

- Monitoring eszközöket triggerelhet

---

### Log Forging

- *Monitoring eszközöket triggerelhet*
- Webes log olvasóknál XSS lehetséges

---

### Log Forging

- *Monitoring eszközöket triggerelhet*
- *Webes log olvasóknál XSS lehetséges*
- Validálás szükséges
  - Whitelist
  - Escaping
  - Regex

---

### Log Forging

#### Lehetséges Megoldás

```java
private static void secureParseValue(String val) {
    try {
        int value = Integer.parseInt(val);
    } catch (NumberFormatException nfe) {
        if (Pattern.matches("[A-Za-z0-9_]+", val)) {
            LOGGER.info("Failed to parse val=" + val);
        } else {
            LOGGER.info("User input failed!");
        }
    }
}
```

---

### Log Forging

#### Tipikus Hibák

---

### Log Forging

#### Tipikus Hibák

- Szenzitív információ megjelenítése

---

### Log Forging

#### Tipikus Hibák

- *Szenzitív információ megjelenítése*
  - Ottfelejtett debug üzenetek

---

### Log Forging

#### Tipikus Hibák

- *Szenzitív információ megjelenítése*
  - *Ottfelejtett debug üzenetek*
  - Jelszavak

---

### Log Forging

#### Tipikus Hibák

- *Szenzitív információ megjelenítése*
  - *Ottfelejtett debug üzenetek*
  - *Jelszavak*
- Nem authorizált felhasználók hozzáférése

---

### Log Forging

#### Tipikus Hibák

- *Szenzitív információ megjelenítése*
  - *Ottfelejtett debug üzenetek*
  - *Jelszavak*
- *Nem authorizált felhasználók hozzáférése*
- Tárhely túlcsordulás logfájlok miatt

---