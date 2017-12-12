import uuidv4 from 'uuid/v4'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = title => ({
  type: ADD_TODO,
  id: uuidv4(),
  title
})

export const toggleTodo = id => ({ type: TOGGLE_TODO, id })
