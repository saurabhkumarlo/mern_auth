const mongoose = require("mongoose");

const database = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((res) =>
      console.log(`DB_Connected with port ${process.env.APP_PORT}`)
    )
    .catch((err) => console.log("Err", err));
};

mongoose.set("strictQuery", false);

module.exports = database;
