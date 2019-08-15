import { combineReducers } from 'redux'

import favorites from './favorites'
import search from './search'
// import errors from './errors'

export default combineReducers({
  favoritesStore: favorites,
  searchStore: search,
})
