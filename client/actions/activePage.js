export const ACTIVE_PAGE = 'ACTIVE_PAGE'

export function setActivePage (page) {
  return {
    type: ACTIVE_PAGE,
    activePage: page
  }
}
