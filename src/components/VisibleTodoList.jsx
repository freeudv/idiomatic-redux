import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleTodo } from '../actions'
import { getFilter } from '../reducers'

import TodoList from './TodoList.jsx'

const mapStateToProps = state => ({ todos: getFilter(state.todos, state.filter) })

const mapDispatchToProps = dispatch => ({
  toggleTodo: bindActionCreators(toggleTodo, dispatch)
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList

