var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var seedData = require("./db/seeds")
var express = require("express")
var hbs = require("express-handlebars")
var parser = require("body-parser")
var app = express()

var ItemSchema = new mongoose.Schema(
  {
    title:String,
  }
)

var RestaurantSchema = new mongoose.Schema(
  {
    name:String,
    address:{
      street:String,
      zip:Number,
    },
    yelpUrl:String,
    items:[ItemSchema],
  }
)

var Restaurant = mongoose.model("Restaurant", RestaurantSchema)
var Item = mongoose.model("Item", ItemSchema)

app.set("port", process.env.PORT || 3001)
app.set("view engine", "hbs")
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout"
}));
app.use(parser.urlencoded({extended:true}))

app.get("/", function(req, res){
  res.render("app-welcome");
});

Restaurant.remove({}).then(function(){
  Restaurant.collection.insert(seedData).then(function(){
    process.exit
  })
})

app.get("/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.render("restaurants-index", {
      restaurants
    })
  })
})

app.post("/restaurants", function(req, res){
  Restaurant.create(req.body.restaurant).then(function(restaurant){
    res.redirect("/restaurants/" + restaurant.name)
  })
})

app.get("/restaurants/:restaurant", function(req, res){
  Restaurant.findOne({name: req.params.restaurant}).then(restaurant => {
    res.render("restaurants-show.hbs", {
      restaurant
    })
  })
})

app.post("/restaurants/:restaurant", function(req, res){
  Restaurant.findOneAndUpdate({name:req.params.name}, {name:req.body.restaurant}, {new:true}, restaurant => {
    console.log(restaurant);
    res.render("restaurants-show.hbs", {
      restaurant
    })
  })
})

app.listen(app.get("port"), function(){
  console.log("hello");
});
