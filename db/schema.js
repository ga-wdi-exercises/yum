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
    items: [MenuItemSchema]
})

var MenuItemSchema = new Schema({
    title: String
})