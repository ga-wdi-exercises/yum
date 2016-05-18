var express = require('express');
var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var hbs = require("express-handlebars");
var db = require(".db/connection");

var app = express();
express.static("assets");
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir:"views/",
  layoutsDir: "views",
  defaultLayout:"layout-main"
}));

app.get("/restaurants", function(req, res){
  res.render("restaurants-index", {
    // restaurants: db
  });
});

app.listen(3001, function(){
  console.log("Hello world");
});
