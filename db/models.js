const mongoose = require('./connection.js');


let Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId


var ItemSchema = new Schema(
  {
    title: String
  }
)

var RestaurantSchema = new Schema(
  {
    name: String,
    address: {
      street: String,
      zipcode: Number,
      },
    yelpUrl: String,
    items: [ItemSchema]
  }
)

const Item = mongoose.model("Item", ItemSchema)
const Restaurant = mongoose.model("Restaurant", RestaurantSchema)


module.exports = {
  Restaurant,
  Item
}
