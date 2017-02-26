[![Build Status](https://travis-ci.org/HHPnet/frontend.svg?branch=master)](https://travis-ci.org/HHPnet/frontend)

# Running inside docker
```
docker build -t hhpfrontend .
docker run --rm -it -v $PWD:/usr/src/app -p 3000:3000 hhpfrontend start
```