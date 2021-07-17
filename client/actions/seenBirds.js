export const SEEN_BIRDS = 'SEEN_BIRDS'

export function setSeenBirds (bird) {
  return {
    type: SEEN_BIRDS,
    bird
  }
}
