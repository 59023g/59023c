import * as constants from '../constants'
import handleActionError from '../utils/handle-action-error'


const USER_API = '../../mock_api/user.json'
const token = Math.random().toString(36).substring(7)


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
    user: json.data,
    token: token,
    receivedAt: Date.now()
  }
}

export function switchLocale (locale) {
  return { type: constants.LOCALE_SWITCHED, payload: locale }
}

export function hideError () {
  return { type: constants.HIDE_ERROR }
}
