const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const app = express();

// config
dotenv.config({ path: "src/config/config.env" });

// default middleware
app.use(express.json());

const chatapp = require("./routes/chatroutes");
app.use("/api/v1", chatapp);

module.exports = app;
