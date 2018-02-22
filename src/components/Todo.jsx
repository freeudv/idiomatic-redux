import React from "react"

const Todo = ({ completed, title, id, toggleTodo, deleteTodo }) => {
  return (
    <li onClick={() => toggleTodo(id)}>
      <span
        style={{ textDecoration: completed ? "line-through" : "none" }}
        //className={`${completed ? "completed" : ""}`}
      >
        {title}
      </span>
      <span onClick={() => deleteTodo(id)}> x</span>
    </li>
  )
}

export default Todo
