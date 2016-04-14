var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database is now connected");
});

//used to create schemas
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId


var RestaurantSchema = mongoose.Schema({
  name: String,
  address: {
    street: String,
    state: String,
    zipcode: Number
  },
  yelp: String,
  //reference to MenuItem
  menu: [{type: Schemas.ObjectId, ref: "Menu"}
});

var MenuSchema = mongoose.Schema({
  name: String
});

var MenuModel = mongoose.model("Menu", MenuSchema);
var RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);

module.exports = {
  Restaurant: RestaurantModel,
  Menu: MenuModel
};
