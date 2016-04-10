var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once("open", function() {
  console.log("database has been connected!");
});

var Schema = mongoose.Schema,
  ObjectID = Schema.ObjectID;                   //What exactly does this do?//

var MenuSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: [{street: String, zipcode: Number}],
  yelp_url: String,
  items: [MenuSchema]
});

var restaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var menuModel = mongoose.model("Menu", MenuSchema);
