import React from 'react'
import Todo from './Todo.jsx'

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} toggleTodo={onTodoClick} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList
