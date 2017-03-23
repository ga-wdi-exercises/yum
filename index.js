var mongoose = require('mongoose');
var Schema = require("./db/schema.js");


var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose = require("./db/connection.js");

var Restaurant = mongoose.model("Restaurant");
var Menu = mongoose.model("MenuItems");

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

// Root
app.get("/", function(req, res) {
  Restaurant.find({}).then(() => {
    res.render("restaurants-index", {
      restaurants
    });
  });
})

// NEW
app.post("/", function(req, res) {
  Restaurant.create(req.body.restaurant).then(function() {
    res.redirect("/${restaurant.name}");
  });
});

// SHOW
app.get("/:name", function(req, res) {
  Restaurant.findOne({name: req.params.name}).then(function() {
    res.redirect("show", {restaurant});
  });
});


// DELETE
app.post("/:name/delete", function(req, res) {
  Restaurant.findOneAndRemove
})

app.listen(app.get("port"), function(){
  console.log("testing");
});
