export const SEEN_BIRDS = 'SEEN_BIRDS'
export const GET_SEEN_BIRDS = 'GET_SEEN_BIRDS'

export function setSeenBirds (bird) {
  return {
    type: SEEN_BIRDS,
    bird
  }
}

export function getSeenBirds () {
  return {
    type: GET_SEEN_BIRDS
  }
}
