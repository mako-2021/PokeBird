const connection = require('./connection')

function getBirds (db = connection) {
  return db('birdAttributes').select()
}

module.exports = {
  getBirds
}
