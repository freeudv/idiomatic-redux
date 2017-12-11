import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from '../actions/index'

let nextId = 0

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: nextId++,
        title: action.title,
        completed: false
      }

    case TOGGLE_TODO:
      return state.id === action.id
        ? Object.assign({}, state, { completed: !state.completed })
        : state

    default:
      return state
  }
}

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)]

    case TOGGLE_TODO:
      return state.map(t => todo(t, action))

    default:
      return state
  }
}

export const filter = (state = 'ALL', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter

    default:
      return state
  }
}

export const getFilter = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos

    case 'ACTIVE':
      return todos.filter(todo => !todo.completed)

    case 'COMPLETED':
      return todos.filter(todo => todo.completed)

    default:
      return todos
  }
}
