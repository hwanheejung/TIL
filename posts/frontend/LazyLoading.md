# Image Lazy Loading

## **1. What is Image Lazy Loading**

- 웹 성능 최적화를 위함
- 이미지들이 화면에 보여질 필요가 있을 때 로딩을 하는 테크닉. 필요할 때만 로딩.
- 웹 성능 향상, 비용 감소
  - 이미지가 viewport 밖에 위치하면 로딩하지 않기 때문에 페이지 내에서 전달할 용량을 아낄 수 있음.

## **2. How to use(using img element)**

### 2.1 브라우저에서 이미지를 로드하는 방법과 시기를 변경하는 방법

```html
<img src="hello.jpg" loading="lazy" />
```

- 즉시 로드하지 않고 유저가 실제로 이미지를 볼 때만 로드.

<br>

### 2.2 이미지 크기를 고려하는 방법

lazy loading을 사용하더라도 이미지 크기가 최적화되지 않으면 웹사이트 속도가 느려질 수 있음. => `<srcset>`, `<sizes>`

`<srcset>`은 디바이스마다 로드할 이미지를 다르게 정의할 수 있다. 핸드폰에서는 저해상도 이미지를, 데스크탑에서는 고해상도 이미지를 로드하도록.

```html
<img
  srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w"
  src="small.jpg"
/>
```

srcset을 지원하지 않는 브라우저의 경우를 대비해 src를 추가한 것.

```html
<img
  srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w"
  sizes="(max-width: 600px) 400px,
           (max-width: 1200px) 800px,
           1400px"
  src="small.jpg"
/>
```

- img element를 이용하면, 어떤 이미지를 로드할지 결정하는 것은 "브라우저"다. 내가 모든 제어권을 가지고 싶다면, picture element를 사용하라.

<br>

## **3. How to use(using picture element)**

```html
<picture>
  <source srcset="/hello.vertical.jpg" media="(orientation: portrait)" />
  <source srcset="/hello.horizontal.jpg" media="(orientation: landscape)" />
  <img src="/hello.default.jpg" />
</picture>
```

source의 media attribute에는 원하는 CSS media query를 작성할 수 있음.

- media="(min-width: 800px)"
- media="(prefers-color-scheme: dark)"
- media="(min-resolution: 2dppx)"
- media="(min-height: 800px)"
