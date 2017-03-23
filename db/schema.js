var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


db.on('error', function(err){
  console.log(err);
});

db.once('open', function() {
  console.log("Connected to MongoDB!");

})

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var RestaurantSchema = new Schema({
  name: String,
  address: {street: String, zipcode: Number},
  yelpUrl: String,
  items: [MenuItemsSchema]
});

var MenuItemsSchema = new Schema({
  title: String
});

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var MenuItemsSchema = mongoose.model("MenuItems", MenuItemsSchema);

module.exports = {
  Restaurant: Restaurant,
  MenuItemsSchema: MenuItemsSchema
};
