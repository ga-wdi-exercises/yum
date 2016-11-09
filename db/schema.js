var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema

var MenuSchema = mongoose.Schema({
  title: String
});

var RestaurantSchema = mongoose.Schema({
  name: String,
  address: { street: String, zipcode: Number },
  yelp: String,
  items: [MenuSchema]
});

var MenuModel = mongoose.model("MenuSchema", MenuSchema);
var RestaurantModel = mongoose.model("RestaurantSchema", RestaurantSchema);

module.exports = {
  Restaurant: RestaurantModel,
  MenuItem: MenuItemModel
};
