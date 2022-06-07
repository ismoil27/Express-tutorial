const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "jon") {
    req.user = { name: "jon", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
  next();
};

module.exports = authorize;
