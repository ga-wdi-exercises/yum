const mongoose = require('./connection.js')

const ItemSchema = mongoose.Schema({
  title: String
})

const RestaurantSchema = mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [ItemSchema]
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
const Item = mongoose.model('Item', ItemSchema)

module.exports = {
  Restaurant,
  Item
}
