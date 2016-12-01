var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

app.set("port", process.env.PORT || 4000);
app.set("view engine", "hbs");

app.use("/assets", express.static("public"));
aap.use(bodyParser.urlencoded({extended:true}));
