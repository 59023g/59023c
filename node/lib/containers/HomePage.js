/*eslint-disable max-len*/

// pages/HomePage

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { defineMessages, FormattedMessage } from 'react-intl'

import ShortPost from '../components/ShortPost'
import { fetchPosts } from '../actions/posts'


const messages = defineMessages({
  welcome: {
    id: 'home.welcome',
    description: 'Welcome message to the user',
    defaultMessage: 'Welcome'
  },
  intro: {
    id: 'home.intro',
    description: 'Introductive message about the website',
    defaultMessage: 'This website is a boilerplate example to showcase and ' +
      'provide best practices around '
  }
})

function loadData (props) {
  props.fetchPosts()
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

  componentWillMount (props, moreProps) {
    loadData(this.props)
  }

  render () {
    let posts = this.props.posts.posts

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
            {posts.map(function (post, index) {
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
