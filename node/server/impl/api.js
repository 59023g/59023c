import fetch from 'node-fetch'

const POSTS_API = 'http://localhost:3001/api/posts'

function whichApi () {
  console.log('server api')
}

function get() {
  console.log('server queryPosts')
  // return posts
  return fetch(POSTS_API)

  // .then(res => {
  //   console.log('res', res)
  // })
    // .then(res => console.log('server', res))
}


module.exports = {
  whichApi,
  get

}
