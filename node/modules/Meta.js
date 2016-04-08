import React from 'react';
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Meta</h2>
        <ul>
          <li><NavLink to="/:userName/meta/posts">Posts</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
