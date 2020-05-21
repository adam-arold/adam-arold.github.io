name: javascript-attekintes

# {{ include.title }}
## {{ include.subtitle }}

---

### Változók:

```javascript
var dogs = ["Bulldog", "Beagle", "Labrador"];
var regex = /()/;
```

---

### Értékek

```javascript
false, true                     // boolean
18, 3.14, 0b10011, 0xF6, NaN    // number
"flower", 'John'                // string
undefined, null , Infinity      // special
```

---

### Operátorok

```javascript
a = b + c - d;      // hozzáadás, kivonás
a = b * (c / d);    // szorzás, osztás
x = 100 % 48;       // maradék képzés
a++; b--;           // postfix hozzáadás, kivonás
```

---

### Bitwise Operátorok

```javascript
5 & 1           // and (1)
5 | 1           // or (101)
~5              // not (-6) 
5 ^ 1           // xor (4) 
5 << 1          // left shift (10)
5 >> 1          // right shift (2) 
5 >>> 1         // zero fill right shift (2)
```

---

### Aritmetika

```javascript
a * (b + c)         // csoportosítás
person.age          // tagváltozó
person[age]         // property
!(a == b)           // logikai not
a != b              // nem egyenlő
typeof a            // típusellenőrzés
x << 2  x >> 3      // bitműveletek
a = b               // értékadás
a == b              // egyenlő
a === b             // egyenlő típusellenőrzéssel
a !== b             // nem egyenlő típusellenőrzéssel
a < b   a > b       // kisebb / nagyobb
a <= b  a >= b      // kisebb vagy egyenlő / nagyobb, vagy egyenlő
a += b              // értéknövelés (működik más operátorokkal is)
a && b              // logikai és
a || b              // logikai vagy
```

---

### Tömbök

```javascript
var dogs = ["Bulldog", "Beagle", "Labrador"]; 
var dogs = new Array("Bulldog", "Beagle", "Labrador");  // értékadás

alert(dogs[1]);             // indexek használata ("Beagle")
dogs[0] = "Bull Terier";    // érték felülírása

for (var i = 0; i < dogs.length; i++) {     // iteráció
    console.log(dogs[i]);
}

dogs.toString();                        // string konverzió "Bulldog,Beagle,Labrador"
dogs.join(" * ");                       // összefűzés: "Bulldog * Beagle * Labrador"
dogs.pop();                             // utolsó elem törlése
dogs.push("Chihuahua");                 // hozzáadás a tömb végén
dogs[dogs.length] = "Chihuahua";        // ugyanaz, mint a push
dogs.shift();                           // első elem törlése
dogs.unshift("Chihuahua");              // hozzáadás a tömb elejére
dogs.splice(2, 0, "Pug", "Boxer");      // elemek hozzáadása (hova, mennyit töröljünk, vararg)
var animals = dogs.concat(cats,birds);  // tömbök összefűzése (kutyák, utána macskák, majd madarak)
dogs.slice(1,4);                        // visszaadja a tömb elemeit [1]-től [4-1]-ig
dogs.sort();                            // sorrendbe rendezés abc szerint
dogs.reverse();                         // sorrendbe rendezés fordított abc szerint
```

---
