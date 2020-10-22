
## Kódminőségi Problémák

---

## Kódminőségi Problémák

- A gyenge minőségű kód gyakran kiszámíthatatlanságot eredményez

---

## Kódminőségi Problémák

- *A gyenge minőségű kód gyakran kiszámíthatatlanságot eredményez*
- Nehezen érthető, ezért a potenciális biztonsági rések is nehezebben megtalálhatók

---

## Kódminőségi Problémák

- *A gyenge minőségű kód gyakran kiszámíthatatlanságot eredményez*
- *Nehezen érthető, ezért a potenciális biztonsági rések is nehezebben megtalálhatók*
- Valamint a karbantartása és a hibák megoldása is időigényesebb

---

### Erőforráskezelés

#### Hol a Hiba?

```java
private void processFile(String fileName) {
    BufferedReader br = new BufferedReader(new FileReader(fileName));
    while(br.ready()) {
        processLine(br.readLine());
    }
}
```

---

### Erőforráskezelés

#### Hol a Hiba?

```java
private void processFile(String fileName) {
    BufferedReader br = new BufferedReader(new FileReader(fileName));
    while(br.ready()) {
        processLine(br.readLine());
    }
}
```

> A fájl nincs bezárva!

---

### Erőforráskezelés

#### Hol a Hiba?

```java
private void processFile(String fileName) {
    BufferedReader br = new BufferedReader(new FileReader(fileName));
    while(br.ready()) {
        processLine(br.readLine());
    }
}
```

> A fájl nincs bezárva!

> Ez egy DoS alapja lehet

---

### Erőforráskezelés

#### Helyes Működés

```java
private void processFile(String fileName) {
    try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
        while(br.ready()) {
            processLine(br.readLine());
        }
    }
}
```

---

### Privát Adat

#### Hol a Hiba?

```java
private ArrayList<String> settings = new ArrayList<String>();

public ArrayList<String> getSettings() {
    return settings;
}

private void readSettings() {
    try (in = new BufferedReader(new FileReader("file.txt")) ) {
        while(in.ready()) {
            settings.add(in.readLine());
        }
    } catch(Exception e) {
        e.printStackTrace() ;
    }
}
```

---

### Privát Adat

#### Hol a Hiba?

```java
private ArrayList<String> settings = new ArrayList<String>();

public ArrayList<String> getSettings() {
    return settings;
}

private void readSettings() {
    try (in = new BufferedReader(new FileReader("file.txt")) ) {
        while(in.ready()) {
            settings.add(in.readLine());
        }
    } catch(Exception e) {
        e.printStackTrace() ;
    }
}
```

> A visszaadott lista módosítható!

---

### Privát Adat

#### Megoldás

```java
private ArrayList<String> settings = new ArrayList<String>();

public ArrayList<String> getSettings() {
    return new ArrayList(settings); // defenzív másolat
}

private void readSettings() {
    try (in = new BufferedReader(new FileReader("file.txt")) ) {
        while(in.ready()) {
            settings.add(in.readLine());
        }
    } catch(Exception e) {
        e.printStackTrace() ;
    }
}
```

---

### Object Hijack

#### Hol a Hiba?

```java
class SecretData {
    private boolean shared = true;
    private List<String> passwords;

    SecretData(List<String> passwords) {
        this.passwords = passwords;
    }

    Object clone() throws CloneNotSupportedException {
        return new SecretData(new ArrayList<>(passwords));
    }

    void putSecretPassword(String password) {
        shared = false;
        passwords.add(password);
    }

    public String toString() { return shared ? String.join(", ", passwords) : ""; }

    void setPassword(String password) { passwords.add(password); }
}
```

---

### Object Hijack

- A klónozás művelet nem veszi figyelembe az állapotot

---

### Object Hijack

- *A klónozás művelet nem veszi figyelembe az állapotot*
- Kikerül a nem megosztható jelszó

---

### Object Hijack

#### Megoldás

- Ne használjuk a `clone` metódust

---

### Object Hijack

#### Megoldás

- *Ne használjuk a `clone` metódust*
- A másolás legyen `final`

---

### Object Hijack

#### Megoldás

- *Ne használjuk a `clone` metódust*
- *A másolás legyen `final`*
- Hozzunk létre defenzív másolatokat

---

### Szerializáció

#### Hol a Hiba?

```java
public class SensitiveData implements Serializable {
    private byte[] password = new byte[16];
    SensitiveData() {
        // fill the password from a secret source
    }
}
```

---

### Szerializáció

#### Hol a Hiba?

```java
public class SensitiveData implements Serializable {
    private byte[] password = new byte[16];
    SensitiveData() {
        // fill the password from a secret source
    }
}
```

> Szerializálás után látható a jelszó

---

### Szerializáció

#### Megoldás

```java
public class SensitiveData implements Serializable {
    private transient byte[] password = new byte[16];
    SensitiveData() {
        // fill the password from a secret source
    }
    final private void writeObject(ObjectOutputStream stream) throws IOException { }
}
```

> Megelőzzük a szerializációt, vagy transient-nek jelöljük a jelszót

---

### Hozzáférhetőségi Módosítók

---

### Hozzáférhetőségi Módosítók

- **Nem** biztonságos

---

### Hozzáférhetőségi Módosítók

- *Nem biztonságos*
- Reflection-nel elérhető

---

### Hozzáférhetőségi Módosítók

#### Példa

```java
User user = new User("password");
final Field password = user.getClass().getDeclaredField("password");
password.setAccessible(true);
System.out.println(password.get(user));
```

---

