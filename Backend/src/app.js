const express = require("express");

const app = express();

app.use("/intro", (req, res) => {
  res.send("Hello again!");
});

app.use("/test", (req, res) => {
  res.send("It works!");
});

app.use("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(2698, () => {
  console.log("server is listening on Port: 2698");
});
