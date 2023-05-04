# How to write by markdown?

## **0. What is markdown**

2004년 John Gruber, Aaron Swartz에 의해 개발된 plain-text 포맷을 기본으로 한 경량형 마크업 언어이다.

### 0.1. markdown의 장점

- 간결함
- html로 변환 가능
- text 형태로 저장되기 때문에 용량 적음

<br/>

---

## **1. Manual**

VS code에서 지원하는 markdown preview를 이용하면 실시간으로 결과물을 볼 수 있음!

### 1.0. Reference

- [Github docs](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#quoting-text)
- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)

### 1.1. Headers

- 6가지 지원

```markdown
# h1

## h2

### h3

#### h4

##### h5

###### h6
```

# h1

## h2

### h3

#### h4

##### h5

##### h6

<br/>

### 1.2. Text Styling

```markdown
_italic_
**bold**
**_All italic and bold_**
**this text is _extremely_ important**
~~Strikethrough~~
```

_italic_

**bold**

**_All italic and bold_**

**This text is _extremely_ important**

~~Strikethrough~~

<br/>

### 1.3. Quote

#### 1.3.1. blockquote

```
> Connecting the dots.
```

> Connecting the dots.

<br/>

#### 1.3.2. with multiple paragraphs

```
> You can’t connect the dots looking forward.
>
> You can only connect them looking backwards.
>
> So you have to trust that the dots will somehow connect in your future.

```

> You can’t connect the dots looking forward.
>
> You can only connect them looking backwards.
>
> So you have to trust that the dots will somehow connect in your future.

<br/>

#### 1.3.3. Nested

```
> You can’t connect the dots looking forward.
>
>> You can only connect them looking backwards.
>>
>>> So you have to trust that the dots will somehow connect in your future.
```

> You can’t connect the dots looking forward.
>
> > You can only connect them looking backwards.
> >
> > > So you have to trust that the dots will somehow connect in your future.

<br/>

### 1.4. Code

#### 1.4.1. Using single backticks

```markdown
`command`
`#0969DA`
`rgb(9, 105, 218)`
`hsl(212, 92%, 45%)`
```

`command`

`#0969DA`

`rgb(9, 105, 218)`

`hsl(212, 92%, 45%)`

<br/>

#### 1.4.2. Using triple backticks

````markdown
```
<h1>Hello World</h1>
<p>It's a beautiful day!</p>
```
````

```
<h1>Hello World</h1>
<p>It's a beautiful day!</p>
```

c.f) code 안에 backtick을 추가하고 싶다면, 더 많은 백틱으로 감싸라.

<br/>

### 1.5. Links

#### 1.5.1. Relative links

```
Click [here](https://github.com/hwanheejung/TIL)
```

Click [here](https://github.com/hwanheejung/TIL)

<br/>

#### 1.5.2. Images

```markdown
![description](https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png)

![description](../../images/frontend/GitHub-Emblem.png)
```

![description](https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png)

![description](../../images/frontend/GitHub-Emblem.png)

<br/>

### 1.6. Lists

#### 1.6.1 Unordered lists

Use `-`, `*`, or `+`

```markdown
- A
  - A.a
    - A.a.a
    - A.a.b
  - A.b
  - A.c
- B
  - B.a
    - B.a.a
- C
  - a
  - b
```

- A
  - A.a
    - A.a.a
    - A.a.b
  - A.b
  - A.c
- B
  - B.a
    - B.a.a
- C
  - a
  - b

<br/>

#### 1.6.2. Ordered lists

```markdown
1. A
   - a
2. B
3. C
```

1. A
   - a
2. B
3. C

<br/>

#### 1.6.3. Tasks

```markdown
- [x] todo-1
- [ ] todo-2
```

- [x] todo-1
- [ ] todo-2
