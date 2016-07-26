var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
console.log("starting");

var Schema = mongoose.Schema;

var MenuSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    city: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuSchema]
});

var MenuModel = mongoose.model("Menu", MenuSchema);
var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {
  MenuModel: MenuModel,
  RestaurantModel: RestaurantModel
};


process.exit();
