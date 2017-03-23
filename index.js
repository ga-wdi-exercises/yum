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
app.use(parser.urlencoded({extended:true});
