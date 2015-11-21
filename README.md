# 59023c
Web app for basic CRUD

dependencies:

* all that docker stuff  

to start:

`docker-machine start default`  (which right now is VB)

`docker-compose up`

stack:
* docker
* nginx
* node
* redis
* express
* browserify/webpack (gulp?)
* react (routing?)
* backbone?
* babel?
* typescript?

todo:
* ~~nginx~~ ([reverse proxy?](http://jasonwilder.com/blog/2014/03/25/automated-nginx-reverse-proxy-for-docker/), gzip, etc)
* ~~dockerfiles~~
* ~~init express~~
* deploy to DO
* init static and build processes
* bundle, inject
* serve index
* basic UI
* POST text
* GET text
* unit tests

credits:
* docker-compose derived from: [msanand](https://github.com/msanand/docker-workflow)
