var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var schema = mongoose.schema
  // ObjectId = Schema.ObjectId

var ItemSchema = mongoose.Schema({
  title: String
});

var RestaurantSchema = mongoose.Schema({
  name: String,
  address: {street: String, state: String, zipcode: Number},
  yelp: String,
  items:[ItemSchema]
});
