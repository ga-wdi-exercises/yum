var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var restaurantsController = require('./controllers/restaurantsController.js')
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;
var express = require('express');
var bodyParser = require("body-parser");
var app = express()

app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))

app.use( bodyParser.json() )
app.use (bodyParser.urlencoded({extended: true})

app.get("/restaurants", function(req, res) {
  Restaurant.find({}).then(function(restaurants){
    res.json(restaurants);
  })
})

app.post("/restaurants", function(req, res){
  Restaurant.create(req.body.restaurant).then(function(restaurant){
    res.json(restaurants);
  })
})

app.put("/restaurants/:name", function(req, res){
  Restaurant.findOneandUpdate({name: req.params.name}, req.body,
  {new: true}).then(function(restaurant){
    res.json(restaurant);
  })
})

app.delete("/restaurants/:name", function(req, res){
  Restaurant.findOneandRemove({name: req.params.name}).then(function(){
    res.json({success: true})
  })
})
app.get("/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}, function(err, restaurant){
    console.log(restaurant);
  });
})


app.listen(4000, () => {
  console.log("app connected")
})


//create a restaurant mongoose

Restaurant.create({ name: "Shanghai Heights", address: {street:"123 Something Lane Someplace VA", zipcode: 12345}, yelpUrl:"www.shanghailegit.com"}, (err, restaurant) => {
  if (err){
    console.log(err);
  } else {
    console.log(restaurant);
  }
});
