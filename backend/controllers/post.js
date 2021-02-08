const Post = require("../models/post");
const User = require("../models/user");
const Comment = require("../models/comment");

exports.addPost = async(req, res) => {
    try {
        const { image_url, firebase_id } = req.body;
        const user = await User.getById(firebase_id);
        console.log("user from new post", user.length)

        if (!image_url || !firebase_id) {
           res.status(404).json({message: `Please add an image.`})
        }  else {
            await Post.addPost(req.body);
            res.status(201).json({message: `Posted!`})
        }
    } catch (err) {
        res.status(500).json({message: `An error occurred while posting, please try again.`})
        console.log("error", err)
    }
};


//admin controller
exports.getPosts = async(req, res) => {
    try {
        const posts = await Post.getPost();
        if (posts.length === 0) {
            return res.status(404).json({message: `No posts found, please try again.`})
        } else {
            return res.status(200).json({posts: posts})
        }
    } catch(err) {
        res.status(500).json({message: "There was a problem getting your posts, please try again."})
        console.log("ERROR FROM UPDATE LIKE", err)

    }
};

exports.getPostsById = async(req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(404).json({message: `There was an error getting that post, please try again.`})
        } else {
            const posts = await Post.getPostBy(id);
            const comment = await Comment.getCommentByPostId(id);
console.log("post", posts)
            return res.status(200).json({posts: posts, comment: comment})
        }
    } catch(err) {
        res.status(500).json({message: "There was a problem getting your posts, please try again."})
        console.log("error from post by id", err)
    }
};

exports.updatePost = async(req, res) => {
    const { id } = req.params;
    const post = {
        image_url: req.body.image_url,
        caption: req.body.caption
    }
    const findPost = await Post.getPostBy(id);
    console.log("updated post", req.body.likes)
    try {
        if (!id || !req.body.image_url) {
            res.status(404).json({message: `Please login to update your post.`})
        } else if (findPost.length === 0){
           res.status(404).json({message: `That post does not exists.`})
        } else {
            const updatePost = await Post.editPost(id, req.body);
            const getUpdatedPost = await Post.getPostBy(updatePost[0]);
            console.log("updatePost from backend", getUpdatedPost)
            return res.status(201).json({message: `Your post has been updated!`, updates: getUpdatedPost[0] })
        }
    } catch (err) {
        res.status(500).json({message: `An error occurred while updating your post: ${err.message}`})
        console.log(`error from updating post`, err)
    }
};

exports.deletePost = async(req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            res.status(404).json({message: `This post does not exists please try again.`})
        } else {
            await Post.deletePost(id)
            res.status(201).json({message: `Your post has been deleted.`})
        }
   } catch (err) {
       res.status(500).json({message: `An error occurred while you were deleting your post, please try again.`})
   }
};

exports.updatePostLike = async(req, res) => {
    const { id } = req.params;
    const post = {
        like: req.body.like,
    }
    const findPost = await Post.getPostBy(id);
    try {
        if (!id) {
            res.status(404).json({message: `There was error, please try again.`})
        } else if (findPost.length === 0){
           res.status(404).json({message: `That post does not exists.`})
        } else {
            await Post.editPost(id, post);
            return res.status(201).json({message: `Liked!`})
        }
    } catch (err) {
        res.status(500).json({message: `An error occurred while updating your post: ${err.message}`})
        console.log(`error from updating post`, err)
    }
};

//TODO: GET POST FROM ONLY THE USERS FOLLOWERS
