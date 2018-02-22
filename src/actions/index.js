export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const SET_FILTER = "SET_FILTER"

export const addTodo = title => {
  return {
    type: ADD_TODO,
    title
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  }
}
