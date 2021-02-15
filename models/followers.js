const db = require("./../dbconfig");

addFollower = (follower_request) => {
    return db("followers").insert(follower_request)
};

getFollowers = (id) => {
    return db("followers")
    .innerJoin("user", "followers.follower_id", "user.firebase_id")
    .select("followers.id", "user.username", "user.profile_url", "followers.follower_id", )
    .where({"following_id": id})
};

deleteFollower = (id) => {
    return db("followers").where({"id": id}).delete();
};

module.exports = {
    addFollower,
    getFollowers,
    deleteFollower,
}