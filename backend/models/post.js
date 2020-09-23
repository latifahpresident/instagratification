const db = require("./../dbconfig");

addPost = (post) => {
    return db("post").insert(post);
};

getPost = () => {
    return db("post").innerJoin("user", "post.firebase_id", "user.firebase_id")
    .select("user.profile_url", "user.username", "post.image_url", "post.likes", "post.caption", "user.firebase_id");
};

editPost = (id, post) => {
    return db("post").where({"firebase_id": id}).insert(post);
};

deletePost = (id) => {
    return db("post").where({"firebase_id": id}).delete();
};

getPostBy = (id) => {
    return db("post").where({"firebase_id": id})
};

module.exports = {
    addPost,
    getPost,
    editPost,
    deletePost,
    getPostBy,
}