
const initial = {
  entities: {},
  selected: {},
  isFetching: null
}
export default function (state, action) {
  if(typeof state === 'undefined')
    return initial

  if (action.type === 'REQUEST_POSTS') {
    return Object.assign(({}, state, {
      isFetching: true
    }))
  }

  if (action.type === 'RECEIVE_POSTS_SUCCESS') {
    return Object.assign(({}, state, {
      entities: action.response.entities,
      selected: action.response.result,
      isFetching: false
    }))
  }

  return state
}
