import React, { PropTypes } from 'react'
import NavLink from './NavLink'

export default React.createClass({

  propTypes: {
    post: PropTypes.object
  },


  getInitialState() {
    return {
      user: null,
      url: null,
      title: null,
      content: null,
      abstract: null,
      tags: [],
      updated_at: null
    }
  },
  componentDidMount() {},
    contextTypes: {
      router: React.PropTypes.object
    },

  createPost(e) {
    e.preventDefault()
    console.log(this.state)

    // const userName = event.target.elements[0].value
    // const postTitle = event.target.elements[1].value
    // const path = `/meta/posts/${userName}/${postTitle}`
    // this.context.router.push(path)
  },
  handleChange(e) {
    console.log(e.target.value)
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    console.log(nextState)
    this.setState(nextState);
  },
  render() {
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {/* Need to loop of all projects
          {posts.map(project => (
              <li key={project.id}>
                  <Project project={project} />
              </li>
          ))}*/}
          <li>
            <form onSubmit={this.createPost} >
              <input type="text"
                placeholder="title"
                className="mb-12"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                />
              <textarea placeholder="content"
                className="mb-12 h-200"
                name="content"
                value={this.state.content}
                onChange={this.handleChange}>
              </textarea>
              <textarea placeholder="abstract"
                className="mb-12"
                name="abstract"
                value={this.state.abstract}
                onChange={this.handleChange}>
              </textarea>
              <input type="text"
                placeholder="tags"
                className="mb-12"
                name="tags"
                value={this.state.tags}
                onChange={this.handleChange}
              />
              <button type="submit"><h3>POST</h3></button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
