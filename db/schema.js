const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/yum")
const db = mongoose.connection

db.on("error", err => {
  console.log(err)
}

db.once("open", _ => {
  console.log("The database is connected!")
})

const Schema = mongoose.Schema

const RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [ItemSchema]
})

const ItemSchema = new Schema({
  title: String
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
const Item = mongoose.model("Item", ItemSchema)

module.exports = {
  Restaurant,
  Item
}
