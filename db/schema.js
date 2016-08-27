var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("database has been connected")
})

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId


var ItemSchema = new Schema({
  title: String
})

var RestaurantSchema = new Schema({
  name: String,
  address: { street: String, zipcode: Number},
  yelpUrl: String,
  items: [ItemSchema]
})

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var Item = mongoose.model("Item", ItemSchema);

module.exports = {
  Restaurant: Restaurant,
  Item: Item
};

//
// * `name` - a string
// * `address` - an object with a `street` (string) and `zipcode` property (number)
// * `yelpUrl` - a string
// * `items` - an array containing your MenuItems schema
