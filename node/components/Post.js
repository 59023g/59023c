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
  rawMarkup: function (value) {
    return { __html: value }
  },
  render: function () {
    return (
    <li>
      <h2 dangerouslySetInnerHTML={this.rawMarkup(this.props.title)}></h2>
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.content)}></p>
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.abstract)}></p>
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.tags)}></p>
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.updated_at)}></p>
    </li>
    )
  }
})
