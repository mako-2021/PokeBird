import { getRecentObs, getBirds } from './birds'

import nock from 'nock'

describe('getRecentObs', () => {
  const testData = [{ speciesCode: 'houspa', comName: 'House Sparrow' }, { speciesCode: 'ausmag2', comName: 'Australian Magpie' }]
  const scope = nock('http://localhost')
    .get('/api/v1/ebirds/obs/recent/')
    .reply(200, testData)

  test('receiving obsData from API', () => {
    expect.assertions(2)
    return getRecentObs()
      .then(newData => {
        expect(newData).toEqual(testData)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe('getBirds', () => {
  const testData = [{ speciesCode: 'houspa', comName: 'House Sparrow' }, { speciesCode: 'ausmag2', comName: 'Australian Magpie' }]
  const scope = nock('http://localhost')
    .get('/api/v1/birds')
    .reply(200, testData)

  test('getBirds', () => {
    expect.assertions(2)
    return getBirds()
      .then(newData => {
        expect(newData).toEqual(testData)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})
