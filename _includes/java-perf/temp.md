- [x] Bevezető                                                                      25
    - Mi is az a performancia?
    - Problémakategóriák
        - Algoritmus
        - Adatstruktúra
        - Párhuzamosítás
        - Streaming
        - Memória Optimalizálás
        - JVM Tuning

- [ ] Átvezető: Aszimptotikus komplexitás
    - Pár ismert algoritmus és adatstruktúra szemléltetése
- [ ] A Megfelelő Algoritmus Kiválasztása
    - Divide & Conquer
      Rekurzió és dinamikus programozás, részplroblémák egyesítése
      *Példa*: fibonacci
    - Általánosítás
      Létezik-e egy általános algoritmus, aminek speciális esete a problémánk?
      *Példa*:
    - Adatstruktúrák
      Alkalmazható a problémánkra egy létező adatstruktúra?
      *Példa*: Trie szöveges keresésre
    - Egyszerűsítés
      Biztos, hogy a *legjobb* megoldást keressük?
      *Esettanulmány*: Liligo 49-es matrix
    - Gráfelmélet
      Alkalmazható a problémára egy gráfelméleti megoldás?
      *Esettanulmány*: Kérdőívkitöltő programhoz topológiai rendezés
    - Párhuzamosítás
      Szétbontható-e a probléma párhuzamosítható feladatokra?
      *Példa*: szövegfeldolgozás (Map reduce?)
    - Cachelés
      Elmenthetők-e részeredmények?
      *Példa*: Statikus HTML tartalmak
- [ ] Adatstruktúrák
    - Keresés Rendezett Adatstruktúrákban
    - `LinkedList` vs `ArrayList`
    - `TreeMap` felhasználási területei
    - Keresés `List` vs `Map`
    - Lookup-ok létrehozása
    - Halmazok (`Set`) használata, metszetek és úniók
    - Gráfok használata
    - Keresőfák
- [ ] Párhuzamosítás
    - `Executor` használata: `Future`, `Callable`, `CompletableFuture`
    - Konkurrens adatstruktúrák: `ConcurrentMap`, `BlockingQueue`, `CopyOnWriteArrayList`
    - Perzisztens adatstruktúrák (HAMT, CHAMP)
    - Concurrency primitívek: `Lock`, `Condition`, `Atomic*`, `CountDownLatch`, `CyclicBarrier`
    - Deadlock, livelock, race condition
    - Lockoljunk vagy ne lockoljunk?
    - Load Balancing
    - `synchronized` variációk vs natív implementációk (`ConcurrentHashMap`)
    - `Date` nem thread safe
- [ ] Streaming
    - Stream API
    - `Publisher`, `Subscriber`, `Flow`, `Processor`
    - Aszinkron programozás
    - Reaktív Fejlesztés
    - `InputStream`, `OutputStream`: (Esettanulmány: excel fájlok generálása JIRA pluginben)
- [ ] Memória Optimalizálás
    - A Java memóriamodell
    - Objektumok helyfoglalása
    - Off-heap adatstruktúrák
- [ ] JVM Tuning
    - JVM részeinek áttekintése: runtime, garbage collector, JIT
    - Tuningolás Módszertan
        - Bottleneckek megkeresése
        - A legjelentősebb javítása
        - Ismétlés
    - Mit Figyeljünk: CPU, Memória, I/O
    - Mit Tuningoljunk?
        - Párhuzamosítsuk ami futhat a háttérben
        - Streameljük az adatot
        - Cacheljük amit lehet (és érdemes)
    - Profiling
        - Eszközök:
            - VisualVM
            - YourKit
            - Eclipse Memory Analyzer
        - Mit nézzünk?
            - GC után megmaradt objektumok a memóriában
            - Új objektumok
            - Memóriahasználat
    - Technikák
        - Object Pooling
        - Weak Reference
        - Lazy Initialization
        - Objektumok Preallokálása
        - Accessor-ok kerülése
        - Exceptionok újrahasználása
        - Castolás kerülése
        - Lokális változók preferálása
        - Primitív típusok használata
        - Ciklusok méretcsökkentése (példa: Game of Life)
        - Ciklus kilépés ellenőrzésnél ne használjunk függvényeket
        - System.arraycopy
        - Használjunk hatékony összehasonlításokat
        - Short circuit kihasználása (leggyakoribb eset elől)
        - Ne használjunk reflection-t
        - Exception terminated loop (ajjaj)
        - Rekurzió kerülése
        - Direkt loggolás kerülése (I/O)
        - System.out felülírása
        - Megfelelő serialization library használata
        - NIO használata
        - I/O párhuzamosítása
        - Kerüljük a fölösleges szortolást
        - Megfelelő szortolás használata
    - JVM tuning:
        - GC választása
        - Memória tuning
        - Startup paraméterek
        - Startup idő optimizálása
    - Alternatív virtuális gépek (GraalVM)
- [ ] Egyéb
    - Frameworkök összehasonlítása
    - Imperatív vs Funkcionális
