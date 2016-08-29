// express dependency for our application
var express = require('express')
// loads mongoose dependency
var mongoose = require('mongoose')
// loads dependency for middleware for paramters
var bodyParser = require('body-parser')
// loads dependency that allows put and delete where not supported in html
var methodOverride = require('method-override')
// loads module containing all restuarants controller actions. not defined yet...
var restuarantController = require("./controllers/restuarantController")
// connect mongoose interfaces to menuItems mongo db
mongoose.connect('mongodb://localhost/menuItems')
// invokes express dependency and sets namespace to app
var app = express()
// sets view engine to handlebars
app.set("view engine", "hbs")
// allows for parameters in JSON and html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// allows for put/delete request in html form
app.use(methodOverride('_method'))
// connects assets like stylesheets
app.use(express.static(__dirname + '/public'))

// app server located on port 4000
app.listen(4000, function(){
  console.log("app listening on port 4000")
})

// routes for all requests to this express app that map to an action/function
// in our restuarantsController
app.get("/restuarants", restuarantsController.index)
app.get("/restuarants/new", restuarantsController.new)
app.get("/restuarants/:id", restuarantsController.show)
app.get("/restuarants/:id/edit", restuarantsController.edit)
app.put("/restuarants/:id", restuarantsController.update)
app.delete("/restuarants/:id", restuarantsController.delete)
