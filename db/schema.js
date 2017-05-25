var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

let schema = mongoose.Schema;

let MenuItemSchema = new Schema ({
  title: String
});

let RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuItemSchema]
});

let Restaurant = mongoose.model("Restaurant", RestaurantSchema);
let MenuItem = mongoose.model("MenuItem", MenuItemSchema);

module.exports = {
  RestaurantModel: Restaurant,
  MenuItemModel: MenuItem
}
