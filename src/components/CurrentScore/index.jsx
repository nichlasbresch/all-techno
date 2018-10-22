import React from 'react'
import PropTypes from 'prop-types'
import './currentscore.module.css'


class CurrentScore extends React.Component {
  render() {
    return (
      <div className="currentscore-container">
        <h1>Scoreboard #{this.props.round}</h1>
        <div className="currentscore-scoreboard">
            <ul className="header">
              <li>RANK</li>
              <li>NAME</li>
              <li>SCORE</li>
            </ul>
            <ul className="list">
              <li>
                <div>1.</div>
                <div>AAA</div>
                <div>111</div>
              </li>
              <li>
                <div>2.</div>
                <div>AAA</div>
                <div>124112</div>
              </li>
              <li>
                <div>3.</div>
                <div>AAA</div>
                <div>12411</div>
              </li>
            </ul>
        </div>
        {this.props.nextRound > this.props.currentRound &&
          <div onClick={() => this.props.onNext()} className="currentscore-continue">
            Next
          </div>
        }
      </div>
    )
  }
}

export default CurrentScore
