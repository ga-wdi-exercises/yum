var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var ItemsSchema = new Item({
  title: String
});

var RestaurantSchema = new Restaurant({
  name: String,
  address:{
    street: String,
    zipcode: Number
  },
  yelp_url: String,
  items:[ItemSchema]
});

db.once('open', function() {
  console.log("database has been connected!");
});
