# 部署
在docker-compose.yml的volumes載入要測試的script


```
version: '3'
services:
  bdd_test:
    build: .
    volumes:
     - ./features:/usr/src/app/features
```


啟動指令
```
docker-compose up
```

結束指令
```
docker-compose down
```