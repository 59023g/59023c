/* global __DEVTOOLS__ */

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
// import { reduxReactRouter, routerStateReducer } from 'redux-router'
// import createBrowserHistory from 'history/lib/createBrowserHistory'
// import createHashHistory from 'history/lib/createHashHistory'
import thunk from 'redux-thunk'
// import promiseMiddleware from '../middleware/promiseMiddleware';
import createLogger from 'redux-logger';
import api from '../middleware/call-api'

// todo - client only
// import persistenceStore from '../utils/store'

let storeEnhancers = []

import DevTools from '../components/DevTools'
import * as reducers from '../reducers'
import { routerReducer } from 'react-router-redux'

if (process.env.NODE_ENV !== 'production') {
  const DevTools = require('../components/DevTools').default
  storeEnhancers.push(DevTools.instrument())
}


// todo - clean this up, dev/prod
const finalCreateStore = compose(
  applyMiddleware(thunk, api, createLogger())
  , DevTools.instrument()
)(createStore)

const combinedReducer = combineReducers(
  {
  ...reducers,
  routing: routerReducer
  }
)

export default function configureStore (initialState) {

  const store = finalCreateStore(combinedReducer, initialState)

  if (module.hot)
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })

  return store
}
