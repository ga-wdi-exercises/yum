const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const ItemSchema = new mongoose.Schema(
  title: String
)

const RestaurantSchema = new mongoose.Schema(
  name: String,
  adress: {street: String, zipcode: Number},
  yelpUrl: String,
  items: [ItemSchema]
)

mongoose.model("Item", ItemSchema)
mongoose.model("Restaurant", RestaurantSchema)

module.exports = mongoose
