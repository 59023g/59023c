import React, { PropTypes } from 'react'
import * as actions from '../actions/application'

export default class Login extends React.Component {

  static propTypes = {
    location: PropTypes.object,
    params: PropTypes.any
  };

  static contextTypes = {
    store: PropTypes.any,
    history: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props)
    this.state = { email: null, password: null }
  }

  componentDidMount () {
    // console.log('params', this.props.params)
  }

  handleInputChange (evt) {

    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const { history, store } = this.context
    const { location } = this.props

    let nextPath = '/meta'

    if (location.state && location.state.nextPathname)
      nextPath = location.state.nextPathname

    store.dispatch(actions.login(this.state, () => {
      history.pushState({}, nextPath)
    }))
  }

  render () {
    return (
      <div>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <form
            onSubmit={::this.handleSubmit}
            onChange={::this.handleInputChange}>
            <fieldset>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" defaultValue="foo@bar.com" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" defaultValue="secret" />
              </div>
              <button type="submit">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}
