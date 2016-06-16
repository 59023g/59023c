/* global __DEVTOOLS__ */


import React, { PropTypes } from 'react'
import { Redirect, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { createHistory } from 'history'

// todo - client only
// import * as localStorage from './utils/localStorage'

// todo - refactor so accurate
import configureStore from '../shared/store/configureStore'
import * as components from '../shared/components'
import * as constants from '../shared/constants'
import * as i18n from '../shared/i18n'

const {
  MetaHome,
  Application,
  GithubStargazers,
  GithubRepo,
  GithubUser,
  HomePage,
  Post,
  Login,
  SuperSecretArea
} = components

// const preloadedState = window.__PRELOADED_STATE__

// const initialState = {
//   application: {
//     token: null,
//     locale: 'en',
//     user: { permissions: [/*'manage_account'*/] }
//   }
// }

var window = {}
var initialState = window.__INITIAL_STATE__;

var store = configureStore(initialState)

// export const store = configureStore(preloadedState)

function getRootChildren (props) {
  const intlData = {
    locale: props.application.locale,
    messages: i18n[props.application.locale]
  }
  const rootChildren = [
    <IntlProvider key="intl" {...intlData}>
      {renderRoutes()}
    </IntlProvider>
  ]

  if (__DEVTOOLS__) {
    const DevTools = require('../shared/components/DevTools').default
    rootChildren.push(<DevTools key="devtools" />)
  }
  return rootChildren
}


const history = createHistory()
syncHistoryWithStore(history, store)

function renderRoutes () {
  return (
    <Router history={history}>
      <Route component={Application}>
        <Route path="/" component={HomePage} />
        <Route path=":username/:date/:postTitle" component={Post} />
        <Route path="stargazers" component={GithubStargazers}>
          <Route path=':username/:repo' component={GithubRepo} />
          <Route path=':username' component={GithubUser} />
        </Route>
        <Route path="meta" component={MetaHome} onEnter={requireAuth}>
          <Route path="secret-area" component={SuperSecretArea} />
        </Route>
        <Redirect from="/login" to="/meta/login" />

        <Route path="/meta/login" component={Login} />
        <Route path="logout" onEnter={logout} />
      </Route>
    </Router>
  )
}

function requireAuth (nextState, replaceState) {
  const state = store.getState()
  const isLoggedIn = Boolean(state.application.token)
  if (!isLoggedIn)
    replaceState({
      nextPathname: nextState.location.pathname
    }, '/login')
}

function logout (nextState, replaceState) {
  store.dispatch({ type: constants.LOG_OUT })
  replaceState({}, '/')
}

class Root extends React.Component {
  static propTypes = {
    application: PropTypes.object.isRequired
  };

  render () {
    return (
      <div>{getRootChildren(this.props)}</div>
    )
  }
}

export default connect(({ application }) => ({ application }))(Root)
