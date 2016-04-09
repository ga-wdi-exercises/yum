var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;
  ObjectId = Schema.ObjectId;

var MenuItemSchema = new Schema({
  title: String
}); // end MenuItemSchema

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  menuItem: [MenuItemSchema]
}); // end RestaurantSchema

var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var MenuItemModel = mongoose.model("MenuItem", MenuItemSchema);

module.exports = {
  RestaurantModel: RestaurantModel,
  MenuItemModel: MenuItemModel
};
