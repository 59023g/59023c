// actions/application

import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  // LOGGED_IN,
  // LOG_OUT,
  // SHOW_ERROR,
  HIDE_ERROR,
  LOCALE_SWITCHED
} from '../constants'

import handleActionError from '../utils/handleActionError'


const USER_API = '/user.json'

export function login (form, redirect) {
  return function (dispatch) {
    dispatch(requestLogin(form))
    return fetch(USER_API)
    .then(response => {
      if (!response.ok) {
        throw {
          response
        }
      }
      return response.json()
    })
      .then(json => {
        dispatch(receiveLogin(json))
      })
      .then( () => {
        if (redirect) redirect()
      })
      .catch((error) => {
        handleActionError(dispatch, error, REQUEST_LOGIN)
      })
  }
}


export function requestLogin (form) {
  return {
    type: REQUEST_LOGIN,
    form
  }
}

export function receiveLogin (payload) {
  return {
    type: RECEIVE_LOGIN,
    payload
  }
}

export function switchLocale (locale) {
  return {
    type: LOCALE_SWITCHED,
    locale
  }
}

export function hideError () {
  return {
    type: HIDE_ERROR
  }
}
