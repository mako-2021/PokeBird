import { getRecentObs, getBirds, getUserObsBySub, addUserObs, delUserObs } from './birds'

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

  test('testing to see if getBirds is returning correct data', () => {
    expect.assertions(2)
    return getBirds()
      .then(newData => {
        expect(newData).toEqual(testData)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe('getUserObsBySub', () => {
  const sub = 'auth0|60f1064280c99800681fba9c'
  const testData = [{ id: 1, user_sub: 'auth0|60f1064280c99800681fba9c', birds_id: 1, comName: 'bird1' }]
  const scope = nock('http://localhost:80')
    .post('/api/v1/userObs', { userSub: sub })
    .reply(201, testData)

  test('getUserObsBySub is returning correct join data', () => {
    expect.assertions(2)
    return getUserObsBySub(sub)
      .then(newData => {
        expect(newData).toEqual(testData)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe('addUserObs', () => {
  const userSub = 'auth0|60f1064280c99800681fba9c'
  const id = 1
  const observation = { userSub, id }
  const scope = nock('http://localhost:80')
    .post('/api/v1/userObs/add', { observation })
    .reply(201, [1])

  test('addUserObs is adding an entry correctly', () => {
    expect.assertions(2)
    return addUserObs(observation)
      .then(result => {
        expect(result).toEqual([1])
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe('delUserObs', () => {
  const scope = nock('http://localhost:80')
    .post('/api/v1/userObs/del', { id: 1 })
    .reply(200, [1])

  test('Deleting observation entry', () => {
    expect.assertions(2)
    return delUserObs(1)
      .then(result => {
        expect(result).toEqual([1])
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})
