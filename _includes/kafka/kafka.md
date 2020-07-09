name: mi-az-a-kafka

# {{ include.title }}

---

## Elosztott Streaming Platform

<img src="/assets/img/kafka-apis.png" width="50%" height="50%" />

---

## Topikok és Logok

<img src="/assets/img/log_anatomy.png" />

---

## Consumer Csoportok

<img src="/assets/img/consumer-groups.png" />

---

## Message Queue

<img src="/assets/img/Kafka-Message-Queue-Mode.png" />

---

## Pub Sub

<img src="/assets/img/Kafka-Pub-Sub-Mode.png" />

---

## Tárolás

<img src="/assets/img/Kafka-Storage.png" />

---

## Felhasználási Területek

- Üzenetküldés

---

## Felhasználási Területek

- Üzenetküldés
- Website aktivitás követés

---

## Felhasználási Területek

- Üzenetküldés
- Website aktivitás követés
- Metrikák

---

## Felhasználási Területek

- Üzenetküldés
- Website aktivitás követés
- Metrikák
- Log aggregáció

---

## Felhasználási Területek

- Üzenetküldés
- Website aktivitás követés
- Metrikák
- Log aggregáció
- Stream feldolgozás

---

## Felhasználási Területek

- Üzenetküldés
- Website aktivitás követés
- Metrikák
- Log aggregáció
- Stream feldolgozás
- Event Sourcing

---

## API

- Producer

---

## API

- Producer
- Consumer

---

## API

- Producer
- Consumer
- Streams

---

## API

- Producer
- Consumer
- Streams
- Connect

---

## API

- Producer
- Consumer
- Streams
- Connect
- Admin

---

## Demo

- Letöltés [innen](http://xenia.sote.hu/ftp/mirrors/www.apache.org/kafka/2.5.0/kafka_2.12-2.5.0.tgz).

---

## Demo

- Letöltés [innen](http://xenia.sote.hu/ftp/mirrors/www.apache.org/kafka/2.5.0/kafka_2.12-2.5.0.tgz).
- Zookeeper indítása: `bin/zookeeper-server-start.sh config/zookeeper.properties`

---

## Demo

- Letöltés [innen](http://xenia.sote.hu/ftp/mirrors/www.apache.org/kafka/2.5.0/kafka_2.12-2.5.0.tgz).
- Zookeeper indítása: `bin/zookeeper-server-start.sh config/zookeeper.properties`
- Kafka indítása: `bin/kafka-server-start.sh config/server.properties`

---

## Demo

- Letöltés [innen](http://xenia.sote.hu/ftp/mirrors/www.apache.org/kafka/2.5.0/kafka_2.12-2.5.0.tgz).
- Zookeeper indítása: `bin/zookeeper-server-start.sh config/zookeeper.properties`
- Kafka indítása: `bin/kafka-server-start.sh config/server.properties`
- Topic létrehozása: `bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test`

---

## Demo

- Letöltés [innen](http://xenia.sote.hu/ftp/mirrors/www.apache.org/kafka/2.5.0/kafka_2.12-2.5.0.tgz).
- Zookeeper indítása: `bin/zookeeper-server-start.sh config/zookeeper.properties`
- Kafka indítása: `bin/kafka-server-start.sh config/server.properties`
- Topic létrehozása: `bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test`
- Topic megtekintése: `bin/kafka-topics.sh --list --bootstrap-server localhost:9092`

---

## Demo

- Letöltés [innen](http://xenia.sote.hu/ftp/mirrors/www.apache.org/kafka/2.5.0/kafka_2.12-2.5.0.tgz).
- Zookeeper indítása: `bin/zookeeper-server-start.sh config/zookeeper.properties`
- Kafka indítása: `bin/kafka-server-start.sh config/server.properties`
- Topic létrehozása: `bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test`
- Topic megtekintése: `bin/kafka-topics.sh --list --bootstrap-server localhost:9092`
- Üzenet küldése: `bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test`

---

## Demo

- Letöltés [innen](http://xenia.sote.hu/ftp/mirrors/www.apache.org/kafka/2.5.0/kafka_2.12-2.5.0.tgz).
- Zookeeper indítása: `bin/zookeeper-server-start.sh config/zookeeper.properties`
- Kafka indítása: `bin/kafka-server-start.sh config/server.properties`
- Topic létrehozása: `bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test`
- Topic megtekintése: `bin/kafka-topics.sh --list --bootstrap-server localhost:9092`
- Üzenet küldése: `bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test`
- Üzenetek fogadása: `bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning`

---