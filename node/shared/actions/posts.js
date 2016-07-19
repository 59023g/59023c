// actions/posts
// import handleActionError from '../utils/handleActionError'
// import processResponse from '../utils/process-response'
import api from 'impl/api'
// import {CALL_API, Schemas } from '../middleware/call-api'
import { Schema, arrayOf, normalize } from 'normalizr'


import {
  REQUEST_POST,
  RECEIVE_POST_SUCCESS,
  RECEIVE_POST_FAILURE,
  REQUEST_POSTS,
  RECEIVE_POSTS_SUCCESS,
  RECEIVE_POSTS_FAILURE
} from '../constants'

// note - tests api implementation, server or client
(function apiTest() {
  api.whichApi()
})()

// function fetchPost(id) {
//   return {
//     [CALL_API]: {
//       types: [ REQUEST_POST, RECEIVE_POST_SUCCESS, RECEIVE_POST_FAILURE],
//       endpoint: `posts`,
//       schema: Schemas.POST
//     }
//   }
// }

// Schemas
const userSchema = new Schema('deities', {
  idAttribute: 'id'
})

const postSchema = new Schema('items', {
  idAttribute: 'url'
})

postSchema.define({
  author: userSchema
})

export const Schemas = {
  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema),
  POST: postSchema,
  POST_ARRAY: arrayOf(postSchema)
}


// function fetchPosts() {
//   return {
//     [CALL_API]: {
//       types: [ REQUEST_POSTS, RECEIVE_POSTS_SUCCESS, RECEIVE_POSTS_FAILURE],
//       endpoint: `posts`,
//       schema: Schemas.POST_ARRAY
//     }
//   }
// }

export function loadPost(id, slug) {
  return (dispatch, getState) => {
      state = getState().posts.entities
      const post = (id, slug) => {
        if (id) {
          // reducer post = state.items[id]
          console.log(state.items[id])
          // post = state.items[id]
          state.entities.selected = [id]
          console.log(getState())
          // return
        }
        if (slug) {

        }
      }
      // return dispatch(fetchPost(deity, id))

  }
}

// export function loadPosts(deity, nextPage) {
//   return (dispatch, getState) => {
//
//     if(shouldFetchPosts(getState())) {
//        dispatch(fetchPosts())
//     } else {
//       console.log('posts cached')
//     }
//
//   }
// }
//
// // todo - make this smarter, namely if posts != invalidated
// function shouldFetchPosts(state) {
//   const posts = state.posts
//   return () => {
//     if (typeof posts.entities.items === 'undefined' && posts.entities.items == null) {
//       return true
//     } else if (posts.isFetching) {
//       return false
//     } else {
//       return posts.didInvalidate
//     }
//   }
// }

function requestPosts () {
  return {
    type:  REQUEST_POSTS
  }
}

function receivePosts (action) {
  return {
    type:  RECEIVE_POSTS_SUCCESS,
    receivedAt: Date.now(),
    action
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

export function loadPosts() {
  return (dispatch, getState) => {
    // if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts())
    // }
  }
}
const API_ROOT = 'http://localhost:3001/api/'

// todo - query parameters
function fetchPosts () {
  return function (dispatch) {
    dispatch(requestPosts())
    return api.get(API_ROOT + 'posts/')
    .then(response =>
      response.json().then(json => ({ json, response }))
    )
    .then(({ json, response }) => {

      if (!response.ok) {
        return Promise.reject(json)
      }

      return Object.assign({},
        normalize(json, Schemas.POST_ARRAY), {}
      )
    })
      .then(res => {
        dispatch(receivePosts(res))
      })
      .catch(error => {
        console.log('err', error)
        // handleActionError(dispatch, error, REQUEST_POSTS)
      })
  }
}
