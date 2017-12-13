import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { toggleTodo, fetchTodos } from '../actions'
//or import * as action from '../actions'

import { getVisibleTodos } from '../reducers'

import TodoList from './TodoList.jsx'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter)
  }

  render() {
    return <TodoList {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || 'all'

  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

// const mapDispatchToProps = dispatch => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id))
//   }
// })

const mapDispatchToProps = {
  toggleTodo,
  fetchTodos
}

VisibleTodoList = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)
)

export default VisibleTodoList
