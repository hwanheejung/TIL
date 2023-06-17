# git : 리눅스 명령 환경

git-scm.com 다운로드
폴더이동 > 마우스 오른쪽 버튼 > git-bash here

## git upload

```
echo "# afterClass" >> README.md
// 문서를 만든다.
$ git init
// git 폴더 초기화
$ git add README.md
// git 업로드할 파일 선택
$ git commit -m "first commit"
// 버전관리에 들어갈 설명 쓰기
$ git branch -M main
// master => main
git config  --global  user.email "여러분이메일주소"
git config  --global  user.name "여러분이름"

git remote add origin https://github.com/hwanheejung/{repository}.git
// 업로드할 폴더와 로컬폴더를 연결
// staging : 업로드할 준비

git push -u origin main
// 진짜 업로드
```

## 두번째 접속 후 업로드

```
git add .
$git commit -m "설명"
git push -u origin main
```

## git config 설정하는 방법

만약 위에서 user.name 그리고 user.email을 바꾸려면 어떻게 하는지 알아봅니다. 각각 아래와 같습니다. --global를 사용하여 전역으로 설정
git config --global user.name "홍길동"
git config --global user.email "email"

## git config 삭제하기

git config --unset user.name
git config --unset user.email

만약 삭제해도 계속 남아있다면? global로 설정한 경우 반드시 global 옵션을 추가해야 해당 값이 삭제
git config --unset --global user.name
git config --unset --global user.email

이제 삭제가 되었는지 리스트에서 확인
git config --list

## 마지막 커밋 메시지 수정

PS C:\web\day98_0628> git commit --amend -m "바꿀 메시지"
PS C:\web\day98_0628> git commit --amend ;
리눅스 편집창으로 진입 " 바꿀 메시지를 쓰기"
리눅스 평집창에서 나오기 ESC > :wq!

## 확인

상태확인 : `git status`

커밋정보 확인 : `git log`

## 깃 강제 갱신

PS C:\web\day98_0628> git push -f
PS C:\web\day98_0628> git push origin +master

[깃 커밋 제거]
PS C:\web\day98_0628> git reset HEAD^~n
n 대신 지울 개수 지정
[이전 커밋 수정 ]
PS C:\web\day98_0628> git rebase -i HEAD~3

## git history 지우기

history -c
rm .bash_history
vim .bash_history

## git cache 삭제

git rm -r --cached .
git add .
git commit -m "cache clear"

<br />

# 사용자가 여러명인 컴에서 git 사용하기

## git 자격증명 관리

- 제어판 > 사용자 계정 > 자격 증명 관리자 이동하기
- 자격 증명 관리에서 Windows 자격 증명 선택
- 일반 자격 증명에서 git에 해당하는 증명 정보를 수정하거나 삭제하기

## git remote origin 삭제

git remote remove origin

## git 토큰 관리

Signed in as 아이디

> Settings
> Developer settings
> Personal access tokens
> repo 제목 클릭 > Regenerate token

## git clone

```
작업환경이 바뀌고 새로 복사해서 작업하고 싶을때
로컬 저장소의 내용이 원격 저장소의 내용과 일치해진다.
git clone https://github.com/hwanheejung/{repository}.git
git config --global user.name "홍길동"
git config --global user.email "email"
git add .
git commit -u origin master
git push
```

## git pull

```
원격 저장소의 내용을 가져와서 현재 브랜치와 병합(merge)까지 해주기 때문에,
기존에 작업했던 내용은 유지하면서 최신 코드로 업데이트할 수 있는 것이다.
git pull origin master

git add .
git commit -u origin master
git push
```
