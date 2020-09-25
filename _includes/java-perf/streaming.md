name: streaming

# {{ include.title }}
## {{ include.subtitle }}

---

## Stream API

---

## Stream API

- Gyors adattranszformáció

---

## Stream API

- *Gyors adattranszformáció*
- Az adat forrását nem módosítja

---

## Stream API

- *Gyors adattranszformáció*
- *Az adat forrását nem módosítja*
- Funkcionális

---

## Stream API

- *Gyors adattranszformáció*
- *Az adat forrását nem módosítja*
- *Funkcionális*
- Párhuzamosítást tesz lehetővé

---

## Egy Stream Felépítése

---

## Egy Stream Felépítése

- Stream Source

---

## Egy Stream Felépítése

- *Stream Source*
- Köztes Műveletek

---

## Egy Stream Felépítése

- *Stream Source*
- *Köztes Műveletek*
- Befejező Műveletek

---

## Egy Stream Felépítése

- *Stream Source*
- *Köztes Műveletek*
- *Befejező Műveletek*
- Rövidre Záró Műveletek

---

## Főbb Stream Műveletek

### Létrehozás

```java
Stream.of(1, 2, 3);
```

---

## Főbb Stream Műveletek

### Létrehozás

```java
Stream.builder().add(1).add(1).build();
```

---

## Főbb Stream Műveletek

### Létrehozás

```java
Arrays.asList(1, 2, 3).stream();
Arrays.asList(1, 2, 3).parallelStream();
```

---

## Főbb Stream Műveletek

### Iteráció

```java
Stream.of(1, 2, 3)
        .forEach(item -> System.out.println(item));
```

---

## Főbb Stream Műveletek

### Iteráció

```java
Stream.of(1, 2, 3)
        .forEach(System.out::println);
```

---

## Főbb Stream Műveletek

### Transzformáció

```java
Stream.of(1, 2, 3)
        .map(num -> num * 2) // streamet ad vissza
```

---

## Főbb Stream Műveletek

### Összegyűjtés

```java
Stream.of(1, 2, 3)
        .map(num -> num * 2)
        .collect(Collectors.toList())
// [2, 4, 6]        
```

---

## Főbb Stream Műveletek

### Szűrés

```java
Stream.of(1, 2, 3)
        .filter(num -> num > 1)
        .collect(Collectors.toList());
// [2, 3]
```

---

## Főbb Stream Műveletek

### Kilapítás

```java
Stream.of(Arrays.asList(1, 2), Arrays.asList(3, 4))
        .flatMap(Collection::stream)
        .collect(Collectors.toList());
// [1, 2, 3, 4]
```

---

## Generátorok

---

## Generátorok

```java
final Stream<Integer> intGen = Stream.iterate(1, item -> item + 1);
```

---

## Generátorok

```java
final Stream<Integer> intGen = Stream.iterate(1, item -> item + 1);

intGen.skip(5)
        .limit(3)
        .collect(Collectors.toList());
// [6, 7, 8]
```

---

## Lusta Kiértékelés

```java
Stream.of(1, 2, 3, 4, 5, 6)
        .filter(num -> {
            System.out.println("filtering for null");
            return num != null;
        })
        .filter(num -> {
            System.out.println("filtering for greater than 3");
            return num > 3;
        })
```

**Mit fog kiírni?**

---

## Lusta Kiértékelés

```java
Stream.of(1, 2, 3, 4, 5, 6)
        .filter(num -> {
            System.out.println("filtering for null");
            return num != null;
        })
        .filter(num -> {
            System.out.println("filtering for greater than 3");
            return num > 3;
        })
        .findFirst()
        .orElse(null);
```

**Mit fog kiírni?**

---

## Lusta Kiértékelés

```java
Stream.of(1, 2, 3, 4, 5, 6)
        .filter(num -> {
            System.out.println("filtering for greater than 3");
            return num > 3;
        })
        .filter(num -> {
            System.out.println("filtering for null");
            return num != null;
        })
        .findFirst()
        .orElse(null);
```

**Mit fog kiírni?**

---

## Lusta Kiértékelés

```java
Stream.of(1, 2, 3, 4, 5, 6)
        .filter(num -> {
            System.out.println("filtering for greater than 3");
            return num > 3;
        })
        .filter(num -> {
            System.out.println("filtering for null");
            return num != null;
        })
        .findFirst()
        .orElse(null);
```

**A sorrend számít!**

---

## Min és Max

```java
Stream.of(1, 2, 3, 4, 5, 6)
        .min(Integer::compareTo) // vagy max
        .orElse(0);
```

---

## Distinct

```java
Stream.of(1, 1, 2, 2, 3, 3)
        .distinct()
        .collect(Collectors.toList());
// [1, 2, 3]
```

---

## Reduce

```java
Stream.of(1, 2, 3)
        .reduce(0, Integer::sum);
// 6
```

---

## Collectorok

### Joining

```java
Stream.of(1, 2, 3, 4, 5, 6)
        .map(Object::toString)
        .collect(Collectors.joining(", "));
// 1, 2, 3, 4, 5, 6
```

---

## Collectorok

### Summarizing

```java
Stream.of(1, 2, 3, 4, 5, 6)
        .collect(Collectors.summarizingInt(num -> num));
// IntSummaryStatistics{count=6, sum=21, min=1, average=3, max=6}
```

---

## Collectorok

### PartitioningBy

```java
Stream.of(1, 2, 3, 4, 5, 6)
        .collect(Collectors.partitioningBy(num -> num % 2 == 0));
// {false=[1, 3, 5], true=[2, 4, 6]}
```

---

## Collectorok

### GroupingBy

```java
Stream.of(1, 2, 3, 4, 5, 6)
        .collect(Collectors.groupingBy(num -> num % 3));
// {0=[3, 6], 1=[1, 4], 2=[2, 5]}
```

---

## Aszinkron Programozás

---

## Aszinkron Programozás

- Alapja a `CompletableFuture`

---

## Aszinkron Programozás

- *Alapja a `CompletableFuture`*
- Támogatja a `complete` műveletet

---

## Aszinkron Programozás

- *Alapja a `CompletableFuture`*
- *Támogatja a `complete` műveletet*
- Kombinálható

---

## Aszinkron Programozás

- *Alapja a `CompletableFuture`*
- *Támogatja a `complete` műveletet*
- *Kombinálható*
- Streamelhető

---

## Aszinkron Programozás

Feladat átadása külön szálnak.

```java
public static Future<String> calculateAsync() {
    CompletableFuture<String> result = new CompletableFuture<>();
    new Thread(() -> {
        result.complete("Hello.");
    }).start();
    return result;
}

System.out.println(calculateAsync().get());
```

---

## Aszinkron Programozás

Egyszerűsítés

```java
public static CompletableFuture<String> supplyAsync() {
    return CompletableFuture.supplyAsync(() -> "Hey, ");
}

System.out.println(supplyAsync());
```

---

## Aszinkron Programozás

Egyszerűsítés

```java
public static CompletableFuture<String> supplyAsync() {
    // A művelet párhuzamos (ForkJoinPool)
    return CompletableFuture.supplyAsync(() -> "Hey, ");
}

System.out.println(supplyAsync());
```

---

## Aszinkron Programozás

Eredmény felhasználása

```java
supplyAsync()
    .thenAccept(System.out::println)
    .get();
```

---

## Aszinkron Programozás

Eredmény felhasználása.

```java
supplyAsync()
        .thenAccept(System.out::println) // void
        .get(); // blokkol
```

---

## Aszinkron Programozás

Eredmény transzformálása.

```java
supplyAsync()
        .thenApply(str -> str + "Batman!")
        .thenAccept(System.out::println)
        .get();
```

---

## Aszinkron Programozás

Eredmény transzformálása.

```java
supplyAsync()
        .thenApply(str -> str + "Batman!") // analóg a Stream.map-pal
        .thenAccept(System.out::println)
        .get();
```

---

## Aszinkron Programozás

Eredmény átcsomagolása.

```java
supplyAsync()
        .thenCompose(str -> {
            return CompletableFuture.supplyAsync(() -> str + "Batman!");
        })
        .thenAccept(System.out::println)
        .get();
```

---

## Aszinkron Programozás

Eredmény átcsomagolása.

```java
supplyAsync()
        .thenCompose(str -> { // analóg a Stream.flatMap-pal
            return CompletableFuture.supplyAsync(() -> str + "Batman!");
        })
        .thenAccept(System.out::println)
        .get();
```

---

## Aszinkron Programozás

Részeredmények megvárása.

```java
final CompletableFuture<String> f0 = CompletableFuture.supplyAsync(() -> "Wat, ");
final CompletableFuture<String> f1 = CompletableFuture.supplyAsync(() -> "Wat, ");
final CompletableFuture<String> f2 = CompletableFuture.supplyAsync(() -> "Batman!");
```

---

## Aszinkron Programozás

Részeredmények megvárása.

```java
final CompletableFuture<String> f0 = CompletableFuture.supplyAsync(() -> "Wat, ");
final CompletableFuture<String> f1 = CompletableFuture.supplyAsync(() -> "Wat, ");
final CompletableFuture<String> f2 = CompletableFuture.supplyAsync(() -> "Batman!");

CompletableFuture.allOf(f0, f1, f2).get(); // lezáró művelet
```

---

## Aszinkron Programozás

Részeredmények kombinálása.

```java
final CompletableFuture<String> f0 = CompletableFuture.supplyAsync(() -> "Wat, ");
final CompletableFuture<String> f1 = CompletableFuture.supplyAsync(() -> "Wat, ");
final CompletableFuture<String> f2 = CompletableFuture.supplyAsync(() -> "Batman!");

System.out.println(Stream.of(f0, f1, f2)
        .map(CompletableFuture::join)
        .collect(Collectors.joining("")));
// Wat, Wat, Batman!
```

---

## Reaktív Fejlesztés

---

## Reaktív Fejlesztés

- Aszinkron stream feldolgozás

---

## Reaktív Fejlesztés

- *Aszinkron stream feldolgozás*
- Pull helyett Push modell

---

## Reaktív Fejlesztés

- *Aszinkron stream feldolgozás*
- *Pull helyett Push modell*
- Backpressure

---

## Reaktív Fejlesztés

- *Aszinkron stream feldolgozás*
- *Pull helyett Push modell*
- *Backpressure*
- Vertikális párhuzamosítás

---

## Reaktív Fejlesztés

Mono és Flux

```java
Flux<Integer> flux = Flux.just(1, 2, 3, 4);
Mono<Integer> mono = Mono.just(1);
```

---

## Reaktív Fejlesztés

Feliratkozás

```java
List<Integer> nums = new ArrayList<>();

Flux.just(1, 2, 3, 4)
        .subscribe(nums::add);

System.out.println(nums);
// [1, 2, 3, 4]
```

---

## Reaktív Fejlesztés

Feliratkozás kézzel

```java
Flux.just(1, 2, 3, 4)
        .subscribe(new Subscriber<Integer>() {
            public void onSubscribe(Subscription subscription) {
                subscription.request(Integer.MAX_VALUE);
            }
            public void onNext(Integer integer) {
                nums.add(integer);
            }
            public void onError(Throwable throwable) {
                throwable.printStackTrace();
            }
            public void onComplete() {}
        });
System.out.println(nums);
// [1, 2, 3, 4]
```

---

## Reaktív Fejlesztés

Backpressure kezelése

```java
Flux.just(1, 2, 3, 4)
        .subscribe(new Subscriber<Integer>() {
                private Subscription subscription;
                private int onNextAmount;

                public void onSubscribe(Subscription subscription) {
                        this.subscription = subscription;
                        subscription.request(2); // backpressure
                }
                public void onNext(Integer integer) {
                        nums.add(integer);
                        onNextAmount++;
                        if (onNextAmount % 2 == 0) subscription.request(2);
                }
                // ...
        });
```

---

## Reaktív Fejlesztés

Transzformálás

```java
Flux.just(1, 2, 3, 4)
        .map(i -> i * 2)
        .subscribe(nums::add);

System.out.println(nums);
// [2, 4, 6, 8]
```

---

## Reaktív Fejlesztés

Összegzés

```java
Flux.just(1, 2, 3, 4)
        .reduce(0, Integer::sum)
        .doOnSuccess(System.out::println)
        .subscribe();
// 10
```

---

## Reaktív Fejlesztés

Kilapítás

```java
Flux.just(Flux.just(1, 2), Flux.just(3, 4))
        .flatMap(f -> f)
        .subscribe(nums::add);

System.out.println(nums);
// [1, 2, 3, 4]
```

---

## Reaktív Fejlesztés

Kombinálás

```java
Flux.just(1, 2, 3, 4)
        .mergeWith(Flux.just(5, 6, 7, 8))
        .subscribe(nums::add);

System.out.println(nums);
// [1, 2, 3, 4, 5, 6, 7, 8]
```

---

## Reaktív Fejlesztés

Párhuzamos feldolgozás

```java
Flux.just(1, 2, 3, 4, 5, 6, 7)
        .map(num -> num + 1)
        .subscribeOn(Schedulers.parallel())
        .subscribe(nums::add);
```

---

## Reaktív Fejlesztés

Párhuzamos feldolgozás részletesebben

```java
Flux.range(1, 5)
        .doOnNext(consumer)
        .map(i -> {
            System.out.println("Inside map the thread is " + Thread.currentThread().getName());
            return i * -1;
        })
        .publishOn(Schedulers.newElastic("publishOn0"))
        .doOnNext(consumer)
        .publishOn(Schedulers.newElastic("publishOn1"))
        .doOnNext(consumer)
        .subscribeOn(Schedulers.newElastic("subscribeOn"))
        .subscribe();
```

---

## InputStream és OutputStream

**(Példa)**

---

## InputStream és OutputStream

**Esettanulmány**: Nagy Excel fájlok generálása

---
