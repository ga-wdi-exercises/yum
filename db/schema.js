var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', ()=>{
    console.log("Connection Successful")
});


var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId

var MenuItemSchema = new Schema({
    title: String,
});


var RestaurantSchema = new Schema({
    name: String,
    address:{ street: String, zipcode: Number},
    yelp: String,
    items: [{type: Schema.ObjectId, ref: "MenuItem"}]

});

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var MenuItem = mongoose.model("Menu", MenuItemSchema);

module.exports = {
  Restaurant: Restaurant,
  MenuItem: MenuItem
};
