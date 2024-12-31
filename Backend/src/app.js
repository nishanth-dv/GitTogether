require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Nishanth",
    lastName: "D V",
    emailId: "nishanth@gmail.com",
    password: "Fire",
    age: 26,
    gender: "Male",
  });

  try {
    await user.save();
    res.send("User created successfully");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error saving the user.");
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.find({ emailId: userEmail });
    if (user.length === 0) res.send("No records found.");

    res.send(user);
  } catch (error) {
    res.status(404).send("Something went wrong!");
  }
});

app.get("/allUsers", async (req, res) => {
  try {
    const allUsers = await User.find({});
    if (allUsers.length === 0) res.send("No records found.");

    res.send(allUsers);
  } catch (error) {
    res.status(404).send("Something went wrong!");
  }
});

connectDB()
  .then(() => {
    console.log("Connection to database established successfully!");
    app.listen(process.env.PORT_NUMBER, () => {
      console.log("server is listening on port: 2698...");
    });
  })
  .catch((error) => {
    console.error("Attempt to connect to database unsuccessful.");
  });
