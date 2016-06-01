import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Menu from './Menu'
import Footer from './Footer'
import DisplayError from './DisplayError'

export default class Application extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    application: PropTypes.object.isRequired
  };

  constructor (props, context) {
    super(props, context)

    this.handleMenuClick = this.handleMenuClick.bind(this)

    this.state = {
      isMenuActive: false
    }
  }

  handleMenuClick (evt) {
    evt.preventDefault()
    this.setState({ isMenuActive: !this.state.isMenuActive })
  }

  render () {

    const loggedIn = Boolean(this.props.application.token)

    const { isMenuActive } = this.state
    const activeClass = isMenuActive ? 'active' : ''

    const showMenu = function () {
      if (loggedIn)
        return (
          <Menu activeClass={activeClass} />
        )
      else
        return undefined
    }


    return (
      <div id="layout" className={activeClass}>
      <Link to="/">Home</Link>

        {showMenu()}

        <div id="main">
          <DisplayError />
          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  }
}

export default connect(
  ({ application }) => ({ application })
)(Application)
