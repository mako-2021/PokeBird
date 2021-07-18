import { RECENT_OBS } from '../actions/observed'

const initialState = [{ speciesCode: 'easros1', comName: 'Eastern Rosella', lat: -37, lng: 175, locName: 'Auckland' }]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECENT_OBS:
      // const newState = [...action.observed]
      const newState = [...state, action.observed]
      return newState
    default:
      return state
  }
}

export default reducer
