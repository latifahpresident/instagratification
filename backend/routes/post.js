const express = require("express");
const postController = require("./../controllers/post");
const router = express.Router();

//POST => /posts/new-post => ADD A NEW POST
router.post("/new-post", postController.addPost);
//GET => /posts/get-post => GET ALL POSTS
router.get("/posts", postController.getPosts);
//DELETE => /post/delete/id
router.delete("/delete/:id", postController.deletePost);
//PUT => /post/edit/id
router.put("/update/:id", postController.updatePost);

module.exports = router;