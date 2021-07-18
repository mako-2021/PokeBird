import { getRecentObs } from '../apis/birds'

export const RECENT_OBS = 'RECENT_OBS'

export function setRecentObs (observed) {
  return {
    type: RECENT_OBS,
    observed
  }
}

// this should have a then which sends off the setRecentObs
export function fetchRecentObs () {
  return getRecentObs()
}
