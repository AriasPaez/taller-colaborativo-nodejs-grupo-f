const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  // res.json({ message: "Welcome to Module Cristian" });
  res.render('index')
});

module.exports = router;
