import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as applicationActions from '../actions/application'
import MenuListItem from './MenuListItem'

const menuItems = [
  { text: 'Posts', link: '/stargazers/emmenko', icon: 'fa fa-star' },
  { text: 'Test', link: '/about', icon: 'fa fa-dot-circle-o' },
  { text: 'Logout', link: '/logout', icon: 'fa fa-dot-circle-o' },
]


class Menu extends React.Component {

  static propTypes = {
    activeClass: PropTypes.string.isRequired,
    application: PropTypes.object.isRequired,
    switchLocale: PropTypes.func.isRequired
  };

  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <div id="menu" ref="menu" className={this.props.activeClass}>
        <div>
          <ul>
            {menuItems.map((item, i) => <MenuListItem {...item} key={i} />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  ({ application }) => ({ application }),
  applicationActions
)(Menu)
