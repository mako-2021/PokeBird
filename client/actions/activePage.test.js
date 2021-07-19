import { ACTIVE_PAGE, setActivePage } from './activePage'

test('it should create an action', () => {
  const page = 'User'
  const expected = {
    type: ACTIVE_PAGE,
    activePage: page
  }
  const actual = setActivePage(page)
  expect(actual).toEqual(expected)
})
