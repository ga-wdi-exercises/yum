var mongoose = require('mongoose')
var seedData = require('./seed')
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/yum')
// save the connection to the database in a variable
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema
mongoose.Promise = global.Promise


// building schemas with embedded documents for items
var menuSchema = new Schema({
  title: String
})

var restaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number,
  },
  yelpUrl: String,
  items: [menuSchema]
})

// defining models
var Menu = mongoose.model("Menu", menuSchema)
var Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = {
  Restaurant,
  Menu,
}
