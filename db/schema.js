var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var RestaurantSchema = new mongoose.Schema({
	name: String,
	address : {
		line1: String,
		line2: String,
		city : String,
		state: String,
		zip  : Number
	},
	yelp_url : String,
	menu : [Menu],
});


mongoose.model("Restaurant", RestaurantSchema);

var MenuSchema = new mongoose.Schema({
	title: String,
	item : Array
});

mongoose.model("Menu", MenuSchema);


module.exports = mongoose;