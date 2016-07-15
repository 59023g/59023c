import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default React.createClass({
  propTypes: {
    user: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    abstract: PropTypes.string,
    tags: PropTypes.array,
    updatedAt: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  },
  rawMarkup: function (value) {
    return { __html: value }
  },
  render: function () {
    return (
    <li>
      <Link to={`${this.props.username}/${this.props.updatedAt}/${this.props.url}/${this.props.id}`}>
        <h2 dangerouslySetInnerHTML={this.rawMarkup(this.props.title)}></h2>
      </Link>
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.content)}></p>
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.abstract)}></p>
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.tags)}></p>
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.updatedAt)}></p>
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.id)}></p>
    </li>
    )
  }
})
