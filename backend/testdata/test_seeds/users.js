
const data = require("./data/01-users");
// const data = require('./data/usersData');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').then(function() {
    // Inserts seed entries
    return knex('user').insert(data);
  });
};
