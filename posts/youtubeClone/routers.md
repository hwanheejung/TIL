# **1. What are Routers?**

- handler나 URL을 좀 더 관리하기 쉽게 해주는 기능

```
/ -> Home
/join -> Join
/login -> Login
/search -> Search
/edit-user -> Edit user
/delete-user -> Delete user
/watch-video -> Watch Video
/edit-video -> Edit Video
/delete-video -> Delete Video
/comment-on-a-video -> Comment on a video
/delete-comment -> Delete a comment of a video
```

이것보다는,
다음과 같이 관리하는게 더 쉽고 효율적이다.

```markdown
<!-- Global router -->

/ -> Home
/join -> Join
/login -> Login
/search -> Search

<!--  -->

/users/edit -> Edit user
/users/delete -> Delete user

<!--  -->

/videos/watch -> Watch Video
/videos/edit -> Edit Video
/videos/delete -> Delete Video
/videos/comment -> Comment on a video
/videos/comments/delete -> Delete a comment of a video
```

- router는 우리가 작업중인 주제를 기반으로 URL을 그룹화해준다.
