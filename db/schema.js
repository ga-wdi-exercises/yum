var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("Database Connected.");
});

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var RestaurantSchema = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  Items: [{type: Schema.ObjectId, ref: "Item"}]
});

var ItemSchema = new Schema({
  title: String
});

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var Item = mongoose.model("Item", ItemSchema);


module.exports = {
  Restaurant: Restaurant,
  Item: Item
};
