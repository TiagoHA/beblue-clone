import { createStore } from 'redux'
import Reducers from './ducks'

export const Store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
