// containers/HomePage

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { defineMessages, FormattedMessage } from 'react-intl'

import ShortPost from '../components/ShortPost'
import { loadPosts } from '../actions/posts'


function loadData(props) {
  props.loadPosts(props.deity)
}

export default class HomePage extends React.Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    // loadData(this.props)
    // this.props.loadPosts(this.props.deity)
  }

  render () {

    if(!this.props.posts.posts) {
      return null;
    }
    // const posts = this.props.posts.entities.items
    console.log('render')
    console.log('sssweet', this.props.posts)
    return (
      <div>
        <div className="content">
          <ul>
            { posts.map(function (post, index) {
              return (
               <ShortPost
                 key={index}
                 user={post.user}
                 username={post.author.username}
                 title={post.title}
                 content={post.content}
                 abstract={post.abstract}
                 tags={post.tags}
                 updatedAt={post.updatedAt}
                 url={post.url}
                 id={post.id}/>)
            })}
          </ul>
        </div>
      </div>
    )
  }
}

// note - server side render waits until this call returns -
// see fetchComponentDataBeforeRender()
// HomePage.need = [
//   loadPosts
// ]

HomePage.propTypes = {
  // fetchPostsIfNeeded: PropTypes.func.isRequired,
  // selectedPosts: PropTypes.array.isRequired,
  // loadPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
}

HomePage.contextTypes = {
  store: PropTypes.any,
  history: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  const deity = ownProps.params.deity
  return {
    posts: state.posts,
    deity
  }
}


export default connect(mapStateToProps, {}
)(HomePage)
