import { combineReducers } from 'redux'
import todos, * as fromTodos from './todosReducer'

const rootReducer = combineReducers({ todos })

export default rootReducer

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter)
