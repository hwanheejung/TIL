# **1. Why do we need State Management**

다른 화면의 다른 components에서 같은 state에 접근해야 할 때가 있다. 또, 이 state를 수정해야 할 때가 있다.

Global state는 App 전체에서 공유되는 state로써, App이 특정 value에 어디서든 접근할 수 있어야 할 때 사용한다.

예를 들어, theme 이 App에 있다고 치자. Coin 페이지의 chart에서 isDark에 접근하는 경로는,

isDark: App -> Router -> Coin -> Chart로, 매우 복잡하다. 이런 계층 구조 대신, 어디서든 접근할 수 있는 버블 형태를 채택하면 어떨까?

Header -> (isDark) <- Chart

recoil에서는 이 버블을 atom이라 부른다.

<br/>

# **2. How to Use**

## 2.1. Connect the atom

```typescript
// atom.ts
import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});
```

```typescript
// index.tsx
import { RecoilRoot } from "recoil";
root.render(
  <React.StrictMode>
    // RecoilRoot로 감싼다.
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
```

- useRecoilValue

```typescript
// App.tsx
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

function App() {
  const isDark = useRecoilValue(isDarkAtom); // boolean
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <HelmetProvider>
          <Router />
        </HelmetProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}
```

## 2.2. Modify

- useSetRecoilState

```typescript
import { isDarkAtom } from "../atoms";
import { useSetRecoilState } from "recoil";
function Coins() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <>
      <button onClick={toggleDarkAtom}></button>
    </>
  );
}
```
