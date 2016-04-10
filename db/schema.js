var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("database has connected");
});

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var MenuItemSchema = mongoose.Schema({
  title: String
}); // end MenuItemSchema

var RestaurantSchema = mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  menuItem: [MenuItemSchema]
}); // end RestaurantSchema

var MenuItemModel = mongoose.model("MenuItemSchema", MenuItemSchema);
var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {
  RestaurantModel: RestaurantModel,
  MenuItemModel: MenuItemModel
};
