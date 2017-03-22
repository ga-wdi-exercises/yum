const mongoose = require('./connection.js');

const MenuItemSchema = new mongoose.Schema({
    title: String
})

const RestaurantSchema = new mongoose.Schema({
    name: String,
    address: {
        street: String,
        zipcode: Number
    },
    yelpUrl: String,
    items: [MenuItemSchema]
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

module.exports = {
    Restaurant,
    MenuItem
};
