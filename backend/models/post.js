const db = require("./../dbconfig");

addPost = (post) => {
    return db("post").insert(post);
};

//admin use only
getPost = () => {
    return db("post")
    .innerJoin("user", "post.firebase_id ", "user.firebase_id")
    .select(
        "post.id", 
        "post.firebase_id as post_firebase_id", 
        "user.profile_url", 
        "user.username", 
        "post.image_url",  
        "post.caption", 
        "user.firebase_id",
        "post.likes",
        "post.created_at",
        );
};

editPost = (id, post) => {
    return db("post").where({"id": id}).update(post).returning('id');
};

deletePost = (id) => {
    return db("post").where({"id": id}).delete();
};

getPostBy = (id) => { //get post by post.firebase_id
    console.log("id from  db", id)
    return db("post")
    // .innerJoin("comment", "post.id", "comment.post_id")
    // .innerJoin("user", "comment.poster_id", "user.firebase_id")
    // .select(
    //     "post.id", 
    //     "post.firebase_id as post_firebase_id", 
    //     // "user.profile_url", 
    //     // "user.username", 
    //     "post.image_url",  
    //     "post.caption", 
    //     // "user.firebase_id"
    //     )
    .where({"post.id": id});
};

getUserPost = (id) => {
    return db("post")
   
    .where({"post.firebase_id": id})
}

getPostComments = (id) => {
    return db("comment").where({"comment.poster_id": id})
};

getPostLikes = (id) => {
    return db("likes").where({"likes.post_id": id})
}

updatePostLikes = (id, like) => {
    return db("likes").where({"post_id": id}).update(like);

}
module.exports = {
    addPost,
    getPost,
    editPost,
    deletePost,
    getPostBy,
    getUserPost,
    getPostComments,
    getPostLikes,
}