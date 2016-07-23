const POSTS_API = '/api/posts'

function whichApi () {
  console.log('client api')
}

function get() {
  return fetch(POSTS_API)
}

module.exports = {
  whichApi,
  get
}
