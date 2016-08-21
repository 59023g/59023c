import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/posts'

// postsById todosById: { id -> todo }
// and todos: array<id>


export default class PostPage extends React.Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    const id = this.props.params.id
    const post = this.props.getPost(id)
    console.log(post)


  }

  static propTypes = {
    getPost: PropTypes.func.isRequired
  }

  static contextTypes = {
    store: PropTypes.any,
    history: PropTypes.object.isRequired
  }

  rawMarkup (value) {
    return { __html: value }
  }

  render () {
    return (
    <li>
      <span>test</span>
    </li>
    )
  }
}

PostPage.need = [
  getPost
]

export default connect(
  ({ application, posts }) => ({ application, posts }),
  { getPost }
)(PostPage)
