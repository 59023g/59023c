// actions/posts

import handleActionError from '../utils/handleActionError'
import processResponse from '../utils/process-response'

import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from '../constants'

const POSTS_API = '/posts.json'


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

export function fetchPosts () {
  return function (dispatch) {
    dispatch(requestPosts())
    return fetch(POSTS_API)
      .then(processResponse)
      .then(res => {
        dispatch(receivePosts(res))
      })
      .catch(error => handleActionError(dispatch, error, REQUEST_POSTS))
  }
}
