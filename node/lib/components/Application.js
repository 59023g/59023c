import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import DevTools from './DevTools'


import Menu from './Menu'
import Footer from './Footer'
import DisplayError from './DisplayError'

let divStyle = {
  backgroundColor: 'aliceblue',
  width: '100%',
  height: '100%',
  padding: '16px',
  position: 'absolute',
  top: '0',
  left: '0'
}

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

    const isFetching = () => {
      if (Boolean(this.props.application.isFetching))
        return (
          <div style={divStyle}>Loading</div>
        )
      else
        return undefined
    }
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
      <Link to="/">Home </Link>
      <Link to="/meta"> Meta</Link>

        {showMenu()}
        {isFetching()}
        <div id="main">
          <DisplayError />
          {this.props.children}
        </div>

        <Footer />
        <DevTools />
      </div>
    )
  }
}

export default connect(
  ({ application }) => ({ application })
)(Application)
