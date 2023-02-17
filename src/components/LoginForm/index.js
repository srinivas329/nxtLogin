// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: true}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
    this.setState({error: false})
  }

  render() {
    const {username, password, error} = this.state

    let errorWarn = ''

    if (error === false) {
      errorWarn = "*Username and Password didn't match"
    }

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="form-card" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <br />
          <label className="label" htmlFor="username">
            USERNAME
          </label>
          <input
            className="input"
            onChange={this.onChangeUsername}
            value={username}
            type="text"
            id="username"
            placeholder="Username"
          />
          <br />
          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <input
            onChange={this.onChangePassword}
            value={password}
            className="input"
            placeholder="Password"
            type="password"
            id="password"
          />
          <br />
          <button className="login-btn" type="submit">
            Login
          </button>
          <p className="error">{errorWarn}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
