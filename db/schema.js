var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/yum')

var db = mongoose.connection

db.on('error', err => {
  console.log(err)
})

db.once('open', () => {
  console.log("Mongo connected!")
})

var Schema = mongoose.Schema

var ItemSchema = new Schema({
  title: String,
})

var RestaurantSchema = new Schema({
  name: String,
  street: String,
  zipcode: Number,
  yelpUrl: String,
  items: [ {type: Schema.ObjectId, ref: "Item"}]
})

var Restaurant = mongoose.model("Restaurant", RestaurantSchema)
var Item = mongoose.model("Item", ItemSchema)

module.exports = {
  Restaurant: Restaurant,
  Item: Item
}
