var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});

db.once('open', function() {
  console.log("MongoDB connected");
});

var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var MenuSchema = new Schema({
  name: String
});

var RestaurantSchema = new Schema({
  name:     String,
  address:  String,
  yelp_url: String,
  items:    [MenuSchema]
});

var RestaurantModel  = mongoose.model("Restaurant", RestaurantSchema);
var MenuModel        = mongoose.model("Menu", MenuSchema);

module.exports = {
  RestaurantModel:  RestaurantModel,
  MenuModel:        MenuModel
};
