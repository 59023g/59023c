// actions/posts
import handleActionError from '../utils/handleActionError'
import processResponse from '../utils/process-response'
import api from 'impl/api'

import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from '../constants'

// note - tests api implementation, server or client
(function apiTest() {
  api.whichApi()
})()

function requestPosts () {
  return {
    type:  REQUEST_POSTS
  }
}

function receivePosts (payload) {
  return {
    type:  RECEIVE_POSTS,
    receivedAt: Date.now(),
    payload
  }
}

// todo - make this smarter, namely if posts != invalidated
function shouldFetchPosts(state) {
  const posts = state.posts
  if (posts.posts.length === 0) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts())
    }
  }
}

function fetchPosts () {
  return function (dispatch) {
    dispatch(requestPosts())
    return api.queryPosts()
      .then(processResponse)
      .then(res => {
        dispatch(receivePosts(res))
      })
      .catch(error => {
        handleActionError(dispatch, error, REQUEST_POSTS)
      })
  }
}
