import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from 'actions'

const AddTodo = ({ addNewTodo }) => {
  let textInput = null

  const handleClick = () => {
    if (textInput.value) {
      addNewTodo(textInput.value)
    }
    textInput.value = ''
  }

  return (
    <div>
      <input
        type="text"
        ref={input => {
          textInput = input
        }}
      />
      <button onClick={handleClick}>Add todo</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addNewTodo: bindActionCreators(addTodo, dispatch)
})

export default connect(null, mapDispatchToProps)(AddTodo)
