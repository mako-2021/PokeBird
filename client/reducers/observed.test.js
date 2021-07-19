import { setRecentObs } from '../actions/observed'
import reducer from '../reducers/observed'

test('State changes when given new observations', () => {
  const initialState = []
  const observed = [{ speciesCode: 'houspa', comName: 'House Sparrow' }, { speciesCode: 'ausmag2', comName: 'Australian Magpie' }]
  const action = setRecentObs(observed)
  const expected = [{ speciesCode: 'houspa', comName: 'House Sparrow' }, { speciesCode: 'ausmag2', comName: 'Australian Magpie' }]
  const changedState = reducer(initialState, action)
  expect(changedState).toEqual(expected)
})
