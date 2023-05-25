const express = require("express");
const router = express.Router();
const homePageController = require("../Controllers/homePageController");
const userAuthentication = require("../Middlewares/auth");

router.get("/", homePageController.getHomePage);

module.exports = router;