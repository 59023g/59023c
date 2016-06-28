const POSTS_API = '/api/posts'

function whichApi () {
  console.log('client api')
}

function queryPosts() {
  return fetch(POSTS_API)
}

module.exports = {
  whichApi,
  queryPosts
}
