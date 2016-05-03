import React, { PropTypes } from 'react'

export default React.createClass({
  propTypes: {
    user: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    abstract: React.PropTypes.string.isRequired,
    tags: React.PropTypes.array.isRequired,
    updated_at: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      <li>
        <h2 value="this.props.title"></h2>
        <p value="this.props.content"></p>
        <p value="this.props.abstract"></p>
        <p value="this.props.tags"></p>
        <p value="this.props.updated_at"></p>
      </li>
    )
  }
})
