import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import questionsFilter from './questionsFilter'
import loading from './loading'

const reducers = combineReducers({
	authedUser,
	users,
	questions,
	questionsFilter,
	loading,
})

export default reducers;