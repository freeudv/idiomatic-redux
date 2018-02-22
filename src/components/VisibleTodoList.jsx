import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { toggleTodo, deleteTodo } from "../actions"
import { getVisibleTodos } from "../reducers"

import TodoList from "./TodoList.jsx"

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: bindActionCreators(toggleTodo, dispatch),
  deleteTodo: bindActionCreators(deleteTodo, dispatch)
})

// or
// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id)),
//   deleteTodo: id => dispatch(deleteTodo(id))
// })

// or just
// const mapDispatchToProps = {
//   toggleTodo,
//   deleteTodo
// }

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
