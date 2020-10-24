
## Sensitive Data Exposure

---

## Sensitive Data Exposure

- Rossz konfiguráció

---

## Sensitive Data Exposure

- *Rossz konfiguráció*
- Gyenge kriptográfiai algoritmusok használata

---

## Sensitive Data Exposure

- *Rossz konfiguráció*
- *Gyenge kriptográfiai algoritmusok használata*
- Hardcode-olt jelszavak

---

## Sensitive Data Exposure

- *Rossz konfiguráció*
- *Gyenge kriptográfiai algoritmusok használata*
- *Hardcode-olt jelszavak*
- Gyenge session és cookie védelem

---

## Sensitive Data Exposure

- *Rossz konfiguráció*
- *Gyenge kriptográfiai algoritmusok használata*
- *Hardcode-olt jelszavak*
- *Gyenge session és cookie védelem*
- Információ kiszivárgása hibaüzenetekben

---

## Sensitive Data Exposure

- *Rossz konfiguráció*
- *Gyenge kriptográfiai algoritmusok használata*
- *Hardcode-olt jelszavak*
- *Gyenge session és cookie védelem*
- *Információ kiszivárgása hibaüzenetekben*
- Autocomplete és cache

---

## Sensitive Data Exposure

- *Rossz konfiguráció*
- *Gyenge kriptográfiai algoritmusok használata*
- *Hardcode-olt jelszavak*
- *Gyenge session és cookie védelem*
- *Információ kiszivárgása hibaüzenetekben*
- *Autocomplete és cache*
- ...

---

### HTTPS használata

- Az SSL nem megbízható, használjunk TLS-t

---

### HTTPS használata

- *Az SSL nem megbízható, használjunk TLS-t*
- Kerüljük a gyenge algoritmusokat (DES)

---

### HTTPS használata

- *Az SSL nem megbízható, használjunk TLS-t*
- *Kerüljük a gyenge algoritmusokat (DES)*
- Kerüljük a lejárt certifikátumokat

---

### HTTPS használata

- *Az SSL nem megbízható, használjunk TLS-t*
- *Kerüljük a gyenge algoritmusokat (DES)*
- *Kerüljük a lejárt certifikátumokat*
- Ne engedjük a HTTP-t: HSTS

---

### HTTPS használata

- *Az SSL nem megbízható, használjunk TLS-t*
- *Kerüljük a gyenge algoritmusokat (DES)*
- *Kerüljük a lejárt certifikátumokat*
- Ne engedjük a HTTP-t: HSTS
  - Headerben: `Strict-Transport-Security: max-age=60000; includeSubDomains`

---

### HTTPS használata

- *Az SSL nem megbízható, használjunk TLS-t*
- *Kerüljük a gyenge algoritmusokat (DES)*
- *Kerüljük a lejárt certifikátumokat*
- Ne engedjük a HTTP-t: HSTS
  - *Headerben: `Strict-Transport-Security: max-age=60000; includeSubDomains`*
  - Redirect rule:
  ```xml
  <VirtualHost *:80>
  ServerAlias *
  RewriteEngine On
  RewriteRule ^(.*)$ https://%{HTTP_HOST}$1 [redirect=301]
  </VirtualHost>
  ```

---

### Sensitive Data Exposure Példa

---