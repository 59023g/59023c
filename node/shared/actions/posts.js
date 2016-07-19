// actions/posts
// import handleActionError from '../utils/handleActionError'
// import processResponse from '../utils/process-response'
import api from 'impl/api'
import {CALL_API, Schemas } from '../middleware/call-api'

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

function fetchPost(id) {
  return {
    [CALL_API]: {
      types: [ REQUEST_POST, RECEIVE_POST_SUCCESS, RECEIVE_POST_FAILURE],
      endpoint: `posts`,
      schema: Schemas.POST_ARRAY
    }
  }
}


function fetchPosts() {
  return {
    [CALL_API]: {
      types: [ REQUEST_POSTS, RECEIVE_POSTS_SUCCESS, RECEIVE_POSTS_FAILURE],
      endpoint: `posts`,
      schema: Schemas.POST
    }
  }
}

export function loadPosts(author, nextPage) {
  return (dispatch, getState) => {
    // const {
    //   nextPageUrl = `${author}/`,
    //   pageCount = 0
    // } = getState()
    //   .pagination.starredByUser[login] || {}

    // if (pageCount > 0 && !nextPage) {
    //   return null
    // }

    return dispatch(fetchPosts(author))
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
