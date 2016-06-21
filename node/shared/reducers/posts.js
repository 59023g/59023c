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
