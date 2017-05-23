var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;

db.on('error', err => {
  console.log(err);
});

db.once('open', () => {
  console.log("Connected MongoDB!");
});

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var ItemsSchema = new Schema({
  title: String
})

var RestaurantSchema = new Schema({
  name: String,
  address: {street: String, zipcode: Number},
  yelpUrl: String,
  item: [ItemsSchema]
});

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var Item = mongoose.model("Items", ItemsSchema);



module.exports = {
  Restaurant: Restaurant,
  Item: Item
}
