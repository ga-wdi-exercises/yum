var mongoose = require('mongoose');
var Schema = require("./db/schema.js");


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

function findRestaurant(name) {
    results = Restaurant.where('name').equals(name);
    return results;
}

function findByZip(zip) {
    results = Restaurant.where('address.zipCode').equals(zip);
    return results;
}