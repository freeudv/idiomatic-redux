import uuidv4 from 'uuid/v4'
import { getIsFetching } from '../reducers'
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from '../constants'
import * as api from '../api'

export const addTodo = title => ({
  type: ADD_TODO,
  id: uuidv4(),
  title
})

export const toggleTodo = id => ({ type: TOGGLE_TODO, id })

export const fetchTodos = filter => (dispatch, getState) => {
  // stop fetching data if always isFetching
  if (getIsFetching(getState(), filter)) {
    return
    //return Promise.resolve() if we want to do something were we call action fetchTodos,
    //for example fetchTodos(filter).then(() => console.log('async done'))
  }

  dispatch({
    type: FETCH_TODOS_REQUEST,
    filter
  })

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: FETCH_TODOS_SUCCESS,
        filter,
        response
      })
    },
    error => {
      dispatch({
        type: FETCH_TODOS_FAILURE,
        filter,
        message: error.message || 'Something went wrong!'
      })
    }
  )
}
