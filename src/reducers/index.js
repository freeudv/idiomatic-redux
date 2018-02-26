import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from "../actions"

let nextId = 0

export const todo = (state, action) => {
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

    case DELETE_TODO:
      return state.filter(t => t.id !== action.id)

    default:
      return state
  }
}

export const filter = (state = "ALL", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter

    default:
      return state
  }
}

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "ALL":
      return todos

    case "ACTIVE":
      return todos.filter(todo => !todo.completed)

    case "COMPLETED":
      return todos.filter(todo => todo.completed)

    default:
      return todos
  }
}
