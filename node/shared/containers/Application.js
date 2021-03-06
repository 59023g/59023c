import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import DevTools from '../components/DevTools'

import Menu from '../components/Menu'
import Footer from '../components/Footer'
import DisplayError from '../components/DisplayError'

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

  constructor (props, context) {
    super(props, context)
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.state = { isMenuActive: false }
  }

   requireAuth (nextState, replaceState) {
    const state = store.getState()
    const isLoggedIn = Boolean(state.application.token)
    console.log('isLoggedIn', isLoggedIn)
    if (!isLoggedIn)
      replaceState({
        nextPathname: nextState.location.pathname
      }, '/login')
  }

 logout (nextState, replaceState) {
    store.dispatch({ type: constants.LOG_OUT })
    replaceState({}, '/')
  }

  handleMenuClick (evt) {
    evt.preventDefault()
    this.setState({ isMenuActive: !this.state.isMenuActive })
  }

  render () {

    const isFetching = () => {
      if (
        Boolean(this.props.application.isFetching)
        || Boolean(this.props.posts.isFetching)
      )
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
      </div>
    )
  }
}

Application.propTypes = {
  children: PropTypes.any,
  application: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired
};

Application.contextTypes = {
  store: PropTypes.any
}

function mapStateToProps(state, ownProps) {
  // console.log(state, ownProps)
  return {
    application: state.application,
    posts: state.posts
  }
}
export default connect(mapStateToProps, {})(Application)

// export { requireAuth, logout }
