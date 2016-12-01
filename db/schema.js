var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId;

var MenuItemSchema = mongoose.Schema({
  title: String
});

var RestaurantSchema = mongoose.Schema({
  name: String,
  address: { street: String, state: String, zipcode: Number },
  yelp: String,
  items: [MenuItemSchema]
});

var MenuItemModel = mongoose.model("MenuItemSchema", MenuItemSchema);

var RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);

module.exports = {
  Restaurant: RestaurantModel,
  MenuItem: MenuItemModel
};
