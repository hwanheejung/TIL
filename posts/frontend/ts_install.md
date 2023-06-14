# Typescript

## **1. Installation**

- [docs](https://create-react-app.dev/docs/adding-typescript/)

새로 시작하는 경우  
`npx create-react-app my-app --template typescript`

이미 시작한 프로젝트에서 설치하는 경우  
`npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

- 설치 후 .js -> .tsx

<br />

---

## **2. Fix errors**

- typescript로 만들어지지 않은 library를 import하는 경우

### ex) styled componenets

- styled-components는 Typescript가 이해하지 못하기 때문에 설치해줘야함.

```
npm i styled-components
```

에러날 경우

```
npm i styled-components@latest
```

- 타입정의 받기

```
npm i --save-dev @types/styled-components
```
