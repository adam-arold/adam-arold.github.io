
## Problémás Kivételkezelés

---

### Tipipus Hibák

---

### Tipipus Hibák

- Nehezen érthető hibakezelés

---

### Tipipus Hibák

- *Nehezen érthető hibakezelés*
- `Exception` vagy `Error`?

---

### Tipipus Hibák

- *Nehezen érthető hibakezelés*
- *`Exception` vagy `Error`?*
- Kivétel után inkonzisztens állapot

---

### Tipipus Hibák

- *Nehezen érthető hibakezelés*
- *`Exception` vagy `Error`?*
- *Kivétel után inkonzisztens állapot*
- Hibakódok nem megfelelő kezelése

---

### Tipipus Hibák

- *Nehezen érthető hibakezelés*
- *`Exception` vagy `Error`?*
- *Kivétel után inkonzisztens állapot*
- *Hibakódok nem megfelelő kezelése*
- Információ kiszivárgása hibaüzenetekben

---

### Üres Catch Blokk

```java
try {
    performOperation();
}
catch (RareException e) {
    // this can never happen
}
```

---

### Üres Catch Blokk

```java
try {
    performOperation();
}
catch (RareException e) {
    // this can never happen
}
```

> A hibát sose fogjuk látni

---

### Túl Általános Kivételek

```java
public void load() throws IOException, InvocationTargetException, SQLException { 
  
}
```

> Jó

---

### Túl Általános Kivételek

```java
public void load() throws IOException, InvocationTargetException, SQLException { 
  
}
```

> Jó

```java
public void load() throws Exception { 
  
}
```

> Rossz

---

### Túl Általános Kivételek

```java
public void load() throws IOException, InvocationTargetException, SQLException { 
  
}
```

> Jó

```java
public void load() throws Exception { 
  
}
```

> Rossz
> Újfajta kivétel hozzáadása nincs hatással a programra, a típusos kivételek értelmüket vesztik

---

### NullPointerException elkapása

---

### NullPointerException elkapása

- Nem jó kézi tesztelés helyett
- Így nehéz eldönteni honnan kaptuk a kivételt
- Inkább a hibát oldjuk meg, ami okozza

---

### NullPointerException Vulnerability

```java
Boolean flag = false;
try {

  // authentikációs kód ...
    if(!flag) {
        throw new SecurityException("Invalid Credentials");
    }
} catch(NullPointerException npe) { // valamilyen műveletből jöhet
    // nem csinálunk semmit
}
// ha a flag null, akkor az authentikáció itt sikeresnek van jelentve
```

---

### Információszerzés Hibajelentésekből

#### Példa

---

### Információszerzés Hibajelentésekből

#### Példa

---
