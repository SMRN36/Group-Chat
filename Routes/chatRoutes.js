const express = require("express");
const router = express.Router();
const chatController = require("../Controllers/chatController");
const userAuthentication = require("../Middlewares/auth");

router.post("/sendMessage", userAuthentication, chatController.sendMessage);

module.exports = router;