import { connect } from "react-redux"
import { setFilter } from "../actions"

import Link from "./Link.jsx"

const mapStateToProps = (state, props) => ({
  active: props.filter === state.filter
})

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(setFilter(props.filter))
})

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
export default FilterLink
