// var Schema = require("../db/schema.js");
var seedsofData = require("./seeds.json");
var Schema = require("../db/schema.js");
var mongoose =require('mongoose');

var Restaurant = Schema.Restaurant;
var Item = Schema.Item;

Restaurant.remove().then(function(){
  Restaurant.collection.insert(seedsofData).then(function(){
    mongoose.disconnect();
  });
});
