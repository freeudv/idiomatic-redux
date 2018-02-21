import React from "react"

const Todo = ({ completed, title, id, onTodoClick }) => {
  return (
    <li
      onClick={() => onTodoClick(id)}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {title}
    </li>
  )
}

export default Todo
