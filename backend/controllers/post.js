const Post = require("../models/post");
const User = require("../models/user");
const { find } = require("../testdata/test_seeds/data/02-posts");

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
    }
};

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
    }
};

exports.updatePost = async(req, res) => {
    const { id } = req.params;
    const post = {
        image_url: req.body.image_url,
        caption: req.body.caption
    }
    const findPost = await Post.getPostBy(id);
    try {
        if (!id || !post.image_url) {
            res.status(404).json({message: `Please login to update your post.`})
        } else if (findPost.length === 0){
           res.status(404).json({message: `That post does not exists.`})
        } else {
            await Post.editPost(id, post);
            return res.status(201).json({message: `Your post has been updated!`})
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
            res.status(204).json({message: `Your post has been deleted.`})
        }
   } catch (err) {
       res.status(500).json({message: `An error occurred while you were deleting your post, please try again.`})
   }
};