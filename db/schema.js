var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("database has been connected!");
});

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var MenuSchema = new Schema({
  title: String,
  // restaurants:[{type: Schema.ObjectId, ref: "Restaurant"}]
});

var RestaurantSchema = new Schema({
  name: String,
  address: { street: String, zipcode: Number},
  yelpUrl: String,
  items: [MenuSchema]
  // menus: [{type: Schema.ObjectId, ref: "Menu"}]
});

var Menu = mongoose.model("Menu", MenuSchema);
var Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {
  Restaurant: Restaurant,
  Menu: Menu
}
