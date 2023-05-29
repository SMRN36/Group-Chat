const express = require("express");
const router = express.Router();

const userController = require("../Controllers/userController");
const userAuthentication = require("../Middlewares/auth");

router.get("/", userController.getLoginPage);

router.post("/signUp", userController.postUserSignUp);

router.post("/login", userController.postUserLogin);

module.exports = router;