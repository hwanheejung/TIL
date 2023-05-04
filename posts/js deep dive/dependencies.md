# Understanding Dependencies

---

## **1. Dependencies?**

> 프로젝트를 구동시키는데 필요한 모듈들

- npm이 package.json을 보고 필요한 것을 설치함.
- 팀으로 nodeJS를 사용한다면, 팀원에게 node_modules 전체를 보낼 필요 없이 dependencies를 알려주면 됨
- 그러면 팀원이 본인 컴퓨터에서 `npm i`만 하면, node_modules가 똑같은 버전으로 다운됨
- 따라서 굳이 github에 올릴 필요가 없으므로, .gitignore 파일을 만들어 /node_modules를 추가하자.

<br/>

---

## **2. `npm i` 시 주의사항**

- `npm i`를 할 때는 package.json을 닫고 실행하라
  - cuz) package.json이 저장되지 않은 상태에서 installation이 일어나면, npm이 package.json의 dependencies를 수정하면서 버전충돌이 일어남.

<br/>

---

## **3. 결론**

우리한테는 dependencies가 있기 때문에, `npm i`를 하면 알아서 dependencies에 해당되는 모듈들이 설치된다.
