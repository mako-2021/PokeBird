import { combineReducers } from 'redux'

import observed from './observed'
import activePage from './activePage'
import seenBirds from './seenBirds'

export default combineReducers({
  observed,
  activePage,
  seenBirds
})
