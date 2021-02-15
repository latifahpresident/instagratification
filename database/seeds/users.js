
const faker = require("faker");
exports.seed = function(knex, Promise) {
  function createFakeUser(i) {    
    return {
      email: faker.internet.email(),
      firebase_id: faker.random.alphaNumeric(8), 
      full_name: faker.name.firstName() + " " + faker.name.lastName(),     
      username: faker.internet.userName(),
      profile_url: faker.internet.avatar(),
    };
  }
  const users = [];
  const numFakes = 50;
  for (let i = 0; i < numFakes; i++) {
    users.push(createFakeUser(i));
  } 
  return (
    knex("user")     
      .then(function() {
        return knex("user").insert(users);
      })
  );
};

