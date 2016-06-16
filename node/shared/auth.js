export function requireAuth (nextState, replaceState) {
  const state = store.getState()
  const isLoggedIn = Boolean(state.application.token)
  if (!isLoggedIn)
    replaceState({
      nextPathname: nextState.location.pathname
    }, '/login')
}

export function logout (nextState, replaceState) {
  store.dispatch({ type: constants.LOG_OUT })
  replaceState({}, '/')
}
