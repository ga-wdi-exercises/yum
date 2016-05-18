var express = require("express");
var parser = require("body-parser");
var hbs = require("express-handlebars");
var mongoose = require('./db/connection');

var app = express();
var Restaurant = mongoose.model("Restaurant");

app.set("port", process.env.PORT || 3001)
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extName: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "main-layout"
}));

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.get("/restaurants", function(req, res){
  Restaurant.find({})
  .then(function(restaurants){
    res.render("restaurant-index", {
      restaurants: restaurants
    });
  });
});

app.get("/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name})
  .then(function(restaurant){
    console.log(restaurant)
    res.render("restaurant-show", {
      restaurant: restaurant
    });
  });
});

app.post("/restaurants", function(req, res){
  Restaurant.create(req.body.restaurant)
  .then(function(restaurant){
    res.redirect("/restaurants/" + restaurant.name);
  });
});

app.post("/restaurants/:name", function(req, res){
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true})
  .then(function(restaurant){
    res.redirect("/restaurants/" + restaurant.name);
  });
});

app.post("/restaurants/:name/delete", function(req, res){
  Restaurant.findOneAndRemove({name: req.params.name})
  .then(function(){res.redirect("/restaurants")});
});

app.listen(app.get("port"), function(){
  console.log("Here and running");
});
