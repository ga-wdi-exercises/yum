var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
//loads module with all restaurants controller actions
var restaurantsController = require("./controllers/restaurantsController")
//connect mongoose interfaces to restaurants db
mongoose.connect('mongodb://localhost/restaurants_db')
//invoke express dependency and sets namespace to app
var app = express()

//set view engine to handlebars
app.set("view engine", "hbs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//allows put/delete reqs in html form
app.use(methodOverride('_method'))
//connects assets like stylesheets
app.use(express.static(__dirname + '/public'))

//app server on port 4000
app.listen(4000, function(){
  console.log("port is working");
})

//routes for all reqs to this app that map to a function in our Controller
app.get("/restaurants", restaurantsController.index)
app.get("/restaurants/new", restaurantsController.new)
app.post("/restaurants", restaurantsController.create)
app.get("/restaurants/:id", restaurantsController.show)
app.get("/restaurants/:id/edit", restaurantsController.edit)
app.put("/restaurants/:id", restaurantsController.update)
app.delete("/restaurants/:id", restaurantsController.delete)
app.post("/restaurants/:id/items", restaurantsController.addItem)
app.delete("/restaurants/:restaurantId/items/:id", restaurantsController.removeItem)


app.use(require("better-express-errors")(app))
