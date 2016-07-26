var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var express = require("express");
var parser = require("body-parser");
var hbs     = require("express-handlebars");

var app = express();

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.use(parser.urlencoded({extended:true}))


app.get("/", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.render("restaurants-index", {
      restaurants: restaurants
    });
  });
});

app.post("/", function(req, res){
  Restaurant.create(req.body.restaurant).then(function(restaurant){
    console.log(restaurant)
  })
//   Restaurant.create({name: req.body.name, address: {"street": req.body.address.street, "state": req.body.address.state, "zipcode": req.body.address.zip}, yelpUrl: req.body.yelpUrl}).then(function(restaurant){
//     console.log(restaurant)
//   // res.redirect("/")
// })
});


function findByName(restaurant){
  Restaurant.findOne({name:restaurant}, function(result){
    console.log(result)
  })
}
app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
})
