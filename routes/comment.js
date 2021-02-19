const express = require("express");
const commentController = require("./../controllers/comment");
const router = express.Router();
const isAuthenticated = require('./../middleware/authentication');

router.post("/addcomment", isAuthenticated.auth, commentController.addComment);

module.exports = router;