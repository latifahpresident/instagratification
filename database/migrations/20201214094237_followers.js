
exports.up = function(knex) {
  return knex.schema.createTable("followers", followers => {
      followers.increments().primary();
      followers.string("follower_id").references("firebase_id").inTable("user").onUpdate("CASCADE").onDelete("CASCADE");//this is the firebase_id of the follower
      followers.string("following_id").references("firebase_id").inTable("user").onUpdate("CASCADE").onDelete("CASCADE");//this is the firebase_id of the person the user is following

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("followers");
};
