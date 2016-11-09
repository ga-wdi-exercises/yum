var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var menuSchema = mongoose.Schema({
  title: String
})

var restaurantSchema = mongoose.Schema({
  name: String,
  address: {street: String, zipcode: Number},
  yelpUrl: String,
  items: [menuSchema]
})


var Restaurant = mongoose.model('Restaurant', restaurantSchema)
var Menu = mongoose.model('Menu', menuSchema)


module.exports = {
  Restaurant,
  Menu,
}
