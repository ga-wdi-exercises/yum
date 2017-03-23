var mongoose = require('mongoose')

var Schema = mongoose.Schema

var MenuItemSchema = new Schema({
  body: String
})

var RestaurantSchema = new Schema({
  name: String,
  items: [MenuItemSchema]
})


var Restaurant = mongoose.model("Restaurant", RestaurantSchema)
var MenuItem = mongoose.model("MenuItem", MenuItemSchema)

module.exports = {
  Restaurant: Restaurant,
  MenuItem: MenuItem
}
