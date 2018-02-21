import React from "react"
import { Todo } from "components"

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} onTodoClick={toggleTodo} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList
