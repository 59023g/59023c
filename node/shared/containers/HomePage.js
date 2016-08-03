// containers/HomePage

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { defineMessages, FormattedMessage } from 'react-intl'

import ShortPost from '../components/ShortPost'
import { fetchPostsIfNeeded } from '../actions/posts'


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

export default class HomePage extends React.Component {

  constructor (props) {
    super(props)
  }

  static propTypes = {
    fetchPostsIfNeeded: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired
  }

  static contextTypes = {
    store: PropTypes.any,
    history: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.props.fetchPostsIfNeeded()
  }

  render () {

    if(!this.props.posts.entities.posts) {
      return null;
    }

    const posts = Object.values(this.props.posts.entities.posts)

    console.log(Object.keys(this.props.posts.entities.posts))

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
HomePage.need = [
  fetchPostsIfNeeded
]

export default connect(
  ({ application, posts }) => ({ application, posts }),
  { fetchPostsIfNeeded }
)(HomePage)
