var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var express = require("express")
var Restaurant = Schema.Restaurant
var parser = require("body-parser")

var app = express();

app.set("view engine", "hbs")
app.use(parser.urlencoded({extended: true}))
app.listen(4001, () => {
  console.log("app listening on port 4000");
});

app.get("/", (req, res) => {
  console.log(Restaurant)
  Restaurant.find({}).then(restaurants => {
    res.render("index", {
      restaurants: restaurants
    })
  })
})

app.get("/:name", (req, res) => {
  Restaurant.findOne({name: req.params.name}).then(restaurant => {
    res.render("show",{
      restaurant: restaurant,
    })
  })
})

app.post("/:name/delete", (req, res) => {
  Restaurant.findOneAndRemove({name: req.params.name}).then( _ => {
    res.redirect("/")
  })
})

app.post("/", (req,res) => {
    Restaurant.create(req.body.restaurant).then(restaurant =>{
      res.redirect("/")
    })
})

app.post("/:name", (req, res) => {
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new:true}).then(restaurant => {
    res.redirect("/" + restaurant.name)
  })
})
