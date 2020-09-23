- [x] Bevezető                                                                          25
    - Mi is az a performancia?
    - Problémakategóriák
        - Algoritmus
        - Adatstruktúra
        - Párhuzamosítás
        - Streaming
        - Memória Optimalizálás
        - JVM Tuning
- [x] Átvezető: Aszimptotikus komplexitás                                               40         
    - Pár ismert algoritmus és adatstruktúra szemléltetése
- [x] A Megfelelő Algoritmus Kiválasztása                                               65  
    - [x] Divide & Conquer                                                          20
          Rekurzió és dinamikus programozás, részplroblémák egyesítése
          *Példa*: fibonacci
    - [x] Általánosítás                                                             10
          Létezik-e egy általános algoritmus, aminek speciális esete a problémánk?
          *Példa*:
    - [x] Adatstruktúrák                                                            5  
          Alkalmazható a problémánkra egy létező adatstruktúra?
          *Példa*: Trie szöveges keresésre
    - [x] Egyszerűsítés                                                             10
          Biztos, hogy a *legjobb* megoldást keressük?
          *Esettanulmány*: Liligo 49-es matrix
    - [x] Gráfelmélet                                                               10
          Alkalmazható a problémára egy gráfelméleti megoldás?
          *Esettanulmány*: Kérdőívkitöltő programhoz topológiai rendezés
    - [x] Párhuzamosítás                                                            5
          Szétbontható-e a probléma párhuzamosítható feladatokra?
          *Példa*: szövegfeldolgozás (Map reduce?)
    - [x] Cachelés                                                                  5
          Elmenthetők-e részeredmények?
          *Példa*: Statikus HTML tartalmak
- [ ] Adatstruktúrák                                                                    120
    - Keresés Rendezett Adatstruktúrákban                                           10      
    - `LinkedList` vs `ArrayList`                                                   15
    - `Tree*` vs `Collections.sort`                                                 15
    - Keresés `List` vs `Map`                                                       15
    - Lookup-ok létrehozása                                                         15
    - Halmazok (`Set`) használata, metszetek és úniók                               10
    - Gráfok használata                                                             15
    - Keresőfák                                                                     15
- [ ] Párhuzamosítás                                                                    165
    - `Executor` használata:                                                        30
      `Future`, `Callable`, `CompletableFuture`
    - Konkurrens adatstruktúrák:                                                    20
      `ConcurrentMap`, `BlockingQueue`, `CopyOnWriteArrayList`
    - Perzisztens adatstruktúrák (HAMT, CHAMP)                                      20
    - Concurrency primitívek:                                                       20
      `Lock`, `Condition`, `Atomic*`, `CountDownLatch`, `CyclicBarrier`
    - Deadlock, livelock, race condition                                            15
    - Lockoljunk vagy ne lockoljunk?                                                15
    - Load Balancing                                                                15
    - `synchronized` variációk vs natív implementációk (`ConcurrentHashMap`)        20
    - `Date` nem thread safe                                                        10
- [ ] Streaming                                                                         100
    - Stream API                                                                    25
    - `Publisher`, `Subscriber`, `Flow`, `Processor`                                15
    - Aszinkron programozás                                                         15
    - Reaktív Fejlesztés                                                            20
    - `InputStream`, `OutputStream`:                                                25
      (Esettanulmány: excel fájlok generálása JIRA pluginben)
- [ ] Memória Optimalizálás                                                             55
    - A Java memóriamodell                                                          20
    - Objektumok helyfoglalása                                                      20
    - Off-heap adatstruktúrák                                                       15
- [ ] JVM Tuning
    - JVM részeinek áttekintése: runtime, garbage collector, JIT                    20
    - Tuningolás Módszertan                                                         15
        - Bottleneckek megkeresése
        - A legjelentősebb javítása
        - Ismétlés
    - Mit Figyeljünk: CPU, Memória, I/O                                             10
    - Mit Tuningoljunk?                                                             10
        - Párhuzamosítsuk ami futhat a háttérben
        - Streameljük az adatot
        - Cacheljük amit lehet (és érdemes)
    - Profiling                                                                     45
        - Eszközök:
            - VisualVM
            - YourKit
            - Eclipse Memory Analyzer
        - Mit nézzünk?
            - GC után megmaradt objektumok a memóriában
            - Új objektumok
            - Memóriahasználat
    - Technikák                                                                     120
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
    - JVM tuning:                                                                       60
        - GC választása                                                             15
        - Memória tuning                                                            15
        - Startup paraméterek                                                       15
        - Startup idő optimizálása                                                  15
    - Alternatív virtuális gépek (GraalVM és Quarkus)                               20
- [ ] Egyéb                                                                         120
    - Frameworkök összehasonlítása
    - Imperatív vs Funkcionális
    - Immutability
