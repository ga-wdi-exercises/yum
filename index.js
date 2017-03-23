const mongoose  = require('./db/connection.js');
const express   = require('express');
const parser    = require('body-parser');
const hbs       = require('express-handlebars');

//schema
const Item = require('./db/models.js').Item;
const Restaurant = require('./db/models.js').Restaurant;

const app = express();

app.set("port", process.env.PORT || 3001)
app.set("view engine", "hbs")
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}))

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
  Restaurant.find({}).then((restaurants) => {
      res.render("index", {restaurants});
  })
})

app.get("/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.render("index", {
      restaurants
    })
  })
})

app.post("/", function(req, res){
  Restaurant.create(req.body.restaurant).then((err, restaurant) => {
    res.redirect("/")
  })
})

app.get("/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    res.render("show", {
      restaurant
    })
  })
})

app.listen(app.get("port"), () => {
  console.log("app listening on port 3001");
});
