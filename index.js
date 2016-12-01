var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var express = require("express")
var app = express()
var hbs = require("express-handlebars")

app.listen(9999, ()=> {
  console.log("Express is working");
})
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout"
}));

var Restaurant = Schema.Restaurant

app.get("/", (req,res) => {
  Restaurant.find({}, (err,restaurants) => {
    if(err){
      console.log(posts);
    }
    else {
      res.render("index", {restaurants})
    }
  })
})

app.get("/:name", (req,res) => {
  console.log(`yo ${req.params.name}`);
  Restaurant.findOne({name: req.params.name}, (err,restaurant) => {
    if(err){
      console.log(err);
    }
    else {
      res.render("show", {restaurant})
    }
  })
})
