name: kafka-extras

# {{ include.title }}

---

## Skálázhatóság

---

## Skálázhatóság

- A log mérete nem számít (`O(1)` komplexitás)

---

## Skálázhatóság

- A log mérete nem számít (`O(1)` komplexitás)
- A brókerek nem a consumerek számával skálázódnak

---

## Megbízható

---

## Megbízható

- Támogat replikációt

---

## Megbízható

- Támogat replikációt
- A brókerek között eloszlik a terhelés

---

## Perzisztens

---

## Perzisztens

- Az üzenetek nem törlődnek

---

## Perzisztens

- Az üzenetek nem törlődnek
- A log tetszőleges ideig megőrizhető

---

## Perzisztens

- Az üzenetek nem törlődnek
- A log tetszőleges ideig megőrizhető
- A consumerek kezelik, hogy hol tartanak a logban

---

## Parancsok Helyett Események

---

## Parancsok Helyett Események

- Lehetővé teszi, hogy egymástól független consumerek is olvassák ugyanazt a topicot

---

## Parancsok Helyett Események

- Lehetővé teszi, hogy egymástól független consumerek is olvassák ugyanazt a topicot
- Segít a komponensek kapcsolatainak a lazításában

---

## Event Sourcing

---

## Event Sourcing

- A log bármennyiszer újraolvasható

---

## Kafka Connect

---

## Kafka Connect

### Sink-ek és Source-ok

- GCP Pub-Sub

---

## Kafka Connect

### Sink-ek és Source-ok

- GCP Pub-Sub
- Kinesis

---

## Kafka Connect

### Sink-ek és Source-ok

- GCP Pub-Sub
- Kinesis
- S3

---

## Kafka Connect

### Sink-ek és Source-ok

- GCP Pub-Sub
- Kinesis
- S3
- JMS!

---

## Kafka Connect

### Sink-ek és Source-ok

- GCP Pub-Sub
- Kinesis
- S3
- JMS!
- ...

---

## KSQL

---

## KSQL

### Valós Idejű Monitoring

```sql
CREATE TABLE error_counts AS
SELECT error_code, count(*)FROM monitoring_stream
WINDOW TUMBLING (SIZE 1 MINUTE)
WHERE type = 'ERROR'
```

---

## KSQL

### Valós Idejű Adatelemzés

```sql
CREATE TABLE possible_fraud AS
SELECT card_number, count(*)
FROM authorization_attempts
WINDOW TUMBLING (SIZE 5 SECONDS)
GROUP BY card_number
HAVING count(*) > 3;
```

---

## KSQL

### Valós Idejű Integráció

```sql
CREATE STREAM vip_users AS
SELECT userid, page, action 
FROM clickstream c 
LEFT JOIN users u ON c.userid = u.user_id
WHERE u.level = 'Platinum';
```

---

## Kafka Streams

---

## Kafka Streams

- Absztrakció a Producer/Consumer API fölött

---

## Kafka Streams

- Absztrakció a Producer/Consumer API fölött
- Valós Idejű Adatfolyamok és Táblák

---

## Kafka Streams

- Absztrakció a Producer/Consumer API fölött
- Valós Idejű Adatfolyamok és Táblák
- Támogat állapottal rendelkező (aggregáció, számlálás) műveleteket

---

## Kafka Streams

- Absztrakció a Producer/Consumer API fölött
- Valós Idejű Adatfolyamok és Táblák
- Támogat állapottal rendelkező (aggregáció, számlálás) műveleteket
- És állapotmentes műveleteket (filter, map, ...)

---

## Kafka Streams

- Absztrakció a Producer/Consumer API fölött
- Valós Idejű Adatfolyamok és Táblák
- Támogat állapottal rendelkező (aggregáció, számlálás) műveleteket
- És állapotmentes műveleteket (filter, map, ...)
- Nincs szükség különálló feldolgozóegységekre (Spark, Flink, etc)

---

## Kafka Streams

- Absztrakció a Producer/Consumer API fölött
- Valós Idejű Adatfolyamok és Táblák
- Támogat állapottal rendelkező (aggregáció, számlálás) műveleteket
- És állapotmentes műveleteket (filter, map, ...)
- Nincs szükség különálló feldolgozóegységekre (Spark, Flink, etc)
- Skálázható és Hibatűrő

---

## Kafka Streams

- Absztrakció a Producer/Consumer API fölött
- Valós Idejű Adatfolyamok és Táblák
- Támogat állapottal rendelkező (aggregáció, számlálás) műveleteket
- És állapotmentes műveleteket (filter, map, ...)
- Nincs szükség különálló feldolgozóegységekre (Spark, Flink, etc)
- Skálázható és Hibatűrő
- Konténerizálható

---

## Kafka Streams

- Absztrakció a Producer/Consumer API fölött
- Valós Idejű Adatfolyamok és Táblák
- Támogat állapottal rendelkező (aggregáció, számlálás) műveleteket
- És állapotmentes műveleteket (filter, map, ...)
- Nincs szükség különálló feldolgozóegységekre (Spark, Flink, etc)
- Skálázható és Hibatűrő
- Konténerizálható
- Táblák és Stream-ek joinolhatók!

---

## Confluent Cloud

---

## Confluent Cloud

- A Confluent saját megoldása, ami összesíti a Kafka API-kat

---

## Confluent Cloud

- A Confluent saját megoldása, ami összesíti a Kafka API-kat
- IAAS szolgáltatás

---

## Schema Registry



---