const express = require("express");
const userController = require("./../controllers/useraccount");
const router = express.Router();
const isAuthenticated = require("./../middleware/authentication")
//TODO: REORGANIZE HOW ROUTES ARE SETUP MAY NEED TO ADD REGISTRATION ROUTE TO THIS FOLDER
//GET => /user/profile/:id => GET ALL USER ACCOUNT
router.get("/profile/:id",  userController.getById);

//DELETE => /user/delete/id => DELETE USER ACCOUNT
router.delete("/delete/:id", userController.deleteUser);

//PUT => user/update/:id => UPDATE THE USERS ACCOUNT
router.put("update/:id", userController.editUser);

//POST => user/follow => FOLLOW A USER
router.post("/follow", userController.addFollower);

//DELETE => user/unfollow => UNFOLLOW A USER
router.delete("/unfollow/:id", userController.unfollow);

module.exports = router;