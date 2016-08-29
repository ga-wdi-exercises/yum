var mongoose = require('mongoose');
var express = require("express");
var Schema = require("./db/schema.js");
var restaurantsController = require("./controllers/restaurantsController.js");
var app = express();

app.set("view engine", "hbs")

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/restaurants", restaurantsController.index )
