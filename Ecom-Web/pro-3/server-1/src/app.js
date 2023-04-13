const express = require("express");
const dotenv = require("dotenv");
const app = express();

// Default Middleware

app.use(express.json());

// Config
dotenv.config({ path: "src/config/config.env" });

// product routes

const product = require("./routes/routes");
app.use("/api/v1", product);

module.exports = app;
