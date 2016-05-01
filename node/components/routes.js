import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Home from './Home'
import About from './About'

import Meta from './Meta'
import PostForm from './PostForm'
import Posts from './Posts'
import NotFound from './404'


module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
      <Route path="/:userName/meta" component={Meta}/>
      <Route path="/:userName/posts" component={Posts}>
        <Route path="/:userName/posts/:post" component={PostForm}/>
      </Route>
    <Route path="/about" component={About}/>
    <Route path="*" component={NotFound} />
  </Route>
)
