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

var res1 = new RestaurantModel({
  name: "Chiptole",
  address: {street: "5454 Georges Ave", zipcode: 4323},
  yelp: "Yarda.com"
});

var res2 = new RestaurantModel({
  name: "Qudoba",
  address: {street: "4427 Georges Ave", zipcode: 4323},
  yelp: "Yarda.com"
});

var item1 = new ItemModel({title: "soup"});
var item2 = new ItemModel({title: "crackers"});

var restaurants = [res1, res2];
var items = [item1, item2];

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+1]);
  restaurants[i].save(function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log("restaurant saved");
    }
  });
};
