name: typescript-bevezeto

# {{ include.title }}

---

## Miért Született a Typescript?

---

### Type Coercion

> persuade (an unwilling person) to do something by using force or threats.

![Type Coercion](/assets/img/type_coercion.png)

---

### Fordítási Idő > Futási Idő

```javascript
// javascript
var x = 5;

x.toUpperCase(); // futási időben dob hibát
```

```typescript
// typescript
var x = 5;

x.toUpperCase(); // fordítási hiba
```

---

### Jobb DX

![Intellisense](/assets/img/intellisense.png)

???

Ezt nem kell túl sokat magyarázni, Java-ban az intellisense az alap, de a Javascript világban nem annyira.

---

## Miket Tud a Typescript?

---

### Type Coercion vs Type Inference

```typescript
// let age: number
let age = 35

age = "foo" // fordítási hiba
```

---

### Nominal vs Structural Typing

```typescript
let user: { name: string; age: number };

user = {
    name: "joe",
    age: 35
}
```

---

### Nominal vs Structural Typing

```typescript
let user: { name: string; age: number };

user = {
    name: "joe",
    age: 35
}

user = {
    name: "joe",
    age: 35,
    favoriteColor: "red" // compiler error
}
```

---

### Nominal vs Structural Typing

```typescript
let user: { name: string; age: number };

user = {
    name: "joe",
    age: 35
}

user = {
    name: "joe",
    age: 35,
    favoriteColor: "red", // ok
} as { name: string; age: number };
```

???

- Itt el kell mondani mi a különbség a 2 fajta típus reprezentáció között
---

### Interfészek

```typescript
interface User {
    name: string;
    age: number;
}

let user: User = {
    name: "joe",
    age: 35,
};
```

???

Ez a megoldás a fenti problémára (a típusdefiníciókat elég 1 helyen leírni interfészekkel)

---

### Array és Tuple

```typescript
let numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers.join(""));
```

---

### Array és Tuple

```typescript
let numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers.join(""));
```

```typescript
let tuple: [string, string, number];

tuple = ["Jon", "Doe", 13];

tuple.push(1); // nem szép dolog

console.log(tuple.join(", "))
```

???

A tuple hasznos, amikor több értékkel akarunk visszatérni.

---

### Union és Intersection típusok

```typescript
interface HasId {
    id: number
}

interface HasName {
    name: string
}

let user: HasId & HasName = {
    id: 1,
    name: "Bob"
}
```

???

Ez olyasmi, mint egy trait / mixin

---

### Union és Intersection típusok

```typescript
interface HasId {
    id: number
}

interface HasName {
    name: string
}

let user: HasId & HasName = {
    id: 1,
    name: "Bob"
}
```

```typescript
let id: string | number = 1;

id = "1";

id = true // oops
```

---

### Type Aliasok

```typescript
type HasId = { id: string };

type HasName = { name: string };
```

---

### Függvények

```typescript
function join(part0: any, part1: any): string {
    return `${part0}, ${part1}`
}

console.log(join("foo", "bar"));
```

---

### Any és Never

```typescript
let username = "Joe"

let anyName = username as any

anyName = 33 // ok
```

???

Az `any` olyan, mint az `Object`. az `any`-vel ugyanott vagyunk, mintha sima Javascriptet hasznalnank

---

### Any és Never

```typescript
let username = "Joe"

let anyName = username as any

anyName = 33 // ok
```

```typescript
let x: never = 4 // hiba
```

???

Miért is jó ez? Hibát lehet vele dobni például

---

### Any és Never

```typescript
let username = "Joe"

let anyName = username as any

anyName = 33 // ok
```

```typescript
let x: never = 4 // hiba

function error(): never {
    throw Error("This is a problem.")
}

error()
```

---

### Osztályok

```typescript
class User implements HasId, HasName {

    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
```

---

### Osztályok

```typescript
class User implements HasId, HasName {

    constructor(public id: string, public name: string) {
        // nem kell
    }
}
```

---

### Generics

```typescript
interface Result<T extends any> {
    value: T
}

let result: Result<number> = {
    value: 1
}

let nullResult: Result<number> = {
    value: null // hiba
}
```

???

Fontos megjegyezni, hogy semmi se nullable alapból, külön kell nullable-é tenni, lásd következő slide.

---

### Nullability

```typescript
interface Result<T extends any> {
    value: T
}

let nullResult: Result<number | null> = {
    value: null
}
```

---

### Egyebek

- Type Guard
- Lazy Initialization
- Type Test
- Dictionary Object
- Index Signature
- Function Signature Overloading
- ...

---
















