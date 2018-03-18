# 開発

## 開発環境構築

```
$ docker-compose up -d
```

## ビルド

```
$ docker run -it --rm -v $(pwd):/app composer:1.6 install
$ docker run -it --rm -v $(pwd):/app -w /app node:9 npm install
$ docker run -it --rm -v $(pwd):/app -w /app node:9 npm run build
```
