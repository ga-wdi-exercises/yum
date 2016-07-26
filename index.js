var express = require("express");
var hbs = require("express-handlebars");
var mongoose = require("./db/schema.js");

var app = express();

var Restaurant = mongoose.model("Restaurant");
