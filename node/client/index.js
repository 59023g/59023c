console.log('starter')
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, browserHistory, match, createRoutes } from 'react-router'

import { IntlProvider } from 'react-intl'
import DevTools from '../shared/components/DevTools'


// import Root from './Root'
import configureStore from '../shared/store/configureStore'
import Routes from '../shared/routes'
import Root from './Root'

import { createHistory } from 'history'

var initialState = window.__INITIAL_STATE__

var store = configureStore(initialState)
var routes = createRoutes(Routes())

const history = syncHistoryWithStore(browserHistory, store)

const intlData = {
  locale: 'en',
  messages: null
}

match({ routes, location}, () => {
  ReactDOM.render(
    <Provider store={store}>
      <IntlProvider key="intl" {...intlData}>
        <Router routes={routes} history={history}/>
      </IntlProvider>
    </Provider>,
    document.getElementById('app-container')
  )
})
