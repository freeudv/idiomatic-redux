import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { toggleTodo, fetchTodos } from '../actions'
//or import * as action from '../actions'

import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'

import TodoList from './TodoList.jsx'
import FetchError from './FetchError.jsx'

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
    fetchTodos(filter).then(() => console.log('async done'))
  }

  render() {
    const { isFetching, errorMessage, todos, toggleTodo } = this.props
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }

    if (errorMessage && !todos.length) {
      return (
        <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
      )
    }

    return <TodoList todos={todos} toggleTodo={toggleTodo} />
  }
}

VisibleTodoList.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || 'all'

  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter
  }
}

// const mapDispatchToProps = dispatch => ({
//   onTodoClick: (id) => dispatch(toggleTodo(id))
// })

const mapDispatchToProps = {
  toggleTodo,
  fetchTodos
}

VisibleTodoList = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)
)

export default VisibleTodoList
