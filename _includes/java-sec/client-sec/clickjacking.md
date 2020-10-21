
## Clickjacking

---

### Mi az a Clickjacking?

---

### Mi az a Clickjacking?

> A támadó egy trükkel ráveszi a felhasználót arra, hogy rákattintson egy gombra, vagy egy linkre, ami egy másik site-ról lett betöltve.

---

### Mi az a Clickjacking?

#### Példa

---

### A Clickjacking Megelőzése

#### Framebusting

---

### A Clickjacking Megelőzése

#### Framebusting

- Ellenőrizzük, hogy az oldal frame-ben van-e

---

### A Clickjacking Megelőzése

#### Framebusting

- *Ellenőrizzük, hogy az oldal frame-ben van-e*
- Ha igen, akkor a parentjét hivatkozzuk meg (kitörés)

---

### Miért nem jó a Framebusting?

- Többszörös framekből nem tör ki

---

### Miért nem jó a Framebusting?

- *Többszörös framekből nem tör ki*
- Javascript nélkül nem működik

---

### Miért nem jó a Framebusting?

- *Többszörös framekből nem tör ki*
- *Javascript nélkül nem működik*
- A támadó is kikapcsolhatja a javascriptet

---

### Clickjack Megelőzése

---

### Clickjack Megelőzése

1. A teljes body elrejtése
   ```html
   <style id="antiClickjack">body{display:none !important;}</style>
   ```

---

### Clickjack Megelőzése

1. A teljes body elrejtése
2. Body visszaállítása csak akkor, ha nem frame-ben vagyunk
   ```html
   <script type="text/javascript">
      if (self === top) {
          var antiClickjack = document.getElementById("antiClickjack");
          antiClickjack.parentNode.removeChild(antiClickjack);
      } else {
          top.location = self.location;
      }
   </script>
   ```

---

### További Clickjack Megoldások

`X-Frame-Options`

- `DENY`: teljes tiltás. Ajánlott, ha nem használunk frame-ket.
  > Ezt a Spring automatikusan kiküldi

---

### További Clickjack Megoldások

`X-Frame-Options`

- *`DENY`: teljes tiltás. Ajánlott, ha nem használunk frame-ket.*
- `SAMEORIGIN`: Same origin engedélyezett. Ezt használjuk, ha frame-kkel dolgozunk.

---

### További Clickjack Megoldások

`X-Frame-Options`

- *`DENY`: teljes tiltás. Ajánlott, ha nem használunk frame-ket.*
- *`SAMEORIGIN`: Same origin engedélyezett. Ezt használjuk, ha frame-kkel dolgozunk.*
- `ALLOW-FROM`: Meghatározhatjuk honnan engedélyezett, de **nem támogatott mindenhol**

---

### További Clickjack Megoldások

`Content-Security-Policy`
> a `X-Frame-Options` kiváltására készült

---

### További Clickjack Megoldások

`Content-Security-Policy`

- `Content-Security-Policy: frame-ancestors 'none';`: A `DENY` megfelelője

---

### További Clickjack Megoldások

`Content-Security-Policy`

- *`Content-Security-Policy: frame-ancestors 'none';`: A `DENY` megfelelője*
- `Content-Security-Policy: frame-ancestors 'self';`: A `SAMEORIGIN` megfelelője

---

### További Clickjack Megoldások

`Content-Security-Policy`

- *`Content-Security-Policy: frame-ancestors 'none';`: A `DENY` megfelelője*
- *`Content-Security-Policy: frame-ancestors 'self';`: A `SAMEORIGIN` megfelelője*
- `Content-Security-Policy: frame-ancestors [source] [someOtherSource];`: Az `ALLOW-FROM` megfelelője

---