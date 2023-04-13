const mongoose = require("mongoose");


mongoose.set("strictQuery" ,false)

const connectData = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((res) =>
      console.log(`Server is running on port ${process.env.APP_PORT}`)
    )
    .catch((err) => console.log(`Err:- ${err}`));
};

module.exports = connectData;
