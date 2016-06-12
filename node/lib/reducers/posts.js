import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../constants'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  receivedAt: null,
  posts: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        ...state,
        isFetching: true
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        receivedAt: action.receivedAt,
        posts: action.payload
      })
    default:
      return state
  }
}

// const actionHandlers = {
//   [constants.FETCH_USER]: (state, action) => ({ user: action.user }),
//   [constants.FETCH_USER_POSTS]: (state, action) => (
//     {
//       posts: Object.assign({}, state.posts, {
//         user: action.posts,
//         pagination: action.pagination
//       })
//     })
// }
//
// export default createReducer(initialState, actionHandlers)
