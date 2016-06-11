import * as constants from '../constants'
import createReducer from '../utils/createReducer'

const initialState = {
  user: {},
  repo: {},
  posts: {
    user: [],
    repo: [],
    pagination: {}
  }
}

const actionHandlers = {
  [constants.FETCH_USER]: (state, action) => ({ user: action.user }),
  [constants.FETCH_USER_POSTS]: (state, action) => (
    {
      posts: Object.assign({}, state.posts, {
        user: action.posts,
        pagination: action.pagination
      })
    })
}

export default createReducer(initialState, actionHandlers)
