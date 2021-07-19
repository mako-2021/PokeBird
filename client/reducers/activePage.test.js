import { setActivePage } from '../actions/activePage'
import reducer from '../reducers/activePage'

test('State changes when given new object', () => {
  const initialState = 'HomePage'
  const action = setActivePage('User')
  const changedState = reducer(initialState, action)
  expect(changedState).toBe('User')
})
