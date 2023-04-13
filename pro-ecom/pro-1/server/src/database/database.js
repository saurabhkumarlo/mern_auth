const mongoose = require("mongoose");

const database = () => {

  mongoose.set("strictQuery",true)

  mongoose
    .connect(process.env.DB_URL, {})
    .then((res) =>
      console.log(`DB_Connected with port ${process.env.APP_PORT}`)
    );

};

module.exports = database;
