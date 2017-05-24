var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema

var MenuItemSchema = new Schema ({
  title:String
});

var RestaurantSchema = new Schema ({
  name:String,
  address:{street:String,
      zipcode:Number},
  yelpUrl:String,
  items:[MenuItemSchema]
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema)
var MenuItem = mongoose.model("MenuItem", MenuItemSchema)

module.exports = {
  Restaurant,
  MenuItem
};
