name: models-and-tools

# {{ include.title }}
## {{ include.subtitle }}

---

## Authorizációs Modellek

---

### Access Control List (ACL)

---

### Access Control List (ACL)

- Egy egyszerű lista az authorizálható felhasználókról

---

### Access Control List (ACL)

- *Egy egyszerű lista az authorizálható felhasználókról*
- Példa: portás egy exkluzív klubban

---

### Role-Based Access Control (RBAC)

- A felhasználókhoz szerepkörök (role) vannak kötve

---

### Role-Based Access Control (RBAC)

- *A felhasználókhoz szerepkörök (role) vannak kötve*
- Pl.: `User`, `Admin`

---

### Role-Based Access Control (RBAC)

- *A felhasználókhoz szerepkörök (role) vannak kötve*
- *Pl.: `User`, `Admin`*
- A szerepkörökhöz jogosultságok vannak kötve

---

### Role-Based Access Control (RBAC)

- *A felhasználókhoz szerepkörök (role) vannak kötve*
- *Pl.: `User`, `Admin`*
- *A szerepkörökhöz jogosultságok vannak kötve*
- Példa: a portás ad nekünk:
    - Egy piros karszalagot, hogy ihassunk a bárban
    - Egy narancs karszalagot, hogy rulettezhessünk

---

### Policy-Based Access Control (PBAC)

- A role-ok és jogosultságok mellé policy-k is csatlakoznak

---

### Policy-Based Access Control (PBAC)

- *A role-ok és jogosultságok mellé policy-k is csatlakoznak*
- Egy policy a felhasználó részletes adatai alapján további döntéseket hozhat

---

### Policy-Based Access Control (PBAC)

- *A role-ok és jogosultságok mellé policy-k is csatlakoznak*
- *Egy policy a felhasználó részletes adatai alapján további döntéseket hozhat*
- Példa: van piros karszalagunk a bárban, de 18 év alatt nincs kiszolgálás

---

### Risk Adaptive-Based Access Control (RAdAC)

- A fentiek mellé a környezetet is figyelembe veszi

---

### Risk Adaptive-Based Access Control (RAdAC)

- *A fentiek mellé a környezetet is figyelembe veszi*
- Példa: van piros karszalagunk, elmúltunk 18 évesek, de most jöttünk haza külföldről és a járványveszély miatt nem engednek be minket

---