var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var MenuItemSchema = new mongoose.Schema({
    title: String,
    description: String
});

var RestaurantSchema = new mongoose.Schema({
    name: String,
    address: {
        street: String,
        zipcode: Number
    },
    yelpUrl: String,
    items: [MenuItemSchema]
});

var MenuItem = mongoose.model("MenuItem", MenuItemSchema);
var Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = mongoose;
