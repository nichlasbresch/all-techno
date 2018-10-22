import React from 'react'
import Sound from 'react-sound';

import InputLetter from './InputLetter'

import { withRouter } from 'react-router'

import { ActionCable } from 'react-actioncable-provider'

import mp3 from './RunningOut.mp3'
import './login.module.css'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      name: "___"
    }
  }

  componentDidMount() {
    this.props.setPlaySound('/KarnovTheme.mp3')
  }

  componentWillUnmount() {
    this.props.stopSound()
  }

  handleNext = () => {
    this.refs.appChannel.perform('login', {name: this.state.name})
    this.props.history.push("/start")
  }

  changeName = (letter, index) => {
    this.setState({
      ...this.state,
      name: this.state.name.substring(0, index) + letter + this.state.name.substring(index + 1)
    })
  }

  render () {
    return (
      <div className="login-container">
        <ActionCable
          ref='appChannel'
          channel={{channel: 'MessagesChannel'}} />

        <div className="login-head">
          <h1 className="login-headline">Team name</h1>
          <p className="login-subheadline">Enter your teams initials</p>
        </div>
        <div className="login-enterName">
          <InputLetter onChange={letter => this.changeName(letter, 0)} />
          <InputLetter onChange={letter => this.changeName(letter, 1)} />
          <InputLetter onChange={letter => this.changeName(letter, 2)} />
        </div>
        <div className="login-continue">
          <span onClick={this.handleNext}>next</span>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
