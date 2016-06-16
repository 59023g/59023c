/* global __DEVTOOLS__ */

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
// import { reduxReactRouter, routerStateReducer } from 'redux-router'
// import createBrowserHistory from 'history/lib/createBrowserHistory'
// import createHashHistory from 'history/lib/createHashHistory'
import thunk from 'redux-thunk'
import logger from '../middleware/logger'

// todo - client only
// import persistenceStore from '../utils/store'

import * as reducers from '../reducers'
import { routerReducer } from 'react-router-redux'

if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
  const DevTools = require('../components/DevTools').default
  storeEnhancers.push(DevTools.instrument())
}

const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
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
