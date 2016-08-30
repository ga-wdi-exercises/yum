var mongoose = require('mongoose');
//name space for schema constructor, defined by mongoose
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var ItemSchema = new Schema({
  title: String
})
//define schema for restaurants and items
var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [ItemSchema]
})

//setting models in mongoose with schemas defined above to use throughout app
mongoose.model("Restaurant", RestaurantSchema)
mongoose.model("Item", ItemSchema)

// module.exports = mongoose
