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
- [x] Adatstruktúrák                                                                    120
    - Keresés Rendezett Adatstruktúrákban                                           10      
    - `LinkedList` vs `ArrayList`                                                   15
    - `Tree*` vs `Collections.sort`                                                 15
    - Keresés `List` vs `Map`                                                       15
    - Halmazok (`Set`) használata, metszetek és úniók                               10
    - Lookup-ok létrehozása                                                         15
    - Érdekességek                                                                  30
- [x] Párhuzamosítás                                                                    165
    - [x] `Executor` használata:                                                    30
      `Future`, `Callable`, `Runnable`
    - [x] Concurrency primitívek:                                                   20
      `Lock`, `Condition`, `Atomic*`, `CountDownLatch`
    - [x] Konkurrens adatstruktúrák:                                                20
      `ConcurrentMap`, `BlockingQueue`, `CopyOnWriteArrayList`
    - [x] Deadlock, livelock, race condition                                        15
    - [x] Perzisztens adatstruktúrák                                                20
    - [x] `synchronized` variációk vs natív implementációk (`ConcurrentHashMap`)    20
    - [x] Lockoljunk vagy ne lockoljunk?                                            15
- [x] Streaming                                                                         100
    - [x] Stream API                                                                    25
    - [x] Aszinkron programozás                                                         15
    - [x] Reaktív Fejlesztés                                                            20
    - [x] `InputStream`, `OutputStream`:                                                25
      (Esettanulmány: excel fájlok generálása JIRA pluginben)
- [x] Memória                                                                           55
    - [x] A Java memóriamodell                                                          20
    - [x] Objektumok helyfoglalása                                                      20
    - [x] Off-heap adatstruktúrák                                                       15
- [ ] JVM Tuning                                                                        300
    - [x] JVM részeinek áttekintése: runtime, garbage collector, JIT                    20
    - [x] Tuningolás Módszertan                                                         15
        - Bottleneckek megkeresése
        - A legjelentősebb javítása
        - Ismétlés
    - [x] Mit Figyeljünk: CPU, Memória, I/O                                             10
    - [x] Mit Tuningoljunk?                                                             10
        - Párhuzamosítsuk ami futhat a háttérben
        - Streameljük az adatot
        - Cacheljük amit lehet (és érdemes)
    - [x] Profiling                                                                     45
        - Eszközök:
            - VisualVM
            - YourKit
            - Eclipse Memory Analyzer
        - Mit nézzünk?
            - GC után megmaradt objektumok a memóriában
            - Új objektumok
            - Memóriahasználat
    - [x] Technikák                                                                     120
        - Weak Reference
        - Lazy Initialization
        - Accessor-ok kerülése
        - Exceptionok újrahasználása
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
        - Megfelelő szortolás használata
    - [x] JVM tuning:                                                                   60
        - GC választása                                                         15
        - Memória tuning                                                        15
        - Startup paraméterek                                                   15
        - Startup idő optimizálása                                              15
    - [x] Alternatív virtuális gépek (GraalVM és Quarkus)                               20
- [x] Egyéb                                                                             120
    - Frameworkök összehasonlítása
    - Imperatív vs Funkcionális
    - Immutability
