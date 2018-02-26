import deepFreeze from "deep-freeze"
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from "../actions"
import { todo, todos, filter } from "../reducers"

// const todo = (state = {}, action) => {
//   return state
// }

describe("todo reducer", () => {
  it("ADD_TODO success", () => {
    const state = {}
    const action = {
      type: ADD_TODO,
      title: "Test"
    }

    deepFreeze(state)
    deepFreeze(action)

    expect(todo(state, action)).toEqual({
      id: 0,
      title: "Test",
      completed: false
    })
  })

  it("TOGGLE_TODO success", () => {
    const state = {
      id: 0,
      title: "Test",
      completed: false
    }
    const action = {
      type: TOGGLE_TODO,
      id: 0
    }

    deepFreeze(state)
    deepFreeze(action)

    expect(todo(state, action)).toEqual({
      id: 0,
      title: "Test",
      completed: true
    })
  })
})

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(todos(undefined, {})).toEqual([])
  })

  it("ADD_TODO success", () => {
    const state = []
    const action = {
      type: ADD_TODO,
      title: "Test"
    }

    deepFreeze(state)
    deepFreeze(action)

    expect(todos(state, action)).toEqual([
      {
        id: 1,
        title: "Test",
        completed: false
      }
    ])
  })

  it("TOGGLE_TODO success", () => {
    const state = [
      {
        id: 0,
        title: "Test",
        completed: false
      }
    ]
    const action = {
      type: TOGGLE_TODO,
      id: 0
    }

    deepFreeze(state)
    deepFreeze(action)

    expect(todos(state, action)).toEqual([
      {
        id: 0,
        title: "Test",
        completed: true
      }
    ])
  })

  it("DELETE_TODO success", () => {
    const state = [
      {
        id: 0,
        title: "Test",
        completed: false
      }
    ]
    const action = {
      type: DELETE_TODO,
      id: 0
    }

    deepFreeze(state)
    deepFreeze(action)

    expect(todos(state, action)).toEqual([])
  })
})

describe("filter reducer", () => {
  it("should return the initial state", () => {
    expect(filter(undefined, {})).toBe("ALL")
  })

  it("SET_FILTER success", () => {
    const state = "ACTIVE"

    const action = {
      type: SET_FILTER,
      filter: "COMPLETED"
    }

    deepFreeze(state)
    deepFreeze(action)

    expect(filter(state, action)).toBe("COMPLETED")
  })
})
