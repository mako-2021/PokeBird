exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('usersObs').del()
    .then(function () {
      // Inserts seed entries
      return knex('usersObs').insert([
        { id: 1, user_sub: 'auth0|60f1064280c99800681fba9c', latinName: 'Apteryx australis' },
        { id: 2, user_sub: 'auth0|60f1064280c99800681fba9c', latinName: 'Apteryx rowi' },
        { id: 3, user_sub: 'auth0|60f1064280c99800681fba9c', latinName: 'Apteryx owenii' }
      ])
    })
}
