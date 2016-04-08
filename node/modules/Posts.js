import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    // event.preventDefault()
    // const userName = event.target.elements[0].value
    // const postTitle = event.target.elements[1].value
    // const path = `/meta/posts/${userName}/${postTitle}`
    // this.context.router.push(path)
  },

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          <li><NavLink to="/:userName/meta/posts/post1">Post1</NavLink></li>
          <li><NavLink to="/:userName/meta/posts/post2">Post2</NavLink></li>
          {/* Need to loop of all projects
          {PROJECTS.map(project => (
              <li key={project.id}>
                  <Project project={project} />
              </li>
          ))}*/}
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="postTitle"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
