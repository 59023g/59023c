import {
  REQUEST_POSTS,
  RECEIVE_POSTS_SUCCESS,
  RECEIVE_POSTS_FAILURE
} from '../constants'

// const initialState = {
//   isFetching: false,
//   didInvalidate: false,
//   receivedAt: null,
//   posts: []
// }

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case REQUEST_POSTS:
//       return Object.assign({}, state, {
//         ...state,
//         isFetching: true
//       })
//     case RECEIVE_POSTS:
//       console.log('reducer', action)
//       return Object.assign({}, state, {
//         isFetching: false,
//         receivedAt: action.receivedAt,
//         ...action.payload
//       })
//     default:
//       return state
//   }
// }
export default function (state = { users: {}, posts: {} }, action) {
  if (action.response && action.response.entities) {
    return Object.assign(({}, state, action.response.entities))
  }

  return state
}
