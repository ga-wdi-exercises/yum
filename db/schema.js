var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/yum')
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

var MenuItemSchema = mongoose.Schema({
  title: String
})

var RestaurantSchema = mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuItemSchema]
})

var Item = mongoose.model("Item", MenuItemSchema)
var Restaurant = mongoose.model("Restaurant", RestaurantSchema)

module.exports = {
  Item,
  Restaurant
}
