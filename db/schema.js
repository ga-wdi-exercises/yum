var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', err => {
  console.log("Connection error.");
});
db.once('open', () => {
  console.log("Database connected!");
});

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

  var MenuItemSchema = new Schema ({
    title: String
  });

var RestaurantSchema = new Schema ({
  name: String,
  address: {street: String, zipCode: Number},
  yelpUrl: String,
  items: [MenuItemSchema]
});

var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var MenuItemModel = mongoose.model("MenuItem", MenuItemSchema);

module.exports = { RestaurantModel, MenuItemModel };
