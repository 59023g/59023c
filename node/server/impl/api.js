import fetch from 'node-fetch'

const POSTS_API = 'http://localhost:3001/api/posts'

function whichApi () {
  console.log('server api')
}

function get(fullUrl) {
  console.log('server queryPosts')
  return fetch(fullUrl)
}


module.exports = {
  whichApi,
  get
}
