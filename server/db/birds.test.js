const testEnv = require('./test-environment')
const { getBirds } = require('./birds')

let testDb = null

jest.setTimeout(30000)
beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('get logs gets all the logs', () => {
  const expected = 4
  return getBirds(testDb)
    .then(birds => {
      const actual = birds.length
      return expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
