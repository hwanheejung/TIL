# Functions in TypeScript

## **1. Call Signatures**

- 함수 위에 마우스를 올렸을 때 보게 되는 것
- 함수가 어떻게 구현되는지를 알려주는게 아니라, parameter(매개변수)의 타입과 함수의 반환 타입을 알려줌
- 우리가 타입을 만들 수 있고, 함수가 어떻게 작동하는 지 서술해 둘 수 있다는 장점
- 프로그램을 디자인할 때 먼저 타입을 생각하고, 코드를 구현하는 것
- ![참고링크](https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures)

<br />

### 1.1. how to declare?

```javascript
type Add = (a: number, b: number) => number; // declare 짧은버전
// type Add = {                              // 길게 쓴 버전
//     (a: number, b: number) : number
// }

const add: Add = (a, b) => a + b; // 정상작동
const add: Add = (a, b) => {
  a + b;
}; // error: Type 'void' is not assignablt to type 'number'
```

<br/>

---

## **2. Overloading**

- 외부 라이브러리나 패키지에서는 오버로딩을 흔히 사용하기 때문에 알아둘 것
- 오버로딩은 함수가 여러 개의 call signatures를 가지고 있을 때 발생함.

```javascript
type Add = {
    (a: number, b: number) : number
    (a: number, b: string) : number
}
const add: Add = (a, b) => a + b
```

위 예시에서는 b는 number일 수도 있고, string일 수도 있다. 하지만, 반환 타입은 무조건 number이기 때문에 똑똑한 타입스크립트는 뭔가 잘못됐다고 말해준다.  
(Operator '+' cannot be applied to types 'number' and 'string | number')

따라서 if문을 사용해서 한번 걸러줘야함.

```javascript
type Add = {
    (a: number, b: number) : number
    (a: number, b: string) : number
}
const add: Add = (a, b) => {
    if(typeof b === "string") return a
    return a + b
}
```

<br />

### 2.1. Next.js에서 볼 수 있는 overloading의 좋은 예시

```javascript
Router.push("/home"); // 이렇게도 할 수 있지만,
Router.push({
  // 이것처럼 object 형식으로 다른 것도 묶어서 보낼 수 있다.
  path: "/home",
  state: 1,
});
```

```javascript
type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string):void     // 1
    (config: Config):void   // 2
}

const push:Push = (config) => {
    if(typeof config === "string"){     // 1
        console.log(config);
    }else{                              // 2
        console.log(config.path, config.state);
}
```

<br/>

### 2.2. 다른 여러 개의 argument를 가지고 있을 때 발생하는 효과

```javascript
type Add = {
  (a: number, b: number): number,
  (a: number, b: number, c: number): number,
};
const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
```

Add 함수를 부를 때, parameter로 a, b를 부를 수도 있고, a, b, c를 부를 수도 있다. 다른 개수의 Parameter를 가지면, 나머지 parameter도 타입을 지정해줘야 한다. 여기서 extra c parameter는 option이다. 따라서, `c?:number`처리를 해줌으로써 `c는 아마도 number일 것이다`라고 알려주고, 이 파라미터는 선택사항이라는 것을 알려줘야 한다.

<br/>

---

## **3. Polymorphism, Generic**

- Poly(many, several, much, multi) + morphos(form, structure) = many different forms
- generic이 어떻게 도움을 줄 수 있는지 알아보자.

```javascript
// 배열을 받고 그 배열을 print해주는 함수
// type doesn't matter, 배열인지만 볼 것.
type SuperPrint = { // call signature
    (arr : number[]): void
    (arr : boolean[]): void

}
const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i));
}
superPrint([1, 2, 3, 4]);
superPrint([true, false, false]);


```

- string도 넣고싶은데, SuperPrint에 `(arr: string[]):void`를 추가할까? Nope! 더 나은 방법이 있다.
- `superPrint([1, "a", true, 4])`가 동작할까?(=모든 combination을 call signature에 작성해야할까?) Nope! 이것들에 대한 call signature가 없기 때문

<br />

> This is why we use "Generic"

- concrete type: 우리가 알던 타입 (ex. string, number, boolean, unknown...)
- generic type: 타입의 Placeholder같은 것. concrete type 대신 쓸 수 있다. 타입스크립트가 그게 뭔지 추론해서 함수를 사용한다.
- call signature를 작성할 때, 여기 들어올 concrete 타입을 모르겠는 경우, Generic을 사용한다.
- generic은 우리가 요구한 대로 call signature를 생성해주는 도구

```javascript
// STEP 1: ts에게 generic을 사용하고 싶다고 알리기
// <T> = hey typescript! please infer the type
type SuperPrint = {
  <Generic>(arr: Generic[]): void, // <>안에는 아무 이름이나 쓸 수 있다. 보통 <T>나 <V>를 많이 사용함.
};
const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

// STEP 2: ts가 알아낸 타입으로 placeholder(Generic)를 대체해줌
superPrint([1, 2, 3, 4]);
// const superPrint: <number>(arr: number[]) => void
superPrint([true, false, false]);
// const superPrint: <boolean>(arr: boolean[]) => void
superPrint([1, "a", true, 4]);
// const superPrint: <number | string | boolean>(arr: (number | string | boolean)[]) => void
```

> TS generates call signatures automatically for us. We don't have to write down manually..

<br />

### 3.1. Generic이 두개라면?

```javascript
type SuperPrint = <T, V>(a: T[], b: V) => T;

const superPrint: SuperPrint = (arr) => arr[0];

superPrint([1, 2, 3, 4], "x");
// const superPrint: <number, string>(a: number[], b: string) => number
```

- ts는 제네릭을 처음 인식했을 때와 제네릭의 순서를 기반으로 타입을 추론한다.

<br />

---

## **4. 다른 용도의 Generics**

- generic는 라이브러리를 만들거나, 다른 개발자가 사용할 기능을 개발하는 경우 유용하다.
- 그 외 대부분의 경우는 직접 작성할 일은 드물다.
- nextJS, nestJS, reactJS에서 ts에게 generic을 보내게 될 것.

<br />

### 4.1. 다른 방식으로 선언하는 방법

```javascript
function superPrint<V>(a: V[]) {
  return a[0];
}

const a = superPrint([1, 2, 3, 4]);
```

<br />

### 4.2. 제네릭을 사용해 타입 확장. reuse

```javascript
type Player<T> = {
  name: string,
  extraInfo: T,
};
type ZoeyExtra = {
  favFood: string,
};
const Zoey: Player<ZoeyExtra> = {
  name: "Zoey",
  extraInfo: {
    favFood: "kimchi",
  },
};

const Harry: Player<null> = {
  name: "Harry",
  extraInfo: null,
};
```

<br />

### 4.3. number[]를 다르게 쓰는 방법

```javascript
function printAllNumbers(arr: number[]);
function printAllNumbers(arr: Array<number>);
```

<br />

### 4.4. reactJS에서의 제네릭

```javascript
useState<number>()
```
