var mongoose = require('mongoose');
var Schema = require("./db/schema.js");


var Restaurant = Schema.Restaurant;
var Item = Schema.Item;

var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId

 var RestaurantSchema = new Schema({
   name: String,
   address: {"street": String, "zipcode_property": Number},
   yelp_url: String,
   items: []
 })


 var MenuSchema = new Schema({
   title: String
 })
