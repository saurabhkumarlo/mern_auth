const express = require("express");
const dotenv = require("dotenv");
const app = express();

// config
dotenv.config({ path: "src/config/config.env" });

// Default Middlewares
app.use(express.json());

module.exports = app;
