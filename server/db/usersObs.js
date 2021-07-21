const connection = require('./connection')

const getUserObsBySub = (userSub, db = connection) => {
  return db('usersObs')
    .join('birds', 'birds.id', 'usersObs.birds_id')
    .where('user_sub', userSub)
    .select('usersObs.*', 'birds.commonName', 'birds.image', 'birds.nzStatus')
}

const addUserObs = (observation, db = connection) => {
  const obs = {
    user_sub: observation.userSub,
    birds_id: observation.id
  }
  return db('usersObs').insert(obs)
}

const delUserObs = (id, db = connection) => {
  return db('usersObs')
    .where('id', id)
    .del()
}

module.exports = {
  getUserObsBySub,
  addUserObs,
  delUserObs
}
