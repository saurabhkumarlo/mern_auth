const express = require("express");
const dotenv = require("dotenv");
const app = express();
const errorMiddleware = require("./middlewares/error");

// Config
dotenv.config({ path: "src/config/config.env" });

// default middleware
app.use(express.json());

// Middlewares for Error

app.use(errorMiddleware);

// product router

const products = require("./routes/productRoutes");

app.use("/api/v1", products);

module.exports = app;


