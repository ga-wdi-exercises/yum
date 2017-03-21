var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema

var MenuSchema = new Schema({
  title: String

});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuSchema]


});



var Restaurant = mongoose.model("Restaurant", RestaurantSchema)
var Menu = mongoose.model("Menu", MenuSchema)
