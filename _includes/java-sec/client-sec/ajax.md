
## AJAX Biztonság

---

### Mi az AJAX?

- Asynchronous Javascript and XML

---

### Mi az AJAX?

- *Asynchronous Javascript and XML*
- Kliens-szerver interakció

---

### Mi az AJAX?

- *Asynchronous Javascript and XML*
- *Kliens-szerver interakció*
- Mely alapján az oldal részei megváltoznak

---

### XSS és AJAX

---

### XSS és AJAX

- Nem csak HTML cserél gazdát

---

### XSS és AJAX

- *Nem csak HTML cserél gazdát*
- Nehezebben támadható

---

### XSS és AJAX

- *Nem csak HTML cserél gazdát*
- *Nehezebben támadható*
- De a védekezés is nehezebb

---

### XSS Eshetőségek

- `eval()`: közvetlen kód futtatás

---

### XSS Eshetőségek

- `eval()`: közvetlen kód futtatás
   - Közvetlen nem lopható el az adat (Same Origin)

---

### XSS Eshetőségek

- `eval()`: közvetlen kód futtatás
   - *Közvetlen nem lopható el az adat (Same Origin)*
   - De beágyazható támadó javascipt (`script.src()`)

---

### XSS Eshetőségek

- *`eval()`: közvetlen kód futtatás*
- `object.innerHTML`: a böngésző értelmezi a tag-eket

---

### XSS Eshetőségek

- *`eval()`: közvetlen kód futtatás*
- *`object.innerHTML`: a böngésző értelmezi a tag-eket*
- `document.write`: a böngésző értelmezi a tag-eket

---

### XSS Védelem Kliens Oldalon

---

### XSS Védelem Kliens Oldalon

- Escapeljünk mindent, főleg, ha DOM módosul

---

### XSS Védelem Kliens Oldalon

- *Escapeljünk mindent, főleg, ha DOM módosul*
- `object.textContent`: mindig szövegként jelenik meg

---

### XSS Védelem Kliens Oldalon

- *Escapeljünk mindent, főleg, ha DOM módosul*
- *`object.textContent`: mindig szövegként jelenik meg*
- `object.innerText`: mindig szövegként jelenik meg

---

### CSRF Scriptekkel

---

### CSRF Scriptekkel

- `<script src="http://some-ajax-endpoint.com">`

---

### CSRF Scriptekkel

- *`<script src="http://some-ajax-endpoint.com">`*
- Beágyazott scripteknél nincs Same origin védelem

---

### CSRF Elleni Védekezés

---

### CSRF Elleni Védekezés

- Ne küldjünk Javascript kódot a kliensre

---

### CSRF Elleni Védekezés

- *Ne küldjünk Javascript kódot a kliensre*
- Vagy ha mégis, tegyünk a payload elejére szemetet

---

### CSRF Elleni Védekezés

- *Ne küldjünk Javascript kódot a kliensre*
- *Vagy ha mégis, tegyünk a payload elejére szemetet*
- Használjunk CSRF tokent

---

### CSRF Elleni Védekezés

- *Ne küldjünk Javascript kódot a kliensre*
- *Vagy ha mégis, tegyünk a payload elejére szemetet*
- *Használjunk CSRF tokent*
- Ellenőrizzük a `referer`-t

---

## HTML5 Security

---

### Új Lehetőségek

---

### Új Lehetőségek

- Új tag-ek

---

### Új Lehetőségek

- *Új tag-ek*
- Beágyazott SVG

---

### Új Lehetőségek

- *Új tag-ek*
- *Beágyazott SVG*
- Localstorage és Sessionstorage

---

### Új Lehetőségek

- *Új tag-ek*
- *Beágyazott SVG*
- *Localstorage és Sessionstorage*
- WebSQL

---

### Új Lehetőségek

- *Új tag-ek*
- *Beágyazott SVG*
- *Localstorage és Sessionstorage*
- *WebSQL*
- Cross-origin requestek (COR)

---

### Új Lehetőségek

- *Új tag-ek*
- *Beágyazott SVG*
- *Localstorage és Sessionstorage*
- *WebSQL*
- *Cross-origin requestek (COR)*
- Websocketek

---

### Új Lehetőségek

- *Új tag-ek*
- *Beágyazott SVG*
- *Localstorage és Sessionstorage*
- *WebSQL*
- *Cross-origin requestek (COR)*
- *Websocketek*
- Web Workerek

---

### Új Tagek

```html
<video onplay="javascript:alert(1)">
<audio onplaying="javascript:alert(1)">
```

---

### Új Események

```html
<input type=text oninput=alert(1)>
<form id=demo2 />
   <button form=demo2 formaction=javascript:alert(1)>ClickMe!</button>
</form>
```

---

### Automatikus Esemény Trigger

```html
<input type=text onfocus=alert(1) autofocus>
```

---

### Drag-and-Drop API

> Clickjack szteroidokon

---

### Drag-and-Drop API

1. A támadó által injektált elemet draggeljük

---

### Drag-and-Drop API

1. *A támadó által injektált elemet draggeljük*
2. Változtassuk meg a drag adatokat tetszőlegesen (`dataTransfer.setData()`)

---

### Drag-and-Drop API

1. *A támadó által injektált elemet draggeljük*
2. *Változtassuk meg a drag adatokat tetszőlegesen (`dataTransfer.setData()`)*
3. Állítsuk be az iframe-t, hogy kövesse a kurzort

---

### Drag-and-Drop API

1. *A támadó által injektált elemet draggeljük*
2. *Változtassuk meg a drag adatokat tetszőlegesen (`dataTransfer.setData()`)*
3. *Állítsuk be az iframe-t, hogy kövesse a kurzort*
4. Ahogy a felhasználó elengedi az egeret az általunk injektált field-re "esik" a draggelt elem

---

### Form Tampering

---

### Form Tampering

- A HTML5 lehetővé teszi form elemek elhelyezését formon kívül

---

### Form Tampering

- *A HTML5 lehetővé teszi form elemek elhelyezését formon kívül*
- Megváltoztatható az action, a method és sokminden más

---

### Form Tampering

- *A HTML5 lehetővé teszi form elemek elhelyezését formon kívül*
- *Megváltoztatható az action, a method és sokminden más*
- XSS és Clickjacking kombinációja

---

### Form Tampering

#### Példa

---