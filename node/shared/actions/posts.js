// actions/posts
import handleActionError from '../utils/handleActionError'
import processResponse from '../utils/process-response'
import api from 'impl/api'

import {CALL_API, Schemas } from '../middleware/promiseMiddleware'

import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_POST,
  RECEIVE_POST_FAILURE,
  RECEIVE_POST_SUCCESS
} from '../constants'

// note - tests api implementation, server or client
(function apiTest() {
  api.whichApi()
})()

function fetchPost(id) {
  return {
    [CALL_API]: {
      types: [ REQUEST_POST, RECEIVE_POST_SUCCESS, RECEIVE_POST_FAILURE],
      endpoint: `posts`,
      schema: Schemas.POST
    }
  }
}

// export function getPost(id, requiredFields = []) {
//   return function (dispatch, getState) {
//
//     if (typeof id !== 'number')
//       id = parseInt(id)
//
//     const post = getState().entities.posts[id]
//     if (id && requiredFields.every(key => post.hasOwnProperty(key))) {
//       return null
//     }
//
//     return dispatch(fetchPost(id))
//
//     // const posts = state.posts.posts
//     //
//     // if (posts.length > 0) {
//     //   const post = posts.find(post => {
//     //     return post.id === id
//     //   });
//     //   return post
//     // } else {
//     //
//     // }
//
//
//     // if(!post) {
//     //   return dispatch({
//     //     type: constants.FETCH_POST,
//     //     id: id,
//     //     [fields.PROMISE]: api.getPost(id)
//     //   });
//     // }
//     // else {
//     //   return post;
//     // }
//   };
// }
//
// function requestPosts () {
//   return {
//     type:  REQUEST_POSTS
//   }
// }
//
// function receivePosts (payload) {
//   return {
//     type:  RECEIVE_POSTS,
//     receivedAt: Date.now(),
//     payload
//   }
// }
//
// // todo - make this smarter, namely if posts != invalidated
// function shouldFetchPosts(state) {
//   const posts = state.posts
//   if (posts.posts.length === 0) {
//     return true
//   } else if (posts.isFetching) {
//     return false
//   } else {
//     return posts.didInvalidate
//   }
// }
//
// export function fetchPostsIfNeeded() {
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState())) {
//       return dispatch(fetchPosts())
//     }
//   }
// }
//
// // todo - query parameters
// function fetchPosts () {
//   return function (dispatch) {
//     dispatch(requestPosts())
//     return api.queryPosts()
//       .then(processResponse)
//       .then(res => {
//         dispatch(receivePosts(res))
//       })
//       .catch(error => {
//         handleActionError(dispatch, error, REQUEST_POSTS)
//       })
//   }
// }
