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

var pickles = new MenuItemModel({title: "Spicy Pickle"});
var salad = new MenuItemModel({title: "Cobb Salad"});
var sandwich = new MenuItemModel({title: "Beef on Weck"});

var lunettas = new RestaurantModel({name: "Lunetta's"});
var busboysandpoets = new RestaurantModel({name: "Busboys and Poets"});
var maywah = new RestaurantModel({name: "May Wah"});

var menuItems = [pickles, salad, sandwich];
var restaurants = [lunettas, busboysandpoets, maywah];

for(var = i; i < menuItems.length; i++){
  restaurants[i].menuItems.push(menuItems[i], menuItems[i+1])
  restaurants[i].save(function(err){
    if(err){
      console.log(err);
    } else{
      console.log("Restaurant saved.");
      }
  })
};
