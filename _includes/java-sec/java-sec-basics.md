name: java-sec-basics

# {{ include.title }}
## {{ include.subtitle }}

---

### A Java Részei

---

### A Java Részei

- A **Java** nyelv

---

### A Java Részei

- *A **Java** nyelv*
- JVM

---

### A Java Részei

- *A **Java** nyelv*
- *JVM*
- JDK

---

### Java Biztonság

- Alacsony szintű biztonság

---

### Java Biztonság

- *Alacsony szintű biztonság*
    - A Java nyelv biztonsága

---

### Java Biztonság

- *Alacsony szintű biztonság*
    - *A Java nyelv biztonsága*
    - Biztonságos futtatókörnyezet

---

### Java Biztonság

- *Alacsony szintű biztonság*
    - *A Java nyelv biztonsága*
    - *Biztonságos futtatókörnyezet*
- Magas szintű biztonság: hozzáférhetőség

---

### Java Biztonság

- *Alacsony szintű biztonság*
    - *A Java nyelv biztonsága*
    - *Biztonságos futtatókörnyezet*
- *Magas szintű biztonság: hozzáférhetőség*
- Szolgáltatások

---

### Java Biztonság

- *Alacsony szintű biztonság*
    - *A Java nyelv biztonsága*
    - *Biztonságos futtatókörnyezet*
- *Magas szintű biztonság: hozzáférhetőség*
- *Szolgáltatások*
    - Authentikáció és Authorizáció

---

### Java Biztonság

- *Alacsony szintű biztonság*
    - *A Java nyelv biztonsága*
    - *Biztonságos futtatókörnyezet*
- *Magas szintű biztonság: hozzáférhetőség*
- *Szolgáltatások*
    - *Authentikáció és Authorizáció*
    - Kriptográfia

---

### Java Biztonság

- *Alacsony szintű biztonság*
    - *A Java nyelv biztonsága*
    - *Biztonságos futtatókörnyezet*
- *Magas szintű biztonság: hozzáférhetőség*
- *Szolgáltatások*
    - *Authentikáció és Authorizáció*
    - *Kriptográfia*
    - Kommunikáció

---

### Java Biztonság

- *Alacsony szintű biztonság*
    - *A Java nyelv biztonsága*
    - *Biztonságos futtatókörnyezet*
- *Magas szintű biztonság: hozzáférhetőség*
- *Szolgáltatások*
    - *Authentikáció és Authorizáció*
    - *Kriptográfia*
    - *Kommunikáció*
    - Public Key Infrastructure (PKI)

---

### A Java Környezet

---

### A Java Környezet

- Objektum orientált

---

### A Java Környezet

- *Objektum orientált*
- Típusbiztos

---

### A Java Környezet

- *Objektum orientált*
- *Típusbiztos*
- Több szálon fut

---

### A Java Környezet

- *Objektum orientált*
- *Típusbiztos*
- *Több szálon fut*
- Garbage Collector

---

### A Java Környezet

- *Objektum orientált*
- *Típusbiztos*
- *Több szálon fut*
- *Garbage Collector*
- Nincsenek pointerek

---

### A Java Környezet

- *Objektum orientált*
- *Típusbiztos*
- *Több szálon fut*
- *Garbage Collector*
- *Nincsenek pointerek*
- Kivételkezelés

---

### A Java Környezet

- *Objektum orientált*
- *Típusbiztos*
- *Több szálon fut*
- *Garbage Collector*
- *Nincsenek pointerek*
- *Kivételkezelés*
- Range-checking tömbökön

---

### A Java Környezet

- *Objektum orientált*
- *Típusbiztos*
- *Több szálon fut*
- *Garbage Collector*
- *Nincsenek pointerek*
- *Kivételkezelés*
- *Range-checking tömbökön*
- **Nincs** `goto`, `struct`, union type, operator overloading, multiple inheritance

---

### Típusbiztonság

---

### Típusbiztonság

- Minden művelet csak kompatibilis típusokra alkalmazható

---

### Típusbiztonság

- *Minden művelet csak kompatibilis típusokra alkalmazható*
- Nincsenek pointerek: helyette referenciák, szimbolikus nevekkel

---

### Típusbiztonság

- *Minden művelet csak kompatibilis típusokra alkalmazható*
- *Nincsenek pointerek: helyette referenciák, szimbolikus nevekkel*
- Range ellenőrzés

---

### Típusbiztonság

- *Minden művelet csak kompatibilis típusokra alkalmazható*
- *Nincsenek pointerek: helyette referenciák, szimbolikus nevekkel*
- *Range ellenőrzés*
- Inicializálatlan lokális változókat nem lehet használni

---

### Automatikus Memóriakezelés

---

### Automatikus Memóriakezelés

- A nem használt referenciák automatikusan felszabadulnak

---

### Automatikus Memóriakezelés

- *A nem használt referenciák automatikusan felszabadulnak*
- A felszabadított objektumokhoz nincs már hozzáférés

---

### Automatikus Memóriakezelés

- *A nem használt referenciák automatikusan felszabadulnak*
- A felszabadított objektumokhoz nincs már hozzáférés (vagy mégis?)

???

Kérdezzünk rá a Phantom reference-re

---

### Automatikus Memóriakezelés

- *A nem használt referenciák automatikusan felszabadulnak*
- *A felszabadított objektumokhoz nincs már hozzáférés (vagy mégis?)*
- Nincs memory leak

---

### Automatikus Memóriakezelés

- *A nem használt referenciák automatikusan felszabadulnak*
- *A felszabadított objektumokhoz nincs már hozzáférés (vagy mégis?)*
- Nincs memory leak ([vagy mégis?](https://adam-arold.github.io/presentations/java-teljesitmenyhangolas.html#232))

???

Kérdezzünk rá hogy lehet memory leak-et előidézni

---

### Automatikus Memóriakezelés

- *A nem használt referenciák automatikusan felszabadulnak*
- *A felszabadított objektumokhoz nincs már hozzáférés (vagy mégis?)*
- *Nincs memory leak (vagy mégis?)*
- Nincs overflow

---

### Automatikus Memóriakezelés

- *A nem használt referenciák automatikusan felszabadulnak*
- *A felszabadított objektumokhoz nincs már hozzáférés (vagy mégis?)*
- *Nincs memory leak (vagy mégis?)*
- Nincs overflow (vagy mégis?)

???

Nézzünk meg pár példát lehetséges overflowra

---

### A Java Futási Modell

![Java Futási Modell](/assets/img/java_execution_security.svg)

---

### Bytecode Verifier

---

### Bytecode Verifier

- A bájtkód és a fordító nem megbízható

---

### Bytecode Verifier

- *A bájtkód és a fordító nem megbízható*
- Ellenőrzi

---

### Bytecode Verifier

- *A bájtkód és a fordító nem megbízható*
- *Ellenőrzi*
    - A class formátumát

---

### Bytecode Verifier

- *A bájtkód és a fordító nem megbízható*
- *Ellenőrzi*
    - *A class formátumát*
    - A stack overflow és underflow eseteket

---

### Bytecode Verifier

- *A bájtkód és a fordító nem megbízható*
- *Ellenőrzi*
    - *A class formátumát*
    - *A stack overflow és underflow eseteket*
    - A bájtkód parancsokat

---

### Bytecode Verifier

- *A bájtkód és a fordító nem megbízható*
- *Ellenőrzi*
    - *A class formátumát*
    - *A stack overflow és underflow eseteket*
    - *A bájtkód parancsokat*
    - Az illegális adatkonverziókat (cast)

---

### Bytecode Verifier

- *A bájtkód és a fordító nem megbízható*
- *Ellenőrzi*
    - *A class formátumát*
    - *A stack overflow és underflow eseteket*
    - *A bájtkód parancsokat*
    - *Az illegális adatkonverziókat (cast)*
    - A módosító kulcsszavakat (private, public, protected, default)

---

### Bytecode Verifier

- *A bájtkód és a fordító nem megbízható*
- *Ellenőrzi*
    - *A class formátumát*
    - *A stack overflow és underflow eseteket*
    - *A bájtkód parancsokat*
    - *Az illegális adatkonverziókat (cast)*
    - *A módosító kulcsszavakat (private, public, protected, default)*
    - A regiszter hozzáféréseket 

---

### Class Loader

---

### Class Loader

- Megkeresi és betölti a class fájlokat

---

### Class Loader

- *Megkeresi és betölti a class fájlokat*
- Együttműködik a Security Manager-rel és az Access Controllerrel

---

### Class Loader

- *Megkeresi és betölti a class fájlokat*
- *Együttműködik a Security Manager-rel és az Access Controllerrel*
- Ismeri a class forrását (url, aláírások, stb)

---

### Bájtkód Védelem

---

### Bájtkód Védelem

- Könnyű viszafejteni (Bytecode decompiler)

---

### Bájtkód Védelem

- *Könnyű viszafejteni (Bytecode decompiler)*
- Aláírható (sign)

---

### Bájtkód Védelem

- *Könnyű viszafejteni (Bytecode decompiler)*
- *Aláírható (sign)*
- Titkosítás (csak átküldés közben)

---

### Bájtkód Védelem

- *Könnyű viszafejteni (Bytecode decompiler)*
- *Aláírható (sign)*
- *Titkosítás (csak átküldés közben)*
- Obfuszkáció (megnehezíti a visszafejtést)

---

### Obfuszkációs Módszerek

---

### Obfuszkációs Módszerek

- Strukturális átalakítás

---

### Obfuszkációs Módszerek

- *Strukturális átalakítás*
- Adattranszformációk

---

### Obfuszkációs Módszerek

- *Strukturális átalakítás*
- *Adattranszformációk*
- Control transzformációk

---

### Obfuszkációs Módszerek

- *Strukturális átalakítás*
- *Adattranszformációk*
- *Control transzformációk*
- Text encoding

---

### Obfuszkációs Módszerek

- *Strukturális átalakítás*
- *Adattranszformációk*
- *Control transzformációk*
- *Text encoding*
- ProGuard

---

### Obfuszkációs Módszerek

- *Strukturális átalakítás*
- *Adattranszformációk*
- *Control transzformációk*
- *Text encoding*
- ProGuard (Java 1.7!!)

---

## Magas Szintű Biztonság

---

### Protection Domain

---

### Protection Domain

- Összeköti a kód forrását egy jogosultsággal

---

### Protection Domain

- *Összeköti a kód forrását egy jogosultsággal*
- A ClassLoader adja hozzá az osztályhoz

---

### Protection Domain

- *Összeköti a kód forrását egy jogosultsággal*
- *A ClassLoader adja hozzá az osztályhoz*
- Rendszerszintű jogosultságok

---

### Protection Domain

- *Összeköti a kód forrását egy jogosultsággal*
- *A ClassLoader adja hozzá az osztályhoz*
- *Rendszerszintű jogosultságok*
    - `FilePermission`

---

### Protection Domain

- *Összeköti a kód forrását egy jogosultsággal*
- *A ClassLoader adja hozzá az osztályhoz*
- *Rendszerszintű jogosultságok*
    - *`FilePermission`*
    - `PropertyPermission`

---

### Protection Domain

- *Összeköti a kód forrását egy jogosultsággal*
- *A ClassLoader adja hozzá az osztályhoz*
- *Rendszerszintű jogosultságok*
    - *`FilePermission`*
    - *`PropertyPermission`*
    - `SocketPermission`

---

### Protection Domain

- *Összeköti a kód forrását egy jogosultsággal*
- *A ClassLoader adja hozzá az osztályhoz*
- *Rendszerszintű jogosultságok*
    - *`FilePermission`*
    - *`PropertyPermission`*
    - *`SocketPermission`*
    - ...

---

### Protection Domain

- *Összeköti a kód forrását egy jogosultsággal*
- *A ClassLoader adja hozzá az osztályhoz*
- *Rendszerszintű jogosultságok*
    - *`FilePermission`*
    - *`PropertyPermission`*
    - *`SocketPermission`*
    - *...*
- Alkalmazás által definiált jogosultságok

---

### Security Manager és Access Controller

![Access Control](/assets/img/access_control.svg)

---

### Security Manager és Access Controller

#### Példa

---