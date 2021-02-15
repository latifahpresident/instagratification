const express = require("express");
const commentController = require("./../controllers/comment");
const router = express.Router();

router.post("/addcomment", commentController.addComment);

module.exports = router;