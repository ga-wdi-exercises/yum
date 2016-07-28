//
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;

// if we can't connect to the database, throw an errro
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId

// Define the schema for a menu item, presumably just a name
// auch as "Chop Suey, Dixie Style"
var MenuItemSchema = mongoose.Schema({
  title: String
});

// Define the schema for a restaurant
var RestaurantSchema = mongoose.Schema({
  // The name of the restaurant
  name: String,
  // It's address, oddly missing city
  address: { street: String, state: String, zipcode: Number },
  // The url of restaurant's entery at yelp
  yelp: String,
  // An array of menu items
  items: [MenuItemSchema]
});

// Create menu qnd restaurant models
var MenuItemModel = mongoose.model("MenuItemSchema", MenuItemSchema);
var RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);
// public interface

module.exports = {
  Restaurant: RestaurantModel,
  MenuItem: MenuItemModel
};
