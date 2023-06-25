# **1. Nested Routes**

기본적인 react state로 컨트롤 하는 방법과 URL로 컨트롤하는 방법이 있다. URL로 컨트롤하는 방법은 예를 들어, /btc-bitcoin에서 두개의 탭이 있다고 하면, 같은 화면이지만 하나는 /btc-bitcoin/chart, 다른 하나는 /btc-bitcoin/price가 될 것이다.

URL로 하면 사용자가 URL을 통해 특정 탭으로 바로 접속할 수도 있기 때문에 사용성이 더 높다.

<br />

# **2. react-router-dom v6**

v6에서 nested routes를 구현하는 방법은 두가지이다. [참고링크](https://ui.dev/react-router-nested-routes)

## 2.1. 첫번째 방법 (이전 버전과 비슷)

부모 route의 path 마지막에 `/*`를 적어 명시적으로 이 route의 내부에서 nested route가 render될 수 있음을 표시하고 자식 route를 부모 route의 element 내부에 작성하는 방법.

router.tsx에서

```javascript
<Route path="/:coinId/*" element={<Coin />} />
```

Coin.tsx에서

```javascript
<Routes>
  <Route path="chart" element={<Chart />} />
  <Route path="price" element={<Price />} />
</Routes>
```

이때, Routes가 상대경로도 제공하기 때문에 path="chart"와 같이 써도 동작한다.

<br />

## 2.2. 두번째 방법 (이게 더 쉬운듯)

자식 route를 부모 element의 내부가 아닌 route 내부에 작성하는 방법.

router.tsx에서 chart와 price를 import하고,

```javascript
<Route path="/:coinId" element={<Coin />}>
  <Route path="chart" element={<Chart />} />
  <Route path="price" element={<Price />} />
</Route>
```

자식 route들이 어디에 render될지 `Outlet`을 사용해 표시해준다.
Coin.tsx에서 Outlet을 Import해주고 `<Outlet />`를 작성한다.

<br/>

# **3. 정보 매치**

`useMatch`를 react-router-dom에서 import한다. 이는 사용자가 특정한 URL에 있는지의 여부를 알려준다.

```javascript
const priceMatch = useMatch("/:coinId/price");
console.log(priceMatch);
//path, url, isEsact, params 등이 포함된 Object 반환.
// 그곳에 없다면, null 반환.
```

만약, 사용자가 `/:coinId/price`에 있다면, priceMatch가 우리에게 말해줄 것이다. 즉, 현재 위치를 기준으로 지정된 경로에 대한 일치 데이터를 반환한다.

chartMatch의 값이 있으면 Object를 반환하고, 없으면 null이 반환되는 것을 이용하여 null이 아닐 때 isActive이 true가 되게 해주고, 적절히 스타일링해준다.

```javascript
<Tabs>
  <Tab isActive={chartMatch !== null}>
    <Link to={`/${coinId}/chart`}>Chart</Link>
  </Tab>
  <Tab isActive={priceMatch !== null}>
    <Link to={`/${coinId}/price`}>Price</Link>
  </Tab>
</Tabs>
```
