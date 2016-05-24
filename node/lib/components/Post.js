import React, { PropTypes } from 'react'

export default React.createClass({
  propTypes: {
    user: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    abstract: PropTypes.string,
    tags: PropTypes.array,
    updatedAt: PropTypes.number.isRequired,
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
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.updatedAt)}></p>
    </li>
    )
  }
})
