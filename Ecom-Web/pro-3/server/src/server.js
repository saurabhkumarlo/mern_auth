const app = require("./app");
const database = require("./database/database.js");

// Uncaught Type Exception

process.on("uncaughtException", (err) => {
  console.log(`Error:-${err}`);
  console.log(`Shutting down the server duw to Uncaught Type Exception`);
  process.exit(1);
});

const server = app.listen(process.env.APP_PORT, () =>
  console.log(`Server is running on port ${process.env.APP_PORT}`)
);

database()

process.on("unhandledRejection", (err) => {
  console.log(`Error:-${err}`);
  console.log(`Shutting down the server duw to Unhandled Proise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
