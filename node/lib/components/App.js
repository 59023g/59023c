import React, { PropTypes } from 'react'
import NavLink from './NavLink'
import Auth from './Auth'

export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.any
  };

  componentDidMount () {
    console.log('state mount', this.state)
    console.log('state mount', this.props)
  }

  render () {
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
        {this.props.children }
      </div>
    )
  }
}
