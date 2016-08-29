var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("db connected and working");
});

var Schema = mongoose.Schema;
var ObjectId = Schema.objectId;

var ItemSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [ItemSchema]
});

var Item = mongoose.model("Item", ItemSchema);
var Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {
  Restaurant: Restaurant,
  Item: Item
};
