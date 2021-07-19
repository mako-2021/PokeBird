import { SEEN_BIRDS, GET_SEEN_BIRDS } from '../actions/seenBirds'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEEN_BIRDS:
      return action.bird
    case GET_SEEN_BIRDS:
      return state
    default:
      return state
  }
}

export default reducer
