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
