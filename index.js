var mongoose = require('mongoose');
var connection = require("./db/connection");
var Restaurant = mongoose.model("Restaurant");
var hbs  = require("express-handlebars");
var express = require("express");

var app = express();

console.log("it worked")

app.set("port", 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:      ".hbs",
  partialsDir:  "views/",
  layoutsDir:   "views/",
  defaultLayout: "layout-main"
}));
app.use("/assets", express.static("public"));

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.render("restaurants-index", {
      restaurants: restaurants
    });
  });
});

app.listen(3001, function(){
});
