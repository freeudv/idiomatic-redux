import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home.jsx'

const App = () => (
  <div>
    <Route exact path="/:filter?" component={Home} />
  </div>
)

export default App
