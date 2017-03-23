var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("database is connected!");
});

var Schema = mongoose.Schema

var MenuItemSchema = new Schema({
  title: String
});

var ResturantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelp: String
});

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var MenuItem = mongoose.model("MenuItem", MenuItem);

module.exports = {
  Restaurant: Restaurant,
  MenuItem: MenuItem
};
