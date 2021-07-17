import { SEEN_BIRDS } from '../actions/seenBirds'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEEN_BIRDS:
      var newState = [...state, action.bird]
      return newState
    default:
      return state
  }
}

export default reducer
