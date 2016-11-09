var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema

var RestaurantSchema = new Schema ({
      name: String,
      address: {street: String, zipcode: Number},
      yelpUrl: String,
      items: Array,
})
var MenuSchema = new Schema ({
  title: String
})
