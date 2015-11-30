# 59023c
Web app for basic CRUD

dependencies:

* all that docker stuff  

to start:
if no machine has been built: `docker-machine create --driver virtualbox name`
else: `docker-machine start default`  

`docker-compose up`

stack:
* dev - [boot2docker](https://github.com/boot2docker/boot2docker) because mac osx
* prod - digital ocean, dokku?
* [docker-compose](https://docs.docker.com/compose/): debian:jessie
* nginx@1.6.2-5
* redis-server@2.8.17
* node@[5.0.0](https://nodejs.org/docs/v5.0.0/api/) via [tj/n](https://github.com/tj/n) install method
* [nodemon](https://github.com/remy/nodemon#nodemon)@1.8.1
* express@4.13.3
* browserify/webpack (gulp?)
* react (routing?)
* backbone?
* babel?
* typescript?

todo:
* ~~nginx~~ ([reverse proxy?](http://jasonwilder.com/blog/2014/03/25/automated-nginx-reverse-proxy-for-docker/), gzip, etc)
* ~~dockerfiles~~
* ~~init express~~
* tests
* deploy to DO [link](https://docs.docker.com/machine/drivers/digital-ocean/)
* init static and build processes
* bundle, inject
* serve index
* basic UI
* POST text
* GET text
* unit tests

credits:
* docker-compose derived from: [msanand](https://github.com/msanand/docker-workflow)
