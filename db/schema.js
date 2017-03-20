const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/yum")
const db = mongoose.connection

db.on("error", err => {
  console.error.bind(console, "connection error:")
}

const Schema = mongoose.Schema

const RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuItemSchema]
})

const MenuItemSchema = new Schema({
  title: String
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
const MenuItem = mongoose.model("MenuItem", MenuItemSchema)

module.exports = {
  Restaurant,
  MenuItem
}
