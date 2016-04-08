import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Home from './Home'
import About from './About'

import Meta from './Meta'
import Post from './Post'
import Posts from './Posts'


module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
      <Route path="/:userName/meta" component={Meta}>
        <Route path="/:userName/meta/posts" component={Posts}/>
        <Route path="/:userName/meta/posts/:post" component={Post}/>
      </Route>
    <Route path="/about" component={About}/>
  </Route>
)
