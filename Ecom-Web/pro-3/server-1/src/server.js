const app = require("./app");
const database = require("./database/database");

// Uncaught Type Exception

process.on("uncaughtException", (err) => {
  console.log(`Error:- ${err}`);
  console.log(`Shutting down the server due to Uncaught Type Exception `);
  process.exit(1);
});

// database
database();

const server = app.listen(process.env.APP_PORT, () =>
  console.log(`Server is running on port ${process.env.APP_PORT}`)
);

// Unhandled  Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error:- ${err}`);
  console.log("Shutting down the server due to Unhandled  Promise Rejection ");
  server.close(() => {
    process.exit(1);
  });
});
