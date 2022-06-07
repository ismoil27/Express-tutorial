const express = require("express");
const { readSync } = require("fs");
const path = require("path");
const app = express();

// setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// adding to static assets
// SSR
// });

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(3000, () => console.log("server is running on port 3000"));
