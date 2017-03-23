const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

const Schema = mongoose.Schema

const MenuItemSchema = new Schema({
  title: String
});

const RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelp: String
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
const MenuItem = mongoose.model("MenuItem", MenuItem);

module.exports = {
  Restaurant: Restaurant,
  MenuItem: MenuItem
};
