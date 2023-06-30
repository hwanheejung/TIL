# Maintain aspect ratio while resizing

# **1. Javascript로 조절**

```javascript
const box = document.querySelector(".box");

if (matchMedia("screen and (max-width: 1080px)").matches) {
  box.style.height = box.clientWidth * 0.55 + "px";
}
```

> screen size 1080px 이하에서, width : height = 1 : 0.55

clientWidth는 자바스크립트에서 box의 width 불러오기

<br/>

# **2. CSS에서 조절**

padding-top 또는 padding-bottom 사용

```css
.img-container {
  position: relative;
  width: 25%;
  height: 0; /* 반응형은 너비가 중요한데, height는 디바이스의 높이를 기준으로 산정됨*/
  padding-top: 100%; /*이와 달리 패딩은 너비를 기준으로 산정됨 */
}
/* height 0을 주면 padding-top이 세로 길이 역할을 하게 됨 */
/* 1:1 - 100%, 2:1 - 50%, 1:2 - 200%, 4:3 - 75%, 16:9 - 56.25% */

.img-container > img {
  position: absolute; /*이때 패딩 때문에 이미지가 밀릴 수 있으므로 absolute를 줌*/
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```
