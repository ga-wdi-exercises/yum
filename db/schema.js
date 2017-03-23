var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
let RestaurantSchema = new mongoose.Schema(
{
	name: String,
	address: {
		street: String,
		zipcode: Number
	},
	yelpUrl: String,
	items: [MenuItems]
})

let MenuItemsSchema = new mongoose.Schema(
{
	title: String
})

mongoose.model("Restaurant", RestaurantSchema)
mongoose.model("MenuItems", MenuItemsSchema)

module.exports = mongoose
