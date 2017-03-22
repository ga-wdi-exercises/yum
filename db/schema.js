const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log("database has been connected")
});


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId


var ItemSchema = new mongoose.Schema(
  {
    title: String
  }
)

var RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {
      street: String,
      zipcode: Number,
      },
    yelpUrl: String,
    items: [ItemSchema]
  }
)

var Item = mongoose.model("Item", ItemSchema)
var Restaurant = mongoose.model("Restaurant", RestaurantSchema)


module.exports = {
  Restaurant,
  Item
};
