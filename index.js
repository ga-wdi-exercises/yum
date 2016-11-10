var express = require("express");
var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var parser = require("body-parser");
var hbs     = require("express-handlebars");
var app     = express();

var MenuItem = Schema.MenuItem;
var Restaurant = Schema.Restaurant;

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended:true}));

Restaurant.create({ name: '5 Guys', "address.zipcode": 11109 }, function (err, restaurant) {
  if (err) return handleError(err);
  console.log("Created:", restaurant.name, 'in', restaurant.address.zipcode);
});
