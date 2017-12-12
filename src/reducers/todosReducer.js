import { combineReducers } from 'redux'

import { ADD_TODO, TOGGLE_TODO } from '../actions'

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { id: action.id, title: action.title, completed: false }

    case TOGGLE_TODO:
      return state.id === action.id
        ? Object.assign({}, state, { completed: !state.completed })
        : state

    default:
      return state
  }
}

const todosById = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
    case TOGGLE_TODO:
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      }

    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.id]
    default:
      return state
  }
}

const todos = combineReducers({ todosById, allIds })

export default todos

//selector for todos state

const getAllTodos = state => state.allIds.map(id => state.todosById[id])

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state)

  //или так, без allIds
  //const allTodos = Object.values(state.todosById)

  switch (filter) {
    case 'all':
      return allTodos

    case 'active':
      return allTodos.filter(todo => !todo.completed)

    case 'completed':
      return allTodos.filter(todo => todo.completed)

    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
}
