# Themes

- [docs](https://styled-components.com/docs/api#typescript)

## **1. Create a declarations file**

우리는 styled components를 이미 install했다. (DefinitelyTyped)

```
npm install @types/styled-components
```

DefinitelyTyped 안에 styled-componenets 안에는 index.d.ts라는 파일이 있는데, 우리는 테마를 활용하기 때문에 이 파일을 확장할 필요가 있다.

`styled.d.ts`를 만들자. `.d.ts`는 declaration file이라는 뜻이며, 이 파일은 우리가 이전에 설치해 놓은 파일을 override할 것이다.

```typescript
// styled.d.ts
// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    btnColor?: string;
  }
}
```

## **2. Create a Theme**

```typescript
// theme.ts
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
  btnColor: "tomato",
};

export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  btnColor: "teal",
};
```

## **3. index.tsx에 2에서 만든 테마를 주입한다.**

```typescript
// index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components"; //
import { lightTheme, darkTheme } from "./theme"; //

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

`<ThemeProvider>`는 styled-components로부터 오는 하나의 컴포넌트이다. 그리고 얘는 theme object를 필요로 한다. 어떤 컴포넌트(위에서는 `<App />`)를 `<ThemeProvider>`안에 넣게 된다면, 그 컴포넌트는 theme object에 접근할 수 있게 된다.

## **4. app.tsx에서 props로 받아 사용한다.**

```typescript
// app.tsx
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
```
