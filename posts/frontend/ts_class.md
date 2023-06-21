# Classes and Interfaces

## **1. Classes**

- ts는 객체지향 코드를 더 안전하고 좋게 만들도록 도와주는 기능을 제공한다

```typescript
// typescript
class Player {
  constructor(
    private firstNmae: string,
    private lastName: string,
    public nickname: string
  ) {}
}

// javascript
class Player {
  constructor(firstName, lastName, nickname) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickname = nickname;
  }
}
```

- `private`는 ts가 보호해주는 용도로만 사용됨. (js에서는 사용X)

```typescript
class Player {
  constructor(
    private firstNmae: string,
    private lastName: string,
    public nickname: string
  ) {}
}

const Zoey = new Player("Zoey", "Jung", "jhh");
Zoey.firstName;
// problem: Property 'firstName' is pravate and only accessible within class "Player"
// js에서는 정상작동함.
```

<br />

### 1.1. Abstract Class(추상클래스)

- 다른 클래스가 상속받을 수 있는 클래스
- 직접 새로운 instance를 만들 수는 없음
  - ex) const User = new User() 안됨

```typescript
abstract class User {
  constructor(
    private firstNmae: string,
    private lastName: string,
    public nickname: string
  ) {}
  // 추상클래스 안의 메소드
  getFullName() {
    return `$(this.firstName) $(this.lastName) `; // 메소드의 Implementation(구현)
  }
}
class Player extends User {}
const Zoey = new Player("Zoey", "Jung", "jhh");
Zoey.getFullName();
```

<br />

### 1.2. Abstract Method(추상 메소드)를 만드는 방법

- abstract class 안에서는 abstract method를 만들 수 있다.
- 단, method 안에 implementation, 즉 메소드를 구현해서는 안되고, 메소드의 call signature만 작성해야 한다.
- abstract method란, abstract class를 상속받는 모든 것들이 구현해야 하는 method

```typescript
abstract class User {
  constructor(
    protected firstNmae: string,
    protected lastName: string,
    protected nickname: string
  ) {}

  // 추상클래스 안의 메소드
  getFullName() {
    return `$(this.firstName) $(this.lastName) `; // 메소드의 Implementation(구현)
  }

  // 추상클래스 안의 추상메소드
  abstract getNickName(): void;
}

class Player extends User {
  // abstract method 구현
  getNickName() {
    // property를 private로 만든다면, abstract class를 상속했을지라도 그 property에 접근할 수 없다.
    console.log(this.nickname);
  }
}

const Zoey = new Player("Zoey", "Jung", "jhh");
Zoey.getFullName();
```

|   구분    | 선언한 클래스 내 | 자식클래스 내 | 인스턴스 |
| :-------: | :--------------: | :-----------: | :------: |
|  private  |        O         |       X       |    X     |
| protected |        O         |       O       |    X     |
|  private  |        O         |       O       |    O     |

<br />

---

## **2. Interfaces**

- typescript가 object 모양을 설명하는 방법: type, **interface**
- type이 interface보다 활용할 수 있는 게 더 많음(object 모양 결정, 특정 값만 가지도록 제한, alias 생성 가능 etc)
- interface는 object의 모양을 결정하는 목적만 있음

```typescript
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

interface Player {
  nickname: string;
  team: Team;
  health: Health;
}

const zoey: Player = {
  nickname: "Zoey",
  team: "blue",
  health: 10,
};
```

### 2.1. 상속 가능(class와 비슷하다)

```typescript
interface User {
  name: string;
}
interface Player extends User {}
const zoey: Player = {
  name: "zoey",
};
```

- type으로 하면,

```typescript
type User = {
  name: string;
};
// type Player은 User, 그리고 {}이다.
type Player = User & {};
const zoey: Player = {
  name: "zoey",
};
```

interface가 더 보기 좋음! feel more like OOP

<br />
 
---

### 2.2. property 축적 가능

```typescript
interface User {
  name: string;
}
interface User {
  age: number;
}
interface User {
  health: number;
}
const zoey: User = {
  name: "zoey",
  age: 22,
  health: 10,
};
```

---

### 2.3. Interface의 abstract class에서의 활용 (추상클래스를 interface로 바꾸자!)

우선, 아래의 코드가 JS에서는 어떻게 보이는지 확인해보자.

```typescript
abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}
// 보다시피 추상클래스는 blueprint(설계도)의 역할만 한다.

class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `hello ${name}. Ny name is ${this.firstName}`;
  }
}
```

```javascript
"use strict";
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name) {
    return `hello ${name}. Ny name is ${this.firstName}`;
  }
}
```

class User는 아무런 쓰임도 없는, 단지 blueprint일 뿐이다. 거슬린다.. 여기서 잠깐. Interface는 가벼워서 컴파일하면 JS로 바뀌지 않고 사라지는 특징을 기억하는가? 그렇다면 class User을 interface 형태로 바꿀 수 있지 않을까?

interface를 쓸 때 클래스가 특정 형태를 따르도록 어떻게 강제할 수 있을까?

```typescript
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
// extends 대신 implements
class Player implements User {}
```

여기까지 쓰면, Player가 missing property(firstName, lastName, sayHi, fullName)가 있다고 빨간줄이 뜬다.

Class 'Player' incorrectly implements interface 'User'.
Type 'Player' is missing the following properties from type 'User': firstName, lastName, sayHI, fullName

누락된 properties를 넣어보자

```typescript
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
// extends 대신 implements
class Player implements User {
  constructor(private firstName: string, private lastName: string) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `hello ${name}. Ny name is ${this.firstName}`;
  }
}
```

여전히 에러가 난다.

Property 'firstName' is private in type 'Player' but not in type 'User'.

인터페이스를 상속할 때는 property를 private이나 protected으로 만들지 못한다. 오직 private만 가능하다.

```typescript
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
// extends 대신 implements
class Player implements User {
  constructor(public firstName: string, public lastName: string) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `hello ${name}. Ny name is ${this.firstName}`;
  }
}
```

이제, JS에서는

```javascript
class Player {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name) {
    return `hello ${name}. Ny name is ${this.firstName}`;
  }
}
```

더이상 추상클래스를 추가로 사용하지 않는다. 파일 사이즈를 줄였다.

정리하자면, js로 컴파일되지 않는 Interface의 특징을 이용해, js에서 쓰임이 없는 추상클래스를 interface로 대체했다. 단점은 private과 public property를 사용하지 못한다는 점, Interface에서는 contructor(){}를 사용할 수 없다는 점.
