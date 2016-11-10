var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var express = require("express");
var app = express();


var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

app.get("/", function(req, res){
  res.render("Yum");
})

app.get("/restaurants/:name", function(req, res){
Restaurant.findOne({name: req.params.name}).then(restaurant => {
  res.render("show", {
    restaurant,
    })
  })
})

app.get("/restaurants/:zipcode", function(req, res){
Restaurant.find({zipcode: req.params.zipcode}).then(restaurant => {
  res.render("show", {
    restaurant,
    })
  })
})

app.update("/restaurant/:name", function(req, res) {
  Restaurant.findOneAndUpdate({name: req.params.name}, {new: true}, {req.restaurant})
  res.redirect("/restaurants/:name")
})

app.remove("/restaurant/:name", function(req,res) {
  Restaurant.findOneAndRemove({})
  res.redirect("/")
})
