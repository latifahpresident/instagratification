const db = require("./../dbconfig");

addPost = (post) => {
    return db("post").insert(post);
};

getPost = () => {
    return db("post").innerJoin("user", "post.firebase_id ", "user.firebase_id").select("post.id", "post.firebase_id as post_firebase_id", "user.profile_url", "user.username", "post.image_url", "post.likes", "post.caption", "user.firebase_id");
};

editPost = (id, post) => {
    console.log("id from db", id)
    return db("post").where({"firebase_id": id}).update(post);
};

deletePost = (id) => {
    return db("post").where({"id": id}).delete();
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