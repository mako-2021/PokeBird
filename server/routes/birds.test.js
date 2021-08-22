const request = require('supertest')
const server = require('../server')
const db = require('../db/birds')

const { mockGetBirds } = require('../testFixtures/mockGetBirds')

const baseURL = '/api/v1/birds'

jest.mock('../db/birds', () => {
  return {
    getBirds: jest.fn()
  }
})

describe('GET /api/v1/birds', () => {
  it('getBirds test', () => {
    db.getBirds.mockImplementation(() => Promise.resolve(mockGetBirds))

    return request(server)
      .get(baseURL)
      .expect(200)
      .then(res => {
        expect(typeof res.body).toEqual('object')
        expect(res.body).toEqual(mockGetBirds)
        return null
      })
  })
})
