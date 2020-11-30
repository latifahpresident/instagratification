const express = require("express");
const adminController = require("./../controllers/admin");
const router = express.Router();

//GET => /admin/users => GET ALL USERS
router.get("/users", adminController.getUser);

//DELETE => /admin/delete/id => DELETE USER
router.delete("/delete/:id", adminController.deleteUser);

module.exports = router;