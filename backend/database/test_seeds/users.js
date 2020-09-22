
const data = require("./data/01-users");

exports.seed = function(knex, Promise) {
  return knex('user').then(function() {
    // Inserts seed entries
    return knex('user').insert(data);
  });
};
