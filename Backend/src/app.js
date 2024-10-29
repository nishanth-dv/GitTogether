require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");

const app = express();

connectDB()
  .then(() => {
    console.log("Connection to database established successfully!");
    app.listen(2698, () => {
      console.log("server is listening on port: 2698...");
    });
  })
  .catch((error) => {
    console.error("Attempt to connect to database unsuccessful.");
  });
