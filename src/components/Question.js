import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
	render() {
		const { question } = this.props;

		if ( question === null ) {
			return <div>Question does not exist</div>
		}

		return (
			<div className="question">
				<h4>Would you rather</h4>
				<label className="answer">
					{ question.optionOne.text }
					<input name={ question.id } type="radio" value={ question.optionOne.text } />
				</label>
				<p>or</p>
				<label className="answer">
					{ question.optionTwo.text }
					<input name={ question.id } type="radio" value={ question.optionTwo.text } />
				</label>
			</div>
		)
	}
}

function mapStateToProps({ users, questions }, { id }) {
	const question = questions[id];

	return {
		question: question
			? question
			: null
	}
}

export default connect(mapStateToProps)(Question)