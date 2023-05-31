# GET Requests & Responses

---

## 1. My first server

### # STEP 1

```javascript
import express from "express";
```

> "express"라는 package를 express라는 이름으로 import

NodeJS와 npm은 똑똑하기 때문에 "express"라고만 입력하면, node_modules에서 express를 찾고 있다는 것을 알아냄. 경로를 적을 필요없음.

```javascript
const app = express();
```

> app이라는 express application 생성

<br/>

### # STEP 2

- server란?
  - server는 항상 켜져있는 인터넷에 연결된 컴퓨터같은 것.
  - request(서버와 상호작용하는 모든 일)를 listening함. (server is waiting for you)

```javascript
app.listen(4000, handleListening);
```

> - 서버가 사람들이 뭔가를 요청할 때까지 기다리게 해야함.
> - listen()은 callback(서버가 시작될 때 작동하는 함수)이 있음. (click event와 매우 비슷)
> - callback 전에 server에게 어떤 port를 listening할지 알려줘야함.
>   - 보통 높은 숫자의 port들이 비어있음 (나는 4000을 쓸 것)

```javascript
const handleListening = () => console.log("Server listening on port 4000");
```

시작한 server는 localhost를 통해 접속할 수 있음. => 주소창에 `localhost:4000` 입력하면 `Cannot GET /`가 뜬다.

> 에러가 뜨지만, 서버를 만들어냄

<br/>

---

## 2. GET Requests

### 2.1. Cannot GET / 해석

```
Cannot GET /
```

> / : root of server. first page. ex) google.com === google.com/

> GET: HTTP method
>
> - HTTP : 우리가 서버와 소통하는, 혹은 서버끼리 소통하는 가장 안정적이고, 오래된 방법. user가 접속하려고 할 때 browser가 http request(웹사이트에 접속하고 서버에 정보를 보내는 방법)를 만들어줌.
> - 웹사이트에 접속하려 할 때, 사용자가 직접 접속하는 게 아니라, 웹사이트에게 "get me your homepage" 라고 하는 것. 웹사이트가 사용자에게 오게 하는 것.

### 2.2 누군가가 GET request를 한다면?

we must respond.

<br/>

---

## 3. How to respond to GET requests?

express application이 만들어진 다음부터 코드를 짜야함.

```javascript
const handleHome = () => {
  console.log("Somebody is trying to go home.");
};
app.get("/", handleHome);
```

> 누군가가 어떤 route(이 경우 root page로)로, get request를 보낸다면, callback 함수를 작동시켜라

계속 로딩하는 화면이 나온다. (서버가 포기하기 전에 browser가 먼저 포기함)  
`localhost:4000/aaa`와 같은 다른곳 로딩없이 바로 뜨는데 이곳만 계속 로딩함.

- browser가 나에게 request를 보내고 있다는 뜻. 이제는 get request에 반응할 수 있기 때문에 `cannot GET /`가 안뜨는 것.
- 여기까지는 request를 accept하기만 한 것. console.log 이외에 아무것도 한 게 없음

<br/>

---

## 4. Responses

remember => eventListener has handler, handler has event.

Express의 route handler에는 event 대신 request(req), respond(res)라는 두 개의 object가 있음.

```javascript
const handleHome = (req, res) => {
  return res.send("Hi");
};
app.get("/", handleHome);
```

req와 res는 express로부터 받는 것.

> root page로 get request가 오면, express는 handleHome에 req, res object를 넣어준다.

> res.end() : server가 request를 종료함. no response
> res.send() : 화면에 Hi가 뜬다

<br/>

---

## 5. etc

[Expressjs.com](https://expressjs.com/ko/4x/api.html#express.json%20[%20express%20document%20])

서버를 중단시키는 단축키 : `ctrl + c`
