import React, { PropTypes } from 'react'

export default React.createClass({
  propTypes: {
    user: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    abstract: React.PropTypes.string,
    tags: React.PropTypes.array,
    updated_at: React.PropTypes.number.isRequired,
  },
  render: function() {
    return (
      <li>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <p>{this.props.abstract}</p>
        <p>{this.props.tags}</p>
        <p>{this.props.updated_at}</p>
      </li>
    )
  }
})
