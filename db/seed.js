var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var ItemModel = Schema.ItemModel;


RestaurantModel.remove({}, function(err){
  console.log(err);
});
ItemModel.remove({}, function(err){
  console.log(err);
});
