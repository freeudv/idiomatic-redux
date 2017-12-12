import { createStore } from 'redux'
import throttle from 'lodash/throttle'

import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch
  if (!console.group) return rawDispatch //if browser not support console.group

  return action => {
    console.group(action.type)
    console.log('%c prev state', 'color: blue', store.getState())
    console.log('%c action', 'background:white; color: tomato', action)
    const returnValue = rawDispatch(action)
    console.log('%c new state', 'color: green', store.getState())
    console.groupEnd(action.type)

    return returnValue
  }
}

const configureStore = () => {
  const initialState = loadState()

  const store = createStore(rootReducer, initialState)

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
    window.store = store
  }

  store.subscribe(throttle(() => saveState(store.getState()), 1000))

  return store
}

export default configureStore
