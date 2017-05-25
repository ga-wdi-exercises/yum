var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
	console.log("Connected to MongoDB!")
})

let Schema = mongoose.Schema

let MenuItemSchema = new Schema({title: String})

let RestaurantSchema = new Schema({
	name: String,
	address: {
		street: String,
		zipcode: Number
	},
	yelpUrl: String,
	items: [MenuItemSchema]
})

let MenuItemModel = mongoose.model("MenuItem", MenuItemSchema)
let RestaurantModel = mongoose.model("Restaurant", RestaurantSchema)

module.exports = {
	MenuItemModel, RestaurantModel
}

