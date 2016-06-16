// actions/posts

import handleActionError from '../utils/handleActionError'
import processResponse from '../utils/process-response'

import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from '../constants'

const POSTS_API = '/api/posts'


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

// todo - check cache first or diff - this call not always necc.
export function fetchPosts () {
  return function (dispatch) {
    dispatch(requestPosts())
    return fetch(POSTS_API)
      .then(processResponse)
      .then(res => {
        setTimeout( () => {
          dispatch(receivePosts(res))
        }, 2000)

      })
      .catch(error => handleActionError(dispatch, error, REQUEST_POSTS))
  }
}
