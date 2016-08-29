var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("Database connected.")
})

// Initiate a namespace for the Schema constructor
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var RestaurantSchema = new Schema({
    name: String,
    address: {
        street: String,
        zipcode: Number
    },
    yelpUrl: String,
    menuItems: [{type: Schema.ObjectId, ref: "MenuItem"}]
})

var MenuItemSchema = new Schema({
    title: String,
})

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var MenuItem = mongoose.model("MenuItem", MenuItemSchema);


