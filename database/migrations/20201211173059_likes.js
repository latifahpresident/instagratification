
exports.up = function(knex) {
  return knex.schema.createTable("likes", likes => {
      likes.increments().primary();
      likes.string("user_id").references("firebase_id").inTable("user").onUpdate("CASCADE").onDelete("CASCADE"); //the user id of the person who liked the post
      likes.integer("post_id").references("id").inTable("post").onUpdate("CASCADE").onDelete("CASCADE");
      likes.integer("likes").defaultsTo(0);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("likes");
};
