const app = require("./app");
// const connectData = require("./database/database.js");

// connectData();

const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URL,(err) => {
    if(err ) console.log(`UNable to conne: ${err}`)
    else{
        console.log("mongo is conn");
    }
})

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running port ${process.env.APP_PORT}`);
});
