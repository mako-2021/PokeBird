import { combineReducers } from 'redux'

import fruits from './fruits'
import observed from './observed'
import activePage from './activePage'

export default combineReducers({
  fruits,
  observed,
  activePage
})
