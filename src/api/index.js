import v4 from "uuid/v4"

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      title: "hey",
      completed: false
    },
    {
      id: v4(),
      title: "ho",
      completed: true
    },
    {
      id: v4(),
      title: "let`s go",
      completed: false
    }
  ]
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodos = filter =>
  delay(500).then(() => {
    // if (Math.random() > 0.5) {
    //   throw new Error('Boom Error!!!')
    // }

    switch (filter) {
      case "all":
        return fakeDatabase.todos
      case "active":
        return fakeDatabase.todos.filter(t => !t.completed)
      case "completed":
        return fakeDatabase.todos.filter(t => t.completed)
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  })

export const addTodo = title =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      title,
      completed: false
    }

    fakeDatabase.todos.push(todo)
    return todo
  })

export const toggleTodo = id =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id)
    todo.completed = !todo.completed
    return todo
  })
