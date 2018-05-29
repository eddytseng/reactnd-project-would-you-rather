import { ADD_QUESTION, REMOVE_QUESTION } from '../actions'
import { RECEIVE_QUESTIONS } from '../actions/questions'

export default function questions(state = [], action) {
	switch(action.type) {
		case ADD_QUESTION:
			return {
				...state,
				...action.question
			};
		case REMOVE_QUESTION:
			return state;
		case RECEIVE_QUESTIONS:
			return action.questions;
		default:
			return state;
	}
}