import { combineReducers } from 'redux'

import favorites from './favorites'
import errors from './errors'
import search from './search'

export default combineReducers({
  favoritesStore: favorites,
  searchStore: search,
})
