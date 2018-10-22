import React from 'react'
import PropTypes from 'prop-types'
import Timer from './time.svg'
import Video from '../../assets/turtles.mp4'


class QuestionSkeleton extends React.Component {
  state = {
    selectedAnswerIndex: -1
  }

  onAnswer = i => {
    this.setState({
      ...this.state,
      selectedAnswerIndex: i
    })
    this.props.onAnswerSelect(i)
  }
  
  render () {
    const {
      text,
      answers
    } = this.props

    return (
      <div className="question-container">
        <figure>
          <video autoplay="autoplay" muted="muted" loop="loop" id="myVideo">
            <source src={Video} type="video/mp4" />
          </video>
        </figure>
        <div className="question-timer">
          <img className="spin" src={Timer} />
          <span>15 sec</span>
        </div>
        <div className="question-text">{text}</div>
        {this.props.children}

        <div className="answer-container">
          {answers.map((answer, i) => (
            <div
              key={i}
              className={"answer "+(i === this.state.selectedAnswerIndex ? "selected" : "")}
              onClick={() => this.onAnswer(i)}>
               <span className="answer-container-number">{i+1}</span>{answer}
             </div>
          ))}
        </div>

      </div>
    )
  }
}

export default QuestionSkeleton;
