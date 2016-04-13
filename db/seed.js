var mongoose = require("mongoose");
var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var MenuItemModel = Schema.MenuItemModel;

RestaurantModel.remove({}, function(err){
  console.log(err)
});
MenuItemModel.remove({}, function(err){
  console.log(err)
});

var pickles = new MenuItemModel({name: "Spicy Pickle"});
var salad = new MenuItemModel({name: "Cobb Salad"});
var sandwich = new MenuItemModel({name: "Beef on Weck"});

var lunettas = new RestaurantModel({name: "Lunetta's"},{});

var menuItems = [pickles, salad, sandwich];

for(var = i; i < menuItems.length; i++){
  
}
