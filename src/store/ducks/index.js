import { combineReducers } from 'redux'

import favorites from './favorites'
import errors from './errors'

export default combineReducers({
  favoritesStore: favorites,
  errors,
})
