exports.up = function (knex) {
  return knex.schema.createTable('usersObs', table => {
    table.increments('id').primary()
    table.string('user_sub')
    table.interger('birds_id').references('birds.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('usersObs')
}
