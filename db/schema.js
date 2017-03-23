var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var RestaurantSchema = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuItemSchema]
})

var MenuItemSchema = new mongoose.Schema({
  title: String
})

var Restaurant = mongoose.model("Restaurant", RestaurantSchema)
var MenuItem = mongoose.model("MenuItem", MenuItemSchema)

module.exports = {
  Restaurant,
  MenuItem
}
