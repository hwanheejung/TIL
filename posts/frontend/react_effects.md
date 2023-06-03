# Effects

- state가 변경되면, 모든 component는 다시 실행된다.
- 하지만 component 내부의 어떤 코드는 처음 딱 한번만 render되고 다시 render되지 않았으면 좋겠음. (API 호출같은..)
- this is why we use "useEffect"

<br>

---

## **1. useEffect**

useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined)

- dependencies: react.js가 지켜봐야할 것들

<br>

```javascript
import { useEffect } from "react";
```

```javascript
function App() {
  console.log("I run all the time");
  const iRunOnlyOnce = () => {
    console.log("I run only once.");
  };
  useEffect(iRunOnlyOnce, []);

  return <div></div>;
}
```

<br>

---

## **2. Deps**

- 내 코드의 특정 부분만이 변화됐을 때, 원하는 코드들을 실행할 수 있는 방법
- useEffect를 통해 언제 코드를 실행할 지 선택권을 가질 수 있음

한번만 실행

```javascript
useEffect(() => {
  console.log("SEARCH FOR", keyword);
}, []);
```

keyword가 바뀔 때만 실행

```javascript
useEffect(() => {
  console.log("SEARCH FOR", keyword);
}, [keyword]);
```

<br>

---

## **3. Cleanup**

<br>

---

## **4. 정리**

- react는 최소 단위 rendering을 위해 사용된다.
- useState(): 변수, 변수를 제어하는 함수(modifier)로 구성되며, 변하는 값을 제어, 해당 부분의 리렌더링을 위함
- props: 태그의 속성 값을 함수의 argument처럼 component에 값을 전달
  - propType를 설치하고 props의 타입을 지정해줄 수 있음.
    - `Button.propTypes = {
  text: PropTypes.string.isRequired,}`
- useEffect(): 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재. dependency가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행. (dependency는 여러개 입력 가능)

- 부모 컴포넌트에서 리렌더링이 일어날 경우 모든 자식들이 리렌더링됨. (we can use memo)
