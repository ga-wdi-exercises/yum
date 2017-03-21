var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.create({
    name: 'Cookies-R-Us',
    "address.zipcode": 20001
}, function(err, restaurant) {
    if (err) return handleError(err);
    console.log("We created", restaurant.name, 'in', restaurant.address.zipcode);
});
