var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("db has been connected")
});

var Schema = mongoose.Schema;

var MenuItemSchema = new Schema ({
  title: String
});

var RestaurantSchema = new Schema ({
  name: String,
  address: { street: String, state: String, zipcode: Number },
  yelpUrl: String,
  items: [MenuItemSchema]
});

var MenuItem = mongoose.model("Menu Item", MenuItemSchema);
var Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {
  MenuItem: MenuItem,
  Restaurant: Restaurant
};
