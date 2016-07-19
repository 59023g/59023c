// containers/HomePage

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { defineMessages, FormattedMessage } from 'react-intl'

import ShortPost from '../components/ShortPost'
import { fetchPosts } from '../actions/posts'


function loadData(props) {
  props.fetchPosts()
}

export default class HomePage extends React.Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.loadData()
  }

  render () {

    if(!this.props.posts.posts) {
      return null;
    }
    const posts = this.props.posts.posts;

    console.log('posts', this.props.posts)
    // return (
    //   <div>
    //     <div className="content">
    //       <ul>
    //         { posts.map(function (post, index) {
    //           return (
    //            <ShortPost
    //              key={index}
    //              user={post.user}
    //              username={post.author.username}
    //              title={post.title}
    //              content={post.content}
    //              abstract={post.abstract}
    //              tags={post.tags}
    //              updatedAt={post.updatedAt}
    //              url={post.url}
    //              id={post.id}/>)
    //         })}
    //       </ul>
    //     </div>
    //   </div>
    // )
  }
}


HomePage.propTypes = {
  // fetchPostsIfNeeded: PropTypes.func.isRequired,
  // selectedPosts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
}

HomePage.contextTypes = {
  store: PropTypes.any,
  history: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  }
}
// note - server side render waits until this call returns -
// see fetchComponentDataBeforeRender()
HomePage.need = [
  // fetchPostsIfNeeded
  fetchPosts
]

export default connect(mapStateToProps, { fetchPosts }
)(HomePage)
