var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var RestaurantSchema = mongoose.Schema({
  name: String,
  address: {street: String, zipcode: Number},
  yelpUrl: String,
  items: [MenuSchema]
})
var MenuSchema = mongoose.Schema({
  title: String,
})
