import express from 'express'
import path from 'path'
import compression from 'compression'

import redis from 'redis'

import React from 'react'
import ReactDomServer from 'react-dom/server'

import configureStore from '../shared/store/configureStore'

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import  index from '../lib/index'

console.log(index)
console.log(configureStore)
// import { store } from '../lib/Root'

// import HomePage from '../lib/containers/HomePage'

// var { match, RouterContext } require('react-router')

//var routes = require('./components/routes'
// import index from './server_index.js'


var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.join(__dirname, '../static');

var app = express()
app.use(express.static(publicPath));
app.use(compression())

var initialState = {
    application: {
      token: null,
      locale: 'en',
      user: { permissions: [] }
    },
    posts: null,
    router: null
}

var stateJSON = JSON.stringify(state).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
// return {
//   initialState: "window.__INITIAL_STATE__ = "+stateJSON
// }

/* Using this.props.initialState in the Index component */
var Index = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          /* ... */
          <script dangerouslySetInnerHTML={{__html: this.props.initialState}} />
        </head>
	/* ... */
      </html>
    )
  }
});



var store = store.configureStore(reducers, initialState)

app.get('/api/posts', function (req, res) {
  console.log(req.query)
  console.log(req.params)
  //send(res, api.queryPosts(query))
})

app.get('*', (req, res) => {
  res.send("<!DOCTYPE html>"+
  ReactDOMServer.renderToString(
    Provider({store: store}, RouterContext(renderProps))
  )
);
})

// console.log(process.env.REDIS_PORT_6379_TCP_ADDR + ':' + process.env.REDIS_PORT_6379_TCP_PORT);
//
// var client = redis.createClient('6379', 'redis');

app.listen(port, function() {
    console.log(' Listening on port: ' +  port );
  }
);
