
exports.up = function(knex) {
  return knex.schema.createTable("comment", comment => {
      comment.increments().primary();
      comment.integer("post_id").references("id").inTable("post").onUpdate("CASCADE").onDelete("CASCADE");
      comment.string("author").references("firebase_id").inTable("user").onUpdate("CASCADE").onDelete("CASCADE");
      comment.string("comment", 300);
      comment.timestamp('createdAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("comment");
};
