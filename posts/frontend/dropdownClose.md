# menu 밖에서 클릭하면 닫기

```javascript
window.addEventListener("click", function (e) {
  if (box.classList.contains("active")) {
    if (!e.target.closest(".box")) {
      box.classList.remove("active");
    }
  }
});
```
