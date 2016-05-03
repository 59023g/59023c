

// Redux - do not see use for it now
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import posts from './actions'
//
// let store = createStore(posts)

// React App
import React from 'react'
import { render } from 'react-dom'

import { Router, browserHistory } from 'react-router'
import App from './components/App'
import routes from './components/routes'

render(
    <Router routes={routes} history={browserHistory}>
      <App />
    </Router>,
  document.getElementById('app')
)
