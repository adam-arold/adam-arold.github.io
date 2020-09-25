name: jvm-tuning

# {{ include.title }}
## {{ include.subtitle }}

---

## A JVM Felépítése

![Hotspot JVM](/assets/img/HotSpotArchitecture.png)

---

## Class Loader

A program futásához szükséges classok betöltéséért felelős osztály.

---

## JIT (Just in Time) Compiler

---

## JIT (Just in Time) Compiler

- Feladata teljesítményoptimalizálás

---

## JIT (Just in Time) Compiler

- *Feladata teljesítményoptimalizálás*
- Generálhat natív kódot

---


## JIT (Just in Time) Compiler

- *Feladata teljesítményoptimalizálás*
- *Generálhat natív kódot*
- Optimizálja a kódot, ami fordul

---

## Hogyan Optimizál a JIT?

- Inlining

---

## Hogyan Optimizál a JIT?

- *Inlining*
- Lokális

---

## Hogyan Optimizál a JIT?

- *Inlining*
- *Lokális*
- Globális

---

## Hogyan Optimizál a JIT?

- *Inlining*
- *Lokális*
- *Globális*
- Natív kód generálás

---

## Hogyan Optimizál a JIT?

- *Inlining*
- *Lokális*
- *Globális*
- *Natív kód generálás*
- ...

---

## GC (Garbage Collector)

Az alkalmazás dinamikus memóriáját kezeli (Heap)

---

## A GC Feladatai

---

## A GC Feladatai

- Memória allokáció és deallokáció (OS)

---

## A GC Feladatai

- *Memória allokáció és deallokáció (OS)*
- Memória kiadása az applikációnak

---

## A GC Feladatai

- *Memória allokáció és deallokáció (OS)*
- *Memória kiadása az applikációnak*
- Meghatározza mely memóriaterületek vannak még használatban

---

## A GC Feladatai

- *Memória allokáció és deallokáció (OS)*
- *Memória kiadása az applikációnak*
- *Meghatározza mely memóriaterületek vannak még használatban*
- Visszaveszi a már nem használt memóriát

---

## Miért Fontos a Stratégia?

![GC Throughput](/assets/img/gc_time.png)

---

## Teljesítményhangolási Stratégia

---

## Teljesítményhangolási Stratégia

1. Bottleneckek megkeresése

---

## Teljesítményhangolási Stratégia

1. *Bottleneckek megkeresése*
2. A legjelentősebb javítása

---

## Teljesítményhangolási Stratégia

1. *Bottleneckek megkeresése*
2. *A legjelentősebb javítása*
3. Ismétlés

---

## Mit Figyeljünk?

---

## Mit Figyeljünk?

- CPU

---

## Mit Figyeljünk?

- *CPU*
- Memória

---

## Mit Figyeljünk?

- *CPU*
- *Memória*
- I/O

---

## Mit Tuningoljunk?

---

## Mit Tuningoljunk?

- Párhuzamosítsuk ami futhat a háttérben

---

## Mit Tuningoljunk?

- *Párhuzamosítsuk ami futhat a háttérben*
- Streameljük az adatot

---

## Mit Tuningoljunk?

- *Párhuzamosítsuk ami futhat a háttérben*
- *Streameljük az adatot*
- Cacheljük amit lehet (és érdemes)

---

## Eszközök

---

## Eszközök

### Profiler

---

## Eszközök

### Profiler

- VisualVM

---

## Eszközök

### Profiler

- *VisualVM*
- YourKit

---

## Eszközök

### Profiler

- *VisualVM*
- *YourKit*
- ...

---

## Eszközök

### Memória Elemző

[Eclipse Memory Analyzer](https://www.eclipse.org/mat/)

---

## Eszközök

### APM (Application Performance Monitoring)

---

## Profilozás

**(Gyakorlat)**

---

## Memória Elemzés

**(Gyakorlat)**

---

## Optimalizálási Technikák

---

## Optimalizálási Technikák

Weak Reference

---

## Optimalizálási Technikák

Lazy Initialization

---

## Optimalizálási Technikák

Kerüljük az accessor-okat

---

## Optimalizálási Technikák

Preferáljuk a lokális változókat

---

## Optimalizálási Technikák

Használjunk primitív típusokat

---

## Optimalizálási Technikák

Ciklus Ellenőrzés Függvények Nélkül

---

## Optimalizálási Technikák

Használjunk System.arraycopy-t

---

## Optimalizálási Technikák

Használjunk hatékony összehasonlításokat

---

## Optimalizálási Technikák

Ne használjunk reflection-t

---

## Optimalizálási Technikák

Kerüljük a rekurziót

---

## Optimalizálási Technikák

Megfelelő logging használata

---

## Optimalizálási Technikák

System.out Felülírása

---

## Optimalizálási Technikák

Használjunk NIO-t

---

## Optimalizálási Technikák

Párhuzamosítsuk az I/O-t, ahol lehet

---

## Optimalizálási Technikák

Kerüljük a fölösleges rendezést

---

## Optimalizálási Technikák

Hatékony Serialization

![Serialization](/assets/img/serialization.png)

---

## Optimalizálási Technikák

Csökkentsük a ciklusok méretét

**Példa**: [Game of Life](https://codereview.stackexchange.com/questions/42718/optimize-conways-game-of-life)

---

## JVM Tuning

---

## JVM Tuning

### GC Kiválasztása

Serial Garbage Collector

Használata: `-XX:+UseSerialGC`

---

## JVM Tuning

### GC Kiválasztása

Serial Garbage Collector

- 1 szálon fut

---

## JVM Tuning

### GC Kiválasztása

Serial Garbage Collector

- *1 szálon fut*
- Megáll az alkalmazás futása amikor dolgozik

---

## JVM Tuning

### GC Kiválasztása

Serial Garbage Collector 

- *1 szálon fut*
- *Megáll az alkalmazás futása amikor dolgozik*
- Ideális, ha nem gond a megállás

---

## JVM Tuning

### GC Kiválasztása

Parallel Garbage Collector

Használata: `-XX:+UseParallelGC`

---

## JVM Tuning

### GC Kiválasztása

Parallel Garbage Collector

- Több szálon dolgozik

---

## JVM Tuning

### GC Kiválasztása

Parallel Garbage Collector

- *Több szálon dolgozik*
- Megáll az alkalmazás futása amikor dolgozik

---

## JVM Tuning

### GC Kiválasztása

Parallel Garbage Collector

- *Több szálon dolgozik*
- *Megáll az alkalmazás futása amikor dolgozik*
- Thread-ek számának szabályozása: `-XX:ParallelGCThreads`

---

## JVM Tuning

### GC Kiválasztása

Parallel Garbage Collector

- *Több szálon dolgozik*
- *Megáll az alkalmazás futása amikor dolgozik*
- *Thread-ek számának szabályozása: `-XX:ParallelGCThreads`*
- 2 GC közötti maximum idő: `-XX:MaxGCPauseMillis`

---

## JVM Tuning

### GC Kiválasztása

Parallel Garbage Collector

- *Több szálon dolgozik*
- *Megáll az alkalmazás futása amikor dolgozik*
- *Thread-ek számának szabályozása: `-XX:ParallelGCThreads`*
- *2 GC közötti maximum idő: `-XX:MaxGCPauseMillis`*
- Maximum throughput cél: `-XX:GCTimeRatio`

---

## JVM Tuning

### GC Kiválasztása

Concurrent Mark Sweep GC

Használata: `-XX:+UseParNewGC`

---

## JVM Tuning

### GC Kiválasztása

Concurrent Mark Sweep GC

- Több szálon fut

---

## JVM Tuning

### GC Kiválasztása

Concurrent Mark Sweep GC

- *Több szálon fut*
- Nem áll meg az alkalmazás amíg a GC fut

---

## JVM Tuning

### GC Kiválasztása

Concurrent Mark Sweep GC

- *Több szálon fut*
- *Nem áll meg az alkalmazás amíg a GC fut*
- Viszont lassabb lesz

---

## JVM Tuning

### GC Kiválasztása

Concurrent Mark Sweep GC

- *Több szálon fut*
- *Nem áll meg az alkalmazás amíg a GC fut*
- *Viszont lassabb lesz*
- **Deprecated**

---

## JVM Tuning

### GC Kiválasztása

G1 Garbage Collector

Használata: `-XX:+UseG1GC`

---

## JVM Tuning

### GC Kiválasztása

G1 Garbage Collector

- CMS-t váltja

---

## JVM Tuning

### GC Kiválasztása

G1 Garbage Collector

- *CMS-t váltja*
- Hatékonyabb

---

## JVM Tuning

### GC Kiválasztása

Z Garbage Collector

Használata: `-XX:+UseZGC`

---

## JVM Tuning

### GC Kiválasztása

Z Garbage Collector

- Kísérleti

---

## JVM Tuning

### GC Kiválasztása

Z Garbage Collector

- *Kísérleti*
- Jól skálázódik

---

## JVM Tuning

### GC Kiválasztása

Z Garbage Collector

- *Kísérleti*
- *Jól skálázódik*
- Alacsony latency

---

## JVM Tuning

### GC Kiválasztása

Z Garbage Collector

- *Kísérleti*
- *Jól skálázódik*
- *Alacsony latency*
- Max 10ms pause

---

## JVM Tuning

### GC Loggolás

---

## JVM Tuning

### GC Loggolás

```java
-XX:+UseGCLogFileRotation       // log file rotáció használata
-XX:NumberOfGCLogFiles=10       // log fájlok száma
-XX:GCLogFileSize=50M           // log fájlok mérete
-Xloggc:/home/user/log/gc.log   // log fájl helye
```

---

## JVM Tuning

### Memória Tuning

`-Xms` és `-Xmx`

Minimum és maximum Heap méret beállítása

**Példa:** `-Xms1G -Xmx2G`

---

## JVM Tuning

### Memória Tuning

`-XX:MaxMetaspaceSize`

Metaspace méretének a beállítása

**Példa:** `-XX:MaxMetaspaceSize=1G`

---

## JVM Tuning

### Memória Tuning

`-XX:MinMetaspaceFreeRatio`

Alapértelmezett: 40. Növelésével gyorsabban növekszik a Metaspace.

---

## JVM Tuning

### Memória Tuning

`-XX:MaxMetaspaceFreeRatio`

Alapértelmezett: 70. Növelésével kisebb az esély a Metaspace csökkenésére.

---

## JVM Tuning

### Memória Tuning

`-XX:NewSize` és `-XX:MaxNewSize`

Young Generation méretének a beállítása.

**Példa:** `-XX:NewSize=1G`

---

## JVM Tuning

### Memória Tuning

`-XX:LargePageSizeInBytes`: page size állítása

---

## JVM Tuning

### Memória Tuning

`-XX:SurvivorRatio`: eden/survivor arány állítása

---

## JVM Tuning

### Memória Tuning

`-XX:+UseLargePages`: nagy page memory használata

---

## JVM Tuning

### Memória Tuning

`-XX:+UseCompressedOops`: 32 bites referenciák (64 bit helyett). Alapértelmezettként be van kapcsolva.

---

## JVM Tuning

### Memória Tuning

`-XX:+UseCompressedClassPointers`: 32 bites class referenciák. Alapértelmezettként be van kapcsolva.

---

## JVM Tuning

### Memória Tuning

Memóriahibák felderítése

```java
-XX:+HeapDumpOnOutOfMemoryError         // heapdump készítése ha OOM
-XX:HeapDumpPath=./java_pid<pid>.hprof  // hova készüljön
-XX:OnOutOfMemoryError="echo 'oops'"    // parancs, ha OOM
-XX:+UseGCOverheadLimit                 // GC-ben töltött idő limitálása
```

---

## JVM Tuning

### Startup Gyorsítása

---

## JVM Tuning

### Startup Gyorsítása

```java
-XX:TieredStopAtLevel=1 // kevesebb JIT, gyorsabb startup
-XX:CICompilerCount=1   // 1 compiler thread
-XX:+UseSerialGC        // serial GC használata
-Xmx512m                // heap felhasználás csökkentése
-Xshare:on              // Class Data Sharing bekapcsolása (java -Xshare:dump kell)

```

---

## JVM Tuning

### Egyéb Paraméterek

---

## JVM Tuning

### Egyéb Paraméterek

`-server`: Szerver futtatásához

---

## JVM Tuning

### Egyéb Paraméterek

`-XX:+UseStringDeduplication`: duplikált `String`-ek ellen

---

## JVM Tuning

### Egyéb Paraméterek

`-XX:+UseLWPSynchronization`: szinkronizációs stratégia állítása

---

## JVM Tuning

### Alternatív Virtuális Gépek

---

