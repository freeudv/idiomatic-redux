export const loadState = () => {
  try {
    const jsonState = localStorage.getItem("state")
    if (jsonState === null) {
      return undefined
    }
    return JSON.parse(jsonState)
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const jsonState = JSON.stringify(state)
    localStorage.setItem("state", jsonState)
  } catch (err) {
    // Log error if need
  }
}
