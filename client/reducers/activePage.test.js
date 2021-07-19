import { setActivePage } from '../actions/activePage'
import reducer from '../reducers/activePage'

test('State changes when changing pages', () => {
  const initialState = 'HomePage'
  const action = setActivePage('User')
  const changedState = reducer(initialState, action)
  expect(changedState).toBe('User')
})
