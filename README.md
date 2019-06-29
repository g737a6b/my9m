# my9m [![CircleCI](https://circleci.com/gh/g737a6b/my9m.svg?style=svg)](https://circleci.com/gh/g737a6b/my9m)

## Development

```sh
docker-compose up -d
```

```sh
docker run -it --rm -v $(pwd):/app -w /app node:9 npm install
docker run -it --rm -v $(pwd):/app -w /app node:9 npm run build-dev
```
