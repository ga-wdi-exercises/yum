var express = require("express");
var parser = require("body-parser");
var hbs = require("express-handlebars");
var mongoose = require("./db/schema");

var app     = express();

var Item = mongoose.model("Item");
var Restaurant = mongoose.model("Restaurant");


app.set("view engine", "hbs");


app.get("/", function(req, res){
  Restaurant.find({}).then(function(restuarants){
    res.render("rest-index", {
      restaurants: restaurants
    })
  })
})

app.listen(3000, function(){
  console.log("It's works!");
});
