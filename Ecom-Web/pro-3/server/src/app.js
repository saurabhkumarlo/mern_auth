const express = require("express");
const dotenv = require("dotenv");

const app = express();

// Dotenv

dotenv.config({ path: "src/config/config.env" });

// middlewares

app.use(express.json());

// router

const user = require("./routes/userRoutes")
app.use(user)
module.exports = app;
