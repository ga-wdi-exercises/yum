var mongoose = require('mongoose');
var RestaurantSchema = new mongoose.Schema(
  {
  name: String,
  address: { street: String, zipcode: Number,
  yelpUrl: String,
  items: ["avacado toast", "brie", "duck", "cake"]
  }
)

mongoose.model("Restaurant", RestaurantSchema)

mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
