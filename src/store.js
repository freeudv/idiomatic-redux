import { createStore, applyMiddleware, compose } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
//import promise from 'redux-promise'

import rootReducer from "reducers"

// own versions of logger and promise midlewares
// const logger = store => next => {
//   if (!console.group) return next //if browser not support console.group

//   return action => {
//     console.group(action.type)
//     console.log('%c prev state', 'color: blue', store.getState())
//     console.log('%c action', 'background:white; color: tomato', action)
//     const returnValue = next(action)
//     console.log('%c new state', 'color: green', store.getState())
//     console.groupEnd(action.type)

//     return returnValue
//   }
// }

// const promise = store => next => action => {
//   if (typeof action.then === 'function') {
//     return action.then(next)
//   }
//   return next(action)
// }

// const thunk = store => next => action =>
//   typeof action === 'function'
//     ? action(store.dispatch, store.getState)
//     : next(action)

// const wrapDispatchWithMiddlewares = (store, middlewares) => {
//   middlewares
//     .slice()
//     .reverse()
//     .forEach(middleware => (store.dispatch = middleware(store)(store.dispatch)))
// }

const configureStore = () => {
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger)
  }

  //wrapDispatchWithMiddlewares(store, middlewares)

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}

export default configureStore
