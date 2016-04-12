import React from 'react'
import NavLink from './NavLink'

var user
//https://github.com/reactjs/react-router/blob/master/examples/passing-props-to-children/app.js#L48
// handler
//http://stackoverflow.com/questions/34262526/react-router-passing-props-to-children
//http://stackoverflow.com/questions/31862839/passing-props-to-react-router-children-routes

// user 
//   |
//     -- meta
//     -- posts
//       |
//         -- post

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
