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

## Java Producer

```java
public class KafkaProducerExample {

    private static Producer<Long, String> createProducer() {
        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092");
        props.put("client.id", "KafkaExampleProducer");
        props.put("key.serializer", StringSerializer.class.getName());
        props.put("value.serializer", StringSerializer.class.getName());
        return new KafkaProducer<>(props);
    }
}

// producer.send

```

---

## Java Consumer

```java
public class KafkaConsumerExample {

    private static Consumer<Long, String> createConsumer() {
        final Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092");
        props.put("group.id", "my-group");
        props.put("key.deserializer", StringDeserializer.class.getName());
        props.put("value.deserializer", StringDeserializer.class.getName());

        final Consumer<Long, String> consumer = new KafkaConsumer<>(props);

        consumer.subscribe(Collections.singletonList("my-topic"));

        return consumer;
    }
}

// consumer.poll
// automatikus commit

```

---

## Kézi Vezérlésű Offsetek

### ConsumerRebalanceListener

```java
public class SaveOffsetsOnRebalance implements ConsumerRebalanceListener {

    public void onPartitionsRevoked(Collection<TopicPartition> partitions) {
        commitDBTransaction();
    }

    public void onPartitionsAssigned(Collection<TopicPartition> partitions) {
        for(TopicPartition partition: partitions) {
            consumer.seek(partition, getOffsetFromDB(partition));
        }
    }
}

```

---

## Kézi Vezérlésű Offsetek

### Consumer

```java
consumer.subscribe(topics, new SaveOffsetOnRebalance(consumer));
consumer.poll(0);

for (TopicPartition partition: consumer.assignment())
    consumer.seek(partition, getOffsetFromDB(partition));

while (true) {
    ConsumerRecords<String, String> records = consumer.poll(100);
    for (ConsumerRecord<String, String> record : records) {
        processRecord(record);
        storeRecordInDB(record);
        storeOffsetInDB(record.topic(), record.partition(), record.offset());
    }
    commitDBTransaction();
}
```

---

## Kézi Vezérlésű Partíciók

```java
List<PartitionInfo> partitionInfos = null;
partitionInfos = consumer.partitionsFor("topic");

if (partitionInfos != null) {
    for (PartitionInfo partition : partitionInfos) {
        partitions.add(new TopicPartition(partition.topic(), partition.partition()));
    }
    consumer.assign(partitions);

    while (true) {
        for (ConsumerRecord<String, String> record : consumer.poll(1000)) {
            // ...
        }
        consumer.commitSync();
    }
}
```

---