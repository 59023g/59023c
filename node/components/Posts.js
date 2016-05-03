import React, { PropTypes } from 'react'
import Auth from './Auth'

import PostForm from './PostForm'
import Post from './Post'

import { newPost, posts } from '../sweetData.js'

export default React.createClass({
  PropTypes: {
    newPost: React.PropTypes.object.isRequired,
    posts: React.PropTypes.array
  },
  // getInitialState() {
  // },

  onSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  },
  componentWillUpdate() {},
  componentWillReceiveProps() {
    // probably auth stuff in here
  },
  onChange(e) {
    console.log(e.target.value)

    let nextState = {},
      targetName = e.target.name

    nextState[targetName] = e.target.value

    this.setState(nextState, () => {
      this.state.updated_at = Date.now()

      // todo - these both seems rudimentary - move to component will update?
      if (targetName === 'title') {
        this.state.url = '/' + this.state.title.split(' ').join('-')
      }
      if (targetName === 'tags') {
        this.state.tags = this.state.tags.split(' ')
      }
    })
  },
  render() {
    return (
    <div>
      <h2>Posts</h2>
      <PostForm value={newPost} onChange={this.onChange} onSubmit={this.onSubmit} />
      <ul>
        {posts.map(function (post, index) {
           return (
           <Post
             key={index}
             user={post.user}
             title={post.title}
             content={post.content}
             abstract={post.abstract}
             tags={post.tags}
             updated_at={post.updated_at} />)
         })}
      </ul>
    </div>
    )
  }
})
