var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;

db.on('error', err => {
  console.log(err);
});

db.once('open', () => {
  console.log("Connected MongoDB!");
});

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var MenuItemsSchema = new Schema({
  title: String,
})

var RestaurantSchema = new Schema({
  name: String,
  address: {street: String, zipcode: Number},
  yelpUrl: String,
  items = [MenuItems]
});

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var MenuItems = mongoose.model("MenuItems", MenuItemsSchema);

module.exports = {
  Restaurant: Restaurant,
  MenuItems: MenuItems
}
