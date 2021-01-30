const express = require("express");
const postController = require("./../controllers/post");
const router = express.Router();

//POST => /posts/new-post => ADD A NEW POST
router.post("/new-post", postController.addPost);
//GET => /posts/get-post => GET ALL POSTS
router.get("/posts", postController.getPosts);
//GET => /posts/:id  => GET  POSTS FROM ID
router.get("/posts/:id", postController.getPostsById);
//DELETE => /posts/delete/id
router.delete("/delete/:id", postController.deletePost);
//PUT => /posts/edit/id
router.put("/update/:id", postController.updatePost);

module.exports = router;