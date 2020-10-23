name: spring-security

# {{ include.title }}
## {{ include.subtitle }}

---

### A Spring Security Elemei

---

### Authentikáció

```java
public interface AuthenticationManager {

  Authentication authenticate(Authentication authentication)
    throws AuthenticationException;

}
```

---

### Authentikáció

```java
public interface AuthenticationManager {

  Authentication authenticate(Authentication authentication)
    throws AuthenticationException;

}
```

> Visszatér `Authenticataion` objektummal (`authenticated=true`)

---

### Authentikáció

```java
public interface AuthenticationManager {

  Authentication authenticate(Authentication authentication)
    throws AuthenticationException;

}
```

> Visszatér `Authenticataion` objektummal (`authenticated=true`)
> 
> Hibát dob, ha az authentikáció sikertelen

---

### Authentikáció

```java
public interface AuthenticationManager {

  Authentication authenticate(Authentication authentication)
    throws AuthenticationException;

}
```

> Visszatér `Authenticataion` objektummal (`authenticated=true`)
> 
> Hibát dob, ha az authentikáció sikertelen
> 
> `null`-lal tér vissza, ha nem tud dönteni

---

### Authentikáció

Legfőbb implementációja a `ProviderManager`, mely `AuthenticationProvider`ekkel működik:

```java
public interface AuthenticationProvider {

	Authentication authenticate(Authentication authentication)
			throws AuthenticationException;

	boolean supports(Class<?> authentication);

}
```

---

### Authentikáció

Legfőbb implementációja a `ProviderManager`, mely `AuthenticationProvider`ekkel működik:

```java
public interface AuthenticationProvider {

	Authentication authenticate(Authentication authentication)
			throws AuthenticationException;

	boolean supports(Class<?> authentication);

}
```

> A `ProviderManager`-nek van parent-ja, aminek delegál, ha az összes provider `null`lal tért vissza.

---

### Authentikáció

Legfőbb implementációja a `ProviderManager`, mely `AuthenticationProvider`ekkel működik:

```java
public interface AuthenticationProvider {

	Authentication authenticate(Authentication authentication)
			throws AuthenticationException;

	boolean supports(Class<?> authentication);

}
```

> A `ProviderManager`-nek van parent-ja, aminek delegál, ha az összes provider `null`lal tért vissza.
> 
> Ha nincs parent és a providerek is `null`lal tértek vissza, akkor kivételt kapunk

---

### Authentikáció

Legfőbb implementációja a `ProviderManager`, mely `AuthenticationProvider`ekkel működik:

```java
public interface AuthenticationProvider {

	Authentication authenticate(Authentication authentication)
			throws AuthenticationException;

	boolean supports(Class<?> authentication);

}
```

> A `ProviderManager`-nek van parent-ja, aminek delegál, ha az összes provider `null`lal tért vissza.
> 
> Ha nincs parent és a providerek is `null`lal tértek vissza, akkor kivételt kapunk
> 
> A managerek fába fűzhetők össze, melyekkel csoportosíthatunk végpontok mentén

---

### AuthenticationManagerek Testreszabása

```java
@Configuration
public class ApplicationSecurity extends WebSecurityConfigurerAdapter {

  @Autowired
  public void initialize(AuthenticationManagerBuilder builder, DataSource dataSource) {
    builder.jdbcAuthentication().dataSource(dataSource).withUser("dave")
      .password("secret").roles("USER");
  }

}
```

---

### AuthenticationManagerek Testreszabása

```java
@Configuration
public class ApplicationSecurity extends WebSecurityConfigurerAdapter {

  @Autowired
  public void initialize(AuthenticationManagerBuilder builder, DataSource dataSource) {
    builder.jdbcAuthentication().dataSource(dataSource).withUser("dave")
      .password("secret").roles("USER");
  }

}
```

> Builder objektummal testreszabható

---

### AuthenticationManagerek Testreszabása

```java
@Configuration
public class ApplicationSecurity extends WebSecurityConfigurerAdapter {

  @Autowired
  public void initialize(AuthenticationManagerBuilder builder, DataSource dataSource) {
    builder.jdbcAuthentication().dataSource(dataSource).withUser("dave")
      .password("secret").roles("USER");
  }

}
```

> Builder objektummal testreszabható
> 
> `@Autowired` használatával a globális authentikáció kezelőt konfiguráljuk

---

### AuthenticationManagerek Testreszabása

```java
@Configuration
public class ApplicationSecurity extends WebSecurityConfigurerAdapter {

  @Override
  public void initialize(AuthenticationManagerBuilder builder, DataSource dataSource) {
    builder.jdbcAuthentication().dataSource(dataSource).withUser("dave")
      .password("secret").roles("USER");
  }

}
```

> Builder objektummal testreszabható
> 
> `@Autowired` használatával a globális authentikáció kezelőt konfiguráljuk 
> 
> `@Override` használatával lokális (gyerek) kezelőt hozunk létre

---

### AuthenticationManagerek Testreszabása

```java
@Configuration
public class ApplicationSecurity extends WebSecurityConfigurerAdapter {

  @Override
  public void initialize(AuthenticationManagerBuilder builder, DataSource dataSource) {
    builder.jdbcAuthentication().dataSource(dataSource).withUser("dave")
      .password("secret").roles("USER");
  }

}
```

> Builder objektummal testreszabható
> 
> `@Autowired` használatával a globális authentikáció kezelőt konfiguráljuk 
> 
> `@Override` használatával lokális (gyerek) kezelőt hozunk létre
> 
> A globális használható alapértelmezett értékekkel jön létre, de érdemes lokálisat létrehozni

---

### Authorizáció

---

### Authorizáció

Alapja az `AccessDecisionManager`:

```java
public interface AccessDecisionManager {
	
    void decide(
        Authentication authentication,
        Object object,
		Collection<ConfigAttribute> configAttributes
    ) throws AccessDeniedException, InsufficientAuthenticationException;

	boolean supports(ConfigAttribute attribute);

	boolean supports(Class<?> clazz);
}
```

---

### Authorizáció

A `AccessDecisionManager` `AccessDecisionVoter`-eknek delegál.
*(mint az `AuthenticationManager`)*

```java
public interface AccessDecisionVoter<S> {

	int ACCESS_GRANTED = 1;
	int ACCESS_ABSTAIN = 0;
	int ACCESS_DENIED = -1;

	boolean supports(ConfigAttribute attribute);

	boolean supports(Class<?> clazz);

	int vote(
        Authentication authentication,
        S object,
		Collection<ConfigAttribute> attributes
    );
}
```

---

### Authorizáció

A `AccessDecisionManager` `AccessDecisionVoter`-eknek delegál.
*(mint az `AuthenticationManager`)*

```java
public interface AccessDecisionVoter<S> {

	int ACCESS_GRANTED = 1;
	int ACCESS_ABSTAIN = 0;
	int ACCESS_DENIED = -1;

	boolean supports(ConfigAttribute attribute);

	boolean supports(Class<?> clazz);

	int vote(
        Authentication authentication,          // az authentikáció eredménye
        S object,
		Collection<ConfigAttribute> attributes
    );
}
```

---

### Authorizáció

A `AccessDecisionManager` `AccessDecisionVoter`-eknek delegál.
*(mint az `AuthenticationManager`)*

```java
public interface AccessDecisionVoter<S> {

	int ACCESS_GRANTED = 1;
	int ACCESS_ABSTAIN = 0;
	int ACCESS_DENIED = -1;

	boolean supports(ConfigAttribute attribute);

	boolean supports(Class<?> clazz);

	int vote(
        Authentication authentication,          // az authentikáció eredménye
        S object,                               // authorizálandó dolog
		Collection<ConfigAttribute> attributes
    );
}
```

---

### Authorizáció

A `AccessDecisionManager` `AccessDecisionVoter`-eknek delegál.
*(mint az `AuthenticationManager`)*

```java
public interface AccessDecisionVoter<S> {

	int ACCESS_GRANTED = 1;
	int ACCESS_ABSTAIN = 0;
	int ACCESS_DENIED = -1;

	boolean supports(ConfigAttribute attribute);

	boolean supports(Class<?> clazz);

	int vote(
        Authentication authentication,          // az authentikáció eredménye
        S object,                               // authorizálandó dolog
		Collection<ConfigAttribute> attributes  // metaadat az objektumról
    );
}
```

---

### Authorizáció

A `ConfigAttribute`

```java
public interface ConfigAttribute {
	String getAttribute();
}
```

---

### Authorizáció

A `ConfigAttribute`

```java
public interface ConfigAttribute {
	String getAttribute();
}
```

> Kifejezi ki a hozzáférési szabályokat, például: `ROLE_ADMIN`, `ROLE_USER`.

---

### Authorizáció

A `ConfigAttribute`

```java
public interface ConfigAttribute {
	String getAttribute();
}
```

> Kifejezi ki a hozzáférési szabályokat, például: `ROLE_ADMIN`, `ROLE_USER`.
> 
> Támogatja a SpEL-t, pl: `isFullyAuthenticated() && hasRole('FOO')`

---

### Az Authentication Objektum

```java
public interface Authentication extends Principal, Serializable {
	
    Collection<GrantedAuthority> getAuthorities();

	Object getCredentials();

	Object getPrincipal();
    
    // ...
}
```

---

### Az Authentication Objektum

```java
public interface Authentication extends Principal, Serializable {
	
    Collection<GrantedAuthority> getAuthorities(); // role-ok és scope-ok (ROLE_USER)

	Object getCredentials();

	Object getPrincipal();
    
    // ...
}
```

---

### Az Authentication Objektum

```java
public interface Authentication extends Principal, Serializable {
	
    Collection<GrantedAuthority> getAuthorities(); // role-ok és scope-ok (ROLE_USER)

	Object getCredentials(); // jelszavak (authentikáció után törlődik)

	Object getPrincipal();
    
    // ...
}
```

---

### Az Authentication Objektum

```java
public interface Authentication extends Principal, Serializable {
	
    Collection<GrantedAuthority> getAuthorities(); // role-ok és scope-ok (ROLE_USER)

	Object getCredentials(); // jelszavak (authentikáció után törlődik)

	Object getPrincipal();   // User Details
    
    // ...
}
```

---

### UserDetails és UserDetailsService

```java
public interface UserDetails extends Serializable {
    Collection<? extends GrantedAuthority> getAuthorities();

	String getPassword();

	String getUsername();

	boolean isAccountNonExpired();

	boolean isAccountNonLocked();

	boolean isCredentialsNonExpired();

	boolean isEnabled();
}

public interface UserDetailsService {
	UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}
```

---

### InMemoryUserDetailsManager

```java
@Bean
public UserDetailsService users() {
    // The builder will ensure the passwords are encoded before saving in memory
    UserBuilder users = User.withDefaultPasswordEncoder();
    UserDetails user = users
        .username("user")
        .password("password")
        .roles("USER")
        .build();
    UserDetails admin = users
        .username("admin")
        .password("password")
        .roles("USER", "ADMIN")
        .build();
    return new InMemoryUserDetailsManager(user, admin);
}
```

---

### JDBC Authentikáció

#### Séma

```sql
create table users(
    username varchar_ignorecase(50) not null primary key,
    password varchar_ignorecase(500) not null,
    enabled boolean not null
);

create table authorities (
    username varchar_ignorecase(50) not null,
    authority varchar_ignorecase(50) not null,
    constraint fk_authorities_users foreign key(username) references users(username)
);
create unique index ix_auth_username on authorities (username,authority);
```

---

### JDBC Authentikáció

#### DataSource

```java
@Bean
DataSource dataSource() {
    return new EmbeddedDatabaseBuilder()
        .setType(H2)
        .addScript("classpath:org/springframework/security/core/userdetails/jdbc/users.ddl")
        .build();
}
```

---

### JDBC Authentikáció

#### JdbcUserDetailsManager

```java
@Bean
UserDetailsManager users(DataSource dataSource) {
    UserDetails user = User.builder()
        .username("user")
        .password("{bcrypt}$2a$10$GRLdNijSQMUvl/au9ofL.eDwmoohzzS7.rmNSJZ.0FxO/BTk76klW")
        .roles("USER")
        .build();
    UserDetails admin = User.builder()
        .username("admin")
        .password("{bcrypt}$2a$10$GRLdNijSQMUvl/au9ofL.eDwmoohzzS7.rmNSJZ.0FxO/BTk76klW")
        .roles("USER", "ADMIN")
        .build();
    JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);
    users.createUser(user);
    users.createUser(admin);
}
```

---

### DaoAuthenticationProvider

![DaoAuthenticationProvider](/assets/img/daoauthenticationprovider.png)

---

### Filterek

---

### Filterek

- A weben filterekkel működik a Spring Security

---

### Filterek

- *A weben filterekkel működik a Spring Security*
- Egy request-et egy servlet szolgálhat ki

---

### Filterek

- *A weben filterekkel működik a Spring Security*
- *Egy request-et egy servlet szolgálhat ki*
- A filterek viszont láncolhatók

---

### Filterek

- *A weben filterekkel működik a Spring Security*
- *Egy request-et egy servlet szolgálhat ki*
- *A filterek viszont láncolhatók*
- A sorrend számít

---

### Filterek

- *A weben filterekkel működik a Spring Security*
- *Egy request-et egy servlet szolgálhat ki*
- *A filterek viszont láncolhatók*
- *A sorrend számít*
- Minden filter vétózhat

---

### Filterek

- *A weben filterekkel működik a Spring Security*
- *Egy request-et egy servlet szolgálhat ki*
- *A filterek viszont láncolhatók*
- *A sorrend számít*
- *Minden filter vétózhat*
- A Spring Security egy (kompozit) filter

---

### Spring Security Filter

![Spring Security Filter](/assets/img/security-filters.png)

---

### Filter Dispatch

![Filter Dispatch](/assets/img/security-filters-dispatch.png)

---

### Filter Konfiguráció

```java
@Configuration
public class ApplicationConfigurerAdapter extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.antMatcher("/foo/**")
      .authorizeRequests()
        .antMatchers("/foo/bar").hasRole("BAR")
        .antMatchers("/foo/spam").hasRole("SPAM")
        .anyRequest().isAuthenticated();
  }
}
```

---

### Filter Konfiguráció

```java
@Configuration
public class ApplicationConfigurerAdapter extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.antMatcher("/foo/**")                      // globális matching
      .authorizeRequests()
        .antMatchers("/foo/bar").hasRole("BAR")
        .antMatchers("/foo/spam").hasRole("SPAM")
        .anyRequest().isAuthenticated();
  }
}
```

---

### Filter Konfiguráció

```java
@Configuration
public class ApplicationConfigurerAdapter extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.antMatcher("/foo/**")                      // globális matching
      .authorizeRequests()
        .antMatchers("/foo/bar").hasRole("BAR")     // globális matching utáni dispatch
        .antMatchers("/foo/spam").hasRole("SPAM")
        .anyRequest().isAuthenticated();
  }
}
```

---

### Metódusok Authorizációja

Method Security bekapcsolása

```java
@SpringBootApplication
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SampleSecureApplication {
}
```

---

### Metódusok Authorizációja

Method Security bekapcsolása

```java
@SpringBootApplication
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SampleSecureApplication {
}
```

Method Security alkalmazása

```java
@Service
public class MyService {

    @Secured("ROLE_USER")
    public String secure() {
        return "Hello Security";
    }

}
```

---

### JSR-250

```java
@Service
public class MyService {

    @RolesAllowed("ROLE_USER")
    public String secure() {
        return "Hello Security";
    }

}
```

---

### @PreAuthorize és @PostAuthorize

```java
@Service
public class MyService {

    @PreAuthorize("hasRole('ROLE_USER')")
    public String secure() {
        return "Hello Security";
    }

}
```

---

### @PreAuthorize és @PostAuthorize

```java
@Service
public class MyService {

    @PreAuthorize("hasRole('ROLE_USER')")
    public String secure() {
        return "Hello Security";
    }

}
```

> Ez ekvivalens a `@Secured("ROLE_USER")` annotációval

---

### @PreAuthorize és @PostAuthorize

```java
@Service
public class MyService {

    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
    public String secure() {
        return "Hello Security";
    }

}
```

---

### @PreAuthorize és @PostAuthorize

```java
@Service
public class MyService {

    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
    public String secure() {
        return "Hello Security";
    }

}
```

> Ez ekvivalens a `@Secured("ROLE_USER", "ROLE_ADMIN")` annotációval

---

### @PreAuthorize Paraméterek Használata

```java
@Service
public class MyService {

    @PreAuthorize("#username == authentication.principal.username")
    public String getMyRoles(String username) {
        //...
    }

}
```

---

### @PreAuthorize Paraméterek Használata

```java
@Service
public class MyService {

    @PreAuthorize("#username == authentication.principal.username")
    public String getMyRoles(String username) {
        //...
    }

}
```

> `#username` a paraméterre mutat, az `authentication` pedig az authentikációs objektumra.

---

### @PostAuthorize

```java
@Service
public class MyService {

    @PostAuthorize("returnObject.username == authentication.principal.nickName")
    public CustomUser loadUserDetail(String username) {
        return userRoleRepository.loadUserByUserName(username);
    }

}
```

---

### @PostAuthorize

```java
@Service
public class MyService {

    @PostAuthorize("returnObject.username == authentication.principal.nickName")
    public CustomUser loadUserDetail(String username) {
        return userRoleRepository.loadUserByUserName(username);
    }

}
```

> Ez csak akkor fog visszatérni, ha a nicknevek egyeznek.

---

### Authentikációs Adatok Elérése

A jelenelgi requesthez:

```java
SecurityContext context = SecurityContextHolder.getContext();
Authentication authentication = context.getAuthentication();
```

---

### Authentikációs Adatok Elérése

A jelenelgi requesthez:

```java
SecurityContext context = SecurityContextHolder.getContext();
Authentication authentication = context.getAuthentication();
```

Végponton:

```java
@RequestMapping("/foo")
public String foo(@AuthenticationPrincipal User user) {
  // ...
}
```

---
