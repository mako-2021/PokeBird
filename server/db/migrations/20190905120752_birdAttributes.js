exports.up = function (knex) {
  return knex.schema.createTable('birds', table => {
    table.increments('id')
    table.string('commonName')
    table.string('latinName')
    table.string('birdOrder')
    table.string('nzStatus')
    table.string('conservationStatus')
    table.string('length')
    table.string('weight')
    table.string('description')
    table.string('image')
    table.string('audio')
    table.string('url')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('birds')
}
