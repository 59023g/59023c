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


// Our product philosophy is "great design above all" . This is evidenced in the pixel perfection that we strive to achieve with our product. To get great design into the hands of the actual user, there's always the need for engineers who "get it." Key responsibilities will include creation of new UI feature sets in our core product offerings. Bridging the gap between creative ideation and functional, cutting-edge, web standards. Being involved in weekly tech shares and code reviews and staying abreast of the latest in front-end technology developments involving everything from our own KD Framework to build systems (gulp, grunt, webpack, browserify etc.), css precompilers (scss/less/stylus etc.), mvc frameworks (React, Angular, EmberJS etc.).
