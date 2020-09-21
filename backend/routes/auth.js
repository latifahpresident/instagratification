const express = require("express");
const { check }  = require("express-validator");
const authcController = require("./../controllers/auth");
const router = express.Router();

// router.post("/signup", check("email").isEmail().withMessage("Please enter a valid email."), authcController.postSignUp);
router.post("/signup", check("email").isEmail().withMessage("Please enter a valid email."), authcController.postSignUp);

module.exports = router;