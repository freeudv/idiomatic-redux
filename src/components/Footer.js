import React from "react"

import { FilterLink } from "components"

const Footer = () => {
  return (
    <p>
      Show: <FilterLink filter="all">All</FilterLink>{" "}
      <FilterLink filter="active">Active</FilterLink>{" "}
      <FilterLink filter="completed">Completed</FilterLink>
    </p>
  )
}

export default Footer
