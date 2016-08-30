var mongoose = require("./db/schema.js");
var express = require("express");
var hbs = require("hbs");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var Restaurant = mongoose.model("RestaurantModel");
var Menu = mongoose.model("MenuModel");

var app = express();

app.set("view engine", "hbs");
app.listen(4000, function(){
  console.log("good to go on 4000");
})

app.get("/restaurants", function(req, res){
  Restaurant.find({}, function(err, docs){
    res.render("restaurants-index", {
      restaurants: docs
    })
  })
})

app.get("/restaurants/:id", function(req, res){
  Restaurant.findById(req.params.id, function(err, doc){
    res.render("restaurant-show", {
      restaurant: doc
    })
  })
})
