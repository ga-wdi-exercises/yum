var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelp: String,
  items: [{type:Schema.ObjectId, ref: "MenuItem"}]
});

var MenuItemSchema = mongoose.Schema({
  title: String
});

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var MenuItem = mongoose.model("MenuItem", MenuItemSchema);
