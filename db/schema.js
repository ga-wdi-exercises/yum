var mongoose = require('mongoose');

//testing connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

let menuItemSchema = new mongoose.Schema({
	title: String
})

let restaurantSchema = new mongoose.Schema({
	name: String,
	address: {street: String, zip: Number},
	yelpUrl: String,
	items: [menuItemSchema]
}) 

mongoose.model("Restaurant", restaurantSchema)
mongoose.model("MenuItem",menuItemSchema)

mongoose.connect('mongodb://localhost/yum');

module.exports = mongoose