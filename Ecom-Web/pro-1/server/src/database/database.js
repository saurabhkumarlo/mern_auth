const mongoose = require("mongoose");


mongoose.set("strictQuery",false)

const database = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((res) =>
      console.log(`DB_Connected with port ${process.env.APP_PORT}`)
    );
};

module.exports = database;
