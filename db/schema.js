var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", function(){
  console.log("connected!");
});


var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var ItemSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelp: String,
  items: [ItemSchema]
});

var ItemModel = mongoose.model("Item", ItemSchema);
var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {
  RestaurantModel: RestaurantModel,
  ItemModel: ItemModel
};
