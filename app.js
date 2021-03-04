const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const RouterCristian = require("./routes/module_cristian.js");
const RouterHans = require('./routes/module_hans');
const RouterWilmar = require('./routes/module_wilmar');

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/search_posts", RouterCristian);
app.use('/wilmar', RouterWilmar);
app.use('/hans', RouterHans);

app.get("/", (req, res) => {
  res.render('index')
});

app.get("*", (req, res) => {
  res.render('not_found')
});

app.listen(3000, (req, res) => {
  console.log("Server running at PORT:",3000);
});
