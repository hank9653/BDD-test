# 部署

download project
```
git clone https://github.com/hank9653/BDD-test.git
cd BDD-test
```

build docker docker image

```
docker build -t bdd-test .
```


run docker container and entry container
```
docker run -it --rm bdd-test bash
```


puppeteer must set "--no-sandbox" arg.
```
browser = await puppeteer.launch({
    args: ['--no-sandbox']
});
```

BDD script test
```
$npm test
```


exit container
```
$exit
```
