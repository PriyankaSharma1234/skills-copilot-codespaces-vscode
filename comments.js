// Create web server

// Require the modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Create express app
const app = express();

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set static path
app.use(express.static(path.join(__dirname, "public")));

// Set the route
app.post("/comments", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});

// Listen to the port
app.listen(3000, () => {
  console.log("Server started on port 3000");
});