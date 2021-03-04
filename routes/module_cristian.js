const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  // res.json({ message: "Welcome to Module Cristian"});
  res.render('index',{posts:"Aquí van los posts",error:"No se endontraron resultados"})
});

module.exports = router;
