import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from "../actions"
import { todo, todos, filter } from "../reducers"
import { createStateTransitionTester } from "../utils"

describe("todo reducer", () => {
  const initialState = {
    id: 0,
    title: "Test",
    completed: false
  }

  const testStateTransition = createStateTransitionTester(todo, initialState)

  testStateTransition("should return the initial state", {
    action: {},
    initialState,
    expectedState: initialState
  })

  testStateTransition("ADD_TODO success", {
    action: {
      type: ADD_TODO,
      title: "Test Redux"
    },
    modifiedState: {
      id: 0,
      title: "Test Redux",
      completed: false
    },
    expectedState: {
      id: 0,
      title: "Test Redux",
      completed: false
    }
  })

  testStateTransition("TOGGLE_TODO success", {
    action: {
      type: TOGGLE_TODO,
      id: 0
    },
    modifiedState: {
      id: 0,
      title: "Test Redux",
      completed: false
    },
    expectedState: {
      id: 0,
      title: "Test Redux",
      completed: true
    }
  })
})

describe("todos reducer", () => {
  const initialState = [
    {
      id: 0,
      title: "Test",
      completed: false
    }
  ]

  const testStateTransition = createStateTransitionTester(todos, initialState)

  testStateTransition("ADD_TODO success", {
    action: {
      type: ADD_TODO,
      title: "Test Redux"
    },
    expectedState: [
      {
        id: 0,
        title: "Test",
        completed: false
      },
      {
        id: 1,
        title: "Test Redux",
        completed: false
      }
    ]
  })

  testStateTransition("TOGGLE_TODO success", {
    action: {
      type: TOGGLE_TODO,
      id: 1
    },
    modifiedState: [
      {
        id: 0,
        title: "Test",
        completed: false
      },
      {
        id: 1,
        title: "Test Redux",
        completed: false
      }
    ],
    expectedState: [
      {
        id: 0,
        title: "Test",
        completed: false
      },
      {
        id: 1,
        title: "Test Redux",
        completed: true
      }
    ]
  })

  testStateTransition("DELETE_TODO success", {
    action: {
      type: DELETE_TODO,
      id: 1
    },
    modifiedState: [
      {
        id: 0,
        title: "Test",
        completed: false
      },
      {
        id: 1,
        title: "Test Redux",
        completed: false
      }
    ],
    expectedState: [
      {
        id: 0,
        title: "Test",
        completed: false
      }
    ]
  })
})

describe("filter reducer", () => {
  const initialState = "ALL"

  const testStateTransition = createStateTransitionTester(filter, initialState)

  testStateTransition("should return the initial state", {
    action: {},
    expectedState: "ALL"
  })

  testStateTransition("SET_FILTER success", {
    action: {
      type: SET_FILTER,
      filter: "COMPLETED"
    },
    expectedState: "COMPLETED"
  })
})
