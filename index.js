var express = require("express")
var mongoose = require('./db/connection');
var Restaurant = mongoose.model("Restaurant");

var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json({extended: true}));
app.listen(8000, function(){
  console.log("I'm here at 8000");
})

app.get("/", function(req, res){
    res.json("Welcome to the the Restaurant Finder");
});

//displays all restaurants

app.get("/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurant){
    res.json(restaurant);
  })
});

//shows individual restaurants by name in params

app.get("/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant) {
    res.json(restaurant);
  })
})

//creates new individual restaurant

app.post("/restaurants", function(req, res){
  console.log(req.body);
  Restaurant.create(req.body.restaurant).then(function(restaurant){
    res.json(restaurant);
  })
})
