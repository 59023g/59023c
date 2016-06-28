// actions/application

import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  HIDE_ERROR,
  LOCALE_SWITCHED
} from '../constants'

import handleActionError from '../utils/handleActionError'
import processResponse from '../utils/process-response'

const USER_API = '/api/login'

export function login (form, redirect) {

  return function (dispatch) {
    dispatch(requestLogin(form))
    return fetch(USER_API)
      .then(processResponse)
      .then(json => {
        setTimeout(() => {
          dispatch(receiveLogin(json))
        }, 2000)
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
