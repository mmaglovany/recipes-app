# recipes-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
(dev server should work)
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Create Docker image
```
docker build --tag=<image name> .
```

### Run project in the created image
```
docker run --rm -it -p 8080:8080 <image name>
```