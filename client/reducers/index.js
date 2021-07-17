import { combineReducers } from 'redux'

import fruits from './fruits'
import observed from './observed'
import activePage from './activePage'
import seenBirds from './seenBirds'

export default combineReducers({
  fruits,
  observed,
  activePage,
  seenBirds
})
