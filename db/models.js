var mongoose = require("./connection")
var RestaurantSchema = mongoose.Schema({
  name: String,
  address: {street: String, zipcode: Number}
  yelpUrl: String,
  items: [MenuSchema]
})
var MenuSchema = mongoose.Schema({
  title: String,
})
mongoose.Promise = global.Promise
