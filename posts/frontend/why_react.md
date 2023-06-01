# React의 필요성

## 1. Todo list 회고

Todo list 프로젝트는 HTML, CSS, vanilla javascript로만 만들었다. 불편했던 점은 다음과 같다.

> 1.데이터와 화면의 일치 문제

단순한 기능만 포함한 사이트지만, 데이터와 화면을 일치시키기 위해 하나하나 신경써줘야 해서 불편하고, 실수할 가능성도 매우 높다고 판단했다. 보통 다음과 같은 step을 밟는다.

- step 1. HTML 작성
- step 2. javascript에서 가져온다
- step 3. event 생성
- step 4. 데이터 업데이트
- step 5. HTML 업데이트

이런 방식은 간단한 웹사이트에서는 괜찮을지는 몰라도, 사이트가 복잡해지면 감당하기 어려워지는 게 뻔히 보였다. React는 더 편리하고, 좀 더 설계된 방식으로 관리할 수 있다.

내가 만든 투두리스트와는 비교도 안되게 복잡한 페이스북을 예로 들어보자. 페이스북에서 닉네임을 변경하면, 기존에 내가 작성했던 댓글이나 게시물에서는 이전 닉네임으로 뜨는 것과 같은 문제점(데이터와 화면의 불일치)이 발생했다.

- React는 single page application을 만드는, 즉 웹에서 모바일 앱같은 느낌이 나는 사이트를 만들 때 쓰인다. (따라서 간단한 웹페이지를 만들 때는 굳이 react를 쓸 필요가 없다.)

- web application에 대한 수요가 늘어났다. 기존의 웹페이지에 비해 데이터가 많다는 특징이 있음. ex) excel

- 데이터가 바뀌면 화면이 바뀌어야 하지만, 이걸 기존의 javascript, jquery로 구현하기에는 너무 복잡함

- React가 데이터와 화면의 일치 문제를 수월하게 해결해준다.

- React, Vue, Svelte, Preact, SolidJS 등의 라이브러리가 많지만, 우리나라에서는 React를 가장 많이 쓴다.

<br>

> 2.아쉬운 화면전환

화면 안에서 특정 부분만 새로고침하도록 하고싶은데, 방법을 몰라 window를 새로고침해서 해결했다. 그러다 보니 불필요한 부분까지 새로고침이 일어나 자연스러운 화면전환이 아쉬웠다.

=> vanilla javascript의 경우 브라우저는 노드정보가 바뀔 때마다 노드트리를 처음부터 다시 생성한다. 하지만 react는 가상돔을 써서 우리 시야에 보이는 부분만 수정해서 보여주고, 모든 업뎃이 끝나면 일괄로 합쳐 실제 돔에 던져준다. 렌더트리 단계 최적화가 매우 중요!

<br>

## 2. React의 단점

- 검색 엔진 노출에 어려움이 있을 수 있다.

<br>

## 3. 사용법

다음 코드 추가

```javascript
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
```
