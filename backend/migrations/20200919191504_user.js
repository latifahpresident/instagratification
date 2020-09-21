
exports.up = function(knex, Promise) {
    return knex.schema.createTable("user", user => {
        user.increments().primary();
        user.string("email").notNullable().unique();
        user.string("firebase_id").notNullable().unique();
        user.string("full_name").notNullable();
        user.string("profile_url");
        user.string("username").notNullable().unique();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("user")
  };
