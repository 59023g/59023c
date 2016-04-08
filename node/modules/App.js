import React from 'react'
import NavLink from './NavLink'

var user

export default React.createClass({
  componentDidMount() {
    this.setState({
      user: {
        name: 'Michael Pierce',
        id: 'mpierce'
      }
    })
    console.log(this.state)
  },
  render() {
    return (
      <div>
        <h1>MEP.IM</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
