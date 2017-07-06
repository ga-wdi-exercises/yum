var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

function restaurantName(restaurant) {
  Restaurant.findOne({name: restaurant})
}
