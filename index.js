var express = require("express");
var app = express();

var mongoose = require("mongoose");
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

//CRUD:





app.listen(4000, () => {
  console.log("listening on port 4000");
})
