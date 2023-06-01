# JSX

- javascript를 확장한 문법
- HTML 문법과 유사

<br>

---

## **0. Set up**

```javascript
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    // 코드 입력
</script>
```

<br>

---

## **1. babel의 역할**

- babel은 JSX 번역기로, head 영역으로 던진다.

```javascript
const root = document.querySelector(".root");
const Title = () => (
  <h3 id="title" onMouseEnter={() => console.log("Mouse Entered")}>
    Title
  </h3>
);
const Button = () => (
  <button
    style={{
      backgroundColor: "tomato",
    }}
    onClick={() => console.log("i'm clicked")}
  >
    Click me
  </button>
);

const Container = () => (
  <div>
    <Title />
    <Button />
  </div>
);
ReactDOM.render(<Container />, root);
```

=> babel이 다음과 같이 번역한다.

```javascript
const root = document.querySelector(".root");
const Title = () =>
  /*#__PURE__*/ _jsx("h3", {
    id: "title",
    onMouseEnter: () => console.log("Mouse Entered"),
    children: "Title",
  });
const Button = () =>
  /*#__PURE__*/ _jsx("button", {
    style: {
      backgroundColor: "tomato",
    },
    onClick: () => console.log("i'm clicked"),
    children: "Click me",
  });
const Container = () =>
  /*#__PURE__*/ _jsxs("div", {
    children: [/*#__PURE__*/ _jsx(Title, {}), /*#__PURE__*/ _jsx(Button, {})],
  });
ReactDOM.render(/*#__PURE__*/ _jsx(Container, {}), root);
```

<br>

---

## **2.문법**

### 2.1) arrow function

`const myFunction = () => ();`

=

`function myFunction(){return ();}`

<br>

### 2.2) 우리가 만든 컴포넌트의 첫 글자는 반드시 대문자

`<Button />` `<Title />`

- 대문자가 아니면 그냥 HTML tag으로 인식한다.

<br>

### 2.3) 함수형으로 바꾸면 컴포넌트로 인식함
