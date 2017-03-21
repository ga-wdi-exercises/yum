const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/yum")
const db = mongoose.connection

db.on("error", err => {
  console.log(err)
})

db.once("open", () => {
  console.log("The database is connected!")
})

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

mongoose.model("Restaurant", RestaurantSchema)
mongoose.model("Item", ItemSchema)

module.exports = mongoose
