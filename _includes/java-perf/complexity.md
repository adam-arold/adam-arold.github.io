name: complexity

# {{ include.title }}
## {{ include.subtitle }}

---

## Mit Nevezünk Komplexitásnak?

---

## Mit Nevezünk Komplexitásnak?

- Aszimptotikus Komplexitás

---

## Mit Nevezünk Komplexitásnak?

- *Aszimptotikus Komplexitás*
- "Big O", avagy Ordó

---

## Mit Nevezünk Komplexitásnak?

- *Aszimptotikus Komplexitás*
- *"Big O", avagy Ordó*
- Függvények becslését megkönnyítő jelölés

---

## Példa Komplexitásra

---

## Példa Komplexitásra

`2x^4 - 6x^3 + 21`

---

## Példa Komplexitásra

`2x^4 - 6x^3 + 21`

Ha `x = 1`

`2 - 6 + 21 = 17`


---

## Példa Komplexitásra

`2x^4 - 6x^3 + 21`

Ha `x = 2`

`32 - 48 + 21 = 5`

---

## Példa Komplexitásra

`2x^4 - 6x^3 + 21`

Ha `x = 8`

`8192 - 3072 + 21 = 5141`

---

## Példa Komplexitásra

`2x^4 - 6x^3 + 21`

Ha `x = 20`

`320000 - 48000 + 21 = 272021`

---

## Példa Komplexitásra

`2x^4`

A leggyorsabban növekvő tagon kívül minden eldobható

---

## Példa Komplexitásra

`2x^4`

Ha `x = 20`

`x^4 = 160000`
`2x^4 = 320000`

Nincs nagyságrendi változás

---

## Példa Komplexitásra

`x^4`

A kisebb nagyságrendű tag elhagyható

---

## A Komplexitás Dimenziói

---

## A Komplexitás Dimenziói

- Tér (Memória)

---

## A Komplexitás Dimenziói

- *Tér (Memória)*
- Idő (CPU)

---

## Hogy Néz Ki a Gyakorlatban?

---

## Hogy Néz Ki a Gyakorlatban?

```java
public void iterate(List<String> names) {
    System.out.println("Iterating over names.");
    System.out.printf("Name count: %d%n", names.size());

    names.forEach(System.out::println);
}
```

---

## Hogy Néz Ki a Gyakorlatban?

```java
public void iterate(List<String> names) {
    System.out.println("Iterating over names.");            // 2
    System.out.printf("Name count: %d%n", names.size());    

    names.forEach(System.out::println);
}
```

---

## Hogy Néz Ki a Gyakorlatban?

```java
public void iterate(List<String> names) {
    System.out.println("Iterating over names.");            // 2
    System.out.printf("Name count: %d%n", names.size());    

    names.forEach(System.out::println);                     // n
}
```

---

## Hogy Néz Ki a Gyakorlatban?

```java
public void iterate(List<String> names) {
    System.out.println("Iterating over names.");
    System.out.printf("Name count: %d%n", names.size());    

    names.forEach(System.out::println);
}
```

A komplexitás `O(n)`

---

## Gyakori Esetek

---

## Gyakori Esetek

- Konstans: `O(1)`

```java

```

---

## Gyakori Esetek

- Logaritmikus: `O(log n)`

```java

```

---

## Gyakori Esetek

- Lineáris: `O(n)`

```java

```

---

## Gyakori Esetek

- Linearitmikus: `O(n log n)`

```java

```

---

## Gyakori Esetek

- Négyzetes: `O(n^2)`

```java

```

---

## Gyakori Esetek

- Polinom: `O(n^c)`

```java

```

---

## Gyakori Esetek

- Exponenciális: `O(c^n)`

```java

```

---

## Gyakori Esetek

- Faktoriális: `O(n!)`

```java

```

---

## Komplexitás Vizualizálva

---

## Komplexitás Vizualizálva

<img src="/assets/img/complexity.svg" height="500px" />

---




