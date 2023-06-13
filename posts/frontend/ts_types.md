## **1. Implicit Types vs Explicit Types**

- implicit way (typescript는 타입을 추론해준다.)

```javascript
let a = "hello"; // a : string
a = "bye"; // ok
a = 1; // not ok
```

- explicit way (정확히 명시해주는 방법)

```javascript
let b: boolean = false;
let c: boolean = "c"; // not ok

let d: number[] = [1, 2, 3];
```

<br />

---

## **2. Types of TS**

```javascript
let a: number = 1;
let b: string = "a";
let c: boolean = true;

// array
let d: number[] = [1, 2];
let e: string[] = ["a", "b"];
let f: boolean[] = [true];

// optional types
const player: {
  name: string, // required
  age?: number, // not required. (number | undefined)
} = {
  name: "Zoey",
  age: 22,
};
// player.age가 없을 수도 있기 때문에, 이런 식으로 작성.
if (player.age && plaer.age < 10) {
}
```

### 2.1. Alias Type

- type 재사용하는 방법

```javascript
type Player = {
  name: string,
  age?: number,
};
const me: Player = {
  name: "Zoey",
};
const friend: Player = {
  name: "Harry",
  age: 12,
};
```

### 2.2. function에서 return값의 type 지정 방법

```javascript
type Player = {
  name: string,
  age?: number,
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}
// const playerMaker = (name:string) : Player => ({name})

const Zoey = playerMaker("Zoey"); // type Player
Zoey.age = 22;
```

### 2.3. readonly property

- readonly를 추가하면 const처럼 바꿀 수 없음. immutable.
- javascript에는 없음
- typescript에서만 보호받을 수 있는 속성.

```javascript
type Player = {
    readonly name : string,
    age? : number
}
const playerMaker = (name:string) : Player => ({name})
const zoey = playerMaker("zoey");
zoey.name = "Harry" // error. cannot change cuz it's readonly

```

### 2.4. Tuple

- array를 생성. 최소한의 길이를 가져야 하고, 특정 위치에 특정 타입이 있어야 함.
- API 읽어올때 유용
- javascript에는 없음

```javascript
const player: [string, number, boolean] = ["zoey", 22, false];
```

### 2.5. any

- typescript의 보호장치로부터 빠져나오고 싶을 때 쓰는 타입
- 되도록 쓰지 않는다.

```javascript
let a = []  // let a : any[]
let b : any = true;
let c : any[] = 1, 2, 3, 4;

b + c  // 정상작동
```

## **3. Types of TS : only in TS**

- typescript의 핵심은 type checker와 소통하는 것

### 3.1. unknown

- 어떤 작업을 하려면 이 변수의 타입을 먼저 확인해야 함

```javascript
let a: unknown;

if (typeof a === "number") {
  let b = a + 1;
}
if (typeof a === "string") {
  let b = a.toUpperCase();
}
```

### 3.2. void
