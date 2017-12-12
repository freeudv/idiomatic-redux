import React from 'react'

import AddTodo from './AddTodo.jsx'
import VisibleTodoList from './VisibleTodoList.js'
import Footer from './Footer.jsx'

const Home = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default Home
