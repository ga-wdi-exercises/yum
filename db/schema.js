var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;
  ObjectId = Schema.ObjectId;

var MenuSchema = new Schema({
  title: String
}); // end MenuSchema

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  menu: [MenuSchema]
}); // end RestaurantSchema

var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var MenuModel = mongoose.model("Menu", MenuSchema);
