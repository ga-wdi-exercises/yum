var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var MenuItemSchema = new mongoose.Schema({
  title: String,
})

var RestaurantSchema = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number,
  },
  yelpUrl: String,
  items: [MenuItemSchema],
})

mongoose.Promise = global.Promise

module.exports = {
  MenuItem: mongoose.model("MenuItem", MenuItemSchema),
  Restaurant: mongoose.model("Restaurant", RestaurantSchema),
}
