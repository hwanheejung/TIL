# URL의 형식

> http://opentutorials.org:3000/main?id=HTML&page=12

- `http`
  - protocol. 통신 규칙
  - 사용자가 서버에 접속할 때 어떤 방식으로 통신할 것인가에 대한 정보
  - http : hyper text transfer protocol
    - HTML 문서를 교환하기 위해 만들어진 protocol
    - 웹 브라우저와 웹 서버가 서로 데이터를 주고받기 위해서 만든 통신 규칙
    - 기본적으로 request/response 구조로 되어있음
- `opentutorials.org`
  - host(domain)
    - 인터넷에 접속되어 있는 각각의 컴퓨터
  - 특정한 인터넷에 연결되어 있는 컴퓨터를 의미
- `3000`
  - port
  - 어떤 포트에 연결되어 있는지 표시
- `main`
  - path
  - 컴퓨터 안에 어떤 디렉토리 안의 어떤 파일인지를 가리킴
- `id=HTML&page=12`
  - query string
  - 이 값을 변경하면 웹 서버에게 데이터를 전달할 수 있음
  - query string의 시작은 `?`로 하기로 약속되어 있음
  - 값과 값 사이에는 `&`를 사용하기로 약속
  - 값의 이름과 값은 `=`로 구분하기로 약속
