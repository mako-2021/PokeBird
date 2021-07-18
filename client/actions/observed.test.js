import { RECENT_OBS, setRecentObs } from './observed'

test('it should create an action', () => {
  const observed = [
    { speciesCode: 'easros1', comName: 'Eastern Rosella', lat: 37, lng: 175, locName: 'Auckland' }
  ]
  const expected = {
    type: RECENT_OBS,
    observed
  }
  const actual = setRecentObs(observed)
  expect(actual).toEqual(expected)
})
