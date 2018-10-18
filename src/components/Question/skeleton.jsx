import React from 'react'
import PropTypes from 'prop-types'

class QuestionSkeleton extends React.Component {
  render () {
    const {
      text,
      answers,
      onAnswerSelect
    } = this.props

    return (
      <div className="question-container">
        <div className="question-text">{text}</div>

        {this.props.children}

        <div className="answer-container">
          {answers.map((answer, i) => (
            <div
              key={i}
              className="answer"
              onClick={() => onAnswerSelect(i)}>
               <span className="answer-container-number">{i+1}.</span>{answer}
             </div>
          ))}
        </div>

      </div>
    )
  }
}

export default QuestionSkeleton;