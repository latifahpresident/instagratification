const db = require("./../dbconfig");

addComment = (comment) => {
    return db("comment").insert(comment);
};

getCommentByPostId = (post_id) => {
    return db("comment")
    .innerJoin("user", "comment.author", "user.firebase_id")
    .select(
        "comment.comment",
        "comment.createdAt",
        "user.username",
        "user.profile_url",
    )
    .where({"post_id": post_id});
};

editComment = (comment, id) => {
    return db("comment").where({"id": id}).update(comment);
};

deleteComment = (id) => {
    return db("comment").where({"id": id}).delete();
};

module.exports = {
    addComment,
    editComment,
    deleteComment,
    getCommentByPostId,
}