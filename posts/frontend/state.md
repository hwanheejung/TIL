# State

- 데이터가 저장되는 곳

## **1. setState**

```javascript
const [state, modifier] = React.useState();
// (2) [undefined, ƒ]
```

- state는 data, modifier은 data를 바꿀 때 사용하는 함수.
- useState(0)는 초기값을 0으로 설정해준 것.

<br>

```javascript
const root = document.querySelector(".root");

function App() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    // setCounter(counter + 1);
    setCounter((current) => current + 1);
  };

  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
ReactDOM.render(<App />, root);
```

- data가 바뀔때마다 컴포넌트를 리렌더링하고 UI를 refresh하는 것.
- modifier 함수를 사용해 state를 바꿀 때, 새로운 값을 가지고 컴포넌트 전체가 재생성됨.

<br>

---

## **2. State Functions**
