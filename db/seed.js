var mongoose = require("mongoose");
var conn = mongoose.connect("mongodb://localhost/restaurants")
var Schema = require("./schema.js");

var RestaurantModel = require("../models/restaurant")
var MenuItemModel = require("../models/menuItem")

RestaurantModel.remove({}, function(err){
  console.log(err)
})
MenuItemModel.remove({}, function(err){
  console.log(err)
})

var FastEddies = new RestaurantModel({name: "Fast Eddies", address: "123 Fake St", yelpUrl: "https://www.yelp.com/biz/fast-eddies-billards-morningside"})
var Chipotle = new RestaurantModel({name: "Chipotle", address: "36 Chambers Way", yelpUrl: "https://www.yelp.com/biz/chipotle-mexican-grill-washington-14"})
var McDonalds = new RestaurantModel({name: "McDonalds", address: "3800 Powell Ln", yelpUrl: "https://www.yelp.com/biz/mcdonalds-washington"})

var item1 = new MenuItemModel({title: "Shrimp Flambe"})
var item2 = new MenuItemModel({title: "Seared Foi Gras"})
var item3 = new MenuItemModel({title: "Salmon on Plank"})
var item4 = new MenuItemModel({title: "Lobster Bisque"})
var item5 = new MenuItemModel({title: "Popcorn"})
var item6 = new MenuItemModel({title: "Vegan Tacos"})

var restaurants = [FastEddies, Chipotle, McDonalds]
var menuItems = [item1, item2, item3, item4, item5, item6]

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(menuItems[i], menuItems[i+3])
  restaurants[i].save(function(err, resturant){
    if(err){
      console.log(err)
    } else {
      console.log(resturant);
    }
  })
};
