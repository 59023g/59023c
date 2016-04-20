// import { createStore } from 'redux'
//
// /*
//  * action types
//  */
//
//  export const ROUTER_STATE_CHANGE = 'ROUTER_STATE_CHANGE'
//
//  export const SIGNUP = 'SIGNUP'
//  export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
//  export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'
//
//  export const LOGIN = 'LOGIN'
//  export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
//  export const LOGIN_FAILURE = 'LOGIN_FAILURE'
//  export const LOGOUT = 'LOGOUT'
//
//  export const ADD_POST = 'ADD_POST'
//  export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
//  export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'
//
//  export const FETCH_POST = 'FETCH_POST'
//  export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
//  export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'
//
//
// /*
//  * action creators
//  */
//
// function addPost(post) {
//   return { type: ADD_POST, post }
// }
//
// function fetchPost(response) {
//   return { type: FETCH_POST, response }
// }
//
// /* reducers */
//
// function post(state = [], action) {
//   switch (action.type){
//     case ADD_POST:
//       console.log(state)
//       return Object.assign({}, state, {
//         post: [
//           ...state.post,
//           {
//             user: post.user,
//             title: post.title,
//             url: post.url,
//             content: post.content,
//             abstract: post.abstract,
//             tags: post.tags,
//             updated_at: post.updated_at
//           }
//         ]
//       })
//     default:
//       console.log('default ' + state)
//       return state
//   }
// }
//
// export default post
