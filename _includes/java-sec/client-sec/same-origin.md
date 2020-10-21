
## Same Origin Policy

---

### Mi az az Origin?

---

### Mi az az Origin?

*scheme* (protokoll) + *host* (domain) + *port*

---

### Mi az az Origin?

*scheme* (protokoll) + *host* (domain) + *port*

`https://` + `example.com` + `:8080`

---

### Mi az a Same Origin Policy?

---

### Mi az a Same Origin Policy?

> Biztonsági mechanizmus, amely meghatározza, hogy egy script amely be lett töltve egy **origin**ről,
> hogyan léphet interakcióba más **origin**ről származó erőforrásokkal.

---

### Mi az a Same Origin Policy?

> Biztonsági mechanizmus, amely meghatározza, hogy egy script amely be lett töltve egy **origin**ről,
> hogyan léphet interakcióba más **origin**ről származó erőforrásokkal.

Két **origin** akkor egyezik meg, ha a 3 komponensük ugyanaz (protokoll, domain, port).

---

### Same Origin Példák

**Origin:** http://store.company.com/dir/page.html


| URL | Eredmény | Ok |
|-----|----------|----|
| `http://store.company.com/dir2/other.html` | OK | Csak a path különböző |
| `http://store.company.com/dir/inner/another.html` | OK | Csak a path különböző |
| `https://store.company.com/page.html` | Hiba | Más protokoll |
| `http://store.company.com:81/dir/page.html`  | Hiba | Különböző port (`80` az alapértelmezett http esetén) |
| `http://news.company.com/dir/page.html`  | Hiba | Más host |

---

### Cross-origin

---

### Cross-origin

- Cross-origin írás (küldés): engedélyezett

---

### Cross-origin

- *Cross-origin írás (küldés): engedélyezett*
    - Például: linkek, redirect, formok

---

### Cross-origin

- *Cross-origin írás (küldés): engedélyezett*
    - *Például: linkek, redirect, formok*
    - Enélkül egy oldal csak önmagára linkelhetne

---

### Cross-origin

- *Cross-origin írás (küldés): engedélyezett*
- Cross-origin olvasás (fogadás): csak **Same origin** engedélyezett alapból

---

### Cross-origin

- *Cross-origin írás (küldés): engedélyezett*
- *Cross-origin olvasás (fogadás): csak **Same origin** engedélyezett alapból*
    - Cross-orign beágyazás általában kiszivárog, pl. beágyazott képek dimenziói

---

### Cross-origin

- *Cross-origin írás (küldés): engedélyezett*
- *Cross-origin olvasás (fogadás): csak **Same origin** engedélyezett alapból*
- Cross-origin beágyazás: általában engedélyezett

---

### Cross-origin Beágyazás

#### Példák

- Javascript: `<script src="…"></script>`

---

### Cross-origin Beágyazás

#### Példák

- *Javascript: `<script src="…"></script>`*
- CSS: `<link rel="stylesheet" href="…">`

---

### Cross-origin Beágyazás

#### Példák

- *Javascript: `<script src="…"></script>`*
- *CSS: `<link rel="stylesheet" href="…">`*
- Képek: `<img>`

---

### Cross-origin Beágyazás

#### Példák

- *Javascript: `<script src="…"></script>`*
- *CSS: `<link rel="stylesheet" href="…">`*
- *Képek: `<img>`*
- Multimédia: `<video>` és `<audio>`

---

### Cross-origin Beágyazás

#### Példák

- *Javascript: `<script src="…"></script>`*
- *CSS: `<link rel="stylesheet" href="…">`*
- *Képek: `<img>`*
- *Multimédia: `<video>` és `<audio>`*
- Külső erőforrások: `<object>` és `<embed>`

---

### Cross-origin Beágyazás

#### Példák

- *Javascript: `<script src="…"></script>`*
- *CSS: `<link rel="stylesheet" href="…">`*
- *Képek: `<img>`*
- *Multimédia: `<video>` és `<audio>`*
- *Külső erőforrások: `<object>` és `<embed>`*
- Fontok: `@font-face`

---

### Cross-origin Beágyazás

#### Példák

- *Javascript: `<script src="…"></script>`*
- *CSS: `<link rel="stylesheet" href="…">`*
- *Képek: `<img>`*
- *Multimédia: `<video>` és `<audio>`*
- *Külső erőforrások: `<object>` és `<embed>`*
- *Fontok: `@font-face`*
- Framek: `<iframe>` (`X-Frame-Options` header szabályozza)

---

### Cross-origin Olvasás

---

### Cross-origin Olvasás

Cross-Origin Resource Sharing (CORS) teszi lehetővé

---

### Cross-origin Írás Tiltása

- Kitalálhatatlan token ellenőrzése a request-ben

---

### Cross-origin Írás Tiltása

- Kitalálhatatlan token ellenőrzése a request-ben
  > Ezt úgy is hívják, hogy Cross-Site Request Forgery (CSRF) token

---

### Cross-origin Írás Tiltása

- *Kitalálhatatlan token ellenőrzése a request-ben*
- Beágyazás tiltása (szivárgás ellen)

---

### Cross-origin Resource Sharing

---

### Cross-origin Resource Sharing

> Mechanizmus, mely HTTP headerek használatával lehetővé teszi egy originen futó alkalmazásnak,
> hogy más originen lévő erőforrásokat érjen el.

---

### Hol Használhatunk CORS-t?

---

### Hol Használhatunk CORS-t?

- XMLHttpRequest

---

### Hol Használhatunk CORS-t?

- *XMLHttpRequest*
- Fetch API

---

### Hol Használhatunk CORS-t?

- *XMLHttpRequest*
- *Fetch API*
- Web Fontok

---

### Hol Használhatunk CORS-t?

- *XMLHttpRequest*
- *Fetch API*
- *Web Fontok*
- WebGL textúrák

---

### Hol Használhatunk CORS-t?

- *XMLHttpRequest*
- *Fetch API*
- *Web Fontok*
- *WebGL textúrák*
- Képek és Videok

---

### Hol Használhatunk CORS-t?

- *XMLHttpRequest*
- *Fetch API*
- *Web Fontok*
- *WebGL textúrák*
- *Képek és Videok*
- CSS shapek képekből

---

### Hogyan Működik a CORS?

---

### Hogyan Működik a CORS?

- HTTP Headerekkel

---

### Hogyan Működik a CORS?

- *HTTP Headerekkel*
- Preflight request módosító műveletekhez (`OPTIONS`)

---

### Hogyan Működik a CORS?

- *HTTP Headerekkel*
- *Preflight request módosító műveletekhez (`OPTIONS`)*
- A szerver küldhet tájékoztatást authentikáció szükségességéről

---

### CORS Response Headerek

---

### CORS Response Headerek

`Access-Control-Allow-Origin: <origin> | *`: meghatározza az engedélyezett Origin-t (vagy bármit)

---

### CORS Response Headerek

`Vary: Origin`: akkor szükséges, ha az engedélyezett origin dinamikusan változhat

---

### CORS Response Headerek

`Access-Control-Expose-Headers: <header-name>[, <header-name>]*`: küldhető headerek

---

### CORS Response Headerek

`Access-Control-Max-Age: <delta-seconds>`: milyen hosszú ideig cachelhetők a preflight requestek

---

### CORS Response Headerek

`Access-Control-Allow-Credentials: true`: meghatározza, hogy küldhetünk-e credentialokat

---

### CORS Response Headerek

`Access-Control-Allow-Methods: <method>[, <method>]*`: meghatározza az engedélyezett HTTP methodokat

---

### CORS Response Headerek

`Access-Control-Allow-Headers: <header-name>[, <header-name>]*`: preflight requestből kapjuk vissza és meghatározza mely HTTP verbek használhatók

---

### CORS

#### Példa

---

### Tipikus Hibák

---

### Tipikus Hibák

- Security by obscurity: nem listázott funkciók

---

### Tipikus Hibák

- *Security by obscurity: nem listázott funkciók*
- Kliens oldalon végzett authentikáció

---

### Tipikus Hibák

- *Security by obscurity: nem listázott funkciók*
- *Kliens oldalon végzett authentikáció*
- Hardcodeolt jelszavak

---

### Praktikák

- Mindig a szerver oldalon authentikáljunk

---

### Praktikák

- *Mindig a szerver oldalon authentikáljunk*
- Ne legyenek hardcodeolt jelszavaink

---

### Praktikák

- *Mindig a szerver oldalon authentikáljunk*
- *Ne legyenek hardcodeolt jelszavaink*
- Használjunk obfuszkációt

---