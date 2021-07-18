const connection = require('./connection')

const getUserObsBySub = (userSub, db = connection) => {
  console.log('userSub db', userSub)
  return db('usersObs')
    .where('user_sub', userSub)
    .select()
}

module.exports = {
  getUserObsBySub
}
