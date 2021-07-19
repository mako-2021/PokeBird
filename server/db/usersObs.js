const connection = require('./connection')

const getUserObsBySub = (userSub, db = connection) => {
  return db('usersObs')
    .where('user_sub', userSub)
    .select()
}

const addUserObs = (observation, db = connection) => {
  const obs = {
    user_sub: observation.userSub,
    latinName: observation.latinName
  }
  return db('usersObs').insert(obs)
}

module.exports = {
  getUserObsBySub,
  addUserObs
}
