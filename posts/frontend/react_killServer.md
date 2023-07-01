# Find (and kill) process locking port 3000 on Mac

[stackoverflow](https://stackoverflow.com/questions/3855127/find-and-kill-process-locking-port-3000-on-mac)

`kill -9 $(lsof -ti:3000)`
`killall node`
