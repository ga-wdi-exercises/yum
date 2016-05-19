var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var ItemSchema = new mongoose.Schema(
  {
    title: String
  }
);

var RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {
      street: String,
      zip: Number
    },
    yelp_url: String,
    items: [ItemSchema]
  }
);

var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var ItemModel = mongoose.model("Item", ItemSchema);

module.exports = {
    Restaurant: RestaurantModel,
    Item: ItemModel
};
