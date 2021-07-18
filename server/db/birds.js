const connection = require('./connection')

// a test, a test, my kingdom for a test
function getBirds (db = connection) {
  return db('birdAttributes').select()
}

module.exports = {
  getBirds
}
