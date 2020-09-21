
const faker = require("faker");
exports.seed = function(knex, Promise) {
  function createFakeUser() {    
    return {
      email: faker.internet.email(),
      firebase_id: faker.random.alphaNumeric(8), 
      full_name: faker.name.findName(),
      username: faker.internet.userName(),   
    };
  }
  const users = [];
  const numFakes = 20;
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

