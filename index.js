var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var restaurantsController = require("./controllers/restaurantsController")
mongoose.connect('mongodb://localhost/yum')
var app = express()

app.set("view engine", "hbs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'))

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/restaurants", restaurantsController.index)
