const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('module_wilmar')
});

module.exports = router;