var express = require("express");
var mongoose = require('mongoose');
var Schema = require("./db/schema.js");


var app    = express();

var Restaurant = mongoose.model("Restaurant");

app.set("port", 3001);
app.use("/assets", express.static("public"));