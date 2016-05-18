var mongoose = require('mongoose');

var MenuItemSchema = new mongoose.Schema(
  {
    title: String
  }
);

var RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {street: String, zip: Number},
    yelpUrl: String,
    items: [MenuItemSchema]
  }
);

mongoose.model('Restaurant', RestaurantSchema);
mongoose.model('MenuItem', MenuItemSchema);

mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){console.log("connected!")})

module.exports = mongoose;
