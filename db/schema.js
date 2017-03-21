var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurant');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', _ => {
    console.log('thank MONGOD we are connected');
})

var Schema = mongoose.Schema;

var MenuItemSchema = mongoose.Schema({
    title: String
});

var RestaurantSchema = mongoose.Schema({
    name: String,
    address: {
        street: String,
        zipcode: Number
    },
    yelpUrl: String,
    items: [{
        type: Schema.ObjectId,
        ref: "MenuItem"
    }]
});

var MenuItem = mongoose.model("MenuItem", MenuItemSchema);
var Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {
    Restaurant: Restaurant,
    MenuItem: MenuItem
};
