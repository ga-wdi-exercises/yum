var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


  var Schema = mongoose.Schema;
// Create Schemas
  var RestaurantSchema = mongoose.Schema ({
    name: String,
    address: {
      street: String,
      zipcode: Number
    },
    yelp url: String,
    items: [MenuItemSchema]
  });

  var MenuItemSchema = mongoose.Schema ({
    title: String
  });

// Create Model
  var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
  var MenuItemModel = mongoose.model("MenuItem", MenuItemSchema);

// Make model available for other files
  module.exports = {
    Restaurant: RestaurantModel,
    MenuItem: MenuItemModel
  };
