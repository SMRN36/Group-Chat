const express = require("express");
const router = express.Router();
const groupController = require("../Controllers/groupController");
const Authentication = require("../Middlewares/auth");

router.post("/createGroup", Authentication, groupController.createGroup);

router.post("/addToGroup", Authentication, groupController.addToGroup);

router.get("/getGroups", Authentication, groupController.getGroups);

module.exports = router;