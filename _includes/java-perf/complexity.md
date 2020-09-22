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

## Példa

---

## Példa

`2x^4 - 6x^3 + 21`

---

## Példa

`2x^4 - 6x^3 + 21`

Ha `x = 1`

`2 - 6 + 21 = 17`


---

## Példa

`2x^4 - 6x^3 + 21`

Ha `x = 2`

`32 - 48 + 21 = 5`

---

## Példa

`2x^4 - 6x^3 + 21`

Ha `x = 8`

`8192 - 3072 + 21 = 5141`

---

## Példa

`2x^4 - 6x^3 + 21`

Ha `x = 20`

`320000 - 48000 + 21 = 272021`

---

## Példa

`2x^4`

A leggyorsabban növekvő tagon kívül minden eldobható

---

## Példa

`2x^4`

Ha `x = 20`

`x^4 = 160000`
`2x^4 = 320000`

Nincs nagyságrendi változás

---

## Példa

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

    names.forEach(System.out::println);                     // n
}
```

A komplexitás `O(n)`

---

## Gyakori Esetek

---

## Gyakori Esetek

- Konstans: `O(1)`

```java
System.out.println("Hello."); // O(1)
```

---

## Gyakori Esetek

- Logaritmikus: `O(log n)`

```java
Integer[] numbers = {1, 2, 3, 4, 5, 6};

Arrays.binarySearch(numbers, 5); // O(log n)
```

---

## Gyakori Esetek

- Lineáris: `O(n)`

```java
Arrays.asList(1, 2, 3, 4, 5, 6).forEach(System.out::println); // O(n)
```

---

## Gyakori Esetek

- Linearitmikus: `O(n log n)`

```java
Stream.of(1, 2, 3, 4, 5, 6).sorted(); // O(n log n)
```

---

## Gyakori Esetek

- Négyzetes (polinóm): `O(n^2)`

```java
// insertion sort
Integer[] numbers = {6, 1, 3, 8, 3, 2};

for (int i = 1; i < numbers.length; ++i) { // O(n^2)
    int key = numbers[i];
    int j = i - 1;
    while (j >= 0 && numbers[j] > key) {
        numbers[j + 1] = numbers[j];
        j = j - 1;
    }
    numbers[j + 1] = key;
}
```

---

## Gyakori Esetek

- Exponenciális: `O(c^n)`

```java
int fib(int n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
```

---

## Gyakori Esetek

- Faktoriális: `O(n!)`

```java
long factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
```

---

## Komplexitás Vizualizálva

---

## Komplexitás Vizualizálva

<img src="/assets/img/complexity.svg" height="500px" />

---




