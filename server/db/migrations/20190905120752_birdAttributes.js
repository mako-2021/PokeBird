exports.up = function (knex) {
  return knex.schema.createTable('birds', table => {
    table.increments('id')
    table.text('commonName')
    table.text('latinName')
    table.text('birdOrder')
    table.text('nzStatus')
    table.text('conservationStatus')
    table.text('length')
    table.text('weight')
    table.text('description')
    table.text('image')
    table.text('audio')
    table.text('url')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('birds')
}
