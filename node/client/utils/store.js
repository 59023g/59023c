import * as constants from '../constants'
import * as localStorage from './localStorage'

export default function persistenceHandler (next) {
  return (reducer, initialState) => {
    const store = next(reducer, initialState)

    return Object.assign({}, store, {
      dispatch (action) {
        store.dispatch(action)

        localStorage.put('locale', store.getState().application.locale)

        if (action.type === constants.RECEIVE_LOGIN)
          localStorage.put('token', action.payload.token)

        if (action.type === constants.LOG_OUT)
          localStorage.remove('token')

        return action
      }
    })
  }
}
