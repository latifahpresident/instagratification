const Post = require("../models/post");

exports.addPost = async(req, res) => {
    try {
        const { image_url, firebase_id } = req.body
        if (!image_url || !firebase_id) {
           return  res.status(404).json({message: `Please add an image.`})
        } else {
            await Post.addPost(req.body);
            return res.status(201).json({message: `Posted!`})
        }
    } catch (err) {
        res.status(500).json({message: `An error occured while posting, please try again.`})
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