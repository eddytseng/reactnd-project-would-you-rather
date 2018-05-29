import * as API from "../api/_DATA"
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setQuestionsFilter } from './questionsFilter'
import { setAuthedUser } from "./authedUser"

const AUTHED_ID = 'johndoe'

// Actions

export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'
export const RECEIVE_DATA = 'RECEIVE_DATA'


// Action creators

export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	}
}

export function removeQuestion(question) {
	return {
		type: REMOVE_QUESTION,
		question,
	}
}

export function receiveData() {
	return {
		type: RECEIVE_DATA,
	}
}


// A thunk is an action creator that returns a function instead of an action object
// When an action creator returns a function, the function is executed by redux-thunk middleware

export function handleInitialData() {
	return (dispatch) => {
		return Promise.all([ API._getUsers(), API._getQuestions()])
			.then(([users, questions]) => {
				dispatch(receiveUsers(users));
				dispatch(receiveQuestions(questions));
				dispatch(setQuestionsFilter());
				dispatch(setAuthedUser(AUTHED_ID));
				dispatch(receiveData());
			})
	}
}

export function handleAddQuestion(question) {
	return (dispatch) => {
		dispatch(addQuestion(question)); // Optimistic update pattern

		return API._saveQuestion(question) // Makes an API call
			.catch((question) => {
				dispatch(removeQuestion(question)); // Removes question if error with request
				alert('An error occurred. Try again')
			})
	}
}