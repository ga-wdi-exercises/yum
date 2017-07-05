var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

let Schema = mongoose.Schema

let menuItemSchema = new Schema({
	title: String
})

let restaurantSchema = new Schema({
	name: String,
	address: {street: String, zip: Number},
	yelpUrl: String,
	items: [menuItemSchema]
}) 

let Restaurant = mongoose.model("Restaurant", restaurantSchema)
let MenuItem = mongoose.model("MenuItem",menuItemSchema)
module.exports = {
	Restaurant: Restaurant,
	MenuItem: MenuItem
}