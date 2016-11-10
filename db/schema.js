var mongoose = require('mongoose');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

var MenuItemsSchema = mongoose.Schema({
  title: String
})
var RestaurantSchema = mongoose.Schema({
  name: String,
  address: {street: String, zipcode: Number},
  yelpUrl: String,
  items: [MenuItemsSchema]
})



//model takes Two Arguments, 1) The singular name of the collection your model is for, and the Schema it uses.
var Restaurant = mongoose.model("Restaurant", RestaurantSchema)
var Item = mongoose.model("Item", MenuItemsSchema)

mongoose.connect('mongodb://localhost/yum');

module.exports = {Item, Restaurant}
