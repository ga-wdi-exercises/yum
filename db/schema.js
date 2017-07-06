var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const menuSchema = new mongoose.Schema({
    title: String
});

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: {
        street: String,
        zipcode: Number
    },
    yelpUrl: String,
    items: [menuSchema]
});

const menuModel = mongoose.model('Menu',menuSchema)
const restaurantModel = mongoose.model('Restaurant',restaurantSchema)

module.exports = {
    menuModel: menuModel,
    restaurantModel: restaurantModel
}
