# 部署

下載專案
```
git clone https://github.com/hank9653/BDD-test.git
cd BDD-test
```

docker-compose.yml的volumes載入要測試的script

```
version: '3'
services:
  bdd_test:
    image: hank9653/bdd-test
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
