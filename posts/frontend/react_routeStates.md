# useLocation() 사용법

# **1. 필요성**

이제까지는 다른 페이지로 이동할 때 URL의 파라미터 정보를 객체 형태로 반환해주는 useParams 훅을 활용했다. 예를 들어, useParams는 /coins/:id와 같은 URL에서 :id 부분에 해당하는 값을 파라미터로 받아와서 사용하는 형식이다. 하지만 다른 페이지에서 다시 현재 페이지로 이동할 때마다 새로 load해야 하는 문제가 생긴다.

crypto tracker app을 보면, API에서 데이터를 받아 화면에 뿌린다. Bitcoins을 클릭하면, URL을 통해서 coin screen으로 우리가 누른 코인의 정보를 보내준다. coin screen이 우리가 무엇을 원하는지 파악해서, API로부터 요청한다. 그 사이에 user은 오직 loading화면만 보게 되는데, 생각해보면 우리는 이미 코인에 대한 정보(ex. 이름)들을 적어도 조금은 가지고 있다. 이미 이름과 같은 정보들은 가지고 있는데 loading을 통해 다시 불러올 필요가 있을까?

<br />

# **2. Let's use 'state'**

URL 대신 State를 사용해보자. State는 behind the scene communication과 같은 것이다. [React Router DOM](https://reactrouter.com/en/main/components/link)에서 Link component를 사용할 때 두 가지 옵션이 있다는 것을 알 수 있다.

`<Link to="/about">About</Link>`와 같이 string을 이용하는 방법과,
다음과 같이 object를 이용하는 방법이다.

```javascript
<Link to={{pathname: `/${coin.id}`,
           search: "?sort=name",
           hash: "#the-hash",
           state: {name: coin.name}
           }}>
```

우리는 이 object를 통해 데이터 그 자체를 다른 화면으로 보낼 수 있다.

<br />

# **3. How to get data**

우리는 react router DOM이 보내주는 location object에 접근해야 한다.

```typescript
import { useLocation } from "react-router-dom"; //
import { useState } from "react";

interface LocationState {
  state: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as LocationState; //

  return (
    <Container>
      <Header>
        <Title>{state ? state : "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
```

Home에서 Bitcoin을 클릭하면 Bitcoin은 loading 없이 먼저 뜨게 된다. 이런 작은 것들이 App이 빠르게 구동되는 것처럼 보이게 한다.

<br />

# **4. 주의사항**

만약 누군가가 home화면 말고 coin페이지로 바로 접속하려고 하면 에러가 난다. Home화면에서 각 coin을 클릭할 때 state가 만들어지기 때문에, home화면을 먼저 열어야 한다.
