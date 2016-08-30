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

mongoose.model("Restaurant", RestaurantSchema);
mongoose.model("Item", ItemSchema);
