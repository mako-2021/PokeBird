exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('usersObs').del()
    .then(function () {
      // Inserts seed entries
      return knex('usersObs').insert([
        { id: 1, user_sub: 'auth0|60f1064280c99800681fba9c', birds_id: 1 },
        { id: 2, user_sub: 'auth0|60f1064280c99800681fba9c', birds_id: 2 },
        { id: 3, user_sub: 'auth0|60f1064280c99800681fba9c', birds_id: 3 }
      ])
    })
}
