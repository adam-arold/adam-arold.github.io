## Injection

---

## Injection

- A leggyakrabban előforduló biztonsági hiba

---

## Injection

- *A leggyakrabban előforduló biztonsági hiba*
- Validáción átkerülő adat felhasználása kódban (SQL, LDAP, etc)

---

## Injection

- *A leggyakrabban előforduló biztonsági hiba*
- *Validáción átkerülő adat felhasználása kódban (SQL, LDAP, etc)*
- Kifejezetten veszélyes, ha a program viselkedését befolyásolja

---

## Injection

- *A leggyakrabban előforduló biztonsági hiba*
- *Validáción átkerülő adat felhasználása kódban (SQL, LDAP, etc)*
- *Kifejezetten veszélyes, ha a program viselkedését befolyásolja*
- A szintaxis megfelelő kell, hogy maradjon

---

## SQL Injection

```java
String userName = ctx.getAuthenticatedUserName();
String itemName = request.getParameter("itemName");
String query = "SELECT * FROM items WHERE owner = '"
+ userName + "' AND itemname = '"
+ itemName + "'";
ResultSet rs = stmt.execute(query);
```

---

## SQL Injection

```java
String userName = ctx.getAuthenticatedUserName();
String itemName = request.getParameter("itemName");
String query = "SELECT * FROM items WHERE owner = '"
+ userName + "' AND itemname = '"
+ itemName + "'";
ResultSet rs = stmt.execute(query);
```

Elvárt query: `SELECT * FROM items WHERE owner = 'user' AND itemname = 'pen'`

---

## SQL Injection

```java
String userName = ctx.getAuthenticatedUserName();
String itemName = request.getParameter("itemName");
String query = "SELECT * FROM items WHERE owner = '"
+ userName + "' AND itemname = '"
+ itemName + "'";
ResultSet rs = stmt.execute(query);
```

Elvárt query: `SELECT * FROM items WHERE owner = 'user' AND itemname = 'pen'`

Ha `itemName` = `name' OR 'a'='a,`, akkor

```sql
SELECT * FROM items WHERE owner = 'user' AND itemname = 'name' OR 'a'='a'
```

---

## SQL Injection

### Példa

---

## SQL Injection Megoldások

---

## SQL Injection Megoldások

- SQL szűrés

---

## SQL Injection Megoldások

- *SQL szűrés (whitelist/blacklist)*
- Tárolt eljárások
  
---

## SQL Injection Megoldások

- *SQL szűrés (whitelist/blacklist)*
- *Tárolt eljárások*
- Prepared statement
  ```sql
  String jql = "select * from Account where customer_id=?";
  PreparedStatement preparedStatement = dataSource.getConnection().prepareStatement(jql);
  preparedStatement.setString(1, customerId);
  ```
  
---

## SQL Injection Megoldások

- *SQL szűrés (whitelist/blacklist)*
- *Tárolt eljárások*
- *Prepared statement*
- Repository használata:
  ```java
  @Repository
  public interface AccountRepository extends CrudRepository<Account, Long> {
  }
  ```
  
---

## SQL Injection Megoldások

- *SQL szűrés (whitelist/blacklist)*
- *Tárolt eljárások*
- *Prepared statement*
- *Repository használata*
- Input escaping
  
---

## SQL Injection Megoldások

- *SQL szűrés (whitelist/blacklist)*
- *Tárolt eljárások*
- *Prepared statement*
- *Repository használata*
- *Input escaping*
- Több adatbázis user használata
  
---

## Egyéb Injection problémák

---

## Egyéb Injection problémák

### Command Injection

```java
String btype = request.getParameter("backuptype");
String cmd = new String(
"/usr/bin/backup.sh "+btype+" & /usr/bin/cleanup.sh");
System.Runtime.getRuntime().exec(cmd);
```
---

## Egyéb Injection problémák

### Command Injection

```java
String btype = request.getParameter("backuptype");
String cmd = new String(
"/usr/bin/backup.sh "+btype+" & /usr/bin/cleanup.sh");
System.Runtime.getRuntime().exec(cmd);
```

Várt végeredmény: `/usr/bin/backup.sh FULL & /usr/bin/cleanup.sh`

---

## Egyéb Injection problémák

### Command Injection

```java
String btype = request.getParameter("backuptype");
String cmd = new String(
"/usr/bin/backup.sh "+btype+" & /usr/bin/cleanup.sh");
System.Runtime.getRuntime().exec(cmd);
```

Várt végeredmény: `/usr/bin/backup.sh FULL & /usr/bin/cleanup.sh`

Ha `backuptype`=`FULL & rm -rf *",`, akkor `/usr/bin/backup.sh FULL & rm -rf * & /usr/bin/cleanup.sh`

---

## Case Study: ImageMagick

---

## Case Study: ImageMagick

- Képfeldolgozó program
---

## Case Study: ImageMagick

- *Képfeldolgozó program*
- Sok platform használja (pl PHP és Node.js)
---

## Case Study: ImageMagick

- *Képfeldolgozó program*
- *Sok platform használja (pl PHP és Node.js)*
- Delegate szolgáltatás nem szűrt megfelelően (külső program futtatása)
---

## Case Study: ImageMagick

- *Képfeldolgozó program*
- *Sok platform használja (pl PHP és Node.js)*
- *Delegate szolgáltatás nem szűrt megfelelően (külső program futtatása)*
- `"wget" -q -O "%o" "https:%M"` (`%M` a sérülékeny paraméter)
---

## Case Study: ImageMagick

- *Képfeldolgozó program*
- *Sok platform használja (pl PHP és Node.js)*
- *Delegate szolgáltatás nem szűrt megfelelően (külső program futtatása)*
- *`"wget" -q -O "%o" "https:%M"` (`%M` a sérülékeny paraméter)*
- Ha a paraméter `https://example.com";|ls "-la`
---

## Case Study: ImageMagick

- *Képfeldolgozó program*
- *Sok platform használja (pl PHP és Node.js)*
- *Delegate szolgáltatás nem szűrt megfelelően (külső program futtatása)*
- *`"wget" -q -O "%o" "https:%M"` (`%M` a sérülékeny paraméter)*
- *Ha a paraméter `https://example.com";|ls "-la`*
- A futtatott parancs: `"wget" –q –O "%o" "https://example.com";|ls "-la"`
---

## Case Study: ImageMagick

- *Képfeldolgozó program*
- *Sok platform használja (pl PHP és Node.js)*
- *Delegate szolgáltatás nem szűrt megfelelően (külső program futtatása)*
- *`"wget" -q -O "%o" "https:%M"` (`%M` a sérülékeny paraméter)*
- *Ha a paraméter `https://example.com";|ls "-la`*
- *A futtatott parancs: `"wget" –q –O "%o" "https://example.com";|ls "-la"`*
- SVG-be ágyazva:
  ```svg
  push graphic-context
  viewbox 0 0 640 480
  fill 'url(https://example.com/image.jpg";|ls "-la)'
  pop graphic-context
  ```
---