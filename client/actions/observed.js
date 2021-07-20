import { getRecentObs } from '../apis/birds'
import store from '../store'

export const RECENT_OBS = 'RECENT_OBS'

export function setRecentObs (observed) {
  return {
    type: RECENT_OBS,
    observed
  }
}

export function fetchRecentObs () {
  return getRecentObs()
    .then(observations => {
      store.dispatch(setRecentObs(observations))
      return null
    })
}
