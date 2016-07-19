// const POSTS_API = '/api/posts'

function whichApi () {
  console.log('client api')
}

function get(fullUrl) {
  return fetch(fullUrl)
}

module.exports = {
  whichApi,
  get
}
