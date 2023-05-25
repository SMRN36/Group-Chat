const path = require("path");
const User = require("../Models/userModel");
const sequelize = require("../Utils/database");

exports.getHomePage = async (req, res, next) => {
  try {
    res.sendFile(
      path.join(__dirname, "../", "public", "views", "home.html")
    );
  } catch {
    (err) => console.log(err);
  }
};