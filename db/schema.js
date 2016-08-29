var mongoose = require('mongoose');

// Schema \\
var MenuSchema = new mongoose.Schema({
  title: String
});

var RestaurantSchema = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: MenuSchema
});


mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;


