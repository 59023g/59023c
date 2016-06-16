import React from 'react'
import { Router, Route, Redirect } from 'react-router'
import * as components from '../shared/components'

import { requireAuth, logout } from './auth'

const {
  MetaHome,
  Application,
  HomePage,
  Post,
  Login,
  SuperSecretArea
} = components

export default function () {
  return (
      <Route component={Application}>
        <Route path="/" component={HomePage} />
        <Route path=":username/:date/:postTitle" component={Post} />
        <Route path="meta" component={MetaHome} onEnter={requireAuth}>
          <Route path="secret-area" component={SuperSecretArea} />
        </Route>
        <Redirect from="/login" to="/meta/login" />

        <Route path="/meta/login" component={Login} />
        <Route path="logout" onEnter={logout} />
      </Route>
  )
}
