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

app.get("/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    res.render("restaurant-show", {
      restaurant: restaurant
    });
  });
});

app.post("/", function(req, res){
  Restaurant.create(req.body.restaurant).then(function(restaurant){
    console.log(restaurant)
    res.redirect('back');
  })
});

app.post("/:name/delete", function(req, res) {
  console.log(req.params.name)
  Restaurant.findOneAndRemove({name: req.params.name}).then(function(){
    res.redirect("/")
  })
})

app.post("/:name/items", function(req, res) {
  Restaurant.findOne({name: req.params.name}, function(err, restaurant){
    console.log(restaurant)
    restaurant.items.push(new MenuItem(req.body.item))
    restaurant.save(function(){
      res.redirect("back")
    })
  })
});

app.post("/:name/items/:title/delete", function(req, res){
  Restaurant.findOneAndUpdate(
    {name: req.params.name},
    {$pull: { items: {title: req.params.title} } }, {new: true}
  ).then(function(){
    res.redirect("back")
  })
})

app.post("/:name", function(req, res){
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then(function(candidate){
    res.redirect("/"+req.params.name)
  })

})

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
})
