const ErrorHandler = require("../utils/errorHandlers");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  (err.message = err.message || "Internal Server Error")

// Wrong Mongodb Id Error

if(  err.name === "CastError"){
  const message = `Resources not found. Invalied: ${err.path}`;
  err = new ErrorHandler(message,404)
}

    res.status(err.statusCode).json({
      success: false,
      error: err.stack,
    });
};
