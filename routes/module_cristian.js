const express = require("express");
const router = express.Router();

const filter = [
  { clave: "all", valor: "Sin filtro / Todos" },
  { clave: "city", valor: "Ciudad" },
];

router.get("/", (req, res, next) => {
  res.render("module_cristian", {
    posts: "",
    filter,
    error: "No se endontraron resultados",
  });
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  const { filterBy } = req.body;
  if (filterBy == "all") {
    console.log("all");
  }
  // res.json({ message: "Welcome to Module Cristian"});
  res.render("module_cristian", {
    posts: "",
    filter,
    error: "No se endontraron resultados",
  });
});
module.exports = router;
