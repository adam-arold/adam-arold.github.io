name: algorithms

# {{ include.title }}
## {{ include.subtitle }}

---

## Divide & Conquer

---

## Divide & Conquer

- Általában rekurzióval működik

---

## Divide & Conquer

- *Általában rekurzióval működik*
- A problémát szétbontja részproblémákra

---

## Divide & Conquer

- *Általában rekurzióval működik*
- *A problémát szétbontja részproblémákra*
- Megoldja őket

---

## Divide & Conquer

- *Általában rekurzióval működik*
- *A problémát szétbontja részproblémákra*
- *Megoldja őket*
- Majd egyesíti őket

---

## Divide & Conquer (Vizualizálva)

<img src="/assets/img/fractal-tom-selleck.jpg" height="80%" />

---

## Példa

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

## Példa

```java
int fib(int n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
```

`O(2^n)` komplexitás!
Mi lehet a megoldás?

???

Dynamic programming

---

## Általánosítás

---

## Általánosítás

Létezik-e egy általános algoritmus, aminek speciális esete a problémánk?

---

## Általánosítás

Létezik-e egy általános algoritmus, aminek speciális esete a problémánk?

**Például** hogyan hajtsunk végre feladatokat, melyek között függőségek vannak?

---

## Általánosítás

Létezik-e egy általános algoritmus, aminek speciális esete a problémánk?

**Például** hogyan hajtsunk végre feladatokat, melyek között függőségek vannak?

A megoldás a [topológiai rendezés](https://github.com/adam-arold/task-o-mat).

---

## Adatstruktúrák

---

## Adatstruktúrák

Alkalmazható a problémánkra egy létező adatstruktúra?

---

## Adatstruktúrák

Alkalmazható a problémánkra egy létező adatstruktúra?

**Például** hogyan keressünk szavakat kezdőbetűk alapján?

---

## Adatstruktúrák

Alkalmazható a problémánkra egy létező adatstruktúra?

**Például** hogyan keressünk szavakat kezdőbetűk alapján?

![Trie](/assets/img/trie.svg)

---

## Egyszerűsítés

---

## Egyszerűsítés

Biztos, hogy a **legjobb** megoldást keressük?

???

Liligo 49

---

## Gráfelmélet

---

## Gráfelmélet

Alkalmazható a problémára egy gráfelméleti megoldás?

???

IFORM

---

## Párhuzamosítás

---

## Párhuzamosítás

Szétbontható-e a probléma párhuzamosítható feladatokra?

---

## Párhuzamosítás

Szétbontható-e a probléma párhuzamosítható feladatokra?

???

*Példa*: szövegfeldolgozás (Map reduce?)

---

## Cachelés

Elmenthetők-e részeredmények?

???

*Példa*: Statikus HTML tartalmak

---

