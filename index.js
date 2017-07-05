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

app.set("port",process.env.PORT || 4000);
app.set("view engine","hbs");
app.engine(".hbs", hbs({
	extname: 	 ".hbs",
	partialsDir: "views/",  
	layoutsDir:  "views/",
	defaultLayout:"layout"
}))
app.use(parser.urlencoded({extended:true}))

