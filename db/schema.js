var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", function() {
  console.log("database has been connected!");
});

var Schema = mongoose.Schema;
var objectId = Schema.objectId;

var MenuItemsSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zicpode: Number
  },
  yelpUrl: String,
  items: [MenuItemsSchema]
});

var MenuItems = mongoose.model("MenuItem", MenuItemsSchema);
var Restaurant = mongoose.model("Restaurant", RestaurantSchema);

var restaurant1 = new Restaurant({name: "McDonald's", address: {street: "123 street", zipcode: 22182}, yelpUrl: "www.google.com"});

Restaurant.find({ name: "McDonald's"}, function(err, doc) {

});

console.log(Restaurant.find({}, function(err, doc){}));
// Restaurant.remove({ name: "Burger King"}, function(err, doc) {
// });


module.exports = Restaurant;
