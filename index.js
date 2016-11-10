var mongoose    = require('mongoose');
var Schema      = require("./db/schema.js");
var express     = require("express")
var Restaurant  = Schema.Restaurant
var Menu        = Schema.Menu
var app         = express()
var bodyParser  = require("body-parser")

//set port & listen
app.set("port", process.env.PORT || 4002)
app.listen(app.get("port"), function(){
  console.log("Consequences...")
})
app.use(bodyParser.urlencoded({extended:true}))

//set hbs
app.set("view engine", "hbs")

//set public folder
app.use(express.static("public"))

//get views
app.get("/", (req, res) => {
  Restaurant.find({}).then(restaurants =>{
    res.render("index",{
      restaurants: restaurants
    })
  })
})

app.get("/:name", (req, res) => {
  Restaurant.findOne({name: req.params.name}).then(restaurant =>{
    res.render("show",{
      restaurant: restaurant
    })
  })
})

app.post("/", (req,res) => {
  // res.json(req.body)
  Restaurant.create(req.body.restaurant).then(restaurant =>{
    res.redirect("/")
  })
})


app.post("/:name/delete", (req, res) => {
  Restaurant.findOneAndRemove({name:req.params.name}).then( _ => {
    res.redirect("/")
  })
})
