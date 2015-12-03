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
* [doc  ker-compose](https://docs.docker.com/compose/): debian:jessie, [volumes!](https://docs.docker.com/engine/userguide/dockervolumes/)[volumes2](http://container-solutions.com/understanding-volumes-docker/)[volumes3](https://groups.google.com/forum/#!msg/docker-user/EUndR1W5EBo/4hmJau8WyjAJ)
* nginx@1.6.2-5
* redis-server@2.8.17
* node@[5.0.0](https://nodejs.org/docs/v5.0.0/api/) via [tj/n](https://github.com/tj/n) install method
* [node_redis](https://github.com/NodeRedis/node_redis)
* [nodemon](https://github.com/remy/nodemon#nodemon)@1.8.1
* express@4.13.3
* [gulp](https://github.com/gulpjs/gulp)@3.9.0
* [browserify](https://github.com/substack/node-browserify)@12.0.1
* [watchify](https://github.com/substack/watchify)@3.6.1
* browserify, watchify, browserify-hmr, react-hot-transform, brfs?, factor-bundle
* https://github.com/Kureev/browserify-react-live
* react (routing?)
* backbone?
* babel?
* typescript?

todo:
* ~~nginx~~ ([reverse proxy?](http://jasonwilder.com/blog/2014/03/25/automated-nginx-reverse-proxy-for-docker/), gzip, etc)
* ~~dockerfiles~~
* ~~init express~~
* tests'
* [data container](https://groups.google.com/forum/#!msg/docker-user/EUndR1W5EBo/4hmJau8WyjAJ)?
* deploy to DO [link](https://docs.docker.com/machine/drivers/digital-ocean/)
* init static and build processes
* bundle, inject
* serve index
* basic UI
* POST text
* GET text
* unit tests

credits:
* docker-compose derived from: [msanand](https://github.com/msanand/docker-workflow) and [b00](https://github.com/b00giZm/docker-compose-nodejs-examples/blob/master/05-nginx-express-redis-nodemon/app/Dockerfile)
