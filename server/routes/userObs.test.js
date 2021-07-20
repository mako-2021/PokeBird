const request = require('supertest')
const server = require('../server')
const db = require('../db/usersObs')

const { mockUserObs } = require('../testFixtures/mockUserObs')

const baseURL = '/api/v1/userObs'

jest.mock('../db/usersObs', () => {
  return {
    getUserObsBySub: jest.fn(),
    addUserObs: jest.fn()
  }
})

describe('GET /api/v1/userObs', () => {
  it('getUserObsBySub test', () => {
    db.getUserObsBySub.mockImplementation(() => Promise.resolve(mockUserObs))
    const userSub = 'auth0|60f1064280c99800681fba9c'
    return request(server)
      .post(baseURL)
      .send({ userSub })
      .expect(200)
      .then(res => {
        expect(typeof res.body).toEqual('object')
        expect(res.body).toEqual(mockUserObs)
        return null
      })
  })
})

describe('GET /api/v1/userObs/add', () => {
  it('addUserObs test', () => {
    db.addUserObs.mockImplementation(() => Promise.resolve([1]))
    const userSub = 'auth0|60f1064280c99800681fba9c'
    const observation = { userSub, id: 4 }

    return request(server)
      .post(baseURL + '/add')
      .send({ observation })
      .expect(200)
      .then(res => {
        expect(typeof res.body).toEqual('object')
        expect(res.body).toEqual([1])
        return null
      })
  })
})
