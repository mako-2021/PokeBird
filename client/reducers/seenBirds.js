import { SEEN_BIRDS } from '../actions/seenBirds'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEEN_BIRDS:
      return action.bird
    default:
      return state
  }
}

export default reducer
