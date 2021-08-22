exports.up = function (knex) {
  return knex.schema.createTable('usersObs', table => {
    table.increments('id')
    table.text('user_sub')
    table.integer('birds_id').references('birds.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('usersObs')
}
