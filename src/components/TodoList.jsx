import React from "react"
import Todo from "./Todo.jsx"

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          {...todo}
        />
      ))}
    </ul>
  )
}

export default TodoList
