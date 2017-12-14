import { combineReducers } from 'redux'

import byId, * as fromById from './byIds'
import createList, * as fromList from './createList'

const ListByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
})

const todos = combineReducers({ byId, ListByFilter })

export default todos

//selector for todos state

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.ListByFilter[filter])
  return ids.map(id => fromById.getTodo(state.byId, id))
}

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.ListByFilter[filter])

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.ListByFilter[filter])
