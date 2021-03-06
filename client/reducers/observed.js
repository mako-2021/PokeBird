import { RECENT_OBS } from '../actions/observed'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECENT_OBS:
      return action.observed
    default:
      return state
  }
}

export default reducer

//{ speciesCode: 'easros1', comName: 'Eastern Rosella', lat: -37, lng: 175, locName: 'Auckland' }