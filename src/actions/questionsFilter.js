export const SET_QUESTIONS_FILTER = 'SET_QUESTIONS_FILTER'

export const questionsFilters = {
	SHOW_ANSWERED: 'SHOW_ANSWERED',
	SHOW_UNANSWERED: 'SHOW_UNANSWERED',
}

export function setQuestionsFilter(filter) {
	return {
		type: SET_QUESTIONS_FILTER,
		filter
	}
}