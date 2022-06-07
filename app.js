const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");
// req => middleware => res

// 1. user vs route
// 2. options - our own / express / third party

// app.use([logger, authorize ]);

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(3000, () => console.log("Server is running on port 3000..."));

//2-express-tutorial
