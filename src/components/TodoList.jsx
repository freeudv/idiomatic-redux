import React from "react"
import Todo from "./Todo.jsx"

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} toggleTodo={toggleTodo} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList
