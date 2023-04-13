const app = require("./app");
const database = require("./database/database.js");

database();

//uncaught Type Exception

process.on("uncaughtException", (err) => {
  console.log(`Error:-${err.message}`);
  console.log(`Shutting down the server due to uncaught Type Exception`);
  process.exit(1);
});

const server = app.listen(process.env.APP_PORT, () =>
  console.log(`Server is running on port ${process.env.APP_PORT}`)
);

//unhandled promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error:-${err.message}`);
  console.log(`Shutting down the server due to unhandled promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
