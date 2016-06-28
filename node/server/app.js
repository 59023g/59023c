import express from 'express'
import path from 'path'
import nconf from 'nconf'
import fs from 'fs'
import compression from 'compression'

import redis from 'redis'

import React from 'react'
import { Provider } from 'react-redux'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext, createRoutes } from 'react-router'
import { IntlProvider } from 'react-intl'
import { fetchComponentDataBeforeRender } from '../shared/utils/fetchComponentDataBeforeRender';


import { whichApi } from 'impl/api'
import { createLocation } from 'history/lib/LocationUtils'

import Routes from '../shared/routes'
import configureStore from '../shared/store/configureStore'
import * as reducers from '../shared/reducers'

import posts from '../mock_api/posts.json'

var isProduction = nconf.get('production');
var port = isProduction ? process.env.PORT : 3000;

var publicPath = path.join(__dirname, '../static');

var app = express()
app.use(express.static(publicPath));
app.use(compression())

const renderPage = (html, initialState) => {
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

const intlData = {
  locale: 'en',
  messages: null
}
async function send(res, result) {
  try {
    let obj = await result;
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(obj));
  }
  catch(e) {
    res.status(500).send(e.message);
  }
}

app.get('/api/posts', function (req, res) {
  var data = fs.readFileSync(path.join(__dirname + '/../mock_api/posts.json'), 'utf8')
  send(res, JSON.parse(data))

})

app.get('/api/login', function (req, res) {
  var data = fs.readFileSync(path.join(__dirname + '/../mock_api/user.json'), 'utf8')
  send(res, JSON.parse(data))
})

app.get('*', function (req, res) {

  const routes = createRoutes(Routes())
  const location = createLocation(req.url)

  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if (err) {
      console.error(err)
      return res.status(500).send('Internal Server Error')
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }

    if (!renderProps) {
      return res.status(404).send('Not found')
    }

    const store = configureStore()

    const initialView = (
      <Provider store={store}>
        <IntlProvider key='intl' {...intlData}>
          <RouterContext {...renderProps}/>
        </IntlProvider>
      </Provider>
    )

    // note - looks for component promises (needs) before end (via caljrimmer)
    fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
      .then(html => {
        const componentHTML = ReactDOMServer.renderToString(initialView)
        const initialState = store.getState()
        res.status(200).end(renderPage(componentHTML, initialState))
      })
      .catch(err => {
        console.log('catch:', err)
        res.status(500).end(renderPage("", {}))
      })

  })
})


module.exports = app
