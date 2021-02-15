const data = require("./data/02-posts");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post').then(function() {
    // Inserts seed entries
    return knex('post').insert(data);
  });
};
