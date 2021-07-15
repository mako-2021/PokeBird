import { ACTIVE_PAGE } from '../actions/activePage'

const initialState = 'Homepage'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_PAGE:
      state = action.activePage
      return state
    default:
      return state
  }
}

export default reducer
