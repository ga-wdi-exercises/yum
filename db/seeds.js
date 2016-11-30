var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/yum')

var RestaurantModel = require("../models/restaurant")
var MenuModel = require("../models/menu")

RestaurantModel.remove({}, function(err){
})
MenuModel.remove({}, function(err){
})

var taco = new RestaurantModel(
  {
    name: "Taco Town",
    address: {
      street: "193 Crunk St",
      zipcode: "20303"
    },
    yelpUrl: "#"
})

var lunch = new MenuModel({title: "lunch"});

var restaurants = [taco];
var menus = [lunch];
//
for(var i = 0; i < restaurants.length; i++){
  restaurants[i].menus.push(menus[i], menus[i+3])
  restaurants[i].save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("restaurant was saved")
    }
  })
}
