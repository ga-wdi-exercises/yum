var mongoose = require("mongoose");
var Schema = require("./schema.js");

var Restaurant = Schema.Student
var MenuItem = Schema.MenuItem

Restaurant.remove({}, function(err){
  console.log(err)
})
MenuItem.remove({}, function(err){
  console.log(err)
})

var FastEddies = new Restaurant({name: "Fast Eddies", address: "123 Fake St", yelpUrl: "https://www.yelp.com/biz/fast-eddies-billards-morningside"})
var Chipotle = new Restaurant({name: "Chipotle", address: "36 Chambers Way", yelpUrl: "https://www.yelp.com/biz/chipotle-mexican-grill-washington-14"})
var McDonalds = new Restaurant({name: "McDonalds", address: "3800 Powell Ln", yelpUrl: "https://www.yelp.com/biz/mcdonalds-washington"})

var item1 = new MenuItem({title: "Shrimp Flambe"})
var item2 = new MenuItem({title: "Seared Foi Gras"})
var item3 = new MenuItem({title: "Salmon on Plank"})
var item4 = new MenuItem({title: "Lobster Bisque"})
var item5 = new MenuItem({title: "Popcorn"})
var item6 = new MenuItem({title: "Vegan Tacos"})

var restaurants = [FastEddies, Chipotle, McDonalds]
var menuItems = [item1, item2, item3, item4, item5, item6]

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].menuItems.push(menuItems[i], menuItems[i+3])
  restaurants[i].save(function(err, resturant){
    if(err){
      console.log(err)
    } else {
      console.log(resturant);
    }
  })
};
