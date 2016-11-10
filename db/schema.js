var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/yum')
// save the connection to the database in a variable
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = moongoose.Schema

var menuSchema = new Schema({
  title: String
})

var restaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number,
  }
  yelpUrl: String,
  items:
})

module.exports = mongoose.model("Menu", menuSchema)
module.exports = mongoose.model("Restaurant", restaurantSchema)
