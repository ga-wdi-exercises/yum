var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

app.set("view engine", "hbs");
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), function(){
  console.log("WORK");
})

app.use("/assets", express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  Restaurant.find({}).then(restaurants => {
    res.render("index", {restaurants});
  });
});

app.post("/", (req, res) => {
  Restaurant.create(req.body.restaurant).then(restaurant => {
    res.redirect("/");
  });
})

app.get("/:name", (req, res) => {
  Restaurant.findOne({name: req.params.name}).then(restaurant =>{
    res.render("show", {restaurant});
  });
})

app.post("/:name", (req, res) => {
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new:true}).then(restaurant =>{
    res.redirect("/");
  });
})

app.post("/:name/delete", (req, res) => {
  Restaurant.findOneAndRemove({name:req.params.name}).then(function(){
    res.redirect("/");
  });
})
