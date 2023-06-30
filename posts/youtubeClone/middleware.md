# Middlewares: software in the middle

# **1. Concept**

- 브라우저가 뭔가를 Request하면, server는 거기에 Respond한다.
- middleware는 request와 respond 사이에 있는 것.
- 모든 Middleware는 handler(controller)가 될 수 있고, 모든 handler(controller)는 Middleware가 될 수 있다.

- 원래 controller에는 `next`라는 argument가 하나 더 있다.

```javascript
// handlehome: controller
const handleHome = (req, res, next) => {
  next();
};
app.get("/", handleHome);
// app.get("/", handleHome, 여기에 함수 없음);
```

이걸 실행하면, `cannot GET /` 라고 나온다. 왜일까?

next 함수를 호출하면 express가 handleHome의 다음 함수를 호출할 텐데, handleHome 다음에 함수가 없다. 그래서 접속 자체가 안되는 것이다!

next()를 사용할 수 있게 middleware를 만들어보자.

<br />

# **2. How to make Middleware?**

```javascript
// middleware
const gossipMiddleware = (req, res, next) => {
  console.log("I'm in the middle");
  next();
};

// finalware이기 때문에 next argument 필요없음
const handleHome = (req, res) => {
  return res.send("Hi");
};

app.get("/", gossipMiddleware, handleHome);
```

- browser는 홈페이지를 get하려고 한다.
- express가 gossipMiddleware를 호출한다.
- gossipMiddleware는 "I'm in the middle"을 console.log하고, next 함수를 호출한다.
- express가 이것을 보고, 다음 함수인 handleHome을 호출한다.

<br/>

## 2.1. middleware도 controller가 될 수 있을까?

```javascript
const gossipMiddleware = (req, res, next) => {
  return res.send("hihihi");
  next(); // 실행되지 않음
};
```

이렇게 next 함수 호출 전에 res.send()를 return해버리면, 다음 함수인 handleHome은 호출되지 않는다.

<br/>

# **3. Global Middleware**

위의 middleware는 `/`에서만 실행된다.

app.use()는 global middleware를 만들 수 있게 해준다. 즉, 어떤 URL에도 작동하는 middleware를 만들어준다.

이때 순서가 중요하다. 먼저 use하고, 그다음에 get이 와야한다.

```javascript
app.use(gossipMiddleware);
app.get("/", handleHome);
```

<br/>

# **4. External Middlewares: Morgan**

- node.js 서버로 구성된 웹 환경에서 HTTP request 로그를 관리하기 위한 middleware
- install: `sudo npm i morgan`
- morgan 함수를 호출하면, 내가 설정한 대로 middleware를 return해준다.

## 4.1. How to use?

```javascript
// 이름은 상관없음.
import morgan from "morgan";
const logger = morgan("dev");
app.use(logger);
```

morgan("dev")를 호울하면, req, res, next를 포함한 함수를 return해준다.

<br/>

## 4.2. 기존 middleware와 Morgan의 차이점

- Morgan이 더 정교하다.
- Morgan은 GET, path, status code.. 와 같은 모든 정보를 가지고 있다.
