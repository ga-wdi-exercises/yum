var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var MenuItemSchema = mongoose.Schema({
  name: String,
  price: Number,
})

var RestaurantSchema = mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number,
  },
  yelpUrl: { type: String, default: "http://www.yelp.com" },
  phone_number: String,
  items: [MenuItemSchema],
})

var MenuItem = mongoose.model("MenuItem", MenuItemSchema)
var Restaurant = mongoose.model("Restaurant", RestaurantSchema)

module.exports = {
  MenuItem,
  Restaurant
}
