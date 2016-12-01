var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var ItemModel       = Schema.ItemModel;

RestaurantModel.remove({}, function(err){
  console.log(err);
});
ItemModel.remove({}, function(err){
  console.log(err);
});

var altoPlaza = new RestaurantModel({name: "Alto_Plaza",
address: {street: "5963 Centreville Crest Lane", zipcode: 20121},
yelp_url:"www.yelp.com/altoplaza"});

var lightHouse = new RestaurantModel({name: "Light_House",
address: {street: "6300 Lee hwy", zipcode: 22030},
yelp_url:"www.yelp.com/lighthouse"});



var fajita = new ItemModel({title: "Fajita"});

var tofu = new ItemModel({title: "Fire_Tofu"});

var restaurants = [altoPlaza,lightHouse];
var items =[fajita,tofu];



restaurants.forEach(function(restaurant, i){
  restaurant.items.push(items[i]);
  restaurant.save(function(err){
    if (err){
      console.log(err);
    }
    else{
      console.log("saved");
    }
  })
});
