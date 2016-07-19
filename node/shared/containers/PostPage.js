import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/posts'

// postsById todosById: { id -> todo }
// and todos: array<id>

function loadData(props) {
  const { id } = props
  props.getPost(id)
}

export default class PostPage extends React.Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    loadData(this.props)
    // const id = this.props.params.id
    // const post = this.props.getPost(id)
    // console.log(post)

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

function mapStateToProps(state, ownProps) {
  const id = ownProps.params.id

  return {
    id,
    application: state.application,
    posts: state.posts,
  }
}

PostPage.propTypes = {
  getPost: PropTypes.func.isRequired
}

PostPage.contextTypes = {
  store: PropTypes.any,
  posts: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
  // selectedPosts: PropTypes.array.isRequired
}

PostPage.need = [
  getPost
]

export default connect(mapStateToProps, { getPost })(PostPage)

//
// })(PostPage)
//   ({ application, posts }) => ({ application, posts }),
//   { getPost }
// )(PostPage)
