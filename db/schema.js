var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var schema = mongoose.schema,
  ObjectId = schema.ObjectId;

  var MenuItemSchema = mongoose.Schema({
    title: String
  });

  var REstaurantSchema = mongoose.Schema({
    name: String,
    address: {
      street: String,
      zipcode: Number,
      yelpUrl: String,
      menuItem: [MenuItemSchema]
  });

  var MenuItemModel = mongoose.model("MenuItemSchema", MenuItemSchema);
  var RestaurantModel = mongoose.model("Restaurant", REstaurantSchema);
