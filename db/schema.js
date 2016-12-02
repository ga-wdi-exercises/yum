let mongoose = require('./connection.js');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var MenuSchema = new Schema({
  title: String
})

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [{type: ObjectId, ref: "Menu"}]
})

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var Menu = mongoose.model("Menu", MenuSchema)

module.exports = {
  Restaurant,
  Menu
}
