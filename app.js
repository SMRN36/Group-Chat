const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

//const cors = require("cors");
//app.use(
//    cors({
//      origin: "*",
//    })
//  );

const dotenv = require("dotenv");
dotenv.config();

const sequelize = require("./Utils/database");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRouter = require("./Routes/userRoutes");
const homePageRouter = require("./Routes/homePageRoutes");
const chatRouter = require("./Routes/chatRoutes");
const groupRouter = require("./Routes/groupRoutes");

const User = require("./Models/userModel");
const Chat = require("./Models/userModel");
const Group = require("./Models/groupModel");
const UserGroup = require("./Models/userGroup");

//Relationships between Tables
User.hasMany(Chat, { onDelete: "CASCADE", hooks: true });
Chat.belongsTo(User);
Chat.belongsTo(Group);
User.hasMany(UserGroup);
Group.hasMany(Chat);
Group.hasMany(UserGroup);
UserGroup.belongsTo(User);
UserGroup.belongsTo(Group);

app.use("/", userRouter);
app.use("/user", userRouter);
app.use("/home", homePageRouter);
app.use("/chat", chatRouter);
app.use("/group", groupRouter);




// const job = require("./jobs/cron");
// job.start();

sequelize
  .sync()
  .then((result) => {
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => console.log(err));