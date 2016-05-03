import React from 'react'

import Post from './Post'
import { posts } from '../sweetData.js'

export default React.createClass({
  PropTypes: {
    posts: React.PropTypes.array
  },
  render() {
    return (
    <ul>
      {posts.map(function (post, index) {
         return (
         <Post
           user={post.user}
           title={post.title}
           content={post.content}
           abstract={post.abstract}
           tags={post.tags}
           updated_at={post.updated_at} />)
       })}
    </ul>
    )
  }
})
