var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  name: String,
  address: {street: String, zipcode: Number},
  yelp_url: String,
  items: [MenuSchema]
});

var MenuSchema = new Schema({
  title: String
});

var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var MenuModel = mongoose.model("Menu", MenuSchema);

module.exports = {
  RestaurantModel: RestaurantModel,
  MenuModel: MenuModel
}
