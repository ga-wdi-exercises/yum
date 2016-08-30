var express = require("express")
var mongoose = require('./db/connection');
var Restaurant = mongoose.model("Restaurant");

var bodyParser = require("body-parser");
var app = express();

app.listen(8000, function(){
  console.log("I'm here at 8000");
})

app.get("/", function(req, res){
    res.json("Welcome to the the Restaurant Finder");
});

app.get("/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurant){
    res.json(restaurant);
  })
});

app.get("/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant) {
    res.json(restaurant);
  })
})
