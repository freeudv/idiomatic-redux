import React from "react"
import ReactDOM from "react-dom"
import "./assets/styles/style.css"

import { AppContainer } from "react-hot-loader"

import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

import { todos, filter } from "./reducers"

const reducer = combineReducers({ todos, filter })
const store = createStore(reducer)

import App from "./components/App.js"

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  )
}

render(App)

if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App)
  })
}
