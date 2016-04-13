var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum'); // is this what creates database?
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("connected to mongoDB");
});
// instantiate a name space for a Schema Constructor defined by mongoose.

// mongo will add a primary key to each object, called ObjectId
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId

var MenuItemSchema = mongoose.Schema({
  title: String
})

var RestaurantSchema = mongoose.Schema({
  name: String,
  address: {street: String, zipcode: Number, state: String},
  yelp: String,
  items: [MenuItemSchema] // like saying one restaurant has many menu items
});

var MenuItemModel = mongoose.model("MenuItemSchema", MenuItemSchema)

var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema)

module.exports = {
  Restaurant: RestaurantModel,
  MenuItem: MenuItemModel
};
