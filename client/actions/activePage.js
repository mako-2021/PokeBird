export const ACTIVE_PAGE = 'ACTIVE_PAGE'

export function activePage (page) {
  return {
    type: ACTIVE_PAGE,
    activePage: page
  }
}
