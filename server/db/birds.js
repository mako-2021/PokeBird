const connection = require('./connection')

function getBirds (db = connection) {
  return db('birds').select()
}

function getBirdImg (latName, db = connection) {
  return db('birds')
    .where('latinName', latName)
    .first()
}

module.exports = {
  getBirds,
  getBirdImg
}
