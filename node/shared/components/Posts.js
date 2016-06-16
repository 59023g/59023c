import React, { PropTypes } from 'react'

import PostForm from './PostForm'
import Post from './Post'

export default class Posts extends React.Component {
  static propTypes = {
    newPost: PropTypes.object.isRequired,
    posts: PropTypes.array
  }

  onSubmit (e) {
    e.preventDefault()
    console.log(this.state)
  }
  componentWillUpdate () {}
  componentWillReceiveProps () {
  }

  onChange (e) {
    console.log(e.target.value)

    let nextState = {},
      targetName = e.target.name

    nextState[targetName] = e.target.value

    this.setState(nextState, () => {
      this.state.updatedAt = Date.now()

      // todo - these both seems rudimentary - move to component will update?
      if (targetName === 'title')
        this.state.url = '/' + this.state.title.split(' ').join('-')

      if (targetName === 'tags')
        this.state.tags = this.state.tags.split(' ')

    })
  }
  render () {
    let posts = this.props.posts

    return (
    <div>
      <h2>Posts</h2>
      <PostForm
        value={this.props.newPost}
        onChange={this.onChange}
        onSubmit={this.onSubmit} />
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
             updatedAt={post.updatedAt} />)
        })}
      </ul>
    </div>
    )
  }
}
