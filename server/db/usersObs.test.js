const testEnv = require('./test-environment')
const { getUserObsBySub, addUserObs, delUserObs } = require('./usersObs')

let testDb = null

jest.setTimeout(30000)
beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('get logs gets all the logs', () => {
  const userSub = 'auth0|60f1064280c99800681fba9c'
  const expected = 3
  return getUserObsBySub(userSub, testDb)
    .then(obs => {
      const actual = obs.length
      return expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('add UserObs', () => {
  const userSub = 'auth0|60f1064280c99800681fba9c'
  const observation = { userSub, id: 4 }
  const expected = 4
  return addUserObs(observation, testDb)
    .then(obs => {
      return getUserObsBySub(userSub, testDb)
    })
    .then(result => {
      const actual = result.length
      return expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('del UserObs', () => {
  const userSub = 'auth0|60f1064280c99800681fba9c'
  const expected = 2
  return delUserObs(2, testDb)
    .then(obs => {
      return getUserObsBySub(userSub, testDb)
    })
    .then(result => {
      const actual = result.length
      return expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
