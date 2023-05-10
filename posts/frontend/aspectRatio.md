# Maintain aspect ratio while resizing

```javascript
const box = document.querySelector(".box");

if (matchMedia("screen and (max-width: 1080px)").matches) {
  box.style.height = box.clientWidth * 0.55 + "px";
}
```

> screen size 1080px 이하에서, width : height = 1 : 0.55

clientWidth는 자바스크립트에서 box의 width 불러오기
