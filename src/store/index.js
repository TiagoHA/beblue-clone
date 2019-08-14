import { createStore } from 'redux'
import Reducers from './ducks'

export const Store = createStore(Reducers)
