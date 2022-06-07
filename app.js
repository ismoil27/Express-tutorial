const express = require("express");

const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(3000, () => console.log("Server is running on port 3000..."));

//2-express-tutorial
