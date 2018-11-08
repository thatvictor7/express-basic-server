
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('character').del()
    .then(function () {
      // Inserts seed entries
      return knex('character').insert([
        {id: 1, name: 'Luke Skywalker', height: 172, mass: 77},
        {id: 2, name: '3-CPO', height: 167, mass: 75}
      ]);
    });
};
