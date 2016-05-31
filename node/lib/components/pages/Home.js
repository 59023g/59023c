/*eslint-disable max-len*/
import React from 'react'
import { connect } from 'react-redux'

import { defineMessages, FormattedMessage } from 'react-intl'

import ShortPost from '../ShortPost'

let posts = [{
  id: 1,
  user: 'Michael',
  url: Date.now() + '/the-first-blog-post',
  title: 'The first blog <h1>Post</h1>',
  content: 'Very excellent <h1>Post</h1> Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through',
  abstract: 'Who needs Abstract?',
  tags: ['trade', 'free', 'awesome'],
  updatedAt: Date.now()
}, {
  id: 2,
  user: 'James',
  url: Date.now() + '/the-second-blog-post',
  title: 'The Second blog Post',
  content: 'Very excellent <h1>Post</h1> Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going ',
  abstract: 'Who needs Abstract?',
  tags: ['trade', 'free', 'awesome'],
  updatedAt: Date.now()
}, {
  id: 3,
  user: 'Colin',
  url: Date.now() + '/the-third-blog',
  title: 'The third blog ',
  content: 'PostHampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage',
  abstract: 'Who needs Abstract?',
  tags: ['trade', 'free', 'awesome'],
  updatedAt: Date.now()
}]

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
  },
  intro2: {
    id: 'home.intro2',
    description: 'Recommendation and scope of the website',
    defaultMessage: 'I recommend looking into the source code for inspiration ' +
      'and ideas on how to implement many different use cases.' +
      '{br}' +
      'I also plan to continuously add and demo case different ' +
      'kind of features that are commons in web applications.'
  },
  intro3: {
    id: 'home.intro3',
    description: 'Mention contributions',
    defaultMessage: 'Stay tuned and enjoy! For any question feel free to ' +
      '{linkIssues}, I\'ll be happy to provide some help whenever possible. ' +
      'And any pull-request is very much welcomed! ;)'
  },
  dropIssue: {
    id: 'home.intro3.dropAnIssue',
    defaultMessage: 'drop an issue'
  }
})


export default class Home extends React.Component {

  render () {

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
  ({ application }) => ({ application })
)(Home)
