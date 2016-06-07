var express = require('express')
var path = require('path')
var compression = require('compression')

var redis = require('redis')

var React = require('react')

// var { renderToString } = require('react-dom/server')
// var { match, RouterContext } = require('react-router')

//var routes = require('./components/routes'
var index = require('./server_index.js')

var app = express()

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

app.use(compression())

app.use(express.static(publicPath))


// console.log(process.env.REDIS_PORT_6379_TCP_ADDR + ':' + process.env.REDIS_PORT_6379_TCP_PORT);
//
// var client = redis.createClient('6379', 'redis');

// app.get('*', (req, res) => {
//   console.log(req.url)
//   res.send(index)
// })
//
// app.get('/mock_api/user.json', (req, res) => {
//   console.log(req.url)
//   res.send('hello')
// })


app.listen(port, function() {
    console.log(' Listening on port: ' +  port );
  }
);
