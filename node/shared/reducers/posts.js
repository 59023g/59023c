import {
  REQUEST_POSTS,
  RECEIVE_POSTS_SUCCESS,
  RECEIVE_POSTS_FAILURE
} from '../constants'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  receivedAt: null,
  entities: {},
  result: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        ...state,
        isFetching: true
      })
    case RECEIVE_POSTS_SUCCESS:
    // console.log('reducer', action)
      return Object.assign({}, state, {
        isFetching: false,
        receivedAt: action.receivedAt,
        ...action.payload
      })
    case RECEIVE_POSTS_FAILURE:
    default:
      return state
  }
}
