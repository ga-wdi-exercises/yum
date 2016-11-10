var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu

function findRestaurant(restaurant){
  Restaurant.findOne({name: restaurant}), function(err, restaurant){
    if(err){
      console.log(err)
    }
    else{
      console.log(restaurant);
    }
  }
}
