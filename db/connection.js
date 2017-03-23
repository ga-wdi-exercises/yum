const mongoose = require('mongoose')
const MenuItemSchema = new mongoose.Schema({
  title: String
})

const RestaurantSchema = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuItemSchema]
})

mongoose.model('MenuItem', MenuItemSchema)
mongoose.model('Restaurant', RestaurantSchema)

mongoose.connect('mongodb://localhost/yum')

module.exports = mongoose
