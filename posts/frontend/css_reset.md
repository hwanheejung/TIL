# **1. 필요성**

크로스브라우징: 웹 표준에서 중요시하는 기술로 크롬, 사파리, 파이어폭스 등의 브라우저에서 웹 사이트에 접속 했을 때 어느 한쪽에 최적화되어 치우치지 않도록 공통 요소를 사용하여 제작하는 것.

❗️브라우저마다 HTML 시맨틱 태그에 대한 기본값이 다르므로 그 차이를 없애는 데 필요❗️

<br />

# **2. 종류**

- Reset CSS : 브라우저의 스타일을 완전히 초기화

  - [Reset.css CDN](https://www.jsdelivr.com/package/npm/reset-css)

- Normalize CSS : 초기화는 하지만 브라우저 간 일관성을 유지하도록 하는 기본 스타일 존재
  - [Normalize CSS CDN](https://www.jsdelivr.com/package/npm/normalize.css)

<br/>

# **3. Reset.css 사용법**

```css
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400&display=swap");
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  font-family: "Source Sans 3", sans-serif;
  overflow-x: hidden;
  color: #333;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
  background: inherit;
  border: none;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
  outline: none;
}
a:visited {
  text-decoration: none;
  color: inherit;
}
ol,
ul,
li {
  list-style: none;
}
input {
  -webkit-appearance: none; /* Safari and Chrome */
  -moz-appearance: none; /* Firefox */
  appearance: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

input:focus {
  outline: none;
```

## 3.1. HTML link 태그에 바로 적용

```html
<link rel="stylesheet" href="./style.css" />
```

## 3.2. reset.css 파일을 styles.css에 import

```css
@import "../reset.css";
```
