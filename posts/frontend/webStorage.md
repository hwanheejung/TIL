# Web Storage(LocalStorage vs SessionStorage)

## **1. What is Local Storage?**

- web browser에서의 expiration date가 없는 저장공간
- 브라우저를 닫아도 정보가 삭제되지 않는다
- 동일한 컴퓨터에서 동일한 웹페이지를 사용하는 경우만 해당
- 정보를 저장하고 싶으면, JSON.stringify()를 이용하여 string으로 바꿔야함

## **2. LocalStorage Methods**

- setItem(key, value)

```javascript
const Student = {
  name: "Zoey",
  age: 22,
};

localStorage.setItem("student", JSON.stringify(Student));
```

- getItem(key)

```javascript
const parsedStudent = JSON.parse(localStorage.getItem("Student"));
```

- removeItem(key)
- key(index)
- clear() : 모든 키의 데이터 삭제
- length : 저장된 key/value 쌍의 개수

## **3. When to use?**

- localStorage는 해당 기기를 사용하는 모든 사람이 접근할 수 있기 때문에 민감한 정보는 저장하지 않는다.
- language나 theme같은 가벼운 정보만 저장한다.

## **4. Session Storage**

- 웹페이지의 세션이 끝나면 정보가 사라진다.
- 여러 탭에 열어두면, 여러 개의 세션 스토리지에 격리되어 정보가 저장
