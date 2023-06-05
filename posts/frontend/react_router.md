# React Router

## **1. Installation**

```
npm install react-router-dom
```

<br/>

---

## **2. Router**

- [react-router-6.11.2](https://reactrouter.com/en/6.11.2)

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
```

- URL 뒤의 경로가 `path`와 일치하면 `element prop`를 실행
- route는 페이지, 화면 등의 단위
  - 전체를 보여주는 home route, 상세페이지를 보여주는 detail route 등
- App.js에서는 `BrowserRouter`를 렌더
  - `BrowserRouter`는 URL을 바라보고 있는 component
  - URL에 따라 페이지를 다르게 보여주는 역할
- `Routes`는 route를 찾는 역할
  - route를 찾으면 component를 렌더링

<br/>

---

## **3. Link**

- 전체 새로고침 없이 다른 페이지로 이동시켜주는 컴포넌트
- 한 route에서 다른 route로 가고 싶을 때 `<a href="">`를 쓸 수도 있지만, 이 방법은 페이지 전체가 새로고침되기 때문에 react의 장점을 깎는다.
- 따라서 "react-router-dom"에서 import한 `<Link />`를 사용한다.

```javascript
import { Link } from "react-router-dom";
function Movie() {
  return (
    <h1>
      <Link to="/movie">Title</Link>
    </h1>
  );
}
```

<br/>

---

## **4. 동적 URL**

- useParams
  - url에 있는 값을 반환
  - Detail.js에서 `:변수명` 변수에 url뒤에 붙은 값을 담아 넘겨준다.

```javascript
// App.js
<Route path="/movie/:id" element={<Detail />}></Route>;

// Detail.js
import { useParams } from "react-router-dom";
const { id } = useParams();
```
