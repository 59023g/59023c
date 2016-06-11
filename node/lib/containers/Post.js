import React, { PropTypes } from 'react'
import { connect } from 'react-redux'


export default class Post extends React.Component {

  constructor (props, context) {
    super(props, context)
  }

  static propTypes = {
    user: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    abstract: PropTypes.string,
    tags: PropTypes.array,
    updatedAt: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }

  rawMarkup (value) {
    return { __html: value }
  }

  render () {
    return (
    <li>
      <span>test</span>
      <h2 dangerouslySetInnerHTML={this.rawMarkup(this.props.title)}></h2>
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.content)}></p>
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.abstract)}></p>
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.tags)}></p>
      <p dangerouslySetInnerHTML={this.rawMarkup(this.props.updatedAt)}></p>
    </li>
    )
  }
}

export default connect(
  ({ application }) => ({ application })
)(Post)
