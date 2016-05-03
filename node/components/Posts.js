import React, { PropTypes } from 'react'
import Auth from './Auth'

import PostForm from './PostForm'
import Post from './Post'

import { newPost, Posts } from '../sweetData.js'



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
  componentWillUpdate(){

  },
  componentWillReceiveProps() {
    // probably auth stuff in here
  },
  onChange(e) {
    console.log(e.target.value)


    let nextState = {},
        targetName = e.target.name

    nextState[targetName] = e.target.value;

    this.setState(nextState, () => {
      this.state.updated_at = Date.now()

      // todo - these both seems rudimentary - move to component will update?
      if(targetName === 'title') {
        this.state.url = '/' + this.state.title.split(' ').join('-')
      }
      if(targetName === 'tags') {
        this.state.tags = this.state.tags.split(' ')
      }
    });
  },
  render() {
    var postItems = this.props.posts
      postItems.map(function(post) { return React.createElement(Post, post)})

    return (
      <div>
        <h2>Posts</h2>
        <PostForm
          value={newPost}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <ul>
          {this.postItems}
        </ul>
      </div>
    )
  }
})
