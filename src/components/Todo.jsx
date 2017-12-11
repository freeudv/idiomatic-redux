import React from 'react'

const Todo = ({ completed, title, id, toggleTodo }) => {
  return (
    <li
      onClick={() => toggleTodo(id)}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {title}
    </li>
  )
}

export default Todo
