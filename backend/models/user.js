const db = require("./../dbconfig");

getUsers = () => {
    return db("user").select(
      "firebase_id", 
      "email", 
      "full_name", 
      "username", 
      "profile_url",
      )
};

addUser = (user) => {
    return db("user").insert(user)
};

module.exports = {
    getUsers,
    addUser
}