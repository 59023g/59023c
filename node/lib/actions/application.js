import * as constants from '../constants'
import handleActionError from '../utils/handle-action-error'


const USER_API = '/user.json'

export function login (form) {

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
      .then(json =>
        dispatch(receiveLogin(json))
      )
      .catch((error) => {
        handleActionError(dispatch, error, constants.REQUEST_LOGIN)
      })
  }
}


function requestLogin (form) {
  return {
    type: constants.REQUEST_LOGIN,
    form
  }
}

function receiveLogin (json) {
  return {
    type: constants.LOGGED_IN,
    payload: json
  }
}

export function switchLocale (locale) {
  return { type: constants.LOCALE_SWITCHED, payload: locale }
}

export function hideError () {
  return { type: constants.HIDE_ERROR }
}
