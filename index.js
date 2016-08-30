//express dependency for application
var express = require('express')
//loads mongoose dependency
var mongoose = require('mongoose');
//loads dependency for middleware for parameters
var bodyParser = require('body-parser')
//loads dependency that allows put and delete where not supported in html
var methodOverride = require('method-override')
//loads module containing all restaurants controller actions. Not yet defined
var restaurantsController = require("./controllers/restaurantsController")

//connect mongoose interfaces to menus mongo db
mongoose.connect('mongodb://localhost/restaurants')

// var Schema = require("./db/schema.js");

//invokes express dependency and sets namespace to the app
var app = express()

// app.set("port", process.env.PORT || 3001);
//sets view engine to handlebars
app.set("view engine", "hbs");
//allows for parameters in JSON and html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//allows for put/delete request in html form
app.use(methodOverride('_method'))
//connects assets like stylesheets
app.use(express.static(__dirname + '/public'))

//app server located on port 4000
app.listen(4000, function(){
  console.log("app listening on port 4000")
})
// routes for all requests to this express app that map to an action/function
// in our restaurantsController
app.get("/restaurants", restaurantsController.index)
app.get("/restaurants/new", restaurantsController.new)
app.get("/restaurants/:id", restaurantsController.show)
