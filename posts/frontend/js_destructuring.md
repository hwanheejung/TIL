# Destructuring assignment

```javascript
const x = event.x;
const y = event.y;
//
const { x, y } = event;
```

```javascript
const value = event.currentTarget.value;
//
const { value } = event.currentTarget;
//
const {
  currentTarget: { value },
} = event;
```

```javascript
const value = event.currentTarget.value;
const tagName = event.currentTarget.tagName;
const width = event.currentTarget.width;
const id = event.currentTarget.id;
//
const {
  currentTarget: { value, tagName, width, id },
} = event;
```
