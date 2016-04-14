var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once("open", function(){
  console.log("Connected!");
})

var Schema = mongoose.Schema,
ObjectID = Schema.ObjectID

var ItemsSchema = new Schema({
  title: String
})

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [ItemsSchema]
})

var ItemsModel = mongoose.model("Item", ItemsSchema);
var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {
  ItemsModel: ItemsModel,
  RestaurantModel: RestaurantModel
}
