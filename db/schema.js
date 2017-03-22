const mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {
      street: String,
      zipcode: Number,
      }
    yelpUrl: String
    items: Array
  }
)

var MenuSchema = new mongose.Schema(
  {
    title: String
  }
)

mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
