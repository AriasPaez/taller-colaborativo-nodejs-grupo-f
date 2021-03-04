const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('module_hans')
});

module.exports = router;