const connection = require('./connection')

function getBirds (db = connection) {
  return db('birds').select()
}

module.exports = {
  getBirds
}
