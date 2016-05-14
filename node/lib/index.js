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

import { newPost, posts } from '../sweetData.js'


var state = {};

function setState(changes) {
  Object.assign(state, changes);

  render(
    <Router
         routes={routes}
         history={browserHistory}
         {...state}
         onNewPostSubmit={submitNewPost}
         onNewPostChange={updateNewPost}>
      <App foo="bar"/>
    </Router>,
    document.getElementById('app-container')
  )
}

setState({
  posts: posts,
  newPost: newPost
})


function submitNewPost(post) {
  setState({ newPost: post });
}


function updateNewPost() {
  var post = Object.assign({}, state.newPost, {key: state.posts.length + 1, errors: {}});

  if (post.user && post.title) {
    setState(
      Object.keys(contact.errors).length === 0
      ? {
          newPost: Object.assign({}, POST_TEMPLATE),
          posts: state.posts.slice(0).concat(post),
        }
      : { newPost: post }
    );
  }
}
