var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId

var AddressSchema = mongoose.Schema ({
  street: String,
  zipcode: Number
})

var MenuItemSchema = mongoose.Schema ({
  title: String
})

var RestaurantSchema = mongoose.Schema({
  name: String,
  yelpUrl: String,
  address: [AddressSchema],
  items: [MenuItemSchema]
})
var AddressModel = mongoose.model("Address",AddressSchema);
var MenuItemModel = mongoose.model("MenuItem",MenuItemSchema);
var RestaurantModel = mongoose.model("Restaurant",RestaurantSchema);

module.exports = {
   Restaurant: RestaurantModel,
   MenuItem: MenuItemModel,
   Address: AddressModel
}
