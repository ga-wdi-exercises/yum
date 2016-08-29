var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

var yummy = new Restaurant({name: "yummy", address: {street: "200 Way St", zipcode: "22301"}, yelpUrl: "http://www.yelp.com/yummy"});
var delish = new Restaurant({name: "delish", address: {street: "400 Way St", zipcode: "20001"}, yelpUrl: "http://www.yelp.com/delish"});

var menu1 = new Menu({title: "burger"});
var menu2 = new Menu({title: "pasta and meatballs"});
var menu3 = new Menu({title: "mac and cheese"});
var menu4 = new Menu({title: "shrimp and grits"});

var restaurants = [yummy, delish]
var menus = [menu1, menu2, menu3, menu4]

restaurants.forEach(function(restaurant, i){
  restaurant.items.push(menus[i], menus[i+3])
  restaurant.save(function(err){
    if (err) {
      console.log(err)
    } else {
      console.log("Restaurant saved!");
    }
  })
})
