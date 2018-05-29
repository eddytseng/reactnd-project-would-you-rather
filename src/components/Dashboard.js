import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isShowingAnswered: true,
		}
	}

	showAnswered = () => {
		this.setState({ isShowingAnswered: true })
	}

	showUnAnswered = () => {
		this.setState({ isShowingAnswered: false })
	}

	render() {
		const { isShowingAnswered } = this.state;
		const { unansweredQuestions, answeredQuestions } = this.props;

		return (
			<div className="dashboard">

				<button type="button" onClick={this.showUnAnswered}>Unanswered</button>
				<button type="button" onClick={this.showAnswered}>Answered</button>

				{isShowingAnswered ? (
					<div>
						<ul className="questions-list">
							{ answeredQuestions.map(question => (
								<li key={ question.id }>
									<Question id={ question.id } />
								</li>
							))}
						</ul>
					</div>
				) : (
					<div>
						<ul className="questions-list">
							{unansweredQuestions.map(question => (
								<li key={ question.id }>
									<Question id={ question.id } />
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		)
	}
}

function mapStateToProps({ questions }) {

	const answeredQuestions = Object
		.keys(questions)
		.map(id => {
			return questions[id]
		})
		.filter(question => (question.optionOne.votes.length > 0 || question.optionTwo.votes.length > 0))

	const unansweredQuestions = Object
		.keys(questions)
		.map(id => {
			return questions[id]
		})
		.filter(question => (question.optionOne.votes.length === 0 && question.optionTwo.votes.length === 0))

	return {
		answeredQuestions: answeredQuestions,
		unansweredQuestions: unansweredQuestions
	}
}

export default connect(mapStateToProps)(Dashboard)