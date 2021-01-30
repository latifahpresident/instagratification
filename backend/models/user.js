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

getById = (id) => {
    return db("user")
    // .innerJoin("post", "user.firebase_id", "post.firebase_id")
    .select("user.firebase_id", "email", "full_name", "username", "profile_url").where({"user.firebase_id": id})
}
addUser = (user) => {
    return db("user").insert(user)
};

deleteUser = (id) => {
    return db("user").where({"firebase_id": id}).delete();
};

editUser = (id, user) => {
    return db("user").where({"firebase_id": id}).update(user);
};

module.exports = {
    getUsers,
    addUser,
    deleteUser,
    editUser,
    getById
};