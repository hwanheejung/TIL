# gitignore에 파일 추가했는데 커밋대상에서 제외가 안된다!

## **1. gitignore 사용법**

```
/fileName.txt
/fileDirectory/fileName.txt
```

특정 확장자를 가진 모든 파일 무시

```
*.txt
```

예외

```
!fileName.txt
```

---

## **2. gitignore 적용 안될때**

git의 cache의 문제이다. 캐시를 삭제하고 다시 커밋하면 정상작동된다.

terminal에서
`git rm -r --cached .` 입력

이때, git이 설치되어 있어야 한다!
