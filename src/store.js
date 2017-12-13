import { createStore } from 'redux'
import rootReducer from './reducers'

const logger = store => next => {
  if (!console.group) return next //if browser not support console.group

  return action => {
    console.group(action.type)
    console.log('%c prev state', 'color: blue', store.getState())
    console.log('%c action', 'background:white; color: tomato', action)
    const returnValue = next(action)
    console.log('%c new state', 'color: green', store.getState())
    console.groupEnd(action.type)

    return returnValue
  }
}

const promise = store => next => action => {
  if (typeof action.then === 'function') {
    return action.then(next)
  }

  return next(action)
}

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares
    .slice()
    .reverse()
    .forEach(middleware => (store.dispatch = middleware(store)(store.dispatch)))
}

const configureStore = () => {
  const store = createStore(rootReducer)
  const middlewares = [promise]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
    window.store = store
  }

  wrapDispatchWithMiddlewares(store, middlewares)

  return store
}

export default configureStore
