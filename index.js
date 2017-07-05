// var mongoose = require('mongoose');
let express = require('express')
let mongoose = require("./db/schema.js");
// let Restaurant = Schema.Restaurant
// let MenuItem = Schema.MenuItem
let hbs = require("express-handlebars")
let parser = require("body-parser")
let Restaurant = mongoose.model("Restaurant")
let MenuItem = mongoose.model("MenuItem")

let app = express();

app.set("port",prcess.env.PORT || 4000);
app.