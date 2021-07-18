import { SEEN_BIRDS } from '../actions/seenBirds'

const initialState = ['Hieraaetus moorei']

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
