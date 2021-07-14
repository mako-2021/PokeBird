import { RECENT_OBS } from '../actions/observed'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECENT_OBS:
            const newState = [...action.observed]
            return newState
        default:
            return state
    }
}

export default reducer
