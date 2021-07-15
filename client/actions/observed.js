import { getRecentObs } from '../apis/birds'

export const RECENT_OBS = 'RECENT_OBS'

export function setRecentObs (observed) {
  return {
    type: RECENT_OBS,
    observed
  }
}

export function fetchRecentObs () {
  return getRecentObs()
}
