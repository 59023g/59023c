/*eslint-disable max-len*/

// containers/HomePage

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { defineMessages, FormattedMessage } from 'react-intl'

import ShortPost from '../components/ShortPost'
import { fetchPosts } from '../actions/posts'

const messages = defineMessages({
  welcome: {
    id: 'home.welcome',
    description: 'welcome',
    defaultMessage: 'welcom'
  },
  intro: {
    id: 'home.intro',
    description: 'texttt',
    defaultMessage: 'text'
  }
})

function loadData (props) {
  props.fetchPosts().then(() => {
    console.log('what')
    console.log(store.getState())
  })
}


export default class HomePage extends React.Component {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired
  }

  static contextTypes = {
    store: PropTypes.any,
    history: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    console.log('componentWillMount(): HomePage')

    // loadData(this.props)
    this.props.fetchPosts().then(() => {
      console.log('store state', store.getState())
    })
    
  }

  render () {

    if(!this.props.posts.posts) {
      return null;
    }
    const posts = this.props.posts.posts;

    // let posts = this.props.posts.posts



    console.log('posts', posts)
    console.log('render(): HomePage')

    return (
      <div>
        <div className="header">
          <FormattedMessage {...messages.welcome}>
            {text => <h1>{text}</h1>}
          </FormattedMessage>
        </div>
        <div className="content">
          <p>
            <FormattedMessage {...messages.intro} />
          </p>
          <ul>
            { posts.map(function (post, index) {
              return (
               <ShortPost
                 key={index}
                 user={post.user}
                 username={post.username}
                 title={post.title}
                 content={post.content}
                 abstract={post.abstract}
                 tags={post.tags}
                 updatedAt={post.updatedAt}
                 url={post.url}/>)
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  ({ posts }) => ({ posts }),
  { fetchPosts }
)(HomePage)
