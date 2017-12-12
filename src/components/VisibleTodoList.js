import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toggleTodo } from '../actions'
import { getVisibleTodos } from '../reducers'

import TodoList from './TodoList.jsx'

const mapStateToProps = (state, ownProps) => {
  const { filter } = ownProps.match.params

  return { todos: getVisibleTodos(state, filter || 'all') }
}

// const mapDispatchToProps = dispatch => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id))
//   }
// })

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const VisibleTodoList = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodoList)
)

export default VisibleTodoList
