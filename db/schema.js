var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var RestaurantSchema = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  Items: [{type: Schema.ObjectId, ref: "Item"}]
});

var ItemSchema = new Schema({
  title: String
});

mongoose.model("Restaurant", RestaurantSchema);
mongoose.model("Item", ItemSchema);


module.exports = mongoose;
