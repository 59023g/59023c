import {
  RESET_ERROR_MESSAGE,
} from '../constants'

export default function(state = null, action) {
  const { type, error } = action

  if (type === RESET_ERROR_MESSAGE) {
    return null
  } else
  if (error) {
    return action.error
  }

  return state
}
