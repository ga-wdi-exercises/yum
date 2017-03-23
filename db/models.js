const mongoose = require("./connection.js");


let Schema = mongoose.Schema;

// Menu Item Schema
let MenuItemSchema = new Schema({
  title: String
})


// restaurant schema
let RestaurantSchema = new Schema({
  name: String,
  address: {street: String, zipcode: Number},
  yelpUrl: String,
  items: [MenuItemSchema]
})


const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

module.exports = {
  Restaurant,
  MenuItem
}
