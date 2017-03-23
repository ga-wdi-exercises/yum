var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var express = require("express");
var parser = require("body-parser");
var hbs = require("express-handlebars");
var mongoose = require(".db/connections.js");

var Restaurant = mongoose.model("Restaurant");
var Menu = mongoose.model("Menu");

const app = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");

app.use("/assets", "express.static("public"));
app.use(parser.urlencoded({extended:true}));

app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: ".views/",
  layoutsDir: ".views/",
  defaultLayout: "layout-main"
}));

app.get("/", function(req, res) {
  Restaurant.find({}).then((restaurants) => {
    res.render("restaurants-index", {
      restaurants
    });
  });
})

app.post("/", function(req, res)) {
  Restaurant.create(req.body.restaurant).then(function(restaurant){
    res.redirect("/$restaurant.name");
  });
});

app.get(":name", fucntion(req, res) {
  Restaurant.findOne({name: req.params.name}).then(function() {
    res.redirect("show", {restaurant});
  });
});

app.post(":name", fucntion(req, res) {
  Restaurant.findOne({name: req.params.name}, req.body.restaurant, {new: true}).then(function(restaurant){
    res.redirect("/${restaurant.name}");
  });
    res.redirect("show", {restaurant.name}");
  });
});
