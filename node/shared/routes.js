import React from 'react'
import { Router, Route, Redirect } from 'react-router'
import * as components from '../shared/components'

import { getPost } from './actions/posts'


// import { requireAuth, logout } from './containers/Application'
const {
  MetaHome,
  Application,
  HomePage,
  PostPage,
  Login,
  Logout,
  SuperSecretArea
} = components

function requireAccess () {
  // console.log(Application.requireAuth)
  // return requireAuth()
}

function load(nextState) {

  if (nextState.params.id) {
    getPost(nextState.params.id).then(data => {
      console.log(data)
    })
  }
}

export default function () {
  return (
      <Route component={ Application }>
        <Route path="/:username" component={ HomePage } />
        <Route path="/:username/:date/:postTitle/:id" component={ PostPage } />
        <Route path="meta" component={ MetaHome } onEnter={ requireAccess }>
          <Route path="secret-area" component={ SuperSecretArea } />
        </Route>
        <Redirect from="/login" to="/meta/login" />

        <Route path="/meta/login" component={ Login } />
        <Route path="logout" onEnter={ Application.logout } />
      </Route>
  )
}
