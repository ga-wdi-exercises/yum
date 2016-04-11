var mongoose = require("mongoose");
var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var ItemModel = Schema.ItemModel;

RestaurantModel.remove({}, function(err){
  console.log(err);
});
ItemModel.remove({}, function(err){
  console.log(err);
});

var diner = new RestaurantModel({name: "Rose Luxury", address:{street: "101 18th Street", zipcode: 20006}, yelp_url:"www.yelp.com"});

var chicken = new ItemModel({title: "chicken"});

diner.items.push(chicken);
diner.save(function(err, restaurant){
  if (err){
    console.log(err);
  }
  else{
    console.log(restaurant);
  }

});
