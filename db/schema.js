var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectID

var RestaurantSchema = new Schema({
  name: String,
  address: String,
  yelpUrl: String,
  items: String,
  title: String
});
