FROM debian:jessie

MAINTAINER Michael Pierce <hi@mep.im>

RUN apt-get update && \
    apt-get -y install curl git make

RUN git clone https://github.com/tj/n && \
    cd n && \
    make install && \
    n 5.0.0

RUN npm install -g nodemon@1.8.1
ADD nodemon.json nodemon.json

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

WORKDIR /src
ADD . /src

EXPOSE  8080

CMD ["nodemon", "-L", "/src/index.js"]
