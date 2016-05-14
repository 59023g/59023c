import React from 'react'

import Post from './Post'
// import { posts } from '../sweetData.js'

export default React.createClass({
  PropTypes: {
    posts: React.PropTypes.array
  },
  render() {
    console.log(this.props.foo)
    return (
    <ul>

    </ul>
    )
  }
})
