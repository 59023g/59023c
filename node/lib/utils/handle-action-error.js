import { SHOW_ERROR } from '../constants'

export default function handleActionError (dispatch, error, source) {
  console.log('action', error)
  return dispatch({
    type: SHOW_ERROR,
    source,
    payload: error.response
  })
}
