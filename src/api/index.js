import v4 from 'uuid/v4'

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      title: 'hey',
      completed: false
    },
    {
      id: v4(),
      title: 'ho',
      completed: true
    },
    {
      id: v4(),
      title: 'let`s go',
      completed: false
    }
  ]
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodos = filter =>
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.todos
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed)
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed)
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  })
