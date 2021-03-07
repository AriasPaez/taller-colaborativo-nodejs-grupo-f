const express = require("express");
const router = express.Router();
const fs = require('fs');
const { title } = require("process");

const json_post = fs.readFileSync('models/posts.json' , 'utf-8');
const Post = JSON.parse(json_post);


router.get("/", (req, res) => {
  res.render('module_wilmar')
});


router.post("/", (req, res) => {
  var cont=0;
  Post.forEach(function(word) {
  console.log(word.id);
    cont=word.id;
  });
  cont++;
  console.log('tu id sera ' +cont);
  const {id,title ,date,city,Numbers_Contact,Name,Last_Name,poster,description} = req.body;
  var d = new Date();
    if (!title || !date || !city || !Numbers_Contact || !Name || !Last_Name || !poster  || !description) {

      res.status(400).send('algunos campos estan vacios');
      return;

    }


    let newPost = {

    id :cont,
    title,
    date : d,
    city,
    Numbers_Contact,
    Name,
    Last_Name,
    poster,
    description
  }

  Post.push(newPost);

   const json_Post = JSON.stringify(Post);

 

   fs.writeFileSync('models/posts.json', json_Post , 'utf-8');


  console.log(json_Post);
  console.log(req.body);
  res.render('module_wilmar');
});

module.exports = router;