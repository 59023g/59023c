import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  // getInitialState() { null },
  componentDidMount() {},
    contextTypes: {
      router: React.PropTypes.object
    },

  createPost(event) {
    event.preventDefault()
    console.log(event)

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
          {/* Need to loop of all projects
          {posts.map(project => (
              <li key={project.id}>
                  <Project project={project} />
              </li>
          ))}*/}
          <li>
            <form onSubmit={this.createPost}>
              <input type="text" placeholder="title" className="mb-12"/> {' '}
              <textarea placeholder="content" className="mb-12 h-200">{}</textarea>
              <textarea placeholder="abstract" className="mb-12">{}</textarea>
              <input type="text" placeholder="tags" className="mb-12"/> {' '}
              <button type="submit"><h3>POST</h3></button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
