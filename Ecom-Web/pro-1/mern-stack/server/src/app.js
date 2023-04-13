const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

// Config
dotenv.config({ path: "src/config/config.env" });

// Default Middlewaes

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// product routes import
const product = require("./routes/productRoutes");

app.use("/api/v1", product);

// user routes import
const user = require("./routes/userRoutes");
app.use("/api/v1", user);

// order routes import

const order = require("./routes/orderRoutes");
app.use("/api/v1", order);

// middlewares for error

const errorHandler = require("./middlewares/error");
app.use(errorHandler);

module.exports = app;


//   ​☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸