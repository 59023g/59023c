// client/Root.js

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'


class Root extends React.Component {
  static propTypes = {
    application: PropTypes.object.isRequired
  };

  render () {
    return (
      <div>{this.props}</div>
    )
  }
}

export default connect(({ application }) => ({ application }))(Root)
