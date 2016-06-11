// reducers/application.js

import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  LOG_OUT,
  SHOW_ERROR,
  HIDE_ERROR
  // LOCALE_SWITCHED
} from '../constants'

const initialState = {
  isFetching: false,
  id: null,
  userName: null,
  token: null,
  displayName: null,
  locale: 'en',
  permissions: [],
  error: null
}

export default function (state, action) {
  if (typeof state === 'undefined')
    return initialState
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        ...state,
        isFetching: true
      })
    case RECEIVE_LOGIN:
      return Object.assign({}, state, {
        isFetching: false,
        ...action.payload
      })
    case LOG_OUT:
      return initialState
    case SHOW_ERROR:
      return Object.assign({}, state, {
        error: {
          action,
          message: action.message || action.statusText,
          url: action.message || null,
          statusCode: action.statusCode || action.code || action.status,
          body: action.body || (action instanceof Error ?
          (action.toString() + '\n' + action.stack) : action)
        }
      })
    case HIDE_ERROR:
      return Object.assign({}, state, {
        ...state,
        error: null
      })
    default:
      return state
  }
}
