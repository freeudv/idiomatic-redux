import uuidv4 from 'uuid/v4'
import { ADD_TODO, TOGGLE_TODO, RECEIVE_TODOS } from '../constants'
import * as api from '../api'

export const addTodo = title => ({
  type: ADD_TODO,
  id: uuidv4(),
  title
})

export const toggleTodo = id => ({ type: TOGGLE_TODO, id })

const recieveTodos = (filter, response) => ({
  type: RECEIVE_TODOS,
  filter,
  response
})

export const fetchTodos = filter =>
  api.fetchTodos(filter).then(res => recieveTodos(filter, res))
