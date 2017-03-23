var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var menuSchema = new Schema {
  title: String
}

var restaurantSchema = new Schema {
  name: String,
  address: {
    zipCode: Number,
    street: String
  },
  yelpUrl: String,
  item: [menuSchema]
}

var Restaurant = mongoose.model("Restaurant", restaurantSchema)
var MenuItem = mongoose.model("MenuItem", menuSchema)

module.exports = {
  Restaurant,
  MenuItem
}
