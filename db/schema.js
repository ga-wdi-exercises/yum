var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;

//create schema
var ItemSchema = new Schema ({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelp_url: String,
  items: [ItemSchema]
});

//create Models
var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

var ItemModel = mongoose.model("Item", ItemSchema);

module.exports = {
  RestaurantModel: RestaurantModel,
  ItemModel: ItemModel
}
