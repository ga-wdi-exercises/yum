//Dependencies
var express = require("express");
var hbs     = require("express-handlebars");
var parser = require("body-parser");
var mongoose = require('mongoose');

//Initializing an Express app
var app     = express();

//Schema and Models
var Schema = require("./db/schema.js");

var Menuitem = mongoose.model('MenuItem');
var Restaurant= mongoose.model('Restaurant');

app.set("port", process.env.PORT || 3001);
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));



app.use(express.static(__dirname + '/public'))
app.use("/assets", express.static("public"));

// app.get("/api/restaurants", function(req, res){
  app.get("/restaurants", function(req, res){
 Restaurant.find({}).then(function(restaurants){
   res.json(restaurants);
 });
});

//configure the parser to support html forms
app.use(parser.json({extended: true}))

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});

//Routes
app.get("/", function(req, res){
  Restaurant.find({}).then( (restaurants) => {
    console.log(restaurants)
    res.render("index", {
      restaurants: restaurants
    });
  })
});

app.post("/", function(req, res){
    Restaurant.create(req.body.restaurant).then( (restaurant) => {
      res.redirect("/" + restaurant.name)
    })
});

app.get("/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then( (restaurant) => {
    console.log(restaurant)
    res.render("show", {
      restaurant: restaurant
    });
  })
});

app.post("/:name", function(req, res){
    Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then( (restaurant) => {
      res.redirect("/" + restaurant.name)
    })
});

app.post("/:name/delete", function(req, res){
    Restaurant.findOneAndRemove({name: req.params.name}).then( () => {
      res.redirect("/")
    })
});
