const mongoose = require("./connection.js");

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
  yelpUrl: String,
  items: [MenuItemSchema]
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

module.exports = {
  Restaurant: Restaurant,
  MenuItem: MenuItem
};
