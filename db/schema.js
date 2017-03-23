var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var FoodSchema = new mongoose.Schema(
{
	title: String
})

var RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {street: String, zipcode: Number},
    yelpUrl: String,
    items: [FoodSchema] 
  }
);

var Restaurant = mongoose.model('Restaurant', RestaurantSchema)
var Food = mongoose.model('Food', FoodSchema)

mondule.exports = {
	Restaurant,
	Food
}