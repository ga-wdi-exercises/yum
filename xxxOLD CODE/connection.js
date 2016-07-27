var mongoose = require('mongoose');

var AddressSchema = new mongoose.Schema ({
  street: String,
  zipcode: Number
})

var MenuItemSchema = new mongoose.Schema ({
  title: String
})

var RestaurantSchema = new mongoose.Schema({
  name: String,
  yelpUrl: String,
  address: [AddressSchema],
  items: [MenuItemSchema]
})
mongoose.model("Address",AddressSchema);
mongoose.model("MenuItem",MenuItemSchema);
mongoose.model("Restaurant",RestaurantSchema);

mongoose.connect('mongodb://localhost/yum');

module.exports = mongoose;
