const mongoose = require("./connection.js")

const Schema = mongoose.Schema

const MenuSchema = new Schema({
  title: String
})

const RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: String
  },
  yelpUrl: String,
  items: [ MenuSchema ]
  // items: [ {type: Schema.ObjectId, ref:"Menu"}]
})

const Restaurant = mongoose.model("Restaurant" , RestaurantSchema)
const Menu = mongoose.model("Menu", MenuSchema)

module.exports = {
  Restaurant,
  Menu
}
