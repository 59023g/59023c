import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  componentDidMount () {
    console.log(this.props)
  },
  render () {
    return (
    <div>
      <h2>Meta</h2>
      <ul>
        <li>
          <NavLink to={`/${this.props.params.userName}/meta/settings`}>
            Settings
          </NavLink>
        </li>
      </ul>
      {this.props.children}
    </div>
    )
  }
})
