const express = require("express");
const router = express.Router();

const userController = require("../Controllers/userController");


router.get("/", userController.getLoginPage);

router.post("/signUp", userController.postUserSignUp);

router.post("/login", userController.postUserLogin);

module.exports = router;