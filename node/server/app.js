import express from 'express'
import path from 'path'
import nconf from 'nconf'
import compression from 'compression'

import redis from 'redis'

import React from 'react'
import { Provider } from 'react-redux'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext, createRoutes } from 'react-router'
import { IntlProvider } from 'react-intl'


import Routes from '../shared/routes'
import configureStore from '../shared/store/configureStore'
import * as reducers from '../shared/reducers'

var isProduction = nconf.get('production');
var port = isProduction ? process.env.PORT : 3000;

var publicPath = path.join(__dirname, '../static');

var app = express()
app.use(express.static(publicPath));
app.use(compression())


const intlData = {
  locale: 'en',
  messages: null
}

var initialState = {
  application: {
    token: null,
    locale: 'en',
    user: {
      permissions: []
    }
  },
  posts: null
}

var store = configureStore(initialState)
var routes = createRoutes(Routes())

const _initialState = store.getState()

app.get('/api/posts', function (req, res) {
  console.log(req.query)
  console.log(req.params)
})

app.use('*', function (req, res) {
    match({routes, location:req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
          res.status(500).send(error.message)
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var pageData =
            ReactDOMServer.renderToString(
              <Provider store={store}>
                <IntlProvider key='intl' {...intlData}>
                  <RouterContext {...renderProps}/>
                </IntlProvider>
              </Provider>
            )

            res.status(200).send(createPage(pageData, _initialState));
        } else {
          res.status(404).send('Not found')
        }
    });
});

function createPage (html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>mep</title>
      </head>
      <body>
        <script> window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
        <div id="app-container">${html}</div>
        <script src="http://localhost:3000/build/client.js"></script>
      </body>
    </html>
    `
}

module.exports = app
