
## Insecure Deserialization

---

## Mi az a Deserialization?

---

## Mi az a Deserialization?

- Hálózaton küldött adatok "kicsomagolása"

---

## Mi az a Deserialization?

- *Hálózaton küldött adatok "kicsomagolása"*
- Sokféle formátum létezik
  - Java Serializable
  - Protobuf
  - Avro
  - Thrift
  - JSON
  - XML

---

## Deserialization Problémák

---

## Deserialization Problémák

- Megbízunk a kliensben

---

## Deserialization Problémák

- *Megbízunk a kliensben*
- Nem ellenőrizzük a kicsomagolt adatot

---

## Deserialization Problémák

- *Megbízunk a kliensben*
- *Nem ellenőrizzük a kicsomagolt adatot*
- Az adat támadási felület önmagában

---

## Deserialization Problémák

- *Megbízunk a kliensben*
- *Nem ellenőrizzük a kicsomagolt adatot*
- *Az adat támadási felület önmagában*
- Konstruktor validáció megkerülése

---

## Deserialization Példa

### Mass Assignment

---

## Deserialization Megoldások

---

## Deserialization Megoldások

- DTO használata

---

## Deserialization Megoldások

- *DTO használata*
- Ne csomagoljunk ki root-ként

---

## Deserialization Megoldások

- *DTO használata*
- *Ne csomagoljunk ki root-ként*
- Ne küldjünk a kliensre szenzitív adatot

---

## Deserialization Megoldások

- *DTO használata*
- *Ne csomagoljunk ki root-ként*
- *Ne küldjünk a kliensre szenzitív adatot*
- Ha mindenképp ki kell küldeni, akkor titkosítsuk

---

## Deserialization Megoldások

- *DTO használata*
- *Ne csomagoljunk ki root-ként*
- *Ne küldjünk a kliensre szenzitív adatot*
- *Ha mindenképp ki kell küldeni, akkor titkosítsuk*
- Loggoljuk a hibákat

---

## Deserialization Megoldások

- *DTO használata*
- *Ne csomagoljunk ki root-ként*
- *Ne küldjünk a kliensre szenzitív adatot*
- *Ha mindenképp ki kell küldeni, akkor titkosítsuk*
- *Loggoljuk a hibákat*
- Monitorozzunk

---