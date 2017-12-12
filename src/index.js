import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './style.scss'

import { AppContainer } from 'react-hot-loader'

import { Provider } from 'react-redux'
import configureStore from './store'

import App from './components/App.jsx'

const store = configureStore()

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Component />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    render(App)
  })
}
