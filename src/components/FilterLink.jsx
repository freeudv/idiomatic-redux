import { connect } from "react-redux"
import { setFilter } from "../actions"

import Link from "./Link.jsx"

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setFilter(ownProps.filter))
})

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
export default FilterLink
