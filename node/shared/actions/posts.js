// actions/posts
import handleActionError from '../utils/handleActionError'
import { processResponse, Schemas } from '../utils/process-response'
import api from 'impl/api'

import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  RECEIVE_POSTS_SUCCESS,
  RECEIVE_POSTS_FAILURE,
} from '../constants'

// note - tests api implementation, server or client
(function apiTest() {
  api.whichApi()
})()

export function getPost(id) {
  return function (dispatch, getState) {

    if (typeof id !== 'number')
      id = parseInt(id)

    const state = getState()
    const posts = state.posts.posts

    if (posts.length > 0) {
      const post = posts.find(post => {
        return post.id === id
      });
      return post
    } else {

    }


    // if(!post) {
    //   return dispatch({
    //     type: constants.FETCH_POST,
    //     id: id,
    //     [fields.PROMISE]: api.getPost(id)
    //   });
    // }
    // else {
    //   return post;
    // }
  };
}

function requestPosts () {
  return {
    type:  REQUEST_POSTS
  }
}

function receivePosts (payload) {
  // console.log('action', payload)
  return {
    type:  RECEIVE_POSTS_SUCCESS,
    receivedAt: Date.now(),
    payload
  }
}

// todo - make this smarter, namely if posts != invalidated
function shouldFetchPosts(state) {
  const posts = state.posts
  if (posts.result.length === 0) {
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
    } else {
      console.log('posts cached')
    }
  }
}

// todo - query parameters
function fetchPosts () {
  return function (dispatch) {
    dispatch(requestPosts())
    return api.get()
      .then( res => processResponse(res, Schemas.POST_ARRAY))
      .then( res => {
        dispatch(receivePosts(res))
      })
      .catch(error => {
        handleActionError(dispatch, error, REQUEST_POSTS)
      })
  }
}
