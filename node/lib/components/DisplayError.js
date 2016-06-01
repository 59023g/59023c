import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as applicationActions from '../actions/application'

var divStyle = {
  backgroundColor: 'aliceblue',
  padding: '16px'
}

class DisplayError extends React.Component {

  static propTypes = {
    hideError: PropTypes.func.isRequired,
    error: PropTypes.object
  };

  render () {
    const { props: { hideError, error } } = this

    if (!error) return null

    return (
      <div className="error-message" style={divStyle}>
        <div>
          <p>Hello Dave, You have reached an Error</p>
          <button
            onClick={hideError}
            type="button">
            <i />
          </button>
          <pre>
            <code>{JSON.stringify(error, null, 2)}</code>
          </pre>
        </div>
      </div>
    )
  }
}

export default connect(
  ({ application }) => ({ error: application.error }),
  applicationActions
)(DisplayError)
