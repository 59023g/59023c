import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as applicationActions from '../actions/application'

let divStyle = {
  backgroundColor: 'aliceblue',
  padding: '16px'
}

class DisplayError extends React.Component {

  static propTypes = {
    hideError: PropTypes.func.isRequired,
    error: PropTypes.object
  };

  render () {

    if (!this.props.error) return null

    console.log(this.props.error)
    return (
      <div className="error-message" style={divStyle}>
        <div>
          <p>You have reached an Error</p>
          <button
            onClick={this.props.hideError}
            type="button">
            <i />
          </button>
          <pre>
            <code>{JSON.stringify(this.props.error, null, 2)}</code>
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
