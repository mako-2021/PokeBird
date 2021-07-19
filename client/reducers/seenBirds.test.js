import { setSeenBirds } from '../actions/seenBirds'
import reducer from '../reducers/seenBirds'

test('State changes when given new observations', () => {
  const initialState = []
  const bird = [{ speciesCode: 'houspa', comName: 'House Sparrow' }]
  const action = setSeenBirds(bird)
  const expected = [{ speciesCode: 'houspa', comName: 'House Sparrow' }]
  const changedState = reducer(initialState, action)
  expect(changedState).toEqual(expected)
})
