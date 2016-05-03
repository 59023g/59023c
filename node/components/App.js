import React from 'react'
import NavLink from './NavLink'
import Auth from './Auth'

var user

export default React.createClass({
  getInitialState() {
    return {
      user: {
        fullName: Auth.user.fullName,
        id: Auth.user.id
      }
    }
  },
  componentDidMount() {
    console.log(this.state)
  },
  render() {
    return (
    <div>
      <h1>MEP.IM</h1>
      <ul role="nav">
        <li>
          <NavLink to="/" onlyActiveOnIndex>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={`/${Auth.user.id}/meta`}>
            Meta -
            {Auth.user.id}
          </NavLink>
        </li>
        <li>
          <NavLink to={`/${Auth.user.id}/posts`}>
            Posts
          </NavLink>
        </li>
      </ul>
      {this.props.children}
    </div>
    )
  }
})
