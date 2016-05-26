import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  accountSteps: {
    id: 'account.home.steps',
    description: 'Introduction message of the account home page',
    defaultMessage: 'You can {logoutLink} or try to access a {secretAreaLink} '
      + 'without a necessary permissions.'
  },
  accountSuperSecretArea: {
    id: 'account.home.link.superSecretArea',
    description: 'Link text to super secret area',
    defaultMessage: 'super secret area'
  }
})

export default class MetaHome extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  render () {
    const logoutLink = (<Link to="/logout">logout</Link>)
    const secretAreaLink = (
      <Link to="/meta/secret-area">
        <FormattedMessage {...messages.accountSuperSecretArea} />
      </Link>)

    return (
      <div>
        <div className="header">
          <h1>Meta</h1>
        </div>
        <div className="content">
          <p>
            <FormattedMessage {...messages.accountSteps}
              values={{ logoutLink, secretAreaLink }} />
          </p>
          <div>{this.props.children}</div>
        </div>
      </div>
    )
  }
}
