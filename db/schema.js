var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId

var MenuItemSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: String,
  yelpUrl: String,
  items: [MenuItemSchema]
});

mongoose.model("MenuItem", MenuItemSchema)
mongoose.model("Restaurant", RestaurantSchema)

// mongoose.connect('mongodb://localhost/yum');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
//
//
//
//
// module.exports = {
//   Restaurant: RestaurantModel,
//   MenuItem: MenuItemModel
// };
