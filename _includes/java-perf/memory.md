name: memory

# {{ include.title }}
## {{ include.subtitle }}

---

## A Java Memória Modell (JMM)

---

## A Java Memória Modell (JMM)

- Változók közötti összefüggés leírása

---

## A Java Memória Modell (JMM)

- *Változók közötti összefüggés leírása*
- Szálak közötti láthatósági szabályok definíciója

---

## A Java Memória Modell (JMM)

- *Változók közötti összefüggés leírása*
- *Szálak közötti láthatósági szabályok definíciója*
- és szabályozása (`synchronized` és `volatile`)

---

## Memória Kezelési Szabályok

---

## Memória Kezelési Szabályok

- A fordító átrendezheti a műveleteket

---

## Memória Kezelési Szabályok

- *A fordító átrendezheti a műveleteket*
- ha az nem sérti a program szemantikáját

---

## Memória Kezelési Szabályok

- *A fordító átrendezheti a műveleteket*
- *ha az nem sérti a program szemantikáját*
- A processzor átrendezheti a műveletek sorrendjét

---

## Memória Kezelési Szabályok

- *A fordító átrendezheti a műveleteket*
- *ha az nem sérti a program szemantikáját*
- *A processzor átrendezheti a műveletek sorrendjét*
- A cache átrendezheti a memóriába írás sorrendjét

---

## Synchronized

---

## Synchronized

- Mutex (mutual exclusion)

---

## Synchronized

- *Mutex (mutual exclusion)*
- Cache invalidáció mielőtt belépünk

---

## Synchronized

- *Mutex (mutual exclusion)*
- *Cache invalidáció mielőtt belépünk*
- Cache flush miután kilépünk

---

## Synchronized

- *Mutex (mutual exclusion)*
- *Cache invalidáció mielőtt belépünk*
- *Cache flush miután kilépünk*
- Ugyanazon monitoron belül konzisztens memória

---

## Synchronized

- *Mutex (mutual exclusion)*
- *Cache invalidáció mielőtt belépünk*
- *Cache flush miután kilépünk*
- *Ugyanazon monitoron belül konzisztens memória*
- A fordító nem vesz ki műveletet a blokkból

---

## Volatile

---

## Volatile

- Kikapcsolja a cachelést

---

## Volatile

- *Kikapcsolja a cachelést*
- Változtatások rögtön a központi memóriába mennek

---

## Volatile

- *Kikapcsolja a cachelést*
- *Változtatások rögtön a központi memóriába mennek*
- Irása/olvasása nem átrendezhető

---

## Happens-Before

---

## Happens-Before

- Szálon belüli instrukciók rendezettek

---

## Happens-Before

- *Szálon belüli instrukciók rendezettek*
- Egy monitoron belüli unlock a következő lock előtt történik

---

## Happens-Before

- *Szálon belüli instrukciók rendezettek*
- *Egy monitoron belüli unlock a következő lock előtt történik*
- Egy `volatile` mező írása mindig az utána következő olvasás előtt történik

---

## Happens-Before

- *Szálon belüli instrukciók rendezettek*
- *Egy monitoron belüli unlock a következő lock előtt történik*
- *Egy `volatile` mező írása mindig az utána következő olvasás előtt történik*
- A `Thread.start` mindig a szálon belüli műveletek előtt történik

---

## Happens-Before

- *Szálon belüli instrukciók rendezettek*
- *Egy monitoron belüli unlock a következő lock előtt történik*
- *Egy `volatile` mező írása mindig az utána következő olvasás előtt történik*
- *A `Thread.start` mindig a szálon belüli műveletek előtt történik*
- Egy szál minden művelete az arra várakozó szálak (`join`) visszatérése előtt történik

---

[](Forrás: https://www.baeldung.com/java-stack-heap)

## Memória Elrendezés

---

## Memória Elrendezés

- Stack

---

## Memória Elrendezés

- *Stack*
- Heap

---

## Memória Elrendezés

- *Stack*
- *Heap*
- Off-Heap

---

## A Stack

Thread-ek metaadatát és a hozzájuk tartozó objektum referenciákat tárolja, valamint **primitíveket**.

---

## A Stack

- LIFO

---

## A Stack

- *LIFO*
- Mérete metódushívásonként változik

---

## A Stack

- *LIFO*
- *Mérete metódushívásonként változik*
- A létrehozott változók metódushoz tartoznak

---

## A Stack

- *LIFO*
- *Mérete metódushívásonként változik*
- *A létrehozott változók metódushoz tartoznak*
- Automatikus allokáció / deallokáció

---

## A Stack

- *LIFO*
- *Mérete metódushívásonként változik*
- *A létrehozott változók metódushoz tartoznak*
- *Automatikus allokáció / deallokáció*
- Ha megtelik, akkor `StackOverflowError`-t kapunk

---

## A Stack

- *LIFO*
- *Mérete metódushívásonként változik*
- *A létrehozott változók metódushoz tartoznak*
- *Automatikus allokáció / deallokáció*
- *Ha megtelik, akkor `StackOverflowError`-t kapunk*
- Gyorsabb, mint a Heap

---

## A Stack

- *LIFO*
- *Mérete metódushívásonként változik*
- *A létrehozott változók metódushoz tartoznak*
- *Automatikus allokáció / deallokáció*
- *Ha megtelik, akkor `StackOverflowError`-t kapunk*
- *Gyorsabb, mint a Heap*
- Thread-safe (minden Thread-nek külön stack-je van)

---

## A Stack

> Egy érdekesség: **tail call optimization**

---

## A Heap

Java objektumokat tárol.

---

## A Heap

- JVM által menedzselt

---

## A Heap

- *JVM által menedzselt*
- Ha megtelik `OutOfMemoryError` dobódik

---

## A Heap

- *JVM által menedzselt*
- *Ha megtelik `OutOfMemoryError` dobódik*
- Lassabb, mint a Stack

---

## A Heap

- *JVM által menedzselt*
- *Ha megtelik `OutOfMemoryError` dobódik*
- *Lassabb, mint a Stack*
- Garbage Collector deallokál

---

## A Heap

- *JVM által menedzselt*
- *Ha megtelik `OutOfMemoryError` dobódik*
- *Lassabb, mint a Stack*
- *Garbage Collector deallokál*
- Nem Thread-safe

---

## A Heap Felépítése

![JVM Heap](/assets/img/jvm_heap.png)

---

## Off-Heap Adatstruktúrák

Átmenet a Heap és egy in-memory adatbázis között.

---

## Off-Heap Adatstruktúrák

- [MapDB](http://www.mapdb.org/)

---

## Off-Heap Adatstruktúrák

- *[MapDB](http://www.mapdb.org/)*
- [OHC](https://github.com/snazy/ohc)

---

## Off-Heap Adatstruktúrák

- *[MapDB](http://www.mapdb.org/)*
- *[OHC](https://github.com/snazy/ohc)*
- [Ignite](https://ignite.apache.org/)

---

## Off-Heap Adatstruktúrák

- *[MapDB](http://www.mapdb.org/)*
- *[OHC](https://github.com/snazy/ohc)*
- *[Ignite](https://ignite.apache.org/)*
- [Geode](https://geode.apache.org/)

---

## Off-Heap Adatstruktúrák

- *[MapDB](http://www.mapdb.org/)*
- *[OHC](https://github.com/snazy/ohc)*
- *[Ignite](https://ignite.apache.org/)*
- *[Geode](https://geode.apache.org/)*
- [Kryo](https://github.com/EsotericSoftware/kryo)

---