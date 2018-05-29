import { questionsFilters } from '../actions/questionsFilter'

const { SHOW_ANSWERED, SHOW_UNANSWERED } = questionsFilters;

export default function questionsFilter(state = SHOW_UNANSWERED, action) {
	switch(action.type) {
		case SHOW_ANSWERED :
			return action.filter
		default :
			return state
	}
}