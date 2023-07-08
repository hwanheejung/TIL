# 웹 = 거미줄

-> 결론: '이동이 매우매우 빨라졌다. 마치 순간이동'

# 인터넷이 뭘까

미국 국방성 -> ARPANET network
전쟁 때문
-> 결론: '모든 것의 연결'
케빈 베이컨의 법칙 '6다리만 건너면 지구촌 사람들 다 만날 수 있다'

-circuit 통신
전화선
문제 = 전화 선 끊어버려! -> 전화 끝남

-> packet 통신
[TCP/IP]
TCP = 쪼개고 붙이는 규약
IP = 주소지

- 서울에서 부산까지 소포를 보낸다

소포를 1/10로 쪼갠다
소포에다가 최종목적지만 적는다 (=부산)
무로가도 부산에만 잘 도달하며 된다!
부산에서 , 다 받은다음 조합해서 완성

뭐가 좋냐?

1. 노드로 모든게 이어지지 않아도 모든 게 연결된다
   :직항 <-> 경유
   -> 도달 범위가 미친듯이 넓어졌다

2. 하나의 노드가 파괴되어도 최종목적지까지 어떠헥든 갈 수 있다
   -> 안정성이 높아졌다.

---

# 웹/인터넷의 시대가 열리게 된다

- 2000~

AI!! 미쳤다!!
통신 깔게 됨. 모뎀. 집마다 유선 깔아주고 통신이 되는 집! 나우누리 PC 통신

웹 서비스들이 엄청나게 많이 나온다
채팅, 게임, 초기 커머스(카탈로그 페이지), 기업 웹사이트, 웹 외주 회사

'웹 마스터' (X)
'웹 퍼블리셔' (O)
웹개발의 전부 = HTML을 만든다 = 올린다 = 끝

- 1세대 웹 = 정적 (<-> 동적)
  일방향적으로 정보를 전달하기만 하는 , 마치 TV, radio

웹 페이지(=책페이지) -> 웹사이트(=공간같은 느낌 site)

- 2세대 웹 = 동적
  웹서비스(상호작용이 있는)
  server(backend) - 'client(frontend)
  [python/django]

  ->통신이라는게 가능해지고
  ->db에 무언가 데이터를 저장해지는게 가능해지고

- 게임(넥슨의 바람의 나라, 넷마블 포커섯다맞고)
- 초기 커머스 (카탈로그 페이지)
- 웹 외주 회사(넥슨) -> 게임 투자
- 네이버 (포털) -> 라이코스, 야후, msn

- 2010~
  스마트폰
  스티브잡스 iphone 2008

1. 유비쿼터스:공간의 제약 없어짐
2. 화면이 작아졌다: 모바일 화면 대응
3. '앱'이라는 개념의 등장

- PC: 게임, 검색, 쇼핑, 업무, 컨텐츠 소비
- 모바일: 사진, 채팅, 이동, 컨텐츠 소비 더 많이, 소통소통소통, 020

웹 개발자에게는 매우 안좋은 시기.
네이버도 엄청 위기감 느꼈던 (웹/PC) -> 모바일 기획자도 없고, 모바일 개발도 약하고.. <-> 카카오

[모바일 버블]
웹 트렌드가 엄청나게 많이 바뀝니다.

웹이 앱한테 밀렸음. -왜냐? -앱은 더 빠르고 (사용성이 좋고) + 서버 부하 줄이려고
? 앱은 왜빠를까 ? -앱은 설치를 합니다. (10MB - 100MB)
여러가지 자원을 기기에 받아놓는 개념
ex) 배민을 다운받는다
자주 변하지 않는 리소스들: 처음 한번에 받아온다. 로고, 로딩 스피너, UI, 돌아가는 캐릭터, 음식 사진 등등
자주 변하는 리소스들은: 그때그때 받아온다. (양이 적음)

        -웹은 설치를 안한다.
            ex) 배민을 다운받는다
                자주 변하지 않는 리소스들: 그때그때 받아온다.
                자주 변하는 리소스들은: 그때그때 받아온다.
        앱은 반응성이 좋음. 매끄럽네
        웹은 누를때마다 뚝뚝 끊기는 느낌. 흰 화면이 보이네

        => 앱이랑 똑같이 가자! client side framework
            ----backbone, angular, vue, react, svelte, .....
            front는 공부를 계-속 해야한다. 트렌드가 워낙 자주 바뀜.
            자주 변하지 않는 리소스들: 그때그때 받아온다.
            자주 변하는 리소스들은: 그때그때 받아온다.
        그러면, 가능하면 어떤 로직(필터, 소팅, 클릭, 움직인다던지, ...)
        액션을 원래는 서버로 보내고, 서버에서 계산을 한다음, 클라이언트 반환
        클라 -> 서버 -> 클라 반응성이 느리고 안좋아짐

        이런 간단한 로직들은 최대한 클라이언트에서 처리하자!
        원래는 환율 계산, 필터, 서버에서 했는데 -> 클라이언트

        클라이언트가 무거워집니다 (fat)

        -HTML, CSS -> 퍼블리싱
        -react/vue/svelte -> frontend
        [대부분의 회사들이 이 방식을 사용중]
        python/django -> SSR -> HTML,CSS,vanilla js[SSR]
        python/django-flask -> CSR -> React/vue/svelte[CSR]

-앱은 설치되어 있으니가 접근성도 더 좋고 -앱은 각종 폰의 이런저런 기능들도 쓸 수 있고(자이로센서, 카메라, 위치센서)

\*웹이 살 길을 찾기 시작함..
-PC 쪽은 여전히 웹이 강세
-Mobile first -> 모바일 웹 영역
<모바일 대응 -> 반응형(responsible) UI -> mobile first>

[-fat client / light server]

1. fat server / light client (HTML, CSS, js)
   server side rendering(서버에서 렌더링함)
   python/django = SSR

2)light server/fat client
'Node.js' + 'React.js'
'flask' + 'Vue.js/Svelte'
=CSR (client side rendering)

3. fat server/fat client
   'Java/spring + C#/dot net core' + 'React.js/Vue.js/Svelte'

-hybrid app <- web 기술로 DOM 가상화해서 앱을 만드는 것 React Native같은거

- 2020~
  17, 19년 블록체인 (web3 -> 웹이 살아나나?)
  20년 메타버스/VR (웹 메타버스)
  23년 AI (chat GPT) -> web UI (chatGPT, character.AI, webUL, hugging face)

웹의 장점.. 범용적이고 유연하다. 어디든 붙을 수 있음.