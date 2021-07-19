import request from 'superagent'

const rootUrl = '/api/v1'

export function getRecentObs () {
  return request
    .get(rootUrl + '/ebirds/obs/recent/')
    .then(res => res.body)
    .catch(e => console.log(e.message))
}

export function getBirds () {
  return request
    .get(rootUrl + '/birds')
    .then(res => res.body)
    .catch(e => console.log(e.message))
}

export function getUserObsBySub (userSub) {
  return request
    .post(rootUrl + '/userObs')
    .send({ userSub })
    .then(res => res.body)
    .catch(e => console.log(e.message))
}

export function addUserObs (observation) {
  return request
    .post(rootUrl + '/userObs/add')
    .send({ observation })
    .then(res => res.body)
    .catch(e => console.log(e.message))
}

export function delUserObs (id) {
  return request
    .post(rootUrl + '/userObs/del')
    .send({ id })
    .then(res => res.body)
    .catch(e => console.log(e.message))
}
