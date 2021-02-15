
exports.up = function(knex, Promise) {
    return knex.schema.createTable("post", post => {
        post.increments().primary();
        post.string("firebase_id").references("firebase_id").inTable("user").onUpdate("CASCADE").onDelete("CASCADE");
        post.string("image_url").notNullable();
        post.string("caption");
        post.timestamp('created_at').defaultTo(knex.fn.now());
        post.integer("likes").defaultsTo(0);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("post")
  }
