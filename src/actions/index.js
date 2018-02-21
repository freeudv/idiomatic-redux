import { normalize } from "normalizr"
import { getIsFetching } from "reducers"
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS
} from "../constants"
import * as api from "api"
import * as schema from "./schema"

export const addTodo = title => dispatch =>
  api.addTodo(title).then(response => {
    console.log("normalized response", normalize(response, schema.todo))
    dispatch({
      type: ADD_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    })
  })

export const toggleTodo = id => dispatch =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: TOGGLE_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    })
  })

export const fetchTodos = filter => (dispatch, getState) => {
  // stop fetching data if always isFetching
  if (getIsFetching(getState(), filter)) {
    return
    //return Promise.resolve() if we want to do something where we call action fetchTodos,
    //for example fetchTodos(filter).then(() => console.log('async done'))
  }

  dispatch({
    type: FETCH_TODOS_REQUEST,
    filter
  })

  return api.fetchTodos(filter).then(
    response => {
      console.log(
        "normalized response",
        normalize(response, schema.arrayOfTodos)
      )

      dispatch({
        type: FETCH_TODOS_SUCCESS,
        filter,
        response: normalize(response, schema.arrayOfTodos)
      })
    },
    error => {
      dispatch({
        type: FETCH_TODOS_FAILURE,
        filter,
        message: error.message || "Something went wrong!"
      })
    }
  )
}
