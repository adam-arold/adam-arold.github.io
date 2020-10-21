name: client-sec

# {{ include.title }}
## {{ include.subtitle }}

---

## A Kliens Tulajdonságai

---

## A Kliens Tulajdonságai

- A Javascript kódok sandboxban futnak

---

## A Kliens Tulajdonságai

- *A Javascript kódok sandboxban futnak*
- Korlátozza őket a Same Origin Policy

---

## A Kliens Tulajdonságai

- *A Javascript kódok sandboxban futnak*
- *Korlátozza őket a Same Origin Policy*
- És a HTTP header-ek (pl Cookie flagek)

---

{% include java-sec/client-sec/same-origin.md %}
{% include java-sec/client-sec/clickjacking.md %}
{% include java-sec/client-sec/ajax.md %}
