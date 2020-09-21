const express = require("express");
const adminController = require("./../controllers/admin");
const router = express.Router();

router.get("/users", adminController.getUser);

module.exports = router;