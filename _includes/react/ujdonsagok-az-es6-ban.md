name: ujdonsagok-az-es6ban

# {{ include.title }}
## {{ include.subtitle }}

---

### Arrow Függvények

```javascript
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));

nums.forEach(v => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});
```

> Bővebben [itt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

???

- Fontos kiemelni, hogy az arrow függvények nem bindolják újra a this-t.

---

### Osztályok

```javascript
class User extends BaseUser {

  constructor(firtstName, lastName) {
    super(firtstName, lastName);
    this.id = UUID.create();
  }

  logIn(credentials) {
    //...
    super.logIn(credentials);
  }

  get fullName() {
    return firstName + lastName;
  }

  static createDefault() {
    return new User("anonymous", "anonymous");
  }
}
```

> Bővebben [itt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

???

- Itt fontos megjegyezni, hogy interfészek nincsenek (még).

---

### Template Stringek

```javascript
var name = "Bob", time = "today";

`Hello ${name}, how are you ${time}?`
```

> Bővebben [itt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

---

### Default Paraméterek

```javascript
function f(x, y=12) {
  return x + y;
}
f(3) == 15  // y==12
```

> Bővebben [itt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters).


---

### Destruktúrálás

```javascript
var [a, , b] = [1,2,3];                     // a==1, b==3

var {foo, bar} = {foo: 1, xul: 2, bar: 3};  // foo==1, bar==3

function g({name: x}) {
  console.log(x);                           // 5
}
g({name: 5})

var [a] = [];
a === undefined;

var [a = 1] = [];                           // az 1 lesz a default érték
a === 1;
```

> Bővebben [itt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

---

### Rest (varargs)

```javascript
function f(x, ...y) {
  return x * y.length;
}
f(3, "hello", true) == 6 // y == ["hello", true]
```

> Bővebben [itt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

---

### Spread

```javascript
function f(x, y, z) {
  return x + y + z;
}
f(...[1,2,3]) == 6
```

> Bővebben [itt](https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

---

### Let + Const

```javascript
function f() {
  {
    let x;
    {
      // shadow
      const x = "sneaky";
      // hiba: const miatt nem tudjuk felülírni
      x = "foo";
    }
    // hiba: már deklarálva lett a blokkban
    let x = "inner";
  }
}
```

> Bővebben [itt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) és [itt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).

---

### Modulok

```javascript
// lib/math.js
export function sum(x, y) {
  return x + y;
}

export var pi = 3.141593;

// app.js
import * as math from "lib/math";

alert("2π = " + math.sum(math.pi, math.pi));
```

> Bővebben [itt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) és [itt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export).

---

### Adatstruktúrák

```javascript
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined

var ws = new WeakSet();
ws.add({ data: 42 }); // külső referencia híján ez az elem nem lesz elérhető
```

> Bővebben [itt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).

---

### Promise-ok

```javascript
function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    console.log("Hibát dobunk.");
    throw new Error("hmm");
}).then(() => {
    console.log("Ez nem történik meg.");
}).catch(err => {
    console.log("Hiba elkapva.");
    return Promise.all([timeout(100), timeout(200)]);
}).then(() => {
    console.log("Kész.");
});
```

> Bővebben [itt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

???

- Megjegyzés: a Promise nagyon hasonlít a Java CompletableFuture-höz.
---

### async és await

```javascript
function doSomethingAsync() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Valami történt"), 3000)
    })
}

async function doSomething() {
    console.log(await doSomethingAsync())
}

console.log("Előtte");
doSomething();
console.log("Utána");
```

???

- Itt fontos megjegyezni, hogy az async / await az csak syntax sugar a Promise API köré

---