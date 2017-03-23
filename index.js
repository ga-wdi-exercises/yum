var mongoose = require('mongoose');
var schema = require("./db/schema.js");

var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose = require("./db/connection.js");

var Restaurant = mongoose.model("Restaurant");
var Menu = mongoose.model("Menu");

const app = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

// Root ALL!
app.get("/", function(req, res) {
  Restaurant.find({}).then((restaurants) => {
    res.render("restaurants-index", {
      restaurants
    });
  });
})

// NEW
app.post("/", function(req, res) {
  Restaurant.create(req.body.restaurant).then(function(restaurant) {
    res.redirect("/${restaurant.name}");
  });
});

// SHOW
app.get("/:name", function(req, res) {
  Restaurant.findOne({name: req.params.name}).then(function() {
    res.redirect("show", {restaurant});
  });
});

// UPDATE
app.post("/:name", function(req, res) {
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then(function(restaurant) {
    res.redirect("/${restaurant.name}");
    });
});

// DELETE
app.post("/:name/delete", function(req, res) {
  Restaurant.findOneAndRemove
})

app.listen(app.get("port"), function(){
  console.log("You are is Working and Healthy");
});
