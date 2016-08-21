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

// todo - username, date
// <Route path="/:username/:date/:postTitle/:id" component={ PostPage } onEnter={ load }/>

export default function () {
  return (
      <Route component={ Application }>
        <Route path="/" component={ HomePage } />
        <Route path="/:postTitle/" component={ PostPage } onEnter={ load }/>
        <Route path="meta" component={ MetaHome } onEnter={ requireAccess }>
          <Route path="secret-area" component={ SuperSecretArea } />
        </Route>
        <Redirect from="/login" to="/meta/login" />

        <Route path="/meta/login" component={ Login } />
        <Route path="logout" onEnter={ Application.logout } />
      </Route>
  )
}
