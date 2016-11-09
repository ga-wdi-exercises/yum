var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {
      street: String,
      zipcode: Number,
    },
    yelpurl: String,
    items: [MenuSchema],
  }
);

var MenuSchema = new mongoose.Schema(
  {
    title: String,
  }
)
