var mongoose = require("mongoose");
var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var MenuModel = Schema.MenuModel;

RestaurantModel.remove({}, function(err) {
  console.log(err);
});

MenuModel.remove({}, function(err) {
  console.log(err);
});

var cornerBakery = new RestaurantModel({name: "Corner Bakery", address: [{street: "L Street", zipcode: 20005}], yelp_url: "www.yelp.com/corner_bakery"});

var gStreet = new RestaurantModel({name: "G Street", address: [{street: "15th Street", zipcode: 20005}], yelp_url: "www.yelp.com/gstreet"});

var Jetties = new RestaurantModel({name: "Jetties", address: [{street: "K Street", zipcode: 20036}], yelp_url: "www.yelp.com/jetties"});

var sandwich = new MenuModel({title: "sandwich"});
var panini = new MenuModel({title: "panini"});
var burger = new MenuModel({title: "burger"});

var restaurants = [cornerBakery, gStreet, Jetties];
var menu_items = [sandwich, panini, burger];

for (var i = 0; i < restaurants.length; i++) {
  restaurants[i].items.push(menu_items[i]);
  restaurants[i].save(function(err) {
    if (err){
      console.log(err);
    }
    else {
      console.log("Item was saved.");
    }
  }); 
}
