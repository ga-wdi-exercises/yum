var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema
var ObjectID = Schema.ObjectID

// Item Schema
var ItemSchema = new Schema({
  title: String,
})

// Restaurant Schema
var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number,
  },
  yelpUrl: String,
  items: [ItemSchema],
})

// Declare models
var ItemModel = mongoose.model("ItemSchema", ItemSchema)
var RestaurantModel = mongoose.model("RestaurantSchema", RestaurantSchema)

// Export models
module.exports = {
  Restaurant: RestaurantModel,
  Item: ItemModel
}
