// reducers/application.js

import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  LOG_OUT,
} from '../constants'

const initialState = {
  isFetching: false,
  id: null,
  userName: null,
  token: null,
  displayName: null,
  locale: 'en',
  permissions: []
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
    default:
      return state
  }
}
